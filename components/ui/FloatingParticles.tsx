'use client';

import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

/**
 * FloatingParticles - Partículas flotantes decorativas con animaciones
 * Crea partículas que flotan aleatoriamente por el fondo
 */

interface Particle {
  id: number;
  size: number;
  color: string;
  left: string;
  top: string;
  duration: number;
  delay: number;
  blur: number;
  translateX: number;
  translateY: number;
}

export default function FloatingParticles({ count = 25 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['#E879F9', '#A855F7', '#06B6D4', '#C026D3', '#8B5CF6'];

    const generatedParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 15,
      delay: Math.random() * 5,
      blur: Math.random() * 2 + 0.5,
      translateX: Math.random() * 100 - 50,
      translateY: Math.random() * 100 - 50,
    }));

    setParticles(generatedParticles);
  }, [count]);

  return (
    <>
      <style jsx global>{`
        @keyframes particle-float-1 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(30px, -40px) scale(1.2);
            opacity: 0.6;
          }
        }

        @keyframes particle-float-2 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-35px, 45px) scale(0.9);
            opacity: 0.5;
          }
        }

        @keyframes particle-float-3 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(40px, 30px) scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes particle-float-4 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-20px, -50px) scale(1.3);
            opacity: 0.6;
          }
        }

        @keyframes particle-float-5 {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(25px, 35px) scale(0.8);
            opacity: 0.5;
          }
        }
      `}</style>

      {particles.map((particle) => {
        // Cycle through 5 different animation patterns
        const animationName = `particle-float-${(particle.id % 5) + 1}`;

        return (
          <Box
            key={particle.id}
            sx={{
              position: 'absolute',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: particle.color,
              opacity: 0.4,
              left: particle.left,
              top: particle.top,
              filter: `blur(${particle.blur}px)`,
              animation: `${animationName} ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        );
      })}
    </>
  );
}
