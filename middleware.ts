import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n';

export default createMiddleware({
  // Lista de locales soportados
  locales: locales,

  // Locale por defecto
  defaultLocale: defaultLocale,

  // Siempre usar prefijo de locale en la URL
  localePrefix: 'always'
});

export const config = {
  // Matcher que excluye rutas internas de Next.js y archivos estáticos
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};