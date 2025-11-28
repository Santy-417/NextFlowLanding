import { getRequestConfig } from 'next-intl/server';

// Idiomas soportados
export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

// Idioma por defecto
export const defaultLocale: Locale = 'es';

// Configuración de next-intl
export default getRequestConfig(async ({ requestLocale }) => {
  // Await requestLocale en Next.js 15
  let locale = await requestLocale;

  // Validar que el locale es uno de los soportados
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../data/translations/${locale}.json`)).default,
  };
});

// Helper para obtener el locale desde la URL
export function getLocaleFromPathname(pathname: string): Locale {
  const locale = pathname.split('/')[1];
  return locales.includes(locale as Locale) ? (locale as Locale) : defaultLocale;
}

// Helper para generar rutas con locale
export function getLocalizedPath(path: string, locale: Locale): string {
  return `/${locale}${path}`;
}
