"use client";

import { useEffect, useRef } from "react";

interface TrailParticle {
  x: number;
  y: number;
  color: string;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  life: number;
  maxLife: number;
  type: "bubble" | "dust";
}

interface ClickParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  delay: number; // Staggered ray effect
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const trailParticles = useRef<TrailParticle[]>([]);
  const clickParticles = useRef<ClickParticle[]>([]);

  // Realistic bubble colors matching the screenshots (Soft Pink, Soft Cyan, Soft Green, Soft Purple)
  const colors = [
    "rgba(244, 63, 94, 0.9)",   // Rose/Pink
    "rgba(34, 211, 238, 0.9)",  // Cyan
    "rgba(52, 211, 153, 0.9)",  // Emerald/Green
    "rgba(168, 85, 247, 0.9)",  // Purple
  ];

  // Renders a realistic 3D glassy bubble with glossy highlights and colored rim gradient
  const drawRealisticBubble = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    color: string,
    alpha: number
  ) => {
    if (radius <= 0) return;
    ctx.save();
    ctx.translate(x, y);

    // 1. Thin outer white shell/rim highlight
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`;
    ctx.lineWidth = 1.0;
    ctx.stroke();

    // 2. Rim gradient fill for realistic color refraction on bubble edges
    const rimGradient = ctx.createRadialGradient(0, 0, radius * 0.7, 0, 0, radius);
    rimGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    rimGradient.addColorStop(0.85, color.replace("0.9", (alpha * 0.25).toFixed(2)));
    rimGradient.addColorStop(1, color.replace("0.9", (alpha * 0.55).toFixed(2)));

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = rimGradient;
    ctx.fill();

    // 3. Highlight reflection (glossy glare) on the top-left
    const glossX = -radius * 0.35;
    const glossY = -radius * 0.35;
    const glossRadiusX = radius * 0.28;
    const glossRadiusY = radius * 0.15;
    
    ctx.beginPath();
    ctx.ellipse(
      glossX,
      glossY,
      glossRadiusX,
      glossRadiusY,
      -Math.PI / 4, // 45 degree tilt
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
    ctx.fill();

    // Secondary subtle highlight reflection on bottom-right edge
    ctx.beginPath();
    ctx.arc(radius * 0.4, radius * 0.4, radius * 0.08, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.35})`;
    ctx.fill();

    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement | null;
      const isClickable = target ? !!target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer') : false;

      // Spawn trail particles
      const bubbleSpawnProbability = isClickable ? 0.75 : 0.35;
      const sparkleSpawnProbability = isClickable ? 0.85 : 0.65;

      // Bubbles
      if (Math.random() < bubbleSpawnProbability) {
        const bubbleSize = isClickable 
          ? 1.2 + Math.random() * 1.4 // slightly larger & glowing on hover
          : 0.8 + Math.random() * 1.0; // very small default bubble radius

        trailParticles.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: bubbleSize,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -0.4 - Math.random() * 0.8, // Float upwards
          alpha: 1.0,
          life: 0,
          maxLife: 55 + Math.random() * 20,
          type: "bubble",
        });
      }

      // Sparkles (dust)
      if (Math.random() < sparkleSpawnProbability) {
        trailParticles.current.push({
          x: mouseRef.current.x + (Math.random() - 0.5) * 10,
          y: mouseRef.current.y + (Math.random() - 0.5) * 10,
          color: "rgba(255, 255, 255, 0.9)",
          size: 0.6 + Math.random() * 1.0,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5 - 0.2,
          alpha: 0.9,
          life: 0,
          maxLife: 30 + Math.random() * 20,
          type: "dust",
        });
      }
    };

    const handleMouseClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;

      // Burst of realistic firework bubble rays
      const numRays = 10 + Math.floor(Math.random() * 4);
      const dotsPerRay = 5;

      for (let ray = 0; ray < numRays; ray++) {
        const angle = (ray / numRays) * Math.PI * 2 + (Math.random() - 0.5) * 0.12;
        const color = colors[ray % colors.length];

        for (let dot = 0; dot < dotsPerRay; dot++) {
          const speed = 0.8 + dot * 0.4;
          const vx = Math.cos(angle) * speed;
          const vy = Math.sin(angle) * speed;

          clickParticles.current.push({
            x: clickX,
            y: clickY,
            vx,
            vy,
            color,
            size: Math.max(0.4, 1.4 - dot * 0.2), // very tiny bubbles for small explosion
            alpha: 1.0,
            life: 0,
            maxLife: 45 + Math.random() * 15,
            delay: dot * 2, // Staggered ray delay
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleMouseClick);

    // Canvas render frame loop
    const ctx = canvas.getContext("2d");
    let animationFrameId: number;

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw and update click explosion bubbles
      clickParticles.current.forEach((p) => {
        if (p.delay > 0) {
          p.delay--;
          return;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Slow down drift & add slight gravity or floating buoyancy
        p.vx *= 0.96;
        p.vy = p.vy * 0.96 - 0.05; // Float upwards slightly at the end

        p.life++;
        p.alpha = Math.max(0, 1 - p.life / p.maxLife);

        drawRealisticBubble(ctx, p.x, p.y, p.size, p.color, p.alpha);
      });

      // Remove expired click particles
      clickParticles.current = clickParticles.current.filter(
        (p) => p.life < p.maxLife
      );

      // 2. Draw and update trail particles
      trailParticles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = Math.max(0, 1 - p.life / p.maxLife);

        if (p.type === "bubble") {
          // Slowly expand bubbles slightly as they float up
          const currentSize = p.size * (1 + (p.life / p.maxLife) * 0.2);
          drawRealisticBubble(ctx, p.x, p.y, currentSize, p.color, p.alpha);
        } else {
          // Render sparkle dust
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.8})`;
          ctx.fill();
        }
      });

      // Remove expired trail particles
      trailParticles.current = trailParticles.current.filter(
        (p) => p.life < p.maxLife
      );

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleMouseClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] block select-none"
    />
  );
}
