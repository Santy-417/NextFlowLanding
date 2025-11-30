'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';
import LinesBackground from '@/components/ui/LinesBackground';

/**
 * HeroSection - Sección principal con líneas orgánicas fluidas animadas
 * Diseño moderno con fondo negro y líneas de gradiente morado-magenta
 */

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Activar animaciones inmediatamente al cargar
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleLogoMouseEnter = () => {
    // Smooth scroll to About Section
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: '#000000', // Negro absoluto
        overflow: 'hidden',
      }}
    >
      {/* Fondo de líneas fluidas animadas */}
      <LinesBackground />

      {/* Contenido principal */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 3, md: 4 },
          py: { xs: 12, md: 0 },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            width: '100%',
          }}
        >
          {/* Logo NEXTFLOW con hover para scroll */}
          <Box
            onMouseEnter={handleLogoMouseEnter}
            sx={{
              mb: { xs: 4, md: 6 },
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              '& img': {
                width: '100%',
                height: 'auto',
                maxWidth: { xs: '280px', sm: '400px', md: '500px', lg: '600px' },
              },
              '&:hover': {
                transform: 'scale(1.02)',
                filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))',
              },
            }}
          >
            <Image
              src="/logoNextFlowPage.png"
              alt="NextFlow Logo"
              width={600}
              height={200}
              priority
            />
          </Box>

          {/* Título principal con gradiente */}
          <Typography
            variant="h1"
            sx={{
              background: 'linear-gradient(90deg, #A855F7 0%, #E879F9 50%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
            }}
          >
            Automatización que funciona
          </Typography>

          {/* Subtítulo descriptivo */}
          <Typography
            variant="h5"
            sx={{
              color: '#D1D5DB',
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: '700px',
              mx: 'auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
            }}
          >
            Somos NextFlow: dos ingenieros que reemplazan procesos manuales por inteligencia.
            Construimos desarrollo web, automatizaciones y bots que eliminan tareas repetitivas
            y liberan tiempo para lo que sí hace crecer una empresa.
          </Typography>

          {/* Descripción adicional */}
          <Typography
            sx={{
              color: '#9CA3AF',
              mb: 6,
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: '650px',
              mx: 'auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
            }}
          >
            Mientras otros complican, nosotros simplificamos.
            <br />
            Mientras otros &quot;mejoran&quot;, nosotros transformamos.
          </Typography>

          {/* CTA con gradiente */}
          <Typography
            variant="body1"
            sx={{
              background: 'linear-gradient(90deg, #C026D3 0%, #E879F9 50%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              lineHeight: 1.8,
              fontWeight: 600,
              mb: 8,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
            }}
          >
            Si tu negocio quiere avanzar sin miedo al cambio, aquí es donde empieza.
          </Typography>

          {/* Botón CTA con efecto hover */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              sx={{
                background: 'linear-gradient(135deg, #A855F7 0%, #C026D3 50%, #E879F9 100%)',
                color: '#FFFFFF',
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 600,
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 10px 40px -10px rgba(168, 85, 247, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #C026D3 0%, #E879F9 50%, #A855F7 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 20px 50px -10px rgba(168, 85, 247, 0.7)',
                },
                '&:active': {
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Comienza tu transformación
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Overlay sutil para profundidad (como en AboutSection) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.3) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </section>
  );
}
