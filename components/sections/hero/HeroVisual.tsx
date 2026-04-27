'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { SplineScene } from '@/components/ui/SplineScene'

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 1.1, ease: 'easeOut', delay: 0.25 }}
      className="relative w-full h-full"
      style={{
        willChange: 'opacity',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Atmospheric glow behind the character — not a box border */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: 'radial-gradient(ellipse 60% 70% at 55% 45%, rgba(139,92,246,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Spline fills the full column with no container */}
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="w-full h-full"
      />

      {/* Bottom vignette: blends into section background */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '18%',
          background: 'linear-gradient(to top, #030303 0%, transparent 100%)',
        }}
      />

      {/* Left vignette: smooth transition to chat side */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none"
        style={{
          width: '25%',
          background: 'linear-gradient(to right, #030303 0%, transparent 100%)',
        }}
      />

      {/* NAIA label — floating, no box */}
      <div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center pointer-events-none"
      >
        <p
          className="text-xl font-black tracking-[0.22em] uppercase"
          style={{
            background: 'linear-gradient(135deg, #A78BFA 0%, #F0ABFC 50%, #67E8F9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          NAIA
        </p>
        <p className="text-[10px] text-slate-600 tracking-[0.28em] uppercase mt-0.5">
          Nextflow AI Assistant
        </p>
      </div>
    </motion.div>
  )
}
