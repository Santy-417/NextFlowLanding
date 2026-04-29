import type { Metadata } from 'next';
import Script from 'next/script';
import Providers from '@/components/providers/Providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'NextFlow - Desarrollo de Software y Automatizaciones con IA | Colombia',
    template: '%s | NextFlow',
  },
  description:
    'Transformamos tu negocio con desarrollo web/móvil personalizado, automatizaciones con IA, chatbots de WhatsApp y consultoría tecnológica. Expertos en n8n, CRM y flujos inteligentes.',
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

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Deshabilitar scroll restoration automática del browser */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(history.scrollRestoration)history.scrollRestoration='manual';window.scrollTo(0,0);`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>

        {/* Google Analytics — afterInteractive para no bloquear el render */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}

        {/* Meta Pixel — afterInteractive para no bloquear el render */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </body>
    </html>
  );
}
