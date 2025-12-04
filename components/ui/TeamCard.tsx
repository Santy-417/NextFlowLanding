'use client';

import type { TeamMember } from '@/types/team.types';

interface TeamCardProps {
  member: TeamMember;
}

/**
 * Card para mostrar miembro del equipo
 */
export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center">
      {/* Badge fundador */}
      {member.isFounder && (
        <div className="mb-4">
          <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
            Fundador
          </span>
        </div>
      )}

      {/* Imagen */}
      <div className="mb-4 flex justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
          {member.name.charAt(0)}
        </div>
      </div>

      {/* Nombre */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {member.name}
      </h3>

      {/* Rol */}
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
        {member.role}
      </p>

      {/* Descripción */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        {member.description}
      </p>

      {/* Links sociales */}
      <div className="flex justify-center gap-4">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-xl">💼</span>
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-xl">💻</span>
          </a>
        )}
      </div>
    </div>
  );
}
