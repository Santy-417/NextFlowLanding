/**
 * Root Layout
 * Next.js requiere que este archivo exista pero con i18n
 * la estructura HTML real está en app/[locale]/layout.tsx
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
