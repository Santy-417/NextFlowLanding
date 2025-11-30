'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { Assessment, Build, Rocket, Support } from '@mui/icons-material';

/**
 * Process Section - Nuestro proceso de trabajo
 * Muestra cómo trabajamos con los clientes
 */

const steps = [
  {
    number: '01',
    title: 'Análisis',
    description: 'Entendemos tu negocio, identificamos procesos manuales y oportunidades de automatización.',
    icon: Assessment,
    color: '#A855F7',
  },
  {
    number: '02',
    title: 'Diseño',
    description: 'Diseñamos la solución técnica perfecta para tus necesidades específicas.',
    icon: Build,
    color: '#C026D3',
  },
  {
    number: '03',
    title: 'Implementación',
    description: 'Desarrollamos, probamos y desplegamos la solución con calidad garantizada.',
    icon: Rocket,
    color: '#E879F9',
  },
  {
    number: '04',
    title: 'Soporte',
    description: 'Te acompañamos post-lanzamiento con mejoras continuas y soporte técnico.',
    icon: Support,
    color: '#06B6D4',
  },
];

export default function ProcessSection() {
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

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: '#000000',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <Container maxWidth="lg">
        {/* Título */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 10,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(90deg, #E879F9 0%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Cómo Trabajamos
          </Typography>
          <Typography
            sx={{
              color: '#D1D5DB',
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Un proceso probado que garantiza resultados. Simple, transparente y efectivo.
          </Typography>
        </Box>

        {/* Steps */}
        <Grid container spacing={4}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={step.number}>
                <Box
                  sx={{
                    textAlign: 'center',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDelay: `${index * 0.15}s`,
                  }}
                >
                  {/* Número */}
                  <Typography
                    sx={{
                      color: step.color,
                      fontSize: '3rem',
                      fontWeight: 700,
                      mb: 2,
                      opacity: 0.3,
                    }}
                  >
                    {step.number}
                  </Typography>

                  {/* Icono */}
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: `${step.color}22`,
                      border: `2px solid ${step.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'rotate(5deg) scale(1.1)',
                        boxShadow: `0 10px 40px ${step.color}66`,
                      },
                    }}
                  >
                    <IconComponent sx={{ fontSize: '40px', color: step.color }} />
                  </Box>

                  {/* Título */}
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 600,
                      mb: 2,
                      fontSize: '1.3rem',
                    }}
                  >
                    {step.title}
                  </Typography>

                  {/* Descripción */}
                  <Typography
                    sx={{
                      color: '#D1D5DB',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
