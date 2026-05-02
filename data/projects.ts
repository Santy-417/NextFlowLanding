import { Project } from '@/types/project.types';

export const projects: Project[] = [
  {
    id: 'tobias',
    name: 'Tobias — 2B Artificial Intelligence System',
    description: 'Plataforma SaaS multiagente para e-commerce que centraliza análisis, automatización y toma de decisiones en marketing, contenido y operación comercial.',
    howItWorks: 'Integra datos de Klaviyo, TikTok y bibliotecas audiovisuales para reducir tareas manuales, acelerar la ejecución del equipo y tomar decisiones con mejor información.',
    problemSolved: 'Redujo drásticamente el tiempo de ejecución de tareas manuales de marketing y permitió tomar decisiones más rápido y con mejor información.',
    technologies: ['FastAPI', 'LangGraph', 'Supabase', 'OpenAI'],
    image: '/images/projects/tobias-2becom.jpg',
    category: 'ai',
    featured: true,
    order: 1,
  },
  {
    id: 'naia',
    name: 'NAIA — Nextflow AI Assistant',
    description: 'Asistente de inteligencia artificial propio de Nextflow, creado para apoyar procesos internos, estructurar información, acelerar tareas y potenciar la creación de nuevas soluciones.',
    howItWorks: 'Funciona como una capa inteligente para mejorar la operación del equipo, apoyar la toma de decisiones y facilitar el desarrollo de productos y automatizaciones.',
    problemSolved: 'Mejora la operación interna del equipo y acelera el desarrollo de productos y automatizaciones mediante inteligencia artificial.',
    technologies: ['OpenAI', 'LangGraph', 'n8n', 'Automation'],
    image: '/images/projects/naia.jpg',
    category: 'ai',
    featured: true,
    order: 2,
  },
  {
    id: 'lia',
    name: 'LIA — Lead Intelligence Assistant',
    description: 'Agente de IA conversacional para ventas por WhatsApp, diseñado para atender clientes, calificar leads, resolver dudas y acompañar el proceso comercial de forma cercana y humana.',
    howItWorks: 'Convierte conversaciones en oportunidades reales mediante atención inmediata, seguimiento automático, agendamiento y soporte 24/7 orientado a conversión.',
    problemSolved: 'Atención inmediata a leads sin depender de disponibilidad humana, con seguimiento automático y agendamiento de reuniones.',
    technologies: ['WhatsApp API', 'OpenAI', 'n8n', 'Node.js'],
    image: '/images/projects/lia.jpg',
    category: 'ai',
    featured: true,
    order: 3,
  },
  {
    id: 'tina',
    name: 'TINA — Task Intelligence & Notification Assistant',
    description: 'Asistente inteligente de productividad conectado con ClickUp y Telegram para gestionar tareas, contenidos, recordatorios y seguimiento operativo en tiempo real.',
    howItWorks: 'Mantiene al equipo alineado, reduce tareas manuales de coordinación y mejora la visibilidad sobre pendientes, prioridades y avances diarios.',
    problemSolved: 'Reducción de tareas manuales de coordinación y mayor visibilidad sobre pendientes, prioridades y avances del equipo.',
    technologies: ['ClickUp API', 'Telegram Bot API', 'OpenAI', 'n8n'],
    image: '/images/projects/tina.jpg',
    category: 'automation',
    featured: true,
    order: 4,
  },
  {
    id: 'bella',
    name: 'Bella — Beauty Efficiency & Logistics Automation',
    description: 'Automatización inteligente para empresas del sector belleza, diseñada para optimizar procesos operativos, conectar herramientas clave y eliminar tareas manuales repetitivas.',
    howItWorks: 'Reduce costos operativos, acelera la ejecución de procesos internos y permite que el equipo trabaje con mayor orden, eficiencia y menor dependencia manual.',
    problemSolved: 'Reducción de costos operativos y tiempo de ejecución en procesos repetitivos del negocio.',
    technologies: ['n8n', 'WhatsApp API', 'Google Sheets', 'Gmail'],
    image: '/images/projects/beautyglo.jpg',
    category: 'automation',
    featured: true,
    order: 5,
  },
  {
    id: 'aria',
    name: 'ARIA — Automated Routing & Integration Assistant',
    description: 'Sistema de integración automática para centralizar leads provenientes de múltiples fuentes en un CRM, sin necesidad de entrada manual de datos.',
    howItWorks: 'Ordena el flujo comercial, reduce errores humanos y permite que los equipos trabajen con información actualizada, limpia y lista para seguimiento.',
    problemSolved: 'Eliminación de entrada manual de datos y reducción de errores humanos en el proceso comercial.',
    technologies: ['n8n', 'HubSpot API', 'Google Sheets', 'Webhook'],
    image: '/images/projects/crm-integration.jpg',
    category: 'automation',
    featured: false,
    order: 6,
  },
  {
    id: 'musa',
    name: 'MUSA — Marketing & User-content Studio Assistant',
    description: 'Sistema de generación de contenido con inteligencia artificial para redes sociales, capaz de crear textos e imágenes a partir de prompts, referencias y lineamientos de marca.',
    howItWorks: 'Reduce el tiempo de producción creativa de horas a minutos, manteniendo consistencia visual, tono de marca y velocidad en la ejecución de contenidos.',
    problemSolved: 'Reducción del tiempo de producción de contenido de horas a minutos, manteniendo consistencia de marca.',
    technologies: ['OpenAI', 'DALL-E', 'n8n', 'Google Drive'],
    image: '/images/projects/content-generation.jpg',
    category: 'ai',
    featured: false,
    order: 7,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured).sort((a, b) => a.order - b.order);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return getAllProjects();
  return projects.filter(project => project.category === category).sort((a, b) => a.order - b.order);
};

export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => a.order - b.order);
};
