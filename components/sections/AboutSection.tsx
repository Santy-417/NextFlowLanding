'use client';

import { motion } from 'framer-motion';
import { Box, Container, Grid, Typography } from '@mui/material';

const FOUNDERS = [
  {
    name: 'Santiago Chavarro',
    role: 'Co-fundador & CEO',
    badge: 'CO-FUNDADOR',
    description:
      'Santiago diseña sistemas antes de escribir una línea de código. Su enfoque en arquitectura limpia y escalable convierte ideas complejas en productos que funcionan bajo presión.',
    image: '/images/FotoSantiago.png',
    accent: '#E879F9',
    glowColor: 'rgba(232,121,249,0.22)',
    glowColor2: 'rgba(168,85,247,0.1)',
    badgeBg: 'rgba(232,121,249,0.08)',
    badgeBorder: 'rgba(232,121,249,0.22)',
    separatorFrom: '#E879F9',
    photoSide: 'left' as const,
    animX: -40,
    delay: 0.1,
  },
  {
    name: 'Samuel Aristizabal',
    role: 'Co-fundador & CTO',
    badge: 'CO-FUNDADOR',
    description:
      'Samuel convierte requerimientos difusos en sistemas estables. Desde automatizaciones en n8n hasta plataformas full-stack, siempre prioriza lo que mueve la aguja.',
    image: '/images/FotoSamuFull.png',
    accent: '#06B6D4',
    glowColor: 'rgba(6,182,212,0.22)',
    glowColor2: 'rgba(6,182,212,0.08)',
    badgeBg: 'rgba(6,182,212,0.08)',
    badgeBorder: 'rgba(6,182,212,0.22)',
    separatorFrom: '#06B6D4',
    photoSide: 'right' as const,
    animX: 40,
    delay: 0.22,
  },
] as const;

export default function AboutSection() {
  return (
    <section
      id="about-section"
      style={{ position: 'relative', overflow: 'hidden', background: '#0a0a0f' }}
    >
      {/* Fondo radial */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 55% at 50% 100%, rgba(139,92,246,0.1) 0%, rgba(139,92,246,0.04) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Wrapper principal — 100vh en desktop, auto en mobile */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: { xs: 'auto', md: '100vh' },
          minHeight: { xs: 'auto', md: '600px' },
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: '64px', md: '40px' },
          pb: { xs: '64px', md: 0 },
        }}
      >
        {/* ——— Encabezado ——— */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          style={{ flexShrink: 0 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              pt: 0,
              pb: { xs: '32px', md: '28px' },
              px: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 1.5 }}>
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
                LOS FUNDADORES
              </Typography>
              <Box sx={{ width: '24px', height: '1px', bgcolor: 'rgba(139,92,246,0.4)' }} />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 700,
                background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.65) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mt: 1,
                mb: 1.5,
                lineHeight: 1.15,
              }}
            >
              Las mentes detrás de NextFlow
            </Typography>

            <Typography
              sx={{
                fontSize: '0.875rem',
                color: 'rgba(209,213,219,0.6)',
              }}
            >
              Dos ingenieros que convirtieron su obsesión por la tecnología en una agencia.
            </Typography>
          </Box>
        </motion.div>

        {/* ——— Grid de fundadores — ocupa el resto del alto ——— */}
        <Box sx={{ flex: 1, overflow: 'hidden', pb: { xs: 0, md: '52px' } }}>
          <Container maxWidth="xl" sx={{ height: '100%' }}>
            <Grid
              container
              spacing={0}
              sx={{ height: '100%' }}
            >
              {FOUNDERS.map((founder) => {
                const isLeft = founder.photoSide === 'left';

                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    key={founder.name}
                    sx={{ height: { xs: 'auto', md: '100%' } }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: founder.animX }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: founder.delay }}
                      style={{ height: '100%' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', md: isLeft ? 'row' : 'row-reverse' },
                          alignItems: { xs: 'center', md: 'stretch' },
                          height: { xs: 'auto', md: '100%' },
                          gap: { xs: 3, md: 4 },
                          py: { xs: '32px', md: 0 },
                          px: { xs: 3, md: 0 },
                        }}
                      >
                        {/* ——— FOTO — se estira para llenar el alto ——— */}
                        <Box
                          sx={{
                            position: 'relative',
                            overflow: 'visible',
                            flexShrink: 0,
                            width: { xs: '200px', md: '42%' },
                            height: { xs: '260px', md: 'auto' },
                            alignSelf: { xs: 'center', md: 'stretch' },
                          }}
                        >
                          {/* Glow atmosférico */}
                          <Box
                            aria-hidden="true"
                            sx={{
                              position: 'absolute',
                              top: '-80px',
                              left: isLeft ? '-100px' : '-40px',
                              right: isLeft ? '-40px' : '-100px',
                              bottom: '-80px',
                              background: `radial-gradient(ellipse at ${isLeft ? '35%' : '65%'} 50%, ${founder.glowColor} 0%, ${founder.glowColor2} 45%, transparent 70%)`,
                              filter: 'blur(60px)',
                              zIndex: 0,
                              pointerEvents: 'none',
                            }}
                          />

                          <motion.div
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: founder.delay + 0.12 }}
                            style={{ position: 'relative', zIndex: 1, height: '100%' }}
                          >
                            <Box
                              component="img"
                              src={founder.image}
                              alt={founder.name}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                borderRadius: { xs: '16px', md: 0 },
                                display: 'block',
                                borderLeft: isLeft
                                  ? 'none'
                                  : { md: `1px solid ${founder.badgeBorder}` },
                                borderRight: isLeft
                                  ? { md: `1px solid ${founder.badgeBorder}` }
                                  : 'none',
                              }}
                            />
                          </motion.div>
                        </Box>

                        {/* ——— INFO — centrado verticalmente ——— */}
                        <Box
                          sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            textAlign: { xs: 'center', md: 'left' },
                            px: { xs: 0, md: isLeft ? '12px 56px 12px 40px' : '12px 40px 12px 56px' },
                          }}
                        >
                          {/* Badge */}
                          <Box
                            component="span"
                            sx={{
                              display: 'inline-block',
                              mb: 2,
                              background: founder.badgeBg,
                              color: founder.accent,
                              border: `1px solid ${founder.badgeBorder}`,
                              fontSize: '10px',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              padding: '3px 12px',
                              borderRadius: '20px',
                              fontWeight: 600,
                            }}
                          >
                            {founder.badge}
                          </Box>

                          {/* Nombre */}
                          <Typography
                            component="h3"
                            sx={{
                              fontSize: 'clamp(1.3rem, 1.8vw, 1.7rem)',
                              fontWeight: 700,
                              color: '#FFFFFF',
                              mb: 0.5,
                              lineHeight: 1.2,
                            }}
                          >
                            {founder.name}
                          </Typography>

                          {/* Rol */}
                          <Typography
                            sx={{
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: founder.accent,
                              mb: 2.5,
                            }}
                          >
                            {founder.role}
                          </Typography>

                          {/* Separador */}
                          <Box
                            sx={{
                              width: '36px',
                              height: '2px',
                              background: `linear-gradient(to right, ${founder.separatorFrom}, transparent)`,
                              mb: 2.5,
                            }}
                          />

                          {/* Descripción */}
                          <Typography
                            sx={{
                              fontSize: '0.875rem',
                              color: 'rgba(209,213,219,0.75)',
                              lineHeight: 1.75,
                              maxWidth: '320px',
                            }}
                          >
                            {founder.description}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>
    </section>
  );
}
