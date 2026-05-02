'use client'

import { motion, useReducedMotion } from 'framer-motion'
import BoltIcon from '@mui/icons-material/Bolt'
import { ChatInterface } from './hero/ChatInterface'
import { Spotlight } from '@/components/ui/Spotlight'

export function NAIASection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="hero-section"
      aria-label="Hero — NAIA Chat"
      style={{ background: '#0e0e14', colorScheme: 'dark', position: 'relative' }}
    >
      {/* ── Background effects ── */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
      >
        <Spotlight className="-top-40 left-1/4 md:left-1/2 md:-top-20" fill="rgba(139, 92, 246, 0.22)" />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(109,40,217,0.09) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 80% 70%, rgba(192,38,211,0.05) 0%, transparent 65%)',
          }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage:
              'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            opacity: 0.016,
          }}
        />
      </div>

      {/* ── Content: centered column ── */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          paddingTop: 'calc(68px + clamp(2rem, 5vh, 3.5rem))',
          paddingBottom: 'clamp(2rem, 4vh, 3rem)',
          paddingLeft: 'clamp(1rem, 4vw, 2rem)',
          paddingRight: 'clamp(1rem, 4vw, 2rem)',
          boxSizing: 'border-box',
        }}
      >
        {/* Hero text — centrado */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{ textAlign: 'center', width: '100%', maxWidth: '720px', marginBottom: '2rem' }}
        >
          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.375rem 0.875rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#c4b5fd',
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.25)',
              marginBottom: '1.25rem',
            }}
          >
            <span
              style={{
                width: '0.375rem',
                height: '0.375rem',
                borderRadius: '9999px',
                background: '#34d399',
                animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
              }}
            />
            <BoltIcon sx={{ fontSize: 10 }} style={{ color: '#a78bfa' }} aria-hidden="true" />
            NextFlow AI · En línea
          </span>

          {/* Headline */}
          <h1
            style={{
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            }}
          >
            Automatiza tu{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #F472B6 52%, #67E8F9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              negocio con IA
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: '#94a3b8',
              lineHeight: 1.65,
              fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
              maxWidth: '52ch',
              margin: '0 auto',
            }}
          >
            Habla con <strong style={{ color: '#cbd5e1', fontWeight: 500 }}>NAIA</strong> y descubre
            cómo NextFlow convierte procesos manuales en flujos inteligentes que ahorran tiempo y dinero.
          </p>
        </motion.div>

        {/* Chat container */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          style={{
            width: '100%',
            maxWidth: '760px',
            height: 'clamp(380px, 48vh, 500px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ChatInterface />
        </motion.div>
      </div>
    </section>
  )
}
