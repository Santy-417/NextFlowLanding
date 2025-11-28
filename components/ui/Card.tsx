'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

/**
 * Card genérico para contenido
 */
export default function Card({ children, className = '', hoverable = false }: CardProps) {
  // TODO: Implementar Card
  // - Fondo con backdrop blur
  // - Border radius
  // - Sombra sutil
  // - Hover effect si hoverable es true (elevación + transform)

  return (
    <div className={className}>
      {children}
    </div>
  );
}
