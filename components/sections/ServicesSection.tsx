'use client';

import { getAllServices } from '@/data/services';

/**
 * Services Section - Sección de servicios
 * Muestra todos los servicios en grid con iconos
 */

export default function ServicesSection() {
  const services = getAllServices();

  // TODO: Implementar Services Section
  // - Título: "Nuestros Servicios"
  // - Descripción
  // - Grid de servicios usando ServiceCard
  // - Destacar servicio de n8n (highlighted: true)
  // - Iconos de Material UI
  // - Animación scale-in al hacer scroll

  return (
    <section id="services" className="section-padding">
      {/* Implementar Services Section aquí */}
    </section>
  );
}
