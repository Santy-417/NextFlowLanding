'use client';

import { getAllClients } from '@/data/clients';

/**
 * Clients Section - Sección de clientes y casos de éxito
 * Muestra logos de clientes y testimonios
 */

export default function ClientsSection() {
  const clients = getAllClients();

  // TODO: Implementar Clients Section
  // - Título: "Clientes Satisfechos"
  // - Grid de logos de clientes
  // - Tarjetas con casos de éxito (problema, solución, beneficios)
  // - Testimonios destacados
  // - Animación fade-in al hacer scroll

  return (
    <section id="clients" className="section-padding">
      {/* Implementar Clients Section aquí */}
    </section>
  );
}
