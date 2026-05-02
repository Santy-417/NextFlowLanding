import { Service } from '@/types/service.types';

/**
 * Servicios ofrecidos por NextFlow
 * Actualizar este archivo para agregar o modificar servicios
 */
export const services: Service[] = [
  {
    id: 'web-mobile-development',
    title: 'Desarrollo Web y Móvil',
    description: 'Creamos aplicaciones web y móviles a medida, optimizadas y escalables.',
    icon: 'Code',
    image: '/images/services/web-mobile.jpg',
    features: [
      'Aplicaciones web responsive',
      'Apps móviles nativas y multiplataforma',
      'Progressive Web Apps (PWA)',
      'Arquitectura escalable y mantenible',
    ],
    highlighted: false,
    order: 1,
  },
  {
    id: 'automation-n8n',
    title: 'Automatizaciones con n8n',
    description: 'Automatiza procesos empresariales y conecta tus herramientas con flujos inteligentes.',
    icon: 'AccountTree',
    image: '/images/services/automation-n8n.jpg',
    features: [
      'Automatización de procesos manuales',
      'Integración de múltiples plataformas',
      'Flujos de trabajo personalizados',
      'Ahorro de tiempo y recursos',
    ],
    highlighted: true, // Destacar como servicio fuerte
    order: 2,
  },
  {
    id: 'crm-automation',
    title: 'Automatización de CRM',
    description: 'Optimiza la gestión de clientes con automatizaciones inteligentes.',
    icon: 'People',
    image: '/images/services/crm-automation.jpg',
    features: [
      'Integración con CRMs populares',
      'Automatización de seguimiento de leads',
      'Reportes y dashboards personalizados',
      'Sincronización de datos en tiempo real',
    ],
    highlighted: false,
    order: 3,
  },
  {
    id: 'mcp-servers',
    title: 'Servidores MCP',
    description: 'Implementación de Model Context Protocol para sistemas avanzados.',
    icon: 'Storage',
    image: '/images/services/mcp-servers.jpg',
    features: [
      'Configuración de servidores MCP',
      'Integración con modelos de IA',
      'Gestión de contexto en tiempo real',
      'Optimización de rendimiento',
    ],
    highlighted: false,
    order: 4,
  },
  {
    id: 'ai-solutions',
    title: 'Soluciones con IA',
    description: 'Implementamos inteligencia artificial para resolver problemas complejos.',
    icon: 'Psychology',
    image: '/images/services/ai-solutions.jpg',
    features: [
      'Chatbots inteligentes',
      'Análisis de datos con IA',
      'Procesamiento de lenguaje natural',
      'Automatización con aprendizaje automático',
    ],
    highlighted: false,
    order: 5,
  },
  {
    id: 'tech-consulting',
    title: 'Consultoría Tecnológica',
    description: 'Transformamos procesos manuales en flujos automáticos con IA.',
    icon: 'Lightbulb',
    image: '/images/services/tech-consulting.jpg',
    features: [
      'Auditoría de procesos actuales',
      'Estrategia de transformación digital',
      'Implementación de mejores prácticas',
      'Capacitación y soporte continuo',
    ],
    highlighted: false,
    order: 6,
  },
];

/**
 * Obtener servicios destacados
 */
export const getHighlightedServices = (): Service[] => {
  return services.filter(service => service.highlighted).sort((a, b) => a.order - b.order);
};

/**
 * Obtener todos los servicios ordenados
 */
export const getAllServices = (): Service[] => {
  return services.sort((a, b) => a.order - b.order);
};
