import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'NextFlow - Desarrollo de Software y Automatizaciones con IA | Colombia',
    template: '%s | NextFlow',
  },
  description: 'Transformamos tu negocio con desarrollo web/móvil personalizado, automatizaciones con IA, chatbots de WhatsApp y consultoría tecnológica. Expertos en n8n, CRM y flujos inteligentes.',
  keywords: [
    'desarrollo software a medida',
    'automatizaciones con IA',
    'chatbots WhatsApp',
    'n8n Colombia',
    'automatización CRM',
    'desarrollo web personalizado',
    'consultoría tecnológica',
    'flujos inteligentes',
    'automatizar procesos manuales',
    'desarrollo aplicaciones web Colombia',
  ],
  authors: [{ name: 'NextFlow' }],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: '/',
    siteName: 'NextFlow',
    title: 'NextFlow - Desarrollo de Software y Automatizaciones con IA',
    description: 'Expertos en desarrollo web/móvil y automatizaciones con IA en Colombia',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NextFlow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextFlow - Desarrollo de Software y Automatizaciones con IA',
    description: 'Expertos en desarrollo web/móvil y automatizaciones con IA',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
