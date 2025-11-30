'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { getAllServices } from '@/data/services';

/**
 * Services Section - Sección de servicios
 * Muestra todos los servicios en grid con iconos y animaciones
 */

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const services = getAllServices();

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
      id="services"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: '#000000',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <Container maxWidth="lg">
        {/* Título de la sección */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              background: 'linear-gradient(90deg, #A855F7 0%, #E879F9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography
            sx={{
              color: '#D1D5DB',
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Transformamos procesos manuales en flujos automáticos con tecnología de punta.
            Desde desarrollo web hasta automatizaciones con IA.
          </Typography>
        </Box>

        {/* Grid de servicios */}
        <Grid container spacing={4}>
          {services.map((service, index) => {
            // Obtener el icono de Material UI dinámicamente
            const IconComponent = (Icons as any)[service.icon] || Icons.Code;

            return (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Card
                  sx={{
                    background: service.highlighted
                      ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)'
                      : 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    border: service.highlighted
                      ? '1px solid rgba(168, 85, 247, 0.3)'
                      : '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    height: '100%',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                    transitionDelay: `${index * 0.1}s`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: service.highlighted
                        ? '0 20px 60px rgba(168, 85, 247, 0.4)'
                        : '0 20px 60px rgba(255, 255, 255, 0.1)',
                      borderColor: service.highlighted
                        ? 'rgba(168, 85, 247, 0.5)'
                        : 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    {/* Icono */}
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '12px',
                        background: service.highlighted
                          ? 'linear-gradient(135deg, #A855F7 0%, #E879F9 100%)'
                          : 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: '32px',
                          color: service.highlighted ? '#FFFFFF' : '#A855F7',
                        }}
                      />
                    </Box>

                    {/* Título */}
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 600,
                        mb: 2,
                        fontSize: '1.25rem',
                      }}
                    >
                      {service.title}
                    </Typography>

                    {/* Descripción */}
                    <Typography
                      sx={{
                        color: '#D1D5DB',
                        mb: 3,
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features */}
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {service.features.map((feature, idx) => (
                        <Typography
                          component="li"
                          key={idx}
                          sx={{
                            color: '#9CA3AF',
                            fontSize: '0.9rem',
                            mb: 1,
                            lineHeight: 1.6,
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
