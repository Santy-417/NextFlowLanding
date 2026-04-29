"use client";

import { useEffect, useRef } from "react";

/**
 * LinesBackground - Fondo animado con curvas cosenoidales
 * Usa colores morados del manual de NextFlow
 * Animación fluida y moderna
 */

export default function LinesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    // Colores morados del manual de NextFlow
    const purpleColors = [
      { r: 139, g: 92, b: 246 },   // #8B5CF6 - Primary
      { r: 217, g: 70, b: 239 },   // #D946EF - Accent
      { r: 184, g: 0, b: 255 },    // #b800ff - Neon 1
      { r: 255, g: 0, b: 212 },    // #ff00d4 - Neon 2
      { r: 232, g: 121, b: 249 },  // #E879F9 - Accent Light
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar múltiples curvas cosenoidales con diferentes amplitudes y frecuencias
      for (let i = 0; i < 8; i++) {
        const offset = i * 0.8;
        const amplitude = 60 + i * 15; // Amplitud variable
        const frequency = 0.003 + i * 0.0002; // Frecuencia variable

        ctx.beginPath();
        ctx.lineWidth = 2.5 - i * 0.15; // Grosor decrece

        // Seleccionar color del array
        const colorIndex = i % purpleColors.length;
        const color = purpleColors[colorIndex];

        // Crear gradiente horizontal con el color morado seleccionado
        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        grad.addColorStop(0.2, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
        grad.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`);
        grad.addColorStop(0.8, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`);
        grad.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.strokeStyle = grad;

        // Dibujar curva cosenoidal
        for (let x = 0; x < canvas.width; x += 8) {
          // Usar coseno para crear ondas más suaves y pronunciadas
          const y =
            Math.cos(x * frequency + t + offset) * amplitude +
            canvas.height * 0.5;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // Dibujar curvas adicionales invertidas para más profundidad
      for (let i = 0; i < 5; i++) {
        const offset = i * 1.2;
        const amplitude = 40 + i * 10;
        const frequency = 0.004 + i * 0.0003;

        ctx.beginPath();
        ctx.lineWidth = 2;

        const colorIndex = (i + 2) % purpleColors.length;
        const color = purpleColors[colorIndex];

        const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
        grad.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);
        grad.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`);
        grad.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, 0.3)`);
        grad.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.strokeStyle = grad;

        for (let x = 0; x < canvas.width; x += 8) {
          // Curva invertida con seno para contraste
          const y =
            Math.sin(x * frequency - t + offset) * amplitude +
            canvas.height * 0.5;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      t += 0.008; // Velocidad de animación más lenta para suavidad
      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
        zIndex: 1,
      }}
    />
  );
}
