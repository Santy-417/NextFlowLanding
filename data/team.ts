import { TeamMember } from '@/types/team.types';

/**
 * Miembros del equipo NextFlow
 * Actualizar este archivo para agregar o modificar miembros
 */
export const teamMembers: TeamMember[] = [
  // Socios fundadores (mostrar primero)
  {
    id: 'santiago-chavarro',
    name: 'Santiago Chavarro',
    role: 'Co-fundador & CEO',
    description: 'Santiago diseña sistemas antes de escribir una línea de código. Su enfoque en arquitectura limpia y escalable convierte ideas complejas en productos que funcionan bajo presión — y que el equipo puede mantener sin morir en el intento.',
    image: '/images/FotoSantiago.png',
    linkedin: '', // Agregar URL de LinkedIn
    github: '',   // Agregar URL de GitHub
    isFounder: true,
    order: 1,
  },
  {
    id: 'samuel-aristizabal',
    name: 'Samuel Aristizabal',
    role: 'Co-fundador & CTO',
    description: 'Samuel convierte requerimientos difusos en sistemas estables. Desde automatizaciones en n8n hasta plataformas full-stack, su prioridad es siempre la misma: que lo que se construya funcione, escale y genere resultados reales.',
    image: '/images/FotoSamuFull.png',
    linkedin: '', // Agregar URL de LinkedIn
    github: '',   // Agregar URL de GitHub
    isFounder: true,
    order: 2,
  },

  // Equipo colaborador
  {
    id: 'diego',
    name: 'Diego',
    role: 'Diseñador Gráfico',
    description: 'Creador de experiencias visuales impactantes y diseño de marca.',
    image: '/images/team/diego.jpg',
    linkedin: '', // Agregar URL de LinkedIn
    isFounder: false,
    order: 3,
  },
  {
    id: 'alejandro',
    name: 'Alejandro',
    role: 'Desarrollador y Colaborador',
    description: 'Desarrollador full-stack especializado en React y Node.js.',
    image: '/images/team/alejandro.jpg',
    linkedin: '', // Agregar URL de LinkedIn
    github: '',   // Agregar URL de GitHub
    isFounder: false,
    order: 4,
  },
];

/**
 * Obtener solo los fundadores
 */
export const getFounders = (): TeamMember[] => {
  return teamMembers.filter(member => member.isFounder).sort((a, b) => a.order - b.order);
};

/**
 * Obtener solo el equipo (no fundadores)
 */
export const getTeam = (): TeamMember[] => {
  return teamMembers.filter(member => !member.isFounder).sort((a, b) => a.order - b.order);
};

/**
 * Obtener todos los miembros ordenados
 */
export const getAllMembers = (): TeamMember[] => {
  return teamMembers.sort((a, b) => a.order - b.order);
};
