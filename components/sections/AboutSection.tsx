'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
        overflow: 'hidden',
      }}
    >
      {/* Fondo más negro - expandido */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%', // Expandido
          background: '#000000',
          zIndex: 0,
        }}
      />

      {/* Gradiente de transición desde HeroSection - expandido */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '-10%', // Expandido horizontalmente
          right: '-10%',
          height: '50%', // Más alto
          background: 'linear-gradient(to bottom, rgba(60, 30, 100, 0.3) 0%, rgba(30, 15, 60, 0.2) 30%, rgba(15, 10, 30, 0.1) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Gradiente radial morado central - expandido */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%', // Expandido verticalmente
          left: '-20%', // Expandido horizontalmente
          right: '-20%',
          bottom: '-20%',
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.15) 25%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Fondo wireframe 3D animado - morado */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          right: '-10%',
          bottom: '-10%',
        }}
      >
        <WireframeBackground />
      </Box>

      {/* Partículas flotantes globales - más distribuidas */}
      <FloatingParticles count={35} />

      {/* Difuminado inferior para transición suave a siguiente sección */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Contenedor principal con 3 columnas */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 10,
          overflow: 'hidden',
          padding: { xs: '60px 20px', md: '60px 40px' },
        }}
      >
        <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <Grid container spacing={0} sx={{ width: '100%', alignItems: 'center' }}>

            {/* COLUMNA IZQUIERDA - Imagen Santiago */}
            <Grid
              item
              xs={12}
              md={2.5}
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                height: '100%',
                pl: { md: 2, lg: 3 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box
                  component="img"
                  src="/images/FotoSantiago.png"
                  alt="Santiago Chavarro"
                  sx={{
                    height: { md: '380px', lg: '400px' },
                    width: 'auto',
                    objectFit: 'contain',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-15px)',
                    },
                  }}
                />
              </motion.div>
            </Grid>

            {/* COLUMNA CENTRAL - Contenido */}
            <Grid item xs={12} md={7}>
              <Box sx={{ textAlign: 'center', px: { xs: 2, md: 3 } }}>

                {/* Título - estilo del código compartido */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 700,
                      textAlign: 'center',
                      mb: { xs: 6, md: 8 },
                      background: 'linear-gradient(to bottom, #FFFFFF, rgba(255, 255, 255, 0.6))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Nuestro Equipo
                  </Typography>
                </motion.div>

                {/* Grid de información de ambos fundadores - más horizontal */}
                <Grid container spacing={{ xs: 8, md: 6 }} sx={{ justifyContent: 'center' }}>

                  {/* Info Santiago */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                        maxWidth: { xs: '100%', sm: '500px', md: '450px' },
                        mx: 'auto',
                      }}
                    >
                      {/* Imagen en mobile */}
                      <Box
                        component="img"
                        src="/images/FotoSantiago.png"
                        alt="Santiago Chavarro"
                        sx={{
                          display: { xs: 'block', md: 'none' },
                          height: { xs: '200px', sm: '250px' },
                          width: 'auto',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          mx: 'auto',
                          mb: 3,
                        }}
                      />

                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          fontWeight: 700,
                          color: '#FFFFFF',
                          mb: 0.5,
                        }}
                      >
                        Santiago Chavarro
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          fontWeight: 500,
                          color: '#E879F9',
                          mb: 2,
                        }}
                      >
                        Co-fundador & CEO
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '0.875rem', md: '0.95rem' },
                          fontWeight: 300,
                          color: '#D1D5DB',
                          lineHeight: 1.6,
                          textAlign: 'justify',
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
                        maxWidth: { xs: '100%', sm: '500px', md: '450px' },
                        mx: 'auto',
                      }}
                    >
                      {/* Imagen en mobile */}
                      <Box
                        component="img"
                        src="/images/FotoSamuFull.png"
                        alt="Samuel Aristizabal"
                        sx={{
                          display: { xs: 'block', md: 'none' },
                          height: { xs: '200px', sm: '250px' },
                          width: 'auto',
                          maxWidth: '100%',
                          objectFit: 'contain',
                          mx: 'auto',
                          mb: 3,
                        }}
                      />

                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          fontWeight: 700,
                          color: '#FFFFFF',
                          mb: 0.5,
                        }}
                      >
                        Samuel Aristizabal
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '1rem', md: '1.125rem' },
                          fontWeight: 500,
                          color: '#06B6D4',
                          mb: 2,
                        }}
                      >
                        Co-fundador & CTO
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: { xs: '0.875rem', md: '0.95rem' },
                          fontWeight: 300,
                          color: '#D1D5DB',
                          lineHeight: 1.6,
                          textAlign: 'justify',
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
              md={2.5}
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                height: '100%',
                pr: { md: 2, lg: 3 },
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Box
                  component="img"
                  src="/images/FotoSamuFull.png"
                  alt="Samuel Aristizabal"
                  sx={{
                    height: { md: '380px', lg: '400px' },
                    width: 'auto',
                    objectFit: 'contain',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-15px)',
                    },
                  }}
                />
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </section>
  );
}
