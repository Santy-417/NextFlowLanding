'use client';

import { motion } from 'framer-motion';

const FOUNDERS = [
  {
    name: 'Santiago Chavarro',
    role: 'Co-fundador & CEO',
    badges: [
      { label: 'Co-fundador', color: '#d0bcff', bg: 'rgba(160,120,255,0.15)', border: 'rgba(160,120,255,0.3)' },
      { label: 'CEO', color: '#fbabff', bg: 'rgba(217,70,239,0.12)', border: 'rgba(217,70,239,0.3)' },
    ],
    description:
      'Estratega visionario que diseña sistemas antes de escribir una línea de código. Su enfoque en arquitectura limpia convierte ideas complejas en productos que funcionan bajo presión y escalan sin fricción.',
    image: '/images/FotoSantiago.png',
    accentColor: '#D946EF',
    accentGradient: 'linear-gradient(90deg, #A855F7, #D946EF)',
    overlayFrom: '#0e0e14',
    delay: 0.05,
  },
  {
    name: 'Samuel Aristizabal',
    role: 'Co-fundador & CTO',
    badges: [
      { label: 'Co-fundador', color: '#d0bcff', bg: 'rgba(160,120,255,0.15)', border: 'rgba(160,120,255,0.3)' },
      { label: 'CTO', color: '#adc6ff', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.3)' },
    ],
    description:
      'Arquitecto de sistemas obsesionado con la optimización a nivel de núcleo. Samuel lidera el desarrollo técnico de NextFlow, convirtiendo requerimientos difusos en sistemas estables y resilientes.',
    image: '/images/FotoSamuFull.png',
    accentColor: '#3B82F6',
    accentGradient: 'linear-gradient(90deg, #6366F1, #3B82F6)',
    overlayFrom: '#0e0e14',
    delay: 0.15,
  },
] as const;

export default function AboutSection() {
  return (
    <section
      id="about-section"
      style={{ position: 'relative', background: '#0e0e14', paddingTop: '96px', paddingBottom: '96px' }}
    >
      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1.5rem, 4vw, 4rem)' }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#fbabff', marginBottom: '1rem',
          }}>
            EL EQUIPO
          </span>
          <h2 style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 1.25rem',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Las Mentes detrás de NextFlow
          </h2>
          <p style={{
            fontFamily: 'var(--font-manrope), sans-serif',
            fontSize: '1.0625rem', color: '#958ea0', maxWidth: '42ch', margin: '0 auto', lineHeight: 1.6,
          }}>
            Dos ingenieros que convirtieron su obsesión por la tecnología en una agencia de automatización con IA.
          </p>
        </motion.div>

        {/* ── Founders grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '2.5rem',
        }}>
          {FOUNDERS.map((founder) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: founder.delay }}
            >
              <div
                style={{
                  background: 'rgba(14,14,20,0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)`,
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = `0 0 0 1px ${founder.accentColor}44, 0 16px 48px rgba(0,0,0,0.5), 0 0 40px ${founder.accentColor}22`;
                  el.style.borderColor = `${founder.accentColor}44`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)';
                  el.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                {/* Accent top bar */}
                <div style={{ height: '4px', background: founder.accentGradient }} />

                {/* Image area */}
                <div style={{ position: 'relative', height: '380px', overflow: 'hidden', background: '#0d0c18' }}>
                  <img
                    src={founder.image}
                    alt={founder.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'contain', objectPosition: 'center bottom',
                      display: 'block',
                      transition: 'transform 0.7s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />

                  {/* Gradient overlay — bottom strong */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to top, ${founder.overlayFrom} 0%, ${founder.overlayFrom}99 20%, transparent 55%)`,
                  }} />

                  {/* Overlay content: badges + name + role */}
                  <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      {founder.badges.map(b => (
                        <span
                          key={b.label}
                          style={{
                            background: b.bg, color: b.color,
                            border: `1px solid ${b.border}`,
                            padding: '3px 10px', borderRadius: '9999px',
                            fontSize: '10px', fontWeight: 700,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            fontFamily: 'var(--font-space-grotesk), sans-serif',
                          }}
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>

                    <h3 style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)',
                      fontWeight: 700, color: '#fff', margin: '0 0 0.25rem', lineHeight: 1.15,
                    }}>
                      {founder.name}
                    </h3>

                    <p style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: '0.8125rem', fontWeight: 500,
                      color: founder.accentColor,
                      margin: 0, letterSpacing: '0.02em',
                    }}>
                      {founder.role}
                    </p>
                  </div>
                </div>

                {/* Info area */}
                <div style={{
                  padding: '1.75rem 1.75rem 2rem',
                  borderLeft: `3px solid ${founder.accentColor}44`,
                  background: 'rgba(255,255,255,0.015)',
                  position: 'relative',
                }}>
                  {/* Decorative glow behind text */}
                  <div aria-hidden="true" style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '60px',
                    background: `linear-gradient(to bottom, ${founder.accentColor}0a, transparent)`,
                    pointerEvents: 'none',
                  }} />

                  <p style={{
                    fontFamily: 'var(--font-manrope), sans-serif',
                    fontSize: '0.9375rem', color: '#a09aaa',
                    lineHeight: 1.75, margin: 0,
                    position: 'relative',
                  }}>
                    {founder.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
