'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Popover } from '@mui/material';

export default function HeroSection() {
  const [logoAnchor, setLogoAnchor] = useState<null | HTMLElement>(null);

  const handleLogoMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setLogoAnchor(event.currentTarget);
  };

  const handleLogoMouseLeave = () => {
    setLogoAnchor(null);
  };

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
          <Box
            onMouseEnter={handleLogoMouseEnter}
            onMouseLeave={handleLogoMouseLeave}
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              '& img': {
                width: '100%',
                height: 'auto',
                maxWidth: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
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
                color: 'rgba(255, 255, 255, 0.9)',
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
                color: 'rgba(255, 255, 255, 0.85)',
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
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1rem', sm: '1.05rem', md: '1.15rem' },
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              Si tu negocio quiere avanzar sin miedo al cambio, aquí es donde empieza.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* Team Popover - Diseño Full Screen con Dos Columnas */}
      <Popover
        open={Boolean(logoAnchor)}
        anchorEl={logoAnchor}
        onClose={handleLogoMouseLeave}
        disableRestoreFocus
        sx={{
          pointerEvents: 'none',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            onMouseEnter: handleLogoMouseEnter,
            onMouseLeave: handleLogoMouseLeave,
            sx: {
              pointerEvents: 'auto',
              mt: 2,
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'visible',
              width: '100vw',
              maxWidth: '100vw',
            },
          },
        }}
      >
        {/* Desktop: Dos columnas lado a lado */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            width: '100vw',
            height: '100vh',
          }}
        >
          {/* Columna Izquierda - Santiago */}
          <Box
            sx={{
              width: '50%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              px: { md: 4, lg: 8 },
              position: 'relative',
              background: 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)',
            }}
          >
            {/* Imagen Santiago (70% del ancho de la columna) */}
            <Box
              sx={{
                position: 'relative',
                width: '70%',
                height: '70%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                '& img': {
                  objectFit: 'cover',
                },
              }}
            >
              <Image
                src="/images/FotoSantiago.jpg"
                alt="Santiago Chavarro"
                fill
                priority
              />
            </Box>

            {/* Descripción a la derecha de la imagen */}
            <Box
              sx={{
                position: 'absolute',
                right: { md: 4, lg: 8 },
                maxWidth: '320px',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { md: '2.5rem', lg: '3rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Santiago Chavarro
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(139, 92, 246, 0.9)',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Co-fundador & CEO
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: { md: '0.9rem', lg: '1rem' },
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Santiago es un desarrollador que piensa primero en la arquitectura y después en el código, lo cual ya lo pone por encima del promedio de &quot;programadores&quot; que solo saben copiar soluciones de internet. Su enfoque está en crear aplicaciones web y móviles que funcionen bien bajo presión: limpias, mantenibles y escalables.
              </Typography>
            </Box>
          </Box>

          {/* Columna Derecha - Samuel */}
          <Box
            sx={{
              width: '50%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: { md: 4, lg: 8 },
              position: 'relative',
              background: 'linear-gradient(225deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)',
            }}
          >
            {/* Descripción a la izquierda de la imagen */}
            <Box
              sx={{
                position: 'absolute',
                left: { md: 4, lg: 8 },
                maxWidth: '320px',
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { md: '2.5rem', lg: '3rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Samuel Aristizabal
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(59, 130, 246, 0.9)',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                Co-fundador & CTO
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: { md: '0.9rem', lg: '1rem' },
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Samuel es un ingeniero de software orientado a resultados, alguien que no pierde tiempo en features innecesarias y prioriza lo que mueve la aguja. Destaca por su capacidad para integrar tecnologías modernas y convertir requerimientos difusos en sistemas estables y bien diseñados.
              </Typography>
            </Box>

            {/* Imagen Samuel (70% del ancho de la columna) */}
            <Box
              sx={{
                position: 'relative',
                width: '70%',
                height: '70%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                '& img': {
                  objectFit: 'cover',
                },
              }}
            >
              <Image
                src="/images/FotoSamuFull.png"
                alt="Samuel Aristizabal"
                fill
                priority
              />
            </Box>
          </Box>
        </Box>

        {/* Mobile: Apiladas verticalmente */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          {/* Santiago - Mobile */}
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: 3,
              py: 6,
              background: 'linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)',
            }}
          >
            {/* Imagen arriba */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '320px',
                height: '60%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                mb: 4,
                '& img': {
                  objectFit: 'cover',
                },
              }}
            >
              <Image
                src="/images/FotoSantiago.jpg"
                alt="Santiago Chavarro"
                fill
                priority
              />
            </Box>

            {/* Texto abajo */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Santiago Chavarro
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(139, 92, 246, 0.9)',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: '1rem',
                }}
              >
                Co-fundador & CEO
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  maxWidth: '400px',
                  mx: 'auto',
                }}
              >
                Santiago es un desarrollador que piensa primero en la arquitectura y después en el código, lo cual ya lo pone por encima del promedio de &quot;programadores&quot; que solo saben copiar soluciones de internet. Su enfoque está en crear aplicaciones web y móviles que funcionen bien bajo presión: limpias, mantenibles y escalables.
              </Typography>
            </Box>
          </Box>

          {/* Samuel - Mobile */}
          <Box
            sx={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              px: 3,
              py: 6,
              background: 'linear-gradient(225deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(15, 23, 42) 100%)',
            }}
          >
            {/* Imagen arriba */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '320px',
                height: '60%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                mb: 4,
                '& img': {
                  objectFit: 'cover',
                },
              }}
            >
              <Image
                src="/images/FotoSamuFull.png"
                alt="Samuel Aristizabal"
                fill
                priority
              />
            </Box>

            {/* Texto abajo */}
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h4"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  mb: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Samuel Aristizabal
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(59, 130, 246, 0.9)',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: '1rem',
                }}
              >
                Co-fundador & CTO
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  maxWidth: '400px',
                  mx: 'auto',
                }}
              >
                Samuel es un ingeniero de software orientado a resultados, alguien que no pierde tiempo en features innecesarias y prioriza lo que mueve la aguja. Destaca por su capacidad para integrar tecnologías modernas y convertir requerimientos difusos en sistemas estables y bien diseñados.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
}
