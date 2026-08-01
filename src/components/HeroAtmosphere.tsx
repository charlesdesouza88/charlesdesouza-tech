"use client";

import { useEffect, useRef } from "react";

type Orb = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: "ember" | "resonance";
};

/**
 * Lightweight hero atmosphere: drifting ember/resonance orbs over a
 * perspective grid. Decorative only — paused when hidden or reduced motion.
 */
export default function HeroAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const orbs: Orb[] = [
      { x: 0.22, y: 0.28, r: 180, vx: 0.00008, vy: 0.00005, hue: "ember" },
      { x: 0.78, y: 0.35, r: 140, vx: -0.00006, vy: 0.00007, hue: "resonance" },
      { x: 0.55, y: 0.72, r: 200, vx: 0.00004, vy: -0.00005, hue: "ember" },
      { x: 0.12, y: 0.7, r: 100, vx: 0.00007, vy: -0.00004, hue: "resonance" },
    ];

    const paintStatic = () => {
      ctx.clearRect(0, 0, w, h);
      drawGrid();
      drawOrbs();
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce || document.hidden) paintStatic();
    };

    const drawGrid = () => {
      const horizon = h * 0.58;
      ctx.save();
      ctx.strokeStyle = "rgba(242, 235, 227, 0.045)";
      ctx.lineWidth = 1;

      // Horizontal lines converging toward horizon
      for (let i = 0; i < 14; i++) {
        const t = i / 13;
        const y = horizon + Math.pow(t, 1.6) * (h - horizon);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Vertical rays from vanishing point
      const vx = w * 0.5;
      for (let i = -10; i <= 10; i++) {
        const edgeX = vx + i * (w * 0.12);
        ctx.beginPath();
        ctx.moveTo(vx, horizon);
        ctx.lineTo(edgeX, h);
        ctx.stroke();
      }

      // Soft top grid
      ctx.strokeStyle = "rgba(242, 235, 227, 0.03)";
      const cell = 64;
      for (let x = 0; x < w; x += cell) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, horizon);
        ctx.stroke();
      }
      for (let y = 0; y < horizon; y += cell) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawOrbs = () => {
      for (const o of orbs) {
        const x = o.x * w;
        const y = o.y * h;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, o.r);
        if (o.hue === "ember") {
          grad.addColorStop(0, "rgba(238, 139, 67, 0.22)");
          grad.addColorStop(0.45, "rgba(238, 139, 67, 0.06)");
          grad.addColorStop(1, "rgba(238, 139, 67, 0)");
        } else {
          grad.addColorStop(0, "rgba(111, 182, 166, 0.18)");
          grad.addColorStop(0.45, "rgba(111, 182, 166, 0.05)");
          grad.addColorStop(1, "rgba(111, 182, 166, 0)");
        }
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, o.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      drawGrid();
      if (!reduce) {
        for (const o of orbs) {
          o.x += o.vx;
          o.y += o.vy;
          if (o.x < 0.05 || o.x > 0.95) o.vx *= -1;
          if (o.y < 0.1 || o.y > 0.9) o.vy *= -1;
        }
      }
      drawOrbs();
      if (!reduce) raf = requestAnimationFrame(step);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        if (!reduce) raf = requestAnimationFrame(step);
        else {
          ctx.clearRect(0, 0, w, h);
          drawGrid();
          drawOrbs();
        }
      }
    };

    resize();
    step();
    if (reduce) {
      // static frame already drawn by step once
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  );
}
