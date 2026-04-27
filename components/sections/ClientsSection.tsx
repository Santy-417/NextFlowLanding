'use client';

import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid } from '@mui/material';
import { FormatQuote, CheckCircleOutline } from '@mui/icons-material';
import { getFeaturedClients } from '@/data/clients';

const STATS = [
  { value: '80%', label: 'Reducción en tiempo de tareas manuales' },
  { value: '45%', label: 'Aumento en tasa de conversión' },
  { value: '24/7', label: 'Operación continua sin intervención humana' },
  { value: '3x', label: 'Más leads procesados por el mismo equipo' },
];

export default function ClientsSection() {
  const clients = getFeaturedClients();

  return (
    <section
      id="clients"
      style={{
        position: 'relative',
        width: '100%',
        background: '#09090f',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      {/* Fondo radial */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 55% 40% at 20% 50%, rgba(139,92,246,0.07) 0%, transparent 60%)',
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
                RESULTADOS REALES
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
              Lo que logramos juntos
            </Typography>

            <Typography
              sx={{
                color: 'rgba(209,213,219,0.65)',
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                maxWidth: '520px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Números que hablan por sí solos. Cada automatización genera impacto medible desde el primer mes.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {STATS.map((stat, i) => (
            <Grid item xs={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '16px',
                    transition: 'border-color 0.2s ease',
                    '&:hover': { borderColor: 'rgba(139,92,246,0.3)' },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #A855F7, #E879F9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1.1,
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.775rem',
                      color: 'rgba(156,163,175,0.8)',
                      lineHeight: 1.4,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Caso de éxito */}
        {clients.map((client, i) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <Box
              sx={{
                background: 'rgba(139,92,246,0.05)',
                border: '1px solid rgba(139,92,246,0.15)',
                borderRadius: '20px',
                p: { xs: 3, md: 5 },
                mb: 4,
              }}
            >
              <Grid container spacing={5} alignItems="flex-start">
                {/* Info del caso */}
                <Grid item xs={12} md={7}>
                  {/* Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(192,38,211,0.3))',
                        border: '1px solid rgba(139,92,246,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: '#A78BFA' }}>
                        {client.companyName.charAt(0)}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem' }}>
                        {client.companyName}
                      </Typography>
                      <Typography sx={{ color: 'rgba(156,163,175,0.7)', fontSize: '0.8rem' }}>
                        {client.industry} · {client.projectDuration}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Problema */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(232,121,249,0.7)', mb: 1 }}
                    >
                      El Problema
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: 'rgba(209,213,219,0.75)', lineHeight: 1.65 }}>
                      {client.problem}
                    </Typography>
                  </Box>

                  {/* Solución */}
                  <Box>
                    <Typography
                      sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.8)', mb: 1 }}
                    >
                      La Solución
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: 'rgba(209,213,219,0.75)', lineHeight: 1.65 }}>
                      {client.solution}
                    </Typography>
                  </Box>
                </Grid>

                {/* Beneficios */}
                <Grid item xs={12} md={5}>
                  <Typography
                    sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(34,197,94,0.8)', mb: 2 }}
                  >
                    Resultados Obtenidos
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                    {client.benefits.map((benefit, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <CheckCircleOutline
                          sx={{ color: '#4ADE80', fontSize: '18px', mt: '1px', flexShrink: 0 }}
                        />
                        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(209,213,219,0.8)', lineHeight: 1.5 }}>
                          {benefit}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Testimonio */}
                  {client.testimonial && (
                    <Box
                      sx={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '12px',
                        p: 2.5,
                      }}
                    >
                      <FormatQuote sx={{ color: 'rgba(139,92,246,0.5)', fontSize: '28px', mb: 1 }} />
                      <Typography
                        sx={{
                          fontSize: '0.875rem',
                          color: 'rgba(209,213,219,0.85)',
                          lineHeight: 1.65,
                          fontStyle: 'italic',
                          mb: 2,
                        }}
                      >
                        {client.testimonial.text}
                      </Typography>
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#FFFFFF' }}>
                          {client.testimonial.author}
                        </Typography>
                        <Typography sx={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
                          {client.testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
