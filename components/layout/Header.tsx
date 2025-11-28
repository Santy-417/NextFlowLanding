'use client';

/**
 * Header/Navbar del sitio
 * Incluye navegación, toggle de tema e idioma
 */

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
  // TODO: Implementar contenido del Header
  // - Logo de NextFlow
  // - Navegación (Inicio, Nosotros, Servicios, Proyectos, Clientes, Contacto)
  // - Toggle de tema (claro/oscuro)
  // - Selector de idioma (ES/EN)
  // - Menú móvil responsive

  return (
    <header>
      {/* Implementar Header aquí */}
    </header>
  );
}
