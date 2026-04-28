export type EventName =
  | 'page_view'
  | 'contact_form_submit'
  | 'whatsapp_click'
  | 'project_view'
  | 'service_click'
  | 'cta_click';

interface EventParams {
  [key: string]: string | number | boolean;
}

export const sendGAEvent = (eventName: EventName, params?: EventParams): void => {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', eventName, params);
};

export const sendMetaPixelEvent = (eventName: string, params?: EventParams): void => {
  if (typeof window === 'undefined') return;
  window.fbq?.('track', eventName, params);
};

export const trackEvent = (eventName: EventName, params?: EventParams): void => {
  sendGAEvent(eventName, params);

  const metaEventMap: Record<EventName, string> = {
    page_view: 'PageView',
    contact_form_submit: 'Contact',
    whatsapp_click: 'Contact',
    project_view: 'ViewContent',
    service_click: 'ViewContent',
    cta_click: 'Lead',
  };

  const metaEventName = metaEventMap[eventName];
  if (metaEventName) {
    sendMetaPixelEvent(metaEventName, params);
  }
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}
