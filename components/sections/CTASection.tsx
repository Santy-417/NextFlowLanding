'use client';

import { motion } from 'framer-motion';
import { Box, Button, Container, Typography } from '@mui/material';

export default function CTASection() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #A855F7 0%, #C026D3 50%, #E879F9 100%)',
        paddingTop: '100px',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Textura de puntos sutil */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Difuminado superior */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '25%',
          background:
            'linear-gradient(to bottom, rgba(9,9,15,1) 0%, rgba(9,9,15,0.6) 40%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Difuminado inferior */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '25%',
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(9,9,15,0.6) 60%, rgba(9,9,15,1) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 3,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              ¿Listo para transformar tu negocio?
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.88)',
                mb: 6,
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: 1.6,
                fontWeight: 400,
                maxWidth: '560px',
                mx: 'auto',
              }}
            >
              Deja de perder tiempo en tareas manuales. Automatiza, escala y crece con
              tecnología que funciona.
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={handleCTAClick}
              sx={{
                background: '#FFFFFF',
                color: '#A855F7',
                px: { xs: 5, md: 7 },
                py: { xs: 1.75, md: 2 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 700,
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  background: '#F5F3FF',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
                },
                '&:active': {
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Agenda una consultoría gratuita
            </Button>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
