/**
 * Tipo de servicio ofrecido por NextFlow
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;            // Nombre del icono de Material UI
  features: string[];
  highlighted?: boolean;   // Para destacar servicios principales (ej: n8n)
  order: number;           // Orden de aparición
}

/**
 * Categorías de servicios
 */
export enum ServiceCategory {
  DEVELOPMENT = 'development',
  AUTOMATION = 'automation',
  AI = 'ai',
  CONSULTING = 'consulting',
}
