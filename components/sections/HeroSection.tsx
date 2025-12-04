'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Box, Button, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BoltIcon from '@mui/icons-material/Bolt';
import LinesBackground from '@/components/ui/LinesBackground';

/**
 * HeroSection - Sección principal rediseñada
 * Columna izquierda: Contenido principal con hook y CTA
 * Columna derecha: Tarjetas flotantes con soluciones
 * Fondo: Curva cosenoidal animada con colores morados
 */

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
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

  const handleAboutClick = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const yOffset = -150; // Offset para compensar el header y mostrar título completo
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: '#000000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Fondo de curva cosenoidal animada */}
      <LinesBackground />

      {/* Gradiente radial overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.2), transparent 50%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Gradiente de transición hacia AboutSection - difuminado más suave */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.95) 10%, rgba(15, 10, 30, 0.85) 25%, rgba(30, 15, 60, 0.6) 45%, rgba(60, 30, 100, 0.3) 65%, rgba(80, 50, 120, 0.15) 80%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Contenido principal */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 10,
          py: { xs: 12, md: 8 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
        >
          {/* Columna Izquierda - Contenido Principal */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                pr: { md: 4 }, // Padding derecho para separar del borde
              }}
            >

              {/* Badge de Automatización */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.75,
                    borderRadius: '50px',
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <BoltIcon sx={{ fontSize: 16, color: '#8B5CF6' }} />
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#8B5CF6' }}>
                    Automatización Inteligente
                  </Typography>
                </Box>
              </motion.div>

              {/* Título Principal */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    mb: 0,
                  }}
                >
                  Automatización que{' '}
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(90deg, #8B5CF6 0%, #A855F7 50%, #9333EA 100%)',
                      backgroundSize: '200% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'gradient 3s ease infinite',
                      '@keyframes gradient': {
                        '0%, 100%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                      },
                    }}
                  >
                    funciona
                  </Box>
                  .
                </Typography>
              </motion.div>

              {/* Descripción */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6,
                    color: '#D1D5DB',
                    fontWeight: 300,
                  }}
                >
                  Somos <Box component="strong" sx={{ color: '#FFFFFF', fontWeight: 500 }}>NextFlow</Box>.
                  Reemplazamos procesos manuales por inteligencia.
                  Liberamos tu tiempo para lo que sí hace crecer una empresa.
                </Typography>
              </motion.div>

              {/* Botones CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, pt: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleCTAClick}
                    sx={{
                      background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
                      color: '#FFFFFF',
                      px: 4,
                      py: 1.75,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      textTransform: 'none',
                      boxShadow: '0 0 30px -10px rgba(124, 58, 237, 0.6)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 40px -5px rgba(124, 58, 237, 0.8)',
                      },
                    }}
                  >
                    Comienza tu transformación
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleAboutClick}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#FFFFFF',
                      px: 4,
                      py: 1.75,
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      textTransform: 'none',
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#8B5CF6',
                        color: '#8B5CF6',
                        background: 'rgba(255, 255, 255, 0.05)',
                      },
                    }}
                  >
                    Conócenos
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          {/* Columna Derecha - Tarjetas Flotantes */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              {/* Blur glow effect */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2), transparent)',
                  filter: 'blur(100px)',
                  borderRadius: '50%',
                  opacity: 0.3,
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                  position: 'relative',
                  zIndex: 10,
                  pl: { md: 4 }, // Padding izquierdo para mover las cards más a la derecha
                }}
              >
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(30, 41, 59, 0.4)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          background: 'rgba(168, 85, 247, 0.2)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <NetworkCheckIcon sx={{ fontSize: 24, color: '#A855F7' }} />
                      </Box>
                      <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF', mb: 1 }}>
                        Simplificamos lo complejo
                      </Typography>
                      <Typography sx={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        Mientras otros complican, nosotros simplificamos. Estructuramos el caos de tus datos.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    sx={{
                      background: 'rgba(30, 41, 59, 0.4)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      boxShadow: '0 20px 50px -20px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          background: 'rgba(139, 92, 246, 0.2)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <PsychologyIcon sx={{ fontSize: 24, color: '#8B5CF6' }} />
                      </Box>
                      <Typography sx={{ fontSize: '1.25rem', fontWeight: 600, color: '#FFFFFF', mb: 1 }}>
                        Transformación Real
                      </Typography>
                      <Typography sx={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        Mientras otros "mejoran", nosotros transformamos. Bots y desarrollo web a medida.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quote Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Box
                    sx={{
                      mt: 2,
                      p: 2.5,
                      borderRadius: '12px',
                      background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(168, 85, 247, 0.2))',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        textAlign: 'center',
                        fontStyle: 'italic',
                      }}
                    >
                      "Si tu negocio quiere avanzar sin miedo al cambio, aquí es donde empieza."
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
