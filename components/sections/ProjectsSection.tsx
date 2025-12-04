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

  const categories: Array<{ id: ProjectCategory | 'all'; label: string; icon: string }> = [
    { id: 'all', label: 'Todos', icon: '📦' },
    { id: 'automation', label: 'Automatización', icon: '⚡' },
    { id: 'ai', label: 'IA', icon: '🤖' },
    { id: 'web', label: 'Web', icon: '🌐' },
    { id: 'mobile', label: 'Móvil', icon: '📱' },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'automation': return 'from-purple-600 to-purple-800';
      case 'ai': return 'from-purple-500 to-purple-700';
      case 'web': return 'from-purple-700 to-gray-800';
      case 'mobile': return 'from-purple-800 to-gray-900';
      default: return 'from-purple-600 to-purple-900';
    }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gray-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950/20 to-gray-900 pointer-events-none"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
            <span className="text-sm font-semibold text-purple-400">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Soluciones innovadoras que impulsan el éxito de nuestros clientes
          </p>
        </div>

        {/* Filtros mejorados */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-purple-500/50 hover:bg-gray-800 hover:scale-105'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className={activeFilter === category.id ? '' : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all'}>
                  {category.icon}
                </span>
                {category.label}
              </span>
            </button>
          ))}
        </div>

        {/* Grid de proyectos mejorado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagen/Banner del proyecto */}
              <div className={`relative h-48 bg-gradient-to-br ${getCategoryColor(project.category)} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                    {project.category === 'automation' && '⚡'}
                    {project.category === 'ai' && '🤖'}
                    {project.category === 'web' && '🌐'}
                    {project.category === 'mobile' && '📱'}
                  </div>
                </div>

                {/* Badge de categoría */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-bold bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-full text-gray-900 dark:text-white">
                    {project.category === 'automation' && '⚡ Automatización'}
                    {project.category === 'ai' && '🤖 IA'}
                    {project.category === 'web' && '🌐 Web'}
                    {project.category === 'mobile' && '📱 Móvil'}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Problema resuelto */}
                <div className="mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700/30">
                  <p className="text-xs text-gray-300 leading-relaxed">
                    <span className="text-green-400 font-semibold">✓ Soluciona:</span> {project.problemSolved}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-700/50 border border-gray-600/30 text-gray-400 rounded font-medium">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-2 py-1 text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded-full font-semibold">
                        ⭐ Destacado
                      </span>
                    )}
                  </div>
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold group/btn bg-transparent border-0 p-0 cursor-pointer">
                    <span>Ver detalles</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje si no hay proyectos */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No hay proyectos en esta categoría aún.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
