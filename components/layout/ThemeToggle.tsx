'use client';

/**
 * Botón para cambiar entre tema claro y oscuro
 */

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  // TODO: Implementar toggle de tema
  // - Icono de sol/luna
  // - Animación de transición
  // - Track analytics del cambio de tema

  return (
    <button onClick={onToggle} aria-label="Toggle theme">
      {/* Implementar botón aquí */}
    </button>
  );
}
