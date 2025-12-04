'use client';

import type { Project } from '@/types/project.types';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

/**
 * Card para mostrar proyecto
 */
export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-6xl opacity-20">📱</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Badge de categoría */}
        <div className="mb-3">
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Nombre */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.name}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Botón Ver más */}
        <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
          Ver más →
        </button>
      </div>
    </div>
  );
}
