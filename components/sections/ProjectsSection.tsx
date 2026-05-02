'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Typography, Grid, Chip } from '@mui/material';
import { getAllProjects, getProjectsByCategory } from '@/data/projects';
import type { ProjectCategory } from '@/types/project.types';

const FILTERS: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Automatización', value: 'automation' },
  { label: 'Inteligencia Artificial', value: 'ai' },
  { label: 'Web', value: 'web' },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  automation: { bg: 'rgba(139,92,246,0.15)', text: '#A78BFA' },
  ai: { bg: 'rgba(6,182,212,0.15)', text: '#22D3EE' },
  web: { bg: 'rgba(34,197,94,0.12)', text: '#4ADE80' },
  mobile: { bg: 'rgba(251,146,60,0.12)', text: '#FB923C' },
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const projects =
    activeFilter === 'all' ? getAllProjects() : getProjectsByCategory(activeFilter);

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
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
            'radial-gradient(ellipse 65% 45% at 80% 50%, rgba(6,182,212,0.07) 0%, transparent 60%)',
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
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                PORTAFOLIO
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
              Proyectos que generan resultados
            </Typography>

            <Typography
              sx={{
                color: 'rgba(209,213,219,0.65)',
                fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                maxWidth: '560px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Soluciones reales para empresas reales. Cada proyecto resuelve un problema concreto.
            </Typography>
          </Box>

          {/* Filtros */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, flexWrap: 'wrap', mb: 7 }}>
            {FILTERS.map((f) => (
              <Box
                key={f.value}
                component="button"
                onClick={() => setActiveFilter(f.value)}
                sx={{
                  px: 2.5,
                  py: 0.875,
                  borderRadius: '50px',
                  border:
                    activeFilter === f.value
                      ? '1px solid rgba(139,92,246,0.6)'
                      : '1px solid rgba(255,255,255,0.1)',
                  background:
                    activeFilter === f.value
                      ? 'rgba(139,92,246,0.15)'
                      : 'rgba(255,255,255,0.03)',
                  color: activeFilter === f.value ? '#C4B5FD' : 'rgba(209,213,219,0.65)',
                  fontSize: '0.825rem',
                  fontWeight: activeFilter === f.value ? 600 : 400,
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
                {f.label}
              </Box>
            ))}
          </Box>
        </motion.div>

        {/* Grid de proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Grid container spacing={3}>
              {projects.map((project, index) => {
                const accent = CATEGORY_COLORS[project.category] ?? CATEGORY_COLORS.automation;
                return (
                  <Grid item xs={12} sm={6} md={4} key={project.id}>
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
                          background: project.featured
                            ? 'rgba(139,92,246,0.06)'
                            : 'rgba(255,255,255,0.03)',
                          border: project.featured
                            ? '1px solid rgba(139,92,246,0.2)'
                            : '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            borderColor: 'rgba(139,92,246,0.35)',
                            boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                          },
                          '&:hover .project-img': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      >
                        {/* Imagen */}
                        <Box sx={{ position: 'relative', height: '180px', overflow: 'hidden', flexShrink: 0, background: '#0d0c18' }}>
                          <Box
                            component="img"
                            src={project.image}
                            alt={project.name}
                            className="project-img"
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center top',
                              display: 'block',
                              transition: 'transform 0.5s ease',
                            }}
                          />
                          {/* Gradient overlay bottom */}
                          <Box sx={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to top, rgba(14,14,20,0.85) 0%, transparent 55%)',
                          }} />
                          {/* Badges sobre la imagen */}
                          <Box sx={{ position: 'absolute', bottom: 10, left: 12, right: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Chip
                              label={project.category}
                              size="small"
                              sx={{
                                background: accent.bg,
                                color: accent.text,
                                border: `1px solid ${accent.text}33`,
                                fontSize: '0.65rem',
                                fontWeight: 600,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                height: '20px',
                              }}
                            />
                            {project.featured && (
                              <Box sx={{
                                fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em',
                                textTransform: 'uppercase', color: 'rgba(139,92,246,0.9)',
                                background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
                                px: 1, py: 0.25, borderRadius: '4px',
                              }}>
                                DESTACADO
                              </Box>
                            )}
                          </Box>
                        </Box>

                        {/* Contenido */}
                        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5, flexGrow: 1 }}>

                        {/* Nombre */}
                        <Typography
                          sx={{
                            fontSize: '1.05rem',
                            fontWeight: 600,
                            color: '#FFFFFF',
                            lineHeight: 1.35,
                          }}
                        >
                          {project.name}
                        </Typography>

                        {/* Descripción */}
                        <Typography
                          sx={{
                            fontSize: '0.85rem',
                            color: 'rgba(209,213,219,0.7)',
                            lineHeight: 1.65,
                            flexGrow: 1,
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Problema resuelto */}
                        <Box
                          sx={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '8px',
                            p: 1.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.75rem',
                              color: 'rgba(156,163,175,0.7)',
                              lineHeight: 1.5,
                            }}
                          >
                            {project.problemSolved}
                          </Typography>
                        </Box>

                        {/* Technologies */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Box
                              key={tech}
                              sx={{
                                fontSize: '0.7rem',
                                color: 'rgba(196,181,253,0.7)',
                                background: 'rgba(139,92,246,0.08)',
                                border: '1px solid rgba(139,92,246,0.15)',
                                px: 1,
                                py: 0.25,
                                borderRadius: '4px',
                                fontWeight: 500,
                              }}
                            >
                              {tech}
                            </Box>
                          ))}
                        </Box>
                        </Box>{/* end contenido */}
                      </Box>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
