'use client';

// Google Analytics 4
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Meta Pixel
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '';

// Tipos de eventos
export type EventName =
  | 'page_view'
  | 'contact_form_submit'
  | 'whatsapp_click'
  | 'project_view'
  | 'service_click'
  | 'cta_click'
  | 'language_change'
  | 'theme_change';

interface EventParams {
  [key: string]: string | number | boolean;
}

// ============================================
// Google Analytics 4
// ============================================

/**
 * Inicializar Google Analytics
 * Llamar en el layout raíz del cliente
 */
export const initGA = (): void => {
  if (!GA_MEASUREMENT_ID) return;

  // Cargar script de GA4
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Inicializar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

/**
 * Enviar evento a Google Analytics
 */
export const sendGAEvent = (eventName: EventName, params?: EventParams): void => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag?.('event', eventName, params);
};

/**
 * Trackear página vista
 */
export const trackPageView = (url: string): void => {
  sendGAEvent('page_view', {
    page_path: url,
  });
};

// ============================================
// Meta Pixel (Facebook)
// ============================================

/**
 * Inicializar Meta Pixel
 * Llamar en el layout raíz del cliente
 */
export const initMetaPixel = (): void => {
  if (!META_PIXEL_ID) return;

  // Inicializar fbq script
  if (typeof window !== 'undefined' && !window.fbq) {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    script.onload = () => {
      window.fbq?.('init', META_PIXEL_ID);
      window.fbq?.('track', 'PageView');
    };
  } else if (window.fbq) {
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
};

/**
 * Enviar evento a Meta Pixel
 */
export const sendMetaPixelEvent = (eventName: string, params?: EventParams): void => {
  if (!META_PIXEL_ID || typeof window === 'undefined') return;

  window.fbq?.('track', eventName, params);
};

// ============================================
// Analytics unificado
// ============================================

/**
 * Inicializar todos los servicios de analytics
 */
export const initAnalytics = (): void => {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'true') return;

  initGA();
  initMetaPixel();
};

/**
 * Enviar evento a todos los servicios de analytics
 */
export const trackEvent = (eventName: EventName, params?: EventParams): void => {
  sendGAEvent(eventName, params);

  // Mapear eventos personalizados a eventos estándar de Meta
  const metaEventMap: Record<EventName, string> = {
    page_view: 'PageView',
    contact_form_submit: 'Contact',
    whatsapp_click: 'Contact',
    project_view: 'ViewContent',
    service_click: 'ViewContent',
    cta_click: 'Lead',
    language_change: 'CustomizeProduct',
    theme_change: 'CustomizeProduct',
  };

  const metaEventName = metaEventMap[eventName];
  if (metaEventName) {
    sendMetaPixelEvent(metaEventName, params);
  }
};

// Tipos globales para gtag y fbq
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}
