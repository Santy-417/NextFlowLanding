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
        background: '#09090f',
        paddingTop: '100px',
        paddingBottom: '100px',
        overflow: 'hidden',
      }}
    >
      {/* Glow violeta central */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(139,92,246,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Grid sutil */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.018,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Línea superior con glow */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.5) 30%, rgba(192,38,211,0.5) 70%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1,
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
                fontWeight: 800,
                mb: 3,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                background: 'linear-gradient(135deg, #ffffff 0%, #e2d9ff 50%, #f0abfc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ¿Listo para transformar tu negocio?
            </Typography>

            <Typography
              sx={{
                color: '#94a3b8',
                mb: 6,
                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                lineHeight: 1.65,
                fontWeight: 400,
                maxWidth: '540px',
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
                background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)',
                color: '#ffffff',
                px: { xs: 5, md: 7 },
                py: { xs: 1.75, md: 2 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 700,
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 0 32px rgba(139,92,246,0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #6D28D9 0%, #A21CAF 100%)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 0 48px rgba(139,92,246,0.5)',
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
