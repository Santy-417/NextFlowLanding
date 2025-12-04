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

  const categories: Array<{ id: ProjectCategory | 'all'; label: string }> = [
    { id: 'all', label: 'Todos' },
    { id: 'automation', label: 'Automatización' },
    { id: 'ai', label: 'IA' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Móvil' },
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conoce algunos de nuestros proyectos más destacados
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {project.category}
                  </span>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                    Ver más →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
