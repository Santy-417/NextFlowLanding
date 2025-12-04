'use client';

import { trackEvent } from '@/lib/analytics';

/**
 * Botón flotante de WhatsApp (sticky)
 */
export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '3159138270';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      source: 'floating_button',
    });
    window.open(whatsappUrl, '_blank');
  };

  // TODO: Implementar WhatsAppButton
  // - Botón circular flotante (fixed bottom-right)
  // - Icono de WhatsApp
  // - Color verde de WhatsApp
  // - Animación pulse/bounce
  // - Tooltip "Chatea con nosotros"
  // - Track click en analytics

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Implementar botón aquí */}
    </button>
  );
}
