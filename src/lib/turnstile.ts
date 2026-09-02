'use client';

/**
 * Cloudflare Turnstile integration for qualifying phone-click conversions.
 *
 * Strategy (D1 — background pre-verification, non-blocking):
 * - An invisible Turnstile widget is rendered once, as early as possible
 *   (mounted globally via TurnstileGate in ClientShell).
 * - The resulting token is verified against our own server route
 *   (/api/verify-turnstile), which calls Cloudflare's siteverify API.
 * - The phone `tel:` click itself is NEVER blocked or delayed by any of
 *   this — see analytics.ts `handlePhoneClick`. If verification hasn't
 *   completed, failed, or timed out, we simply skip sending the
 *   "qualified" conversion event; the call still goes through normally
 *   (fail-open).
 */

type TurnstileRenderOptions = {
  sitekey: string;
  callback: (token: string) => void;
  'error-callback'?: () => void;
  'expired-callback'?: () => void;
  'timeout-callback'?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
};

type TurnstileWindow = Window & { turnstile?: TurnstileApi };

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const VERIFY_TIMEOUT_MS = 3000;

let readyPromise: Promise<boolean> | null = null;

function loadTurnstileScript(): Promise<TurnstileApi> {
  return new Promise((resolve, reject) => {
    const w = window as TurnstileWindow;
    if (w.turnstile) {
      resolve(w.turnstile);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${TURNSTILE_SCRIPT_SRC}"]`,
    );

    const onReady = () => {
      const api = (window as TurnstileWindow).turnstile;
      if (api) {
        resolve(api);
      } else {
        reject(new Error('Turnstile script loaded but window.turnstile is missing'));
      }
    };

    if (existing) {
      existing.addEventListener('load', onReady, { once: true });
      existing.addEventListener('error', () => reject(new Error('Turnstile script failed to load')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.addEventListener('load', onReady, { once: true });
    script.addEventListener('error', () => reject(new Error('Turnstile script failed to load')), { once: true });
    document.head.appendChild(script);
  });
}

async function verifyTokenOnServer(token: string): Promise<boolean> {
  try {
    const res = await fetch('/api/verify-turnstile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

function withTimeout(promise: Promise<boolean>, ms: number): Promise<boolean> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), ms);
    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch(() => {
        clearTimeout(timer);
        resolve(false);
      });
  });
}

/**
 * Kicks off the background verification flow. Safe to call multiple
 * times — subsequent calls return the same in-flight/completed promise.
 * Never throws; any failure resolves to `false` (fail-open elsewhere).
 */
export function initTurnstile(): Promise<boolean> {
  if (readyPromise) return readyPromise;

  if (typeof window === 'undefined') {
    return Promise.resolve(false);
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!siteKey) {
    console.warn('[turnstile] NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set — qualified phone-click tracking is disabled');
    readyPromise = Promise.resolve(false);
    return readyPromise;
  }

  readyPromise = withTimeout(
    (async () => {
      const container = document.createElement('div');
      container.style.display = 'none';
      document.body.appendChild(container);

      let api: TurnstileApi;
      try {
        api = await loadTurnstileScript();
      } catch (err) {
        console.warn('[turnstile] failed to load script', err);
        return false;
      }

      return new Promise<boolean>((resolve) => {
        let settled = false;
        const finish = (result: boolean) => {
          if (settled) return;
          settled = true;
          resolve(result);
        };

        try {
          api.render(container, {
            sitekey: siteKey,
            callback: (token: string) => {
              verifyTokenOnServer(token).then(finish);
            },
            'error-callback': () => finish(false),
            'expired-callback': () => finish(false),
            'timeout-callback': () => finish(false),
          });
        } catch (err) {
          console.warn('[turnstile] render failed', err);
          finish(false);
        }
      });
    })(),
    VERIFY_TIMEOUT_MS,
  );

  return readyPromise;
}

/**
 * Resolves to true only if a Turnstile token was obtained and confirmed
 * valid by our server before the timeout. Never rejects.
 */
export function isPhoneClickQualified(): Promise<boolean> {
  if (!readyPromise) return Promise.resolve(false);
  return readyPromise;
}
