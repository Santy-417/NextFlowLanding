'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

/**
 * About Section - Sección del equipo con animaciones al entrar en viewport
 * Diseño: Fotos en los extremos, contenido centrado
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
        threshold: 0.1,
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
        background: '#0A0A0A',
      }}
    >
      {/* Desktop: Dos columnas lado a lado */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* Columna Izquierda - Santiago */}
        <Box
          sx={{
            width: '50%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            background: 'linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #111111 100%)',
            py: 8,
          }}
        >
          {/* Imagen Santiago - Extremo izquierdo con animación */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              width: { md: '45%', lg: '40%' },
              height: '80%',
              borderRadius: '0 12px 12px 0',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.3)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
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

          {/* Descripción a la derecha de la imagen con animación retrasada */}
          <Box
            sx={{
              position: 'absolute',
              right: { md: '5%', lg: '8%' },
              maxWidth: '380px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 1,
                fontSize: { md: '2.5rem', lg: '3rem' },
                letterSpacing: '-0.02em',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.3s',
              }}
            >
              Santiago Chavarro
            </Typography>
            <Typography
              sx={{
                background: 'linear-gradient(90deg, #C026D3 0%, #E879F9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
                mb: 2,
                fontSize: '1.2rem',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.4s',
              }}
            >
              Co-fundador & CEO
            </Typography>
            <Typography
              sx={{
                color: '#D1D5DB',
                fontSize: { md: '0.95rem', lg: '1rem' },
                lineHeight: 1.8,
                fontWeight: 300,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.5s',
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
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            position: 'relative',
            background: 'linear-gradient(225deg, #000000 0%, #0A0A0A 50%, #111111 100%)',
            py: 8,
          }}
        >
          {/* Descripción a la izquierda de la imagen con animación retrasada */}
          <Box
            sx={{
              position: 'absolute',
              left: { md: '5%', lg: '8%' },
              maxWidth: '380px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 1,
                fontSize: { md: '2.5rem', lg: '3rem' },
                letterSpacing: '-0.02em',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.3s',
              }}
            >
              Samuel Aristizabal
            </Typography>
            <Typography
              sx={{
                background: 'linear-gradient(90deg, #06B6D4 0%, #E879F9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
                mb: 2,
                fontSize: '1.2rem',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.4s',
              }}
            >
              Co-fundador & CTO
            </Typography>
            <Typography
              sx={{
                color: '#D1D5DB',
                fontSize: { md: '0.95rem', lg: '1rem' },
                lineHeight: 1.8,
                fontWeight: 300,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease 0.5s',
              }}
            >
              Samuel es un ingeniero de software orientado a resultados, alguien que no pierde tiempo en features innecesarias y prioriza lo que mueve la aguja. Destaca por su capacidad para integrar tecnologías modernas y convertir requerimientos difusos en sistemas estables y bien diseñados.
            </Typography>
          </Box>

          {/* Imagen Samuel - Extremo derecho con animación */}
          <Box
            sx={{
              position: 'absolute',
              right: 0,
              width: { md: '45%', lg: '40%' },
              height: '80%',
              borderRadius: '12px 0 0 12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.3)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
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
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 12,
            background: 'linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #111111 100%)',
          }}
        >
          {/* Imagen arriba con animación */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.4)',
              mb: 6,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
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

          {/* Texto abajo con animación retrasada */}
          <Box
            sx={{
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Santiago Chavarro
            </Typography>
            <Typography
              sx={{
                background: 'linear-gradient(90deg, #C026D3 0%, #E879F9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
                mb: 3,
                fontSize: '1.1rem',
              }}
            >
              Co-fundador & CEO
            </Typography>
            <Typography
              sx={{
                color: '#D1D5DB',
                fontSize: '0.95rem',
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
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 12,
            background: 'linear-gradient(225deg, #000000 0%, #0A0A0A 50%, #111111 100%)',
          }}
        >
          {/* Imagen arriba con animación */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(6, 182, 212, 0.4)',
              mb: 6,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
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

          {/* Texto abajo con animación retrasada */}
          <Box
            sx={{
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 1,
                letterSpacing: '-0.02em',
              }}
            >
              Samuel Aristizabal
            </Typography>
            <Typography
              sx={{
                background: 'linear-gradient(90deg, #06B6D4 0%, #E879F9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
                mb: 3,
                fontSize: '1.1rem',
              }}
            >
              Co-fundador & CTO
            </Typography>
            <Typography
              sx={{
                color: '#D1D5DB',
                fontSize: '0.95rem',
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
    </section>
  );
}
