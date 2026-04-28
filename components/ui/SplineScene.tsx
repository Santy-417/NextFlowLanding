'use client'

import { Suspense, lazy, useState, useEffect } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function SplineSkeleton() {
  return (
    <div
      className="w-full h-full"
      style={{
        background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)',
        animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
      }}
    />
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [timedOut, setTimedOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setTimedOut(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (timedOut) {
    return <SplineSkeleton />
  }

  return (
    <Suspense fallback={<SplineSkeleton />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
