'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

/**
 * TechStack Section - Tecnologías que usamos
 * Muestra el stack tecnológico de NextFlow
 */

const technologies = [
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'Framework', color: '#FFFFFF' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'Python', category: 'Backend', color: '#3776AB' },
  { name: 'n8n', category: 'Automation', color: '#EA4B71' },
  { name: 'PostgreSQL', category: 'Database', color: '#4169E1' },
  { name: 'MongoDB', category: 'Database', color: '#47A248' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'OpenAI', category: 'AI', color: '#10A37F' },
  { name: 'Claude', category: 'AI', color: '#A855F7' },
];

export default function TechStackSection() {
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
      id="techstack"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: '#0A0A0A',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <Container maxWidth="lg">
        {/* Título */}
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
              background: 'linear-gradient(90deg, #06B6D4 0%, #A855F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Tecnologías que Dominamos
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
            Usamos las mejores herramientas del mercado para entregar soluciones de clase mundial.
          </Typography>
        </Box>

        {/* Grid de tecnologías */}
        <Grid container spacing={3}>
          {technologies.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} key={tech.name}>
              <Box
                sx={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  p: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 0.05}s`,
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: tech.color,
                    boxShadow: `0 10px 30px ${tech.color}33`,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: '1.1rem',
                  }}
                >
                  {tech.name}
                </Typography>
                <Typography
                  sx={{
                    color: tech.color,
                    fontSize: '0.85rem',
                    fontWeight: 500,
                  }}
                >
                  {tech.category}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
