'use client';

import { useState } from 'react';
import { getAllProjects, getProjectsByCategory } from '@/data/projects';
import type { ProjectCategory } from '@/types/project.types';

/**
 * Projects Section - Sección de proyectos/portfolio
 * Muestra proyectos con filtros por categoría
 */

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const projects = activeFilter === 'all' ? getAllProjects() : getProjectsByCategory(activeFilter);

  // TODO: Implementar Projects Section
  // - Título: "Proyectos"
  // - Filtros por categoría (all, automation, ai, web, mobile)
  // - Grid de proyectos usando ProjectCard
  // - Modal con detalles completos del proyecto
  // - Animación al cambiar filtros

  return (
    <section id="projects" className="section-padding">
      {/* Implementar Projects Section aquí */}
    </section>
  );
}
