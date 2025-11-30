'use client';

import { useEffect, useRef } from 'react';

/**
 * WireframeBackground - Fondo con grid 3D ondulado animado
 * Crea efecto de malla wireframe con animación de ondas
 */
export default function WireframeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let offset = 0;

    // Configuración del canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 50;
      const waveAmplitude = 25;
      const waveFrequency = 0.015;

      // Gradiente de color para las líneas (más morado)
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.35)'); // Purple más intenso
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.3)'); // Purple
      gradient.addColorStop(1, 'rgba(192, 38, 211, 0.25)'); // Magenta oscuro

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;

      // Líneas horizontales onduladas
      for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 5) {
          const wave =
            Math.sin((x + offset) * waveFrequency) * waveAmplitude +
            Math.sin((y + offset * 0.5) * waveFrequency * 1.5) * (waveAmplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y + wave);
          } else {
            ctx.lineTo(x, y + wave);
          }
        }
        ctx.stroke();
      }

      // Líneas verticales onduladas
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y <= canvas.height; y += 5) {
          const wave =
            Math.sin((y + offset) * waveFrequency) * waveAmplitude +
            Math.sin((x + offset * 0.5) * waveFrequency * 1.5) * (waveAmplitude * 0.5);

          if (y === 0) {
            ctx.moveTo(x + wave, y);
          } else {
            ctx.lineTo(x + wave, y);
          }
        }
        ctx.stroke();
      }

      // Agregar puntos brillantes en las intersecciones (morado)
      ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
      for (let y = 0; y < canvas.height; y += gridSize * 2) {
        for (let x = 0; x < canvas.width; x += gridSize * 2) {
          const wave =
            Math.sin((x + offset) * waveFrequency) * waveAmplitude +
            Math.sin((y + offset * 0.5) * waveFrequency * 1.5) * (waveAmplitude * 0.5);

          const pulseSize = 1 + Math.sin(offset * 0.05 + x * 0.01) * 0.5;

          ctx.beginPath();
          ctx.arc(x + wave, y + wave, pulseSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      offset += 0.3;
      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        opacity: 0.9,
      }}
    />
  );
}
