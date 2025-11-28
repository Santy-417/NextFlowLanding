import { Project } from '@/types/project.types';

/**
 * Proyectos/Portfolio de NextFlow
 * Actualizar este archivo para agregar o modificar proyectos
 */
export const projects: Project[] = [
  {
    id: 'whatsapp-sales-bot',
    name: 'Chatbot de Ventas por WhatsApp',
    description: 'Bot inteligente para atención al cliente y ventas automatizadas vía WhatsApp.',
    howItWorks: 'Integración con WhatsApp Business API, procesamiento de lenguaje natural para entender consultas y base de conocimiento personalizada.',
    problemSolved: 'Automatización de respuestas frecuentes y calificación de leads 24/7.',
    technologies: ['WhatsApp API', 'n8n', 'OpenAI', 'Node.js'],
    image: '/images/projects/whatsapp-bot.jpg',
    category: 'automation',
    featured: true,
    order: 1,
  },
  {
    id: 'tiktok-analytics',
    name: 'Analista de Métricas de TikTok',
    description: 'Sistema de análisis automatizado de KPIs y gastos publicitarios en TikTok.',
    howItWorks: 'Extracción automática de datos de TikTok Ads, procesamiento con IA y generación de reportes personalizados.',
    problemSolved: 'Seguimiento en tiempo real del ROI y optimización de campañas publicitarias.',
    technologies: ['TikTok API', 'Python', 'n8n', 'Data Visualization'],
    image: '/images/projects/tiktok-analytics.jpg',
    category: 'ai',
    featured: true,
    order: 2,
  },
  {
    id: 'nano-banana-content',
    name: 'Creación de Contenido con Nano Banana',
    description: 'Plataforma de generación automática de contenido para redes sociales.',
    howItWorks: 'Sistema basado en IA que genera posts, imágenes y copys optimizados para diferentes plataformas.',
    problemSolved: 'Reducción del tiempo de creación de contenido de 4 horas a 30 minutos.',
    technologies: ['OpenAI', 'DALL-E', 'n8n', 'React'],
    image: '/images/projects/nano-banana.jpg',
    category: 'ai',
    featured: false,
    order: 3,
  },
  {
    id: 'crm-integration',
    name: 'Integración Automática de CRM',
    description: 'Sincronización automática de múltiples fuentes de leads a CRM centralizado.',
    howItWorks: 'Conectores personalizados que unifican datos de formularios web, redes sociales y emails en un solo CRM.',
    problemSolved: 'Eliminación de entrada manual de datos y reducción de errores humanos.',
    technologies: ['n8n', 'Zapier', 'HubSpot API', 'Webhook'],
    image: '/images/projects/crm-integration.jpg',
    category: 'automation',
    featured: false,
    order: 4,
  },
  {
    id: 'ecommerce-platform',
    name: 'Plataforma E-commerce Personalizada',
    description: 'Tienda online con gestión de inventario, pagos y envíos automatizados.',
    howItWorks: 'Desarrollo full-stack con integración de pasarelas de pago, sistemas de envío y CRM.',
    problemSolved: 'Solución completa para ventas online con automatización de procesos operativos.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'n8n'],
    image: '/images/projects/ecommerce.jpg',
    category: 'web',
    featured: false,
    order: 5,
  },
];

/**
 * Obtener proyectos destacados
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).sort((a, b) => a.order - b.order);
};

/**
 * Obtener proyectos por categoría
 */
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return getAllProjects();
  return projects.filter(project => project.category === category).sort((a, b) => a.order - b.order);
};

/**
 * Obtener todos los proyectos ordenados
 */
export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => a.order - b.order);
};
