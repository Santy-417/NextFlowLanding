/**
 * Categorías de proyectos
 */
export type ProjectCategory = 'automation' | 'ai' | 'web' | 'mobile';

/**
 * Tipo de proyecto/portfolio
 */
export interface Project {
  id: string;
  name: string;
  description: string;
  howItWorks: string;
  problemSolved: string;
  technologies: string[];
  image: string;           // Path en /public/images/projects/
  category: ProjectCategory;
  featured?: boolean;      // Proyecto destacado
  order: number;           // Orden de aparición
  link?: string;           // URL del proyecto si está público
  caseStudyUrl?: string;   // URL del caso de estudio completo
}

/**
 * Filtros de proyectos
 */
export interface ProjectFilter {
  category: ProjectCategory | 'all';
  searchTerm?: string;
}
