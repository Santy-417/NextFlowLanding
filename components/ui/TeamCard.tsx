'use client';

import Image from 'next/image';
import type { TeamMember } from '@/types/team.types';

interface TeamCardProps {
  member: TeamMember;
}

/**
 * Card para mostrar miembro del equipo
 */
export default function TeamCard({ member }: TeamCardProps) {
  // TODO: Implementar TeamCard
  // - Imagen del miembro (circular o redondeada)
  // - Nombre
  // - Rol
  // - Descripción breve
  // - Links a LinkedIn y GitHub si existen
  // - Badge para fundadores (isFounder: true)
  // - Hover effect

  return (
    <div>
      {/* Implementar TeamCard aquí */}
    </div>
  );
}
