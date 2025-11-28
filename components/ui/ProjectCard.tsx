'use client';

import Image from 'next/image';
import type { Project } from '@/types/project.types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

/**
 * Card para mostrar proyecto
 */
export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // TODO: Implementar ProjectCard
  // - Imagen del proyecto
  // - Nombre
  // - Descripción corta
  // - Badge de categoría
  // - Tecnologías usadas (chips)
  // - Botón "Ver más" que abre modal
  // - Hover effect con zoom en imagen

  return (
    <div onClick={onClick}>
      {/* Implementar ProjectCard aquí */}
    </div>
  );
}
