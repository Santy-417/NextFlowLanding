'use client';

import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';

export default function HeroSection() {
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
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Efectos de iluminación profesionales */}
      {/* Luz principal púrpura (top-left) */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle at center, rgba(192, 38, 211, 0.25) 0%, rgba(232, 121, 249, 0.15) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 8s ease-in-out infinite',
          '@keyframes pulse': {
            '0%, 100%': {
              opacity: 1,
              transform: 'scale(1)',
            },
            '50%': {
              opacity: 0.8,
              transform: 'scale(1.1)',
            },
          },
        }}
      />

      {/* Luz secundaria cyan (bottom-right) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.2) 0%, rgba(168, 85, 247, 0.1) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          animation: 'pulse 10s ease-in-out infinite 1s',
        }}
      />

      {/* Luz de acento central */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(232, 121, 249, 0.1) 0%, transparent 60%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.6,
        }}
      />

      {/* Grid pattern subtle */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(192, 38, 211, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(192, 38, 211, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            animation: 'fadeIn 1s ease-in',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          {/* Logo NEXTFLOW con hover para scroll */}
          <Box
            onMouseEnter={handleLogoMouseEnter}
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, filter 0.3s ease',
              '& img': {
                width: '100%',
                height: 'auto',
                maxWidth: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
              },
              '&:hover': {
                transform: 'scale(1.02)',
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))',
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

          {/* Descripción de NextFlow */}
          <Box sx={{ maxWidth: '700px', mx: 'auto' }}>
            <Typography
              variant="body1"
              sx={{
                color: '#E5E7EB',
                mb: 2,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Somos Nextflow: dos ingenieros que reemplazan procesos manuales por inteligencia.
              Construimos desarrollo web, automatizaciones y bots que eliminan tareas repetitivas y liberan tiempo para lo que sí hace crecer una empresa.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#D1D5DB',
                mb: 1.5,
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Mientras otros complican, nosotros simplificamos.
              <br />
              Mientras otros &quot;mejoran&quot;, nosotros transformamos.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                background: 'linear-gradient(90deg, #C026D3 0%, #E879F9 50%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.15rem' },
                lineHeight: 1.8,
                fontWeight: 600,
              }}
            >
              Si tu negocio quiere avanzar sin miedo al cambio, aquí es donde empieza.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
