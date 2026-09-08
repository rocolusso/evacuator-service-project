'use client';

/**
 * Google Consent Mode v2 helpers.
 *
 * `setConsentDefault` must run before the GTM container (or any gtag
 * call) sends its first request — see the inline bootstrap script in
 * `src/app/layout.tsx`, which defines the `dataLayer`/`gtag` shim and
 * calls this immediately. `updateConsent` is called from the cookie
 * banner (`CookieConsent.tsx`) once the visitor makes an explicit
 * choice.
 */

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

function callGtag(...args: unknown[]): void {
  if (typeof window === 'undefined') return;
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag === 'function') {
    w.gtag(...args);
  } else {
    w.dataLayer.push(args);
  }
}

export function setConsentDefault(): void {
  callGtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
}

export function updateConsent(granted: boolean): void {
  const state = granted ? 'granted' : 'denied';
  callGtag('consent', 'update', {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}
