'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

/**
 * CTA Section - Sección de llamada a la acción
 * Destacada para agendar consultoría o contactar
 */

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
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

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
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
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #A855F7 0%, #C026D3 50%, #E879F9 100%)',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Difuminado superior para transición suave desde sección anterior */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '25%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 30%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Difuminado inferior para transición suave a siguiente sección */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '25%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Título principal */}
          <Typography
            variant="h2"
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            ¿Listo para transformar tu negocio?
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 6,
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Deja de perder tiempo en tareas manuales. Automatiza, escala y crece con tecnología que funciona.
          </Typography>

          {/* Botón CTA */}
          <Button
            variant="contained"
            size="large"
            onClick={handleCTAClick}
            sx={{
              background: '#FFFFFF',
              color: '#A855F7',
              px: { xs: 5, md: 8 },
              py: { xs: 2, md: 2.5 },
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              fontWeight: 700,
              borderRadius: '50px',
              textTransform: 'none',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                background: '#F3F4F6',
                transform: 'translateY(-5px)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.4)',
              },
              '&:active': {
                transform: 'translateY(-2px)',
              },
            }}
          >
            Agenda una consultoría gratuita
          </Button>
        </Box>
      </Container>
    </section>
  );
}
