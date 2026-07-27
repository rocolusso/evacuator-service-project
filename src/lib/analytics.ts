type DataLayerWindow = Window & { dataLayer?: Array<Record<string, string>> };

export function pushPhoneClickEvent(): void {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'my_click_phone_conv',
    button_name: 'click_by_phone',
    event_label: 'homepage',
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
