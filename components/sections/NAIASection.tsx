'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { ChatInterface } from './hero/ChatInterface'
import { HeroVisual } from './hero/HeroVisual'
import { Spotlight } from '@/components/ui/Spotlight'

export function NAIASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero-section"
      aria-label="Hero — NAIA Chat"
      className="relative w-screen overflow-x-hidden"
      style={{
        background: '#030303',
        height: '100dvh',
        minHeight: '560px',
        colorScheme: 'dark',
      }}
    >
      {/* ── Atmospheric glows ── */}
      <Spotlight
        className="-top-40 left-0 md:left-40 md:-top-20"
        fill="rgba(139, 92, 246, 0.28)"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 20% 50%, rgba(109,40,217,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 85% 45%, rgba(192,38,211,0.06) 0%, transparent 65%)',
        }}
      />
      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.016,
        }}
      />

      {/* ── Main grid: fills entire section height ── */}
      <div className="absolute inset-0 flex">

        {/* LEFT — Copy + Chat (mobile: full width, lg: 50%) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col h-full flex-1 lg:flex-none lg:w-1/2 overflow-hidden"
          style={{
            paddingTop: 'clamp(2.5rem, 6vh, 4rem)',
            paddingBottom: 'clamp(1rem, 4vh, 1.5rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
            paddingRight: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
        >
          {/* ── Copy block ── */}
          <div className="flex-shrink-0 mb-4">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-violet-300 mb-2"
              style={{
                background: 'rgba(139,92,246,0.1)',
                border: '1px solid rgba(139,92,246,0.25)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <Zap size={10} className="text-violet-400" aria-hidden="true" />
              NextFlow AI · En línea
            </span>

            <h1
              className="font-black text-white leading-[1.08] tracking-tight mt-2"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                textWrap: 'balance',
              } as React.CSSProperties}
            >
              Automatiza tu{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #A78BFA 0%, #F472B6 52%, #67E8F9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                negocio con IA
              </span>
            </h1>

            <p
              className="mt-2 text-slate-400 leading-relaxed text-sm"
              style={{
                fontSize: 'clamp(0.75rem, 1vw, 0.875rem)',
                maxWidth: '38ch',
              }}
            >
              Habla con <strong className="text-slate-300 font-medium">NAIA</strong> y descubre
              cómo NextFlow convierte procesos manuales en flujos inteligentes.
            </p>
          </div>

          {/* ── Chat — fills all remaining space ── */}
          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            <ChatInterface />
          </div>
        </motion.div>

        {/* RIGHT — NAIA visual (hidden on mobile, visible on lg+) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
          className="hidden lg:flex flex-1 h-full relative"
        >
          {/* Left-to-right fade creates smooth transition from left text */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 z-10 pointer-events-none"
            style={{
              width: '100px',
              background: 'linear-gradient(90deg, #030303 0%, transparent 100%)',
            }}
          />
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
