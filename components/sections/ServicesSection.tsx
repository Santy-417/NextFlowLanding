'use client';

import type { ElementType } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { getAllServices } from '@/data/services';

export default function ServicesSection() {
  const services = getAllServices();

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#09090f',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Fondo radial sutil */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            {/* Eyebrow */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Box sx={{ width: '24px', height: '1px', bgcolor: 'rgba(139,92,246,0.4)' }} />
              <Typography
                sx={{
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  color: 'rgba(139,92,246,0.8)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                NUESTROS SERVICIOS
              </Typography>
              <Box sx={{ width: '24px', height: '1px', bgcolor: 'rgba(139,92,246,0.4)' }} />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 700,
                background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.65) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              Nuestros Servicios
            </Typography>

            <Typography
              sx={{
                color: 'rgba(209,213,219,0.65)',
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Transformamos procesos manuales en flujos automáticos con tecnología de punta.
              Desde desarrollo web hasta automatizaciones con IA.
            </Typography>
          </Box>
        </motion.div>

        {/* Grid de servicios */}
        <Grid container spacing={3}>
          {services.map((service, index) => {
            const IconComponent = (Icons as Record<string, ElementType>)[service.icon] || Icons.Code;

            return (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      background: service.highlighted
                        ? 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(236,72,153,0.08) 100%)'
                        : 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(8px)',
                      border: service.highlighted
                        ? '1px solid rgba(168,85,247,0.3)'
                        : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: service.highlighted
                          ? '0 20px 50px rgba(168,85,247,0.3)'
                          : '0 20px 50px rgba(0,0,0,0.4)',
                        borderColor: service.highlighted
                          ? 'rgba(168,85,247,0.5)'
                          : 'rgba(255,255,255,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      {/* Icono */}
                      <Box
                        sx={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '12px',
                          background: service.highlighted
                            ? 'linear-gradient(135deg, #A855F7 0%, #E879F9 100%)'
                            : 'rgba(139,92,246,0.12)',
                          border: service.highlighted
                            ? 'none'
                            : '1px solid rgba(139,92,246,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '28px',
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
                          mb: 1.5,
                          fontSize: '1.1rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Descripción */}
                      <Typography
                        sx={{
                          color: 'rgba(209,213,219,0.7)',
                          mb: 3,
                          fontSize: '0.875rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {service.description}
                      </Typography>

                      {/* Features */}
                      <Box component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
                        {service.features.map((feature, idx) => (
                          <Box
                            component="li"
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1,
                              mb: 0.75,
                            }}
                          >
                            <Box
                              sx={{
                                width: '4px',
                                height: '4px',
                                borderRadius: '50%',
                                bgcolor: service.highlighted ? '#E879F9' : 'rgba(139,92,246,0.7)',
                                mt: '8px',
                                flexShrink: 0,
                              }}
                            />
                            <Typography
                              sx={{
                                color: 'rgba(156,163,175,0.85)',
                                fontSize: '0.825rem',
                                lineHeight: 1.6,
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
