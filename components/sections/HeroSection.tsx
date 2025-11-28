'use client';

import { Box, Container, Typography } from '@mui/material';

export default function HeroSection() {

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Efectos de fondo */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
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
          {/* Logo NEXTFLOW */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '6rem', lg: '7rem' },
              fontWeight: 700,
              letterSpacing: '0.02em',
              mb: 4,
              lineHeight: 1.1,
            }}
          >
            <Box component="span" sx={{ color: '#E0E0E0', fontWeight: 300 }}>
              NEXT
            </Box>
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
              }}
            >
              FLOW
            </Box>
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 400,
              mb: 3,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            }}
          >
            Te contamos sobre nosotros...
          </Typography>

          {/* Descripción Lorem Ipsum */}
          <Box sx={{ maxWidth: '600px', mx: 'auto' }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Typography
                key={item}
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 0.5,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                Lorem ipsum dolor sit met Consacrate scum tor
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
