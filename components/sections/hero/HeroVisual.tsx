'use client'

import { motion, useReducedMotion } from 'framer-motion'

const CX = 200
const CY = 205
const R = 82

const PARTICLES = [
  { x: 72,  y: 95,  r: 3.5, dur: 3.2, delay: 0,   color: '#A78BFA' },
  { x: 318, y: 118, r: 2.5, dur: 4.1, delay: 0.7,  color: '#E879F9' },
  { x: 48,  y: 268, r: 2,   dur: 3.7, delay: 1.4,  color: '#67E8F9' },
  { x: 344, y: 295, r: 3,   dur: 4.5, delay: 0.3,  color: '#A78BFA' },
  { x: 120, y: 355, r: 2.5, dur: 3.9, delay: 1.1,  color: '#E879F9' },
  { x: 288, y: 362, r: 2,   dur: 4.2, delay: 0.5,  color: '#67E8F9' },
  { x: 58,  y: 172, r: 2,   dur: 3.5, delay: 1.8,  color: '#C084FC' },
  { x: 348, y: 192, r: 3,   dur: 4.0, delay: 0.9,  color: '#67E8F9' },
  { x: 155, y: 52,  r: 2,   dur: 4.3, delay: 1.6,  color: '#E879F9' },
  { x: 250, y: 68,  r: 2.5, dur: 3.6, delay: 0.4,  color: '#A78BFA' },
]

export function HeroVisual() {
  const reduce = useReducedMotion()
  const dur = (d: number) => reduce ? 0 : d

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: dur(1.1), ease: 'easeOut', delay: 0.25 }}
      className="relative w-full h-full flex items-center justify-center"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <svg
        viewBox="0 0 400 460"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ maxHeight: '100%', maxWidth: '100%' }}
        role="img"
        aria-label="NAIA — Nextflow AI Assistant"
      >
        <defs>
          {/* Orb core gradient */}
          <radialGradient id="naia-orb" cx="40%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#C084FC" stopOpacity="0.95" />
            <stop offset="40%"  stopColor="#7C3AED" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#120428" stopOpacity="1" />
          </radialGradient>

          {/* Inner specular highlight */}
          <radialGradient id="naia-spec" cx="38%" cy="28%" r="55%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </radialGradient>

          {/* Background halo */}
          <radialGradient id="naia-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#8B5CF6" stopOpacity="0.20" />
            <stop offset="55%"  stopColor="#D946EF" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#0e0e14" stopOpacity="0" />
          </radialGradient>

          {/* Label gradient */}
          <linearGradient id="naia-label" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#A78BFA" />
            <stop offset="50%"  stopColor="#F0ABFC" />
            <stop offset="100%" stopColor="#67E8F9" />
          </linearGradient>

          {/* Glow filters */}
          <filter id="naia-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="naia-softglow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="naia-xglow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="14" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Clip path for scan line */}
          <clipPath id="naia-clip">
            <circle cx={CX} cy={CY} r={R - 2} />
          </clipPath>
        </defs>

        {/* ── Background halo ── */}
        <motion.ellipse
          cx={CX} cy={CY} rx={168} ry={162}
          fill="url(#naia-halo)"
          animate={reduce ? {} : { scale: [1, 1.07, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: `${CX}px ${CY}px` }}
        />

        {/* ── Pulse rings ── */}
        {[0, 1, 2].map(i => (
          <motion.circle
            key={`pulse-${i}`}
            cx={CX} cy={CY} r={R + 22}
            fill="none"
            stroke="#8B5CF6"
            strokeWidth={0.8}
            animate={reduce ? {} : {
              r:            [R + 22,  R + 60,  R + 22],
              strokeOpacity:[0.35,    0,       0.35],
            }}
            transition={{ duration: 3.8, repeat: Infinity, delay: i * 1.15, ease: 'easeOut' }}
          />
        ))}

        {/* ── Orbital ring 1 (violet) ── */}
        <motion.g
          style={{ transformOrigin: `${CX}px ${CY}px` }}
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx={CX} cy={CY} rx={118} ry={30}
            fill="none" stroke="#A78BFA" strokeWidth={1.4} strokeOpacity={0.65} />
          <circle cx={CX + 118} cy={CY} r={4.5}
            fill="#A78BFA" filter="url(#naia-softglow)" />
          <circle cx={CX - 118} cy={CY} r={3}
            fill="#A78BFA" opacity={0.6} />
        </motion.g>

        {/* ── Orbital ring 2 (magenta, offset 60°) ── */}
        <motion.g
          style={{ transformOrigin: `${CX}px ${CY}px`, rotate: '60deg' }}
          animate={reduce ? {} : { rotate: [60, 420] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx={CX} cy={CY} rx={108} ry={24}
            fill="none" stroke="#E879F9" strokeWidth={1} strokeOpacity={0.5} />
          <circle cx={CX + 108} cy={CY} r={3.5}
            fill="#E879F9" filter="url(#naia-softglow)" />
        </motion.g>

        {/* ── Orbital ring 3 (cyan, offset −45°) ── */}
        <motion.g
          style={{ transformOrigin: `${CX}px ${CY}px`, rotate: '-45deg' }}
          animate={reduce ? {} : { rotate: [-45, 315] }}
          transition={{ duration: 17, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx={CX} cy={CY} rx={98} ry={19}
            fill="none" stroke="#67E8F9" strokeWidth={0.9} strokeOpacity={0.45} />
          <circle cx={CX + 98} cy={CY} r={3}
            fill="#67E8F9" filter="url(#naia-softglow)" />
        </motion.g>

        {/* ── Core orb ── */}
        <circle cx={CX} cy={CY} r={R}
          fill="url(#naia-orb)" filter="url(#naia-glow)" />

        {/* ── Specular highlight ── */}
        <circle cx={CX} cy={CY} r={R} fill="url(#naia-spec)" />

        {/* ── Orb edge rim ── */}
        <circle cx={CX} cy={CY} r={R}
          fill="none" stroke="#C084FC" strokeWidth={1.8} strokeOpacity={0.75}
          filter="url(#naia-softglow)" />

        {/* ── Eyes ── */}
        <motion.ellipse
          cx={CX - 22} cy={CY - 8}
          rx={10} ry={6}
          fill="#E879F9" filter="url(#naia-xglow)"
          animate={reduce ? {} : { ry: [6, 0.8, 6], opacity: [1, 0.7, 1] }}
          transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 3.8, ease: 'easeInOut' }}
        />
        <motion.ellipse
          cx={CX + 22} cy={CY - 8}
          rx={10} ry={6}
          fill="#E879F9" filter="url(#naia-xglow)"
          animate={reduce ? {} : { ry: [6, 0.8, 6], opacity: [1, 0.7, 1] }}
          transition={{ duration: 0.18, repeat: Infinity, repeatDelay: 3.8, ease: 'easeInOut', delay: 0.04 }}
        />

        {/* Eye pupils */}
        <circle cx={CX - 22} cy={CY - 8} r={3.5} fill="#ffffff" opacity={0.9} />
        <circle cx={CX + 22} cy={CY - 8} r={3.5} fill="#ffffff" opacity={0.9} />

        {/* ── Smile ── */}
        <motion.path
          d={`M ${CX - 17} ${CY + 22} Q ${CX} ${CY + 36} ${CX + 17} ${CY + 22}`}
          fill="none" stroke="#C084FC" strokeWidth={2.2} strokeLinecap="round"
          animate={reduce ? {} : { strokeOpacity: [0.85, 0.4, 0.85] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Scanning line ── */}
        <motion.line
          x1={CX - R + 6} y1={CY - R + 4}
          x2={CX + R - 6} y2={CY - R + 4}
          stroke="#67E8F9" strokeWidth={1.2} strokeLinecap="round"
          clipPath="url(#naia-clip)"
          animate={reduce ? {} : {
            y1: [CY - R + 4, CY + R - 4, CY - R + 4],
            y2: [CY - R + 4, CY + R - 4, CY - R + 4],
            strokeOpacity: [0.7, 0.1, 0.7],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
        />

        {/* ── Floating particles ── */}
        {PARTICLES.map((p, i) => (
          <motion.circle
            key={`p${i}`}
            cx={p.x} cy={p.y} r={p.r}
            fill={p.color} opacity={0.75}
            filter="url(#naia-softglow)"
            animate={reduce ? {} : {
              cy:      [p.y, p.y - 16, p.y],
              opacity: [0.75, 0.25, 0.75],
            }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}

        {/* ── NAIA label ── */}
        <text
          x={CX} y={CY + R + 44}
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="900"
          fontSize="20"
          letterSpacing="9"
          fill="url(#naia-label)"
        >
          NAIA
        </text>
        <text
          x={CX} y={CY + R + 62}
          textAnchor="middle"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="400"
          fontSize="8.5"
          letterSpacing="5.5"
          fill="#475569"
        >
          NEXTFLOW AI ASSISTANT
        </text>
      </svg>

      {/* Left vignette — blend into chat */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 pointer-events-none"
        style={{ width: '22%', background: 'linear-gradient(to right, #0e0e14 0%, transparent 100%)' }}
      />
      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: '15%', background: 'linear-gradient(to top, #0e0e14 0%, transparent 100%)' }}
      />
    </motion.div>
  )
}
