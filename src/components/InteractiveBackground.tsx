'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  hue: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const spawnInterval = setInterval(() => {
      const particles = particlesRef.current;
      if (particles.length < 30) {
        // Alternate between brand blue and warm gold particles
        const isGold = Math.random() > 0.65;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3 - 0.15,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.35 + 0.08,
          life: 0,
          maxLife: 180 + Math.random() * 280,
          hue: isGold ? 35 : 200,
        });
      }
    }, 900);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repel
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
        }

        if (p.life > p.maxLife || p.x < -20 || p.x > canvas.width + 20 || p.y < -20 || p.y > canvas.height + 20) {
          particles.splice(i, 1);
          continue;
        }

        const fadeAlpha = p.alpha * (1 - p.life / p.maxLife);
        const isGold = p.hue === 35;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isGold
          ? `rgba(212, 155, 84, ${fadeAlpha})`
          : `rgba(92, 145, 176, ${fadeAlpha})`;
        ctx.fill();

        // Connections between nearby particles
        for (let j = i - 1; j >= 0; j--) {
          const q = particles[j];
          const cx = p.x - q.x;
          const cy = p.y - q.y;
          const cd = Math.sqrt(cx * cx + cy * cy);
          if (cd < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const connAlpha = Math.min(fadeAlpha, q.alpha * (1 - q.life / q.maxLife)) * 0.12 * (1 - cd / 120);
            ctx.strokeStyle = `rgba(92, 145, 176, ${connAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      clearInterval(spawnInterval);
      window.removeEventListener('resize', resize);
      particlesRef.current = [];
    };
  }, [mounted]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.55 }}
    />
  );
}
