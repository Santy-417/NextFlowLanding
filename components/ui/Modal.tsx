'use client';

import { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

/**
 * Modal/Dialog genérico
 */
export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // TODO: Implementar Modal
  // - Overlay con backdrop blur
  // - Contenedor centrado
  // - Botón de cerrar (X)
  // - Animación fade-in/out
  // - Cerrar con Escape key
  // - Cerrar al hacer click fuera del modal

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
