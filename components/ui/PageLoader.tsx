'use client';

import { useEffect, useState } from 'react';
import { Box, CircularProgress, Fade } from '@mui/material';

/**
 * PageLoader - Loader global para recarga de página
 * Muestra un loader con animación mientras la página se carga
 */

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <Fade in={loading} timeout={300}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #1a0033 50%, #000000 100%)',
          zIndex: 9999,
        }}
      >
        {/* Logo o marca (opcional) */}
        <Box
          sx={{
            mb: 4,
            fontSize: '2rem',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #A855F7 0%, #E879F9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          NextFlow
        </Box>

        {/* Loader circular */}
        <CircularProgress
          size={60}
          thickness={4}
          sx={{
            color: '#A855F7',
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />

        {/* Texto de carga */}
        <Box
          sx={{
            mt: 3,
            color: '#9CA3AF',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { opacity: 0.4 },
              '50%': { opacity: 1 },
            },
          }}
        >
          Cargando...
        </Box>
      </Box>
    </Fade>
  );
}
