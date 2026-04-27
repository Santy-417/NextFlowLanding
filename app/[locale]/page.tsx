/**
 * Página principal (Home)
 * Estructura de todas las secciones del landing
 */

import { NAIASection } from '@/components/sections/NAIASection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <NAIASection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
