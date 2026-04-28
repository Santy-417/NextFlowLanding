import { NAIASection } from '@/components/sections/NAIASection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ClientsSection from '@/components/sections/ClientsSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import { ClientOnly } from '@/components/ui/ClientOnly';

export default function HomePage() {
  return (
    <main>
      <NAIASection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <CTASection />
      {/* ClientOnly evita hydration mismatch por extensiones de browser (ej. LastPass)
          que inyectan divs dentro de inputs de MUI antes de que React hidrate */}
      <ClientOnly>
        <ContactSection />
      </ClientOnly>
    </main>
  );
}
