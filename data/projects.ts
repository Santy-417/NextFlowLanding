import { Project } from '@/types/project.types';

/**
 * Proyectos/Portfolio de NextFlow
 * Actualizar este archivo para agregar o modificar proyectos
 */
export const projects: Project[] = [
  {
    id: 'tobias-2becom',
    name: 'Tobias — Plataforma SaaS para 2becom',
    description: 'Plataforma multiagente de marketing para e-commerce con análisis de Klaviyo, TikTok y biblioteca audiovisual integrada.',
    howItWorks: 'Sistema de múltiples agentes de IA (LangGraph + FastAPI) que analiza campañas de email marketing, flujos A/B, gastos en TikTok Ads y organiza activos visuales desde Google Drive.',
    problemSolved: 'Redujo drásticamente el tiempo de ejecución de tareas manuales de marketing y permitió tomar decisiones más rápido y con mejor información.',
    technologies: ['FastAPI', 'LangGraph', 'Supabase', 'OpenAI', 'Klaviyo', 'TikTok API', 'Google Drive'],
    image: '/images/projects/tobias-2becom.jpg',
    category: 'ai',
    featured: true,
    order: 1,
  },
  {
    id: 'beautyglo-automations',
    name: 'Automatizaciones para beautyglo',
    description: 'Automatización de procesos operativos clave para empresa del sector belleza, eliminando tareas manuales y reduciendo costos.',
    howItWorks: 'Flujos automáticos con n8n que conectan sus sistemas de gestión, pedidos y comunicación con clientes, sin intervención manual.',
    problemSolved: 'Reducción de costos operativos y tiempo de ejecución en procesos repetitivos del negocio.',
    technologies: ['n8n', 'WhatsApp API', 'Google Sheets', 'Gmail'],
    image: '/images/projects/beautyglo.jpg',
    category: 'automation',
    featured: true,
    order: 2,
  },
  {
    id: 'whatsapp-sales-bot',
    name: 'Agente de Ventas por WhatsApp',
    description: 'Agente de IA para atención al cliente, calificación de leads y seguimiento automático 24/7 vía WhatsApp.',
    howItWorks: 'Integración con WhatsApp Business API y procesamiento de lenguaje natural para entender consultas, calificar prospectos y escalar al equipo cuando es necesario.',
    problemSolved: 'Atención inmediata a leads sin depender de disponibilidad humana, con seguimiento automático y agendamiento de reuniones.',
    technologies: ['WhatsApp API', 'n8n', 'OpenAI', 'Node.js'],
    image: '/images/projects/whatsapp-bot.jpg',
    category: 'automation',
    featured: false,
    order: 3,
  },
  {
    id: 'crm-integration',
    name: 'Integración Automática de CRM',
    description: 'Sincronización automática de múltiples fuentes de leads a CRM centralizado, sin entrada manual de datos.',
    howItWorks: 'Conectores personalizados que unifican datos de formularios web, redes sociales y emails en un solo CRM con notificaciones al equipo de ventas.',
    problemSolved: 'Eliminación de entrada manual de datos y reducción de errores humanos en el proceso comercial.',
    technologies: ['n8n', 'HubSpot API', 'Google Sheets', 'Webhook'],
    image: '/images/projects/crm-integration.jpg',
    category: 'automation',
    featured: false,
    order: 4,
  },
  {
    id: 'content-generation',
    name: 'Generación de Contenido con IA',
    description: 'Sistema automático de creación de contenido para redes sociales — texto e imágenes generados a partir de prompts y referencias.',
    howItWorks: 'Pipeline de IA que toma briefings del cliente y genera posts, copys e imágenes optimizados para cada plataforma de forma automática.',
    problemSolved: 'Reducción del tiempo de producción de contenido de horas a minutos, manteniendo consistencia de marca.',
    technologies: ['OpenAI', 'DALL-E', 'n8n', 'Google Drive'],
    image: '/images/projects/content-generation.jpg',
    category: 'ai',
    featured: false,
    order: 5,
  },
  {
    id: 'delivery-app',
    name: 'App de Delivery y Logística',
    description: 'Aplicación móvil para gestión de entregas con tracking en tiempo real y optimización de rutas.',
    howItWorks: 'App nativa con geolocalización, notificaciones push, sistema de tracking GPS y algoritmos de optimización de rutas.',
    problemSolved: 'Gestión eficiente de entregas con visibilidad completa del proceso y reducción de tiempos de entrega.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js', 'MongoDB'],
    image: '/images/projects/delivery-app.jpg',
    category: 'mobile',
    featured: true,
    order: 6,
  },
  {
    id: 'fitness-tracker',
    name: 'App de Fitness y Seguimiento Personal',
    description: 'Aplicación móvil para seguimiento de ejercicios, nutrición y progreso fitness con IA.',
    howItWorks: 'App multiplataforma con sincronización de dispositivos wearables, análisis con IA de hábitos y recomendaciones personalizadas.',
    problemSolved: 'Seguimiento integral de salud y fitness con análisis inteligente y motivación personalizada.',
    technologies: ['Flutter', 'TensorFlow', 'HealthKit', 'Firebase', 'Python'],
    image: '/images/projects/fitness-app.jpg',
    category: 'mobile',
    featured: false,
    order: 7,
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
