'use client';

/**
 * Botón para cambiar entre tema claro y oscuro
 */

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDarkMode: _isDarkMode, onToggle: _onToggle }: ThemeToggleProps) {
  // Solo modo oscuro - no se muestra el toggle
  return null;
}