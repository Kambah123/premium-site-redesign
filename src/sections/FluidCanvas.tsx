import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  trail: { x: number; y: number; alpha: number }[];
}

export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const particleCount = 180;
    particlesRef.current = [];

    for (let i = 0; i < particleCount; i++) {
      const isGold = Math.random() > 0.4;
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        alpha: Math.random() * 0.6 + 0.2,
        color: isGold ? '#D4AF37' : '#002B55',
        trail: [],
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      timeRef.current += 0.01;
      const time = timeRef.current;
      const w = canvas.width;
      const h = canvas.height;

      // Clear with trail effect
      ctx.fillStyle = 'rgba(8, 10, 15, 0.08)';
      ctx.fillRect(0, 0, w, h);

      // Draw subtle FBM-like noise background
      const gradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.7);
      gradient.addColorStop(0, 'rgba(0, 43, 85, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Store trail
        p.trail.push({ x: p.x, y: p.y, alpha: p.alpha });
        if (p.trail.length > 20) p.trail.shift();

        // Mouse interaction
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 200;
            p.vx += (dx / dist) * force * 0.3;
            p.vy += (dy / dist) * force * 0.3;
          }
        }

        // Flow field noise
        const noiseX = Math.sin(p.y * 0.005 + time) * 0.15;
        const noiseY = Math.cos(p.x * 0.005 + time * 0.8) * 0.15;
        p.vx += noiseX;
        p.vy += noiseY;

        // Dampen velocity
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Speed-based color
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const isGold = p.color === '#D4AF37';

        // Draw trail
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let j = 1; j < p.trail.length; j++) {
            const t = p.trail[j];
            ctx.lineTo(t.x, t.y);
          }
          const trailGradient = ctx.createLinearGradient(
            p.trail[0].x, p.trail[0].y, p.x, p.y
          );
          if (isGold) {
            trailGradient.addColorStop(0, `rgba(212, 175, 55, 0)`);
            trailGradient.addColorStop(1, `rgba(212, 175, 55, ${p.alpha * 0.5})`);
          } else {
            trailGradient.addColorStop(0, `rgba(0, 43, 85, 0)`);
            trailGradient.addColorStop(1, `rgba(0, 100, 170, ${p.alpha * 0.3})`);
          }
          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = p.size * 0.5;
          ctx.stroke();
        }

        // Draw particle glow
        const glowSize = p.size * 3 + speed * 5;
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
        if (isGold) {
          glow.addColorStop(0, `rgba(212, 175, 55, ${p.alpha * 0.4})`);
          glow.addColorStop(0.3, `rgba(229, 193, 88, ${p.alpha * 0.15})`);
          glow.addColorStop(1, 'rgba(212, 175, 55, 0)');
        } else {
          glow.addColorStop(0, `rgba(0, 100, 170, ${p.alpha * 0.2})`);
          glow.addColorStop(1, 'rgba(0, 43, 85, 0)');
        }
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = isGold
          ? `rgba(240, 216, 120, ${p.alpha})`
          : `rgba(0, 60, 120, ${p.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connect nearby gold particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          if (p1.color !== '#D4AF37' || p2.color !== '#D4AF37') continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
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
        zIndex: 1,
      }}
    />
  );
}
