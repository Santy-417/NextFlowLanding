'use client';

import { useMemo, useState } from 'react';
import type { ElementType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Grid, Button, TextField } from '@mui/material';
import * as Icons from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  getAllPlans,
  getFilteredPlans,
  formatCOP,
  getPlanCredit,
  pricingComparison,
  pricingRules,
  NEED_FILTERS,
  SIZE_FILTERS,
} from '@/data/pricing';
import type { PricingNeed, ProjectSize } from '@/types/pricing.types';
import { trackEvent } from '@/lib/analytics';

const DEFAULT_PROJECT_VALUE = 3000000;

/** Chip de filtro, mismo lenguaje visual que los filtros de ProjectsSection */
function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      aria-pressed={active}
      sx={{
        px: 2.25,
        py: 0.75,
        borderRadius: '50px',
        border: active ? '1px solid rgba(139,92,246,0.6)' : '1px solid rgba(255,255,255,0.1)',
        background: active ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)',
        color: active ? '#C4B5FD' : 'rgba(209,213,219,0.65)',
        fontSize: '0.8rem',
        fontWeight: active ? 600 : 400,
        fontFamily: 'inherit',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        outline: 'none',
        '&:hover': {
          borderColor: 'rgba(139,92,246,0.4)',
          color: '#C4B5FD',
          background: 'rgba(139,92,246,0.08)',
        },
      }}
    >
      {label}
    </Box>
  );
}

export default function PricingSection() {
  const [need, setNeed] = useState<PricingNeed | 'all'>('all');
  const [size, setSize] = useState<ProjectSize | 'all'>('all');
  const [projectValue, setProjectValue] = useState<string>(String(DEFAULT_PROJECT_VALUE));

  const allPlans = getAllPlans();
  const plans = getFilteredPlans(need, size);

  /** Índices (en el orden original) de los planes visibles, para la tabla comparativa */
  const visibleIndexes = useMemo(
    () => plans.map((plan) => allPlans.findIndex((p) => p.id === plan.id)),
    [plans, allPlans]
  );

  const numericValue = Math.max(Number(projectValue.replace(/\D/g, '')) || 0, 0);
  const paidPlans = allPlans.filter((plan) => plan.price > 0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePlanClick = (planId: string) => {
    trackEvent('cta_click', { source: 'pricing_section', plan: planId });
    scrollTo(planId === 'gratis' ? 'hero-section' : 'contact');
  };

  return (
    <section
      id="pricing"
      style={{
        position: 'relative',
        width: '100%',
        background: '#0e0e14',
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
        {/* ---------- Encabezado ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                COTIZACIONES
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
              Planes de cotización
            </Typography>

            <Typography
              sx={{
                color: 'rgba(209,213,219,0.65)',
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                maxWidth: '620px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Cuatro niveles según cuánto quieras ver antes de decidir. Lo que pagas por la
              cotización se descuenta del proyecto si firmas en 30 días.
            </Typography>
          </Box>
        </motion.div>

        {/* ---------- Escalera de precios ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 1, sm: 0 },
              mb: 2,
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(8px)',
              overflow: 'hidden',
            }}
          >
            {allPlans.map((plan, index) => (
              <Box
                key={plan.id}
                sx={{
                  flex: '1 1 140px',
                  textAlign: 'center',
                  py: 2,
                  px: 1.5,
                  borderLeft: {
                    xs: 'none',
                    sm: index === 0 ? 'none' : '1px solid rgba(255,255,255,0.07)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(156,163,175,0.8)',
                    mb: 0.5,
                  }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: plan.price === 0 ? '#A78BFA' : '#FFFFFF',
                  }}
                >
                  {plan.price === 0 ? 'Gratis' : formatCOP(plan.price)}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            sx={{
              textAlign: 'center',
              color: 'rgba(156,163,175,0.6)',
              fontSize: '0.8rem',
              mb: 7,
            }}
          >
            Cada escalón suma algo al anterior. Precios en COP.
          </Typography>
        </motion.div>

        {/* ---------- Filtros ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(8px)',
              p: { xs: 2.5, md: 3.5 },
              mb: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 600, mb: 0.75 }}
            >
              Encuentra el plan que encaja
            </Typography>
            <Typography sx={{ color: 'rgba(209,213,219,0.6)', fontSize: '0.85rem', mb: 3 }}>
              Filtra por lo que necesita el cliente o por el tamaño del proyecto.
            </Typography>

            <Box sx={{ mb: 2.5 }}>
              <Typography
                sx={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(156,163,175,0.75)',
                  fontWeight: 600,
                  mb: 1.25,
                }}
              >
                ¿Qué necesita ver el cliente?
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
                {NEED_FILTERS.map((f) => (
                  <FilterChip
                    key={f.value}
                    label={f.label}
                    active={need === f.value}
                    onClick={() => setNeed(f.value)}
                  />
                ))}
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(156,163,175,0.75)',
                  fontWeight: 600,
                  mb: 1.25,
                }}
              >
                Tamaño del proyecto
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
                {SIZE_FILTERS.map((f) => (
                  <FilterChip
                    key={f.value}
                    label={f.label}
                    active={size === f.value}
                    onClick={() => setSize(f.value)}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Typography
            aria-live="polite"
            sx={{ color: 'rgba(156,163,175,0.7)', fontSize: '0.8rem', mb: 4, textAlign: 'center' }}
          >
            Mostrando {plans.length} de {allPlans.length} planes.
          </Typography>
        </motion.div>

        {/* ---------- Cards de planes ---------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${need}-${size}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {plans.length === 0 ? (
              <Box
                sx={{
                  textAlign: 'center',
                  py: 8,
                  borderRadius: '16px',
                  border: '1px dashed rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <Typography sx={{ color: 'rgba(209,213,219,0.7)', fontSize: '0.95rem' }}>
                  Ningún plan coincide con esos filtros. Escríbenos y armamos algo a tu medida.
                </Typography>
              </Box>
            ) : (
              <Grid container spacing={3}>
                {plans.map((plan, index) => (
                  <Grid item xs={12} sm={6} md={plans.length >= 4 ? 3 : 12 / plans.length} key={plan.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.07 }}
                      style={{ height: '100%' }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          p: 3,
                          borderRadius: '16px',
                          background: plan.highlighted
                            ? 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(236,72,153,0.08) 100%)'
                            : 'rgba(255,255,255,0.03)',
                          border: plan.highlighted
                            ? '1px solid rgba(168,85,247,0.3)'
                            : '1px solid rgba(255,255,255,0.08)',
                          backdropFilter: 'blur(8px)',
                          transition:
                            'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            borderColor: plan.highlighted
                              ? 'rgba(168,85,247,0.5)'
                              : 'rgba(139,92,246,0.35)',
                            boxShadow: plan.highlighted
                              ? '0 20px 50px rgba(168,85,247,0.25)'
                              : '0 16px 48px rgba(0,0,0,0.4)',
                          },
                        }}
                      >
                        {plan.highlighted && (
                          <Box
                            sx={{
                              position: 'absolute',
                              top: 12,
                              right: 12,
                              fontSize: '0.6rem',
                              fontWeight: 700,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: '#fff',
                              background: 'linear-gradient(135deg, #A855F7, #E879F9)',
                              px: 1,
                              py: 0.25,
                              borderRadius: '4px',
                            }}
                          >
                            MÁS ELEGIDO
                          </Box>
                        )}

                        {/* Nombre y tagline */}
                        <Typography
                          sx={{
                            fontSize: '0.7rem',
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                            color: plan.highlighted ? '#E879F9' : 'rgba(139,92,246,0.9)',
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {plan.name}
                        </Typography>
                        <Typography
                          variant="h3"
                          sx={{
                            color: '#FFFFFF',
                            fontSize: '1.05rem',
                            fontWeight: 600,
                            lineHeight: 1.35,
                            mb: 2.5,
                          }}
                        >
                          {plan.tagline}
                        </Typography>

                        {/* Precio */}
                        <Box sx={{ mb: 0.75, display: 'flex', alignItems: 'baseline', gap: 0.75, flexWrap: 'wrap' }}>
                          <Typography
                            sx={{
                              fontSize: '1.9rem',
                              fontWeight: 700,
                              color: '#FFFFFF',
                              letterSpacing: '-0.02em',
                              lineHeight: 1.1,
                            }}
                          >
                            {plan.price === 0 ? 'Gratis' : formatCOP(plan.price)}
                          </Typography>
                          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(156,163,175,0.8)' }}>
                            {plan.price === 0 ? plan.priceNote : `COP · ${plan.priceNote}`}
                          </Typography>
                        </Box>

                        {/* Crédito */}
                        <Typography
                          sx={{
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: plan.creditPercent > 0 ? '#4ADE80' : 'rgba(156,163,175,0.6)',
                            mb: 2.5,
                            minHeight: '18px',
                          }}
                        >
                          {plan.creditPercent > 0
                            ? `Se descuenta ${plan.creditPercent}% del proyecto`
                            : 'Sin compromiso'}
                        </Typography>

                        {/* Features */}
                        <Box component="ul" sx={{ pl: 0, m: 0, mb: 3, listStyle: 'none', flexGrow: 1 }}>
                          {plan.features.map((feature, idx) => (
                            <Box
                              component="li"
                              key={idx}
                              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}
                            >
                              <CheckIcon
                                sx={{
                                  fontSize: '15px',
                                  color: plan.highlighted ? '#E879F9' : 'rgba(139,92,246,0.9)',
                                  mt: '3px',
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                sx={{
                                  color: 'rgba(209,213,219,0.8)',
                                  fontSize: '0.825rem',
                                  lineHeight: 1.6,
                                }}
                              >
                                {feature}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        {/* Ideal para */}
                        <Box
                          sx={{
                            pt: 2,
                            mb: 2.5,
                            borderTop: '1px solid rgba(255,255,255,0.07)',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.75rem',
                              color: 'rgba(156,163,175,0.85)',
                              lineHeight: 1.6,
                            }}
                          >
                            <Box component="span" sx={{ color: '#C4B5FD', fontWeight: 600 }}>
                              Ideal para:{' '}
                            </Box>
                            {plan.idealFor}
                          </Typography>
                        </Box>

                        {/* CTA */}
                        <Button
                          variant={plan.highlighted ? 'contained' : 'outlined'}
                          onClick={() => handlePlanClick(plan.id)}
                          sx={{
                            textTransform: 'none',
                            borderRadius: '50px',
                            py: 1.1,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            ...(plan.highlighted
                              ? {
                                  background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)',
                                  color: '#ffffff',
                                  boxShadow: '0 0 24px rgba(139,92,246,0.3)',
                                  '&:hover': {
                                    background:
                                      'linear-gradient(135deg, #6D28D9 0%, #A21CAF 100%)',
                                    boxShadow: '0 0 36px rgba(139,92,246,0.45)',
                                  },
                                }
                              : {
                                  borderColor: 'rgba(139,92,246,0.4)',
                                  color: '#C4B5FD',
                                  '&:hover': {
                                    borderColor: 'rgba(139,92,246,0.7)',
                                    background: 'rgba(139,92,246,0.1)',
                                  },
                                }),
                          }}
                        >
                          {plan.price === 0 ? 'Hablar con el bot' : 'Quiero este plan'}
                        </Button>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ---------- Tabla comparativa ---------- */}
        {plans.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ mt: 10 }}>
              <Typography
                variant="h3"
                sx={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 600, mb: 0.75 }}
              >
                Comparativa
              </Typography>
              <Typography sx={{ color: 'rgba(209,213,219,0.6)', fontSize: '0.875rem', mb: 3 }}>
                Qué incluye cada plan, lado a lado. Responde a los filtros de arriba.
              </Typography>

              <Box
                sx={{
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(8px)',
                  overflowX: 'auto',
                }}
              >
                <Box
                  component="table"
                  sx={{
                    width: '100%',
                    minWidth: plans.length > 2 ? '760px' : '480px',
                    borderCollapse: 'collapse',
                  }}
                >
                  <Box component="thead">
                    <Box component="tr">
                      <Box
                        component="th"
                        scope="col"
                        sx={{
                          textAlign: 'left',
                          p: 2,
                          fontSize: '11px',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: 'rgba(156,163,175,0.8)',
                          fontWeight: 600,
                          borderBottom: '1px solid rgba(255,255,255,0.08)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Incluye
                      </Box>
                      {plans.map((plan) => (
                        <Box
                          component="th"
                          scope="col"
                          key={plan.id}
                          sx={{
                            textAlign: 'left',
                            p: 2,
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            color: plan.highlighted ? '#E879F9' : '#FFFFFF',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {plan.name}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box component="tbody">
                    {pricingComparison.map((row) => (
                      <Box
                        component="tr"
                        key={row.label}
                        sx={{ '&:hover': { background: 'rgba(255,255,255,0.02)' } }}
                      >
                        <Box
                          component="th"
                          scope="row"
                          sx={{
                            textAlign: 'left',
                            p: 2,
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            color: 'rgba(209,213,219,0.9)',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                          }}
                        >
                          {row.label}
                        </Box>
                        {visibleIndexes.map((planIndex, cellIdx) => {
                          const value = row.values[planIndex] ?? '—';
                          const isEmpty = value === 'No incluye';
                          return (
                            <Box
                              component="td"
                              key={`${row.label}-${cellIdx}`}
                              sx={{
                                p: 2,
                                fontSize: '0.8rem',
                                color: isEmpty ? 'rgba(107,114,128,0.9)' : 'rgba(209,213,219,0.8)',
                                borderBottom: '1px solid rgba(255,255,255,0.05)',
                                verticalAlign: 'middle',
                              }}
                            >
                              {isEmpty ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                  <RemoveIcon sx={{ fontSize: '14px' }} />
                                  <span>No incluye</span>
                                </Box>
                              ) : value === 'Incluido' ? (
                                <Box
                                  sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    color: '#4ADE80',
                                  }}
                                >
                                  <CheckIcon sx={{ fontSize: '15px' }} />
                                  <span>Incluido</span>
                                </Box>
                              ) : (
                                value
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        )}

        {/* ---------- Calculadora de crédito ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h3"
              sx={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 600, mb: 0.75 }}
            >
              Crédito al proyecto
            </Typography>
            <Typography sx={{ color: 'rgba(209,213,219,0.6)', fontSize: '0.875rem', mb: 3 }}>
              Escribe el valor estimado del proyecto y mira cuánto se descuenta si el cliente firma
              en 30 días.
            </Typography>

            <Box
              sx={{
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(8px)',
                p: { xs: 2.5, md: 3.5 },
              }}
            >
              <Box sx={{ mb: 3, maxWidth: '320px' }}>
                <Typography
                  component="label"
                  htmlFor="pricing-project-value"
                  sx={{
                    display: 'block',
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(156,163,175,0.75)',
                    fontWeight: 600,
                    mb: 1.25,
                  }}
                >
                  Valor estimado del proyecto (COP)
                </Typography>
                <TextField
                  id="pricing-project-value"
                  value={projectValue}
                  onChange={(e) => setProjectValue(e.target.value.replace(/\D/g, ''))}
                  placeholder="3000000"
                  inputMode="numeric"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <Box component="span" sx={{ color: 'rgba(156,163,175,0.8)', mr: 1 }}>
                        $
                      </Box>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#FFFFFF',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '12px',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                      '&:hover fieldset': { borderColor: 'rgba(139,92,246,0.4)' },
                      '&.Mui-focused fieldset': { borderColor: 'rgba(139,92,246,0.7)' },
                    },
                  }}
                />
                <Typography sx={{ color: 'rgba(156,163,175,0.7)', fontSize: '0.75rem', mt: 1 }}>
                  {numericValue > 0 ? formatCOP(numericValue) + ' COP' : 'Escribe un valor'}
                </Typography>
              </Box>

              <Box sx={{ overflowX: 'auto' }}>
                <Box
                  component="table"
                  sx={{ width: '100%', minWidth: '520px', borderCollapse: 'collapse' }}
                >
                  <Box component="thead">
                    <Box component="tr">
                      {['Plan', 'Pagas', 'Se descuenta', 'Proyecto queda en'].map((head) => (
                        <Box
                          component="th"
                          scope="col"
                          key={head}
                          sx={{
                            textAlign: 'left',
                            p: 1.75,
                            fontSize: '11px',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'rgba(156,163,175,0.8)',
                            fontWeight: 600,
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {head}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box component="tbody">
                    {paidPlans.map((plan) => {
                      const credit = getPlanCredit(plan, numericValue);
                      const remaining = Math.max(numericValue - credit, 0);
                      return (
                        <Box component="tr" key={plan.id}>
                          <Box
                            component="th"
                            scope="row"
                            sx={{
                              textAlign: 'left',
                              p: 1.75,
                              fontSize: '0.85rem',
                              fontWeight: 600,
                              color: plan.highlighted ? '#E879F9' : '#FFFFFF',
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {plan.name}
                          </Box>
                          <Box
                            component="td"
                            sx={{
                              p: 1.75,
                              fontSize: '0.85rem',
                              color: 'rgba(209,213,219,0.8)',
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {formatCOP(plan.price)}
                          </Box>
                          <Box
                            component="td"
                            sx={{
                              p: 1.75,
                              fontSize: '0.85rem',
                              color: '#4ADE80',
                              fontWeight: 600,
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {formatCOP(credit)} ({plan.creditPercent}%)
                          </Box>
                          <Box
                            component="td"
                            sx={{
                              p: 1.75,
                              fontSize: '0.85rem',
                              color: '#FFFFFF',
                              fontWeight: 600,
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {formatCOP(remaining)}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>

              <Typography sx={{ color: 'rgba(156,163,175,0.7)', fontSize: '0.75rem', mt: 2.5 }}>
                Si el proyecto vale menos que el crédito, el descuento se limita al valor del
                proyecto.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* ---------- Reglas del juego ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h3"
              sx={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 600, mb: 3 }}
            >
              Reglas del juego
            </Typography>

            <Grid container spacing={2.5}>
              {pricingRules.map((rule) => {
                const IconComponent =
                  (Icons as Record<string, ElementType>)[rule.icon] || Icons.Info;
                return (
                  <Grid item xs={12} sm={6} md={3} key={rule.title}>
                    <Box
                      sx={{
                        height: '100%',
                        p: 2.5,
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.07)',
                        background: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(8px)',
                        transition: 'border-color 0.25s ease, background 0.25s ease',
                        '&:hover': {
                          borderColor: 'rgba(139,92,246,0.3)',
                          background: 'rgba(255,255,255,0.05)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'rgba(139,92,246,0.12)',
                          border: '1px solid rgba(139,92,246,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <IconComponent sx={{ fontSize: '22px', color: '#A855F7' }} />
                      </Box>
                      <Typography
                        sx={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600, mb: 1 }}
                      >
                        {rule.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(156,163,175,0.85)',
                          fontSize: '0.8rem',
                          lineHeight: 1.65,
                        }}
                      >
                        {rule.description}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            <Typography
              sx={{
                color: 'rgba(107,114,128,0.9)',
                fontSize: '0.75rem',
                mt: 4,
                textAlign: 'center',
              }}
            >
              Precios en COP, tentativos y sujetos a ajuste según el alcance. NextFlow.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}
