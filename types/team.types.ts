/**
 * Tipo de miembro del equipo
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;           // Path en /public/images/team/
  linkedin?: string;
  github?: string;
  isFounder: boolean;      // Para destacar socios
  email?: string;
  order: number;           // Orden de aparición
}

/**
 * Tipo para los datos del equipo agrupados
 */
export interface TeamData {
  founders: TeamMember[];
  team: TeamMember[];
}
