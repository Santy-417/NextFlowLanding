'use client';

import { getAllMembers } from '@/data/team';

/**
 * About Section - Sección del equipo
 * Muestra fundadores y equipo con sus roles
 */

export default function AboutSection() {
  const teamMembers = getAllMembers();

  // TODO: Implementar About Section
  // - Título: "Conoce al Equipo"
  // - Descripción breve
  // - Grid de miembros del equipo usando TeamCard
  // - Destacar fundadores primero
  // - Animación slide-up al hacer scroll

  return (
    <section id="about" className="section-padding">
      {/* Implementar About Section aquí */}
    </section>
  );
}
