'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; alpha: number;
  life: number; maxLife: number;
  type: 'brand' | 'warm';
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  const moveHandler = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('mousemove', moveHandler, { passive: true });
    return () => window.removeEventListener('mousemove', moveHandler);
  }, [moveHandler]);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const spawn = setInterval(() => {
      const p = particlesRef.current;
      if (p.length >= 28) return;
      const isWarm = Math.random() > 0.7;
      p.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25 - 0.12,
        size: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.32 + 0.06,
        life: 0,
        maxLife: 170 + Math.random() * 260,
        type: isWarm ? 'warm' : 'brand',
      });
    }, 950);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++; p.x += p.vx; p.y += p.vy;

        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x += (dx / dist) * force * 1.1;
          p.y += (dy / dist) * force * 1.1;
        }

        if (p.life > p.maxLife || p.x < -30 || p.x > canvas.width + 30 || p.y < -30 || p.y > canvas.height + 30) {
          particles.splice(i, 1); continue;
        }

        const prog = 1 - p.life / p.maxLife;
        const fade = p.alpha * prog;
        const color = p.type === 'warm'
          ? `rgba(204,136,48,${fade})`
          : `rgba(107,139,183,${fade})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        for (let j = i - 1; j >= 0; j--) {
          const q = particles[j];
          const cx = p.x - q.x, cy = p.y - q.y;
          const cd = Math.sqrt(cx * cx + cy * cy);
          if (cd < 110) {
            const qProg = 1 - q.life / q.maxLife;
            const connAlpha = Math.min(fade, q.alpha * qProg) * 0.1 * (1 - cd / 110);
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(107,139,183,${connAlpha})`;
            ctx.lineWidth = 0.4; ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animRef.current);
      clearInterval(spawn);
      window.removeEventListener('resize', resize);
      particlesRef.current = [];
    };
  }, [mounted]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.5 }} />
  );
}
