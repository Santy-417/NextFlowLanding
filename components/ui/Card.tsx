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
  const hoverClasses = hoverable
    ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div
      className={`
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-sm
        rounded-xl
        shadow-lg
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
