'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

/**
 * Botón personalizado con variantes
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  // TODO: Implementar estilos según variant y size
  // - primary: degradado morado-azul
  // - secondary: azul sólido
  // - accent: magenta/fucsia
  // - outline: borde con fondo transparente
  // - Hover states
  // - Disabled state

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
