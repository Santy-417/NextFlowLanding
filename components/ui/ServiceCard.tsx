'use client';

import type { Service } from '@/types/service.types';

interface ServiceCardProps {
  service: Service;
}

/**
 * Card para mostrar servicio
 */
export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`
        relative p-6 rounded-xl
        bg-white dark:bg-gray-900
        hover:shadow-2xl hover:-translate-y-1
        transition-all duration-300
        ${service.highlighted ? 'ring-2 ring-blue-500 dark:ring-blue-400' : 'shadow-lg'}
      `}
    >
      {/* Badge destacado */}
      {service.highlighted && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
            Destacado
          </span>
        </div>
      )}

      {/* Icono */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <span className="text-2xl text-blue-600 dark:text-blue-400">
            {service.icon === 'Code' && '💻'}
            {service.icon === 'AccountTree' && '🔄'}
            {service.icon === 'People' && '👥'}
            {service.icon === 'Psychology' && '🧠'}
            {service.icon === 'Cloud' && '☁️'}
            {!['Code', 'AccountTree', 'People', 'Psychology', 'Cloud'].includes(service.icon) && '⚡'}
          </span>
        </div>
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
