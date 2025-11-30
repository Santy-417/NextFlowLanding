"use client";

import { useEffect, useRef } from "react";

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

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 22; i++) {
        const offset = i * 45;

        ctx.beginPath();
        ctx.lineWidth = 2;

        // Gradiente morado → rosa (consistente con paleta NextFlow)
        const grad = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        );
        grad.addColorStop(0, "rgba(139, 92, 246, 0.8)");
        grad.addColorStop(1, "rgba(236, 72, 153, 0.8)");

        ctx.strokeStyle = grad;

        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            Math.sin(x * 0.004 + t + offset) * 40 +
            canvas.height * 0.55;

          ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      t += 0.015;
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
        opacity: 0.4,
        zIndex: 1,
      }}
    />
  );
}
