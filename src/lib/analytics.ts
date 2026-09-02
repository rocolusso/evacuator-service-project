import { isPhoneClickQualified } from '@/lib/turnstile';

type DataLayerWindow = Window & { dataLayer?: Array<Record<string, string>> };

/**
 * Raw dataLayer push for a phone-button click. Kept as a standalone,
 * unconditional pusher — gating (Turnstile qualification) happens in
 * `handlePhoneClick`, which is what UI components should actually wire
 * up to onClick.
 */
export function pushPhoneClickEvent(): void {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'my_click_phone_conv',
    button_name: 'click_by_phone',
    event_label: 'homepage',
  });
}

/**
 * Click handler for phone (`tel:`) links/buttons. Never blocks or delays
 * the browser's own `tel:` navigation — it only decides, asynchronously
 * and in the background, whether this click looks like a real visitor
 * (per the Turnstile verification kicked off on page load) before
 * sending the conversion event. Bots that never obtain/pass a Turnstile
 * token simply never get their click counted (fail-open for the actual
 * phone call, fail-closed for the analytics event).
 */
export function handlePhoneClick(): void {
  isPhoneClickQualified()
    .then((qualified) => {
      if (qualified) {
        pushPhoneClickEvent();
      }
    })
    .catch(() => {
      // Never let a tracking failure surface to the user; simply skip
      // sending the event.
    });
}

export function formSendedEvent(): void {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'my_form_lead_conv',
    button_name: 'form_sended_event',
    event_label: 'homepage',
  });
}
