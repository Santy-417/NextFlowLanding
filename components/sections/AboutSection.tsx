'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import WireframeBackground from '@/components/ui/WireframeBackground';
import FloatingParticles from '@/components/ui/FloatingParticles';

/**
 * About Section - Sección del equipo rediseñada con efectos modernos 3D
 * Incluye: Grid wireframe 3D, partículas flotantes, orbs de luz, animaciones mejoradas
 */

export default function AboutSection() {
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
      id="about-section"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Fondo más negro */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#000000',
          zIndex: 0,
        }}
      />

      {/* Fondo wireframe 3D animado - morado */}
      <WireframeBackground />

      {/* Partículas flotantes globales */}
      <FloatingParticles count={25} />

      {/* Contenedor principal con 3 columnas */}
      <Box
        sx={{
          minHeight: '100vh',
          maxHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 10,
          overflow: 'hidden',
          padding: { xs: '20px', md: '40px' },
        }}
      >
        <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
          <Grid container spacing={0} sx={{ height: '100%', alignItems: 'center' }}>

            {/* COLUMNA IZQUIERDA - Imagen Santiago */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                height: '100%',
                pl: { md: 2, lg: 4 },
              }}
            >
              <Box
                component="img"
                src="/images/FotoSantiago.png"
                alt="Santiago Chavarro"
                sx={{
                  height: { md: '380px', lg: '400px' },
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 50px rgba(232, 121, 249, 0.4))',
                  transition: 'all 0.4s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                  transitionDelay: '0.4s',
                  '&:hover': {
                    transform: 'translateY(-15px)',
                    filter: 'drop-shadow(0 30px 60px rgba(232, 121, 249, 0.6))',
                  },
                }}
              />
            </Grid>

            {/* COLUMNA CENTRAL - Contenido */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', px: { xs: 2, md: 4 } }}>

                {/* Título */}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #E879F9, #A855F7, #06B6D4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 6,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Nuestro Equipo
                </Typography>

                {/* Grid de información de ambos fundadores */}
                <Grid container spacing={4}>

                  {/* Info Santiago */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                      }}
                    >
                      {/* Imagen en mobile */}
                      <Box
                        component="img"
                        src="/images/FotoSantiago.png"
                        alt="Santiago Chavarro"
                        sx={{
                          display: { xs: 'block', md: 'none' },
                          height: '250px',
                          width: 'auto',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          mx: 'auto',
                          mb: 3,
                          filter: 'drop-shadow(0 15px 40px rgba(232, 121, 249, 0.4))',
                        }}
                      />

                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', md: '2rem' },
                          fontWeight: 700,
                          color: '#FFFFFF',
                          mb: 1,
                        }}
                      >
                        Santiago Chavarro
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '1rem', md: '1.25rem' },
                          fontWeight: 500,
                          color: '#E879F9',
                          mb: 2,
                        }}
                      >
                        Co-fundador & CEO
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '0.875rem', md: '1rem' },
                          fontWeight: 300,
                          color: '#D1D5DB',
                          lineHeight: 1.7,
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        Santiago es un desarrollador que piensa primero en la arquitectura y después en el código, lo cual ya lo pone por encima del promedio de &quot;programadores&quot; que solo saben copiar soluciones de internet. Su enfoque está en crear aplicaciones web y móviles que funcionen bien bajo presión: limpias, mantenibles y escalables.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Info Samuel */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                      }}
                    >
                      {/* Imagen en mobile */}
                      <Box
                        component="img"
                        src="/images/FotoSamuFull.png"
                        alt="Samuel Aristizabal"
                        sx={{
                          display: { xs: 'block', md: 'none' },
                          height: '250px',
                          width: 'auto',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          mx: 'auto',
                          mb: 3,
                          filter: 'drop-shadow(0 15px 40px rgba(6, 182, 212, 0.4))',
                        }}
                      />

                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', md: '2rem' },
                          fontWeight: 700,
                          color: '#FFFFFF',
                          mb: 1,
                        }}
                      >
                        Samuel Aristizabal
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '1rem', md: '1.25rem' },
                          fontWeight: 500,
                          color: '#06B6D4',
                          mb: 2,
                        }}
                      >
                        Co-fundador & CTO
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '0.875rem', md: '1rem' },
                          fontWeight: 300,
                          color: '#D1D5DB',
                          lineHeight: 1.7,
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        Samuel es un ingeniero de software orientado a resultados, alguien que no pierde tiempo en features innecesarias y prioriza lo que mueve la aguja. Destaca por su capacidad para integrar tecnologías modernas y convertir requerimientos difusos en sistemas estables y bien diseñados.
                      </Typography>
                    </Box>
                  </Grid>

                </Grid>
              </Box>
            </Grid>

            {/* COLUMNA DERECHA - Imagen Samuel */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                height: '100%',
                pr: { md: 2, lg: 4 },
              }}
            >
              <Box
                component="img"
                src="/images/FotoSamuFull.png"
                alt="Samuel Aristizabal"
                sx={{
                  height: { md: '380px', lg: '400px' },
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 50px rgba(6, 182, 212, 0.4))',
                  transition: 'all 0.4s ease',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                  transitionDelay: '0.5s',
                  '&:hover': {
                    transform: 'translateY(-15px)',
                    filter: 'drop-shadow(0 30px 60px rgba(6, 182, 212, 0.6))',
                  },
                }}
              />
            </Grid>

          </Grid>
        </Container>
      </Box>
    </section>
  );
}
