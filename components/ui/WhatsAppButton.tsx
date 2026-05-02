'use client';

import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { trackEvent } from '@/lib/analytics';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || '573159138270';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleClick = () => {
    trackEvent('whatsapp_click', { source: 'floating_button' });
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 50 }}>
      {/* Tooltip */}
      <div
        style={{
          position: 'absolute',
          right: '68px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(19,19,25,0.92)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#fff',
          fontSize: '0.8125rem',
          fontWeight: 500,
          padding: '6px 12px',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        Escríbenos
      </div>

      {/* Pulse ring */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'rgba(37,211,102,0.35)',
          animation: 'whatsappPulse 2s ease-out infinite',
          pointerEvents: 'none',
        }}
      />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Contactar por WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          boxShadow: hovered
            ? '0 0 0 3px rgba(37,211,102,0.4), 0 8px 24px rgba(37,211,102,0.4)'
            : '0 4px 16px rgba(37,211,102,0.35)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          position: 'relative',
          zIndex: 1,
          textDecoration: 'none',
        }}
      >
        <WhatsAppIcon style={{ fontSize: '28px', color: '#fff' }} />
      </a>

      <style>{`
        @keyframes whatsappPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
