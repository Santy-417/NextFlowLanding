import { Client } from '@/types/client.types';

/**
 * Clientes y casos de éxito de NextFlow
 * Actualizar este archivo para agregar o modificar clientes
 */
export const clients: Client[] = [
  {
    id: 'client-1',
    companyName: 'Empresa Ejemplo S.A.S',
    logo: '/images/clients/client-1.png',
    problem: 'Gestión manual de leads desde múltiples canales (redes sociales, web, email) causaba pérdida de oportunidades y duplicación de datos.',
    solution: 'Implementación de automatización con n8n para centralizar todos los leads en un CRM único con categorización automática y seguimiento inteligente.',
    benefits: [
      'Reducción del 80% en tiempo de procesamiento de leads',
      'Eliminación completa de duplicados',
      'Aumento del 45% en tasa de conversión',
      'Notificaciones en tiempo real al equipo de ventas',
    ],
    testimonial: {
      text: 'NextFlow transformó completamente nuestro proceso de ventas. Lo que antes tomaba horas ahora sucede automáticamente.',
      author: 'Juan Pérez',
      position: 'Director Comercial',
    },
    industry: 'Servicios Profesionales',
    projectDuration: '3 meses',
    featured: true,
    order: 1,
  },
  // Agregar más clientes aquí según se vayan consiguiendo casos de éxito
];

/**
 * Obtener clientes destacados
 */
export const getFeaturedClients = (): Client[] => {
  return clients.filter(client => client.featured).sort((a, b) => a.order - b.order);
};

/**
 * Obtener todos los clientes ordenados
 */
export const getAllClients = (): Client[] => {
  return clients.sort((a, b) => a.order - b.order);
};
