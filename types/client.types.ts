/**
 * Tipo de cliente/caso de éxito
 */
export interface Client {
  id: string;
  companyName: string;
  logo: string;            // Path en /public/images/clients/
  problem: string;
  solution: string;
  benefits: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
  industry?: string;       // Industria del cliente
  projectDuration?: string; // Duración del proyecto
  featured?: boolean;      // Cliente destacado
  order: number;           // Orden de aparición
}
