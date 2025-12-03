"use client";

import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
};

type Bounds = { w: number; h: number };

// Helper: produce a small batch of trail particles (does not mutate external state)
export function spawnTrailParticles(
  x: number,
  y: number,
  hue = Math.random() * 360,
  base = 5
): Particle[] {
  const out: Particle[] = [];
  for (let i = 0; i < base; i++) {
    out.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.4,
      vy: (Math.random() - 0.5) * 1.4 - 0.5,
      life: 40 + Math.random() * 30,
      size: 1 + Math.random() * 3,
      hue,
    });
  }
  return out;
}

// Helper: produce a firework burst (does not mutate external state)
export function spawnFireworkParticles(
  x: number,
  y: number,
  hue = Math.random() * 360,
  mult = 1.6
): Particle[] {
  const out: Particle[] = [];
  const count = Math.max(12, Math.floor((30 + Math.random() * 40) * mult));
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = 1 + Math.random() * 4;
    out.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 40 + Math.random() * 60,
      size: 1 + Math.random() * 3,
      hue: hue + (Math.random() - 0.5) * 40,
    });
  }
  return out;
}

// Update particle physics and return a new array with expired/out-of-bounds filtered
export function updateParticles(
  particles: Particle[],
  bounds: Bounds,
  gravity = 0.02,
  drag = 0.99
): Particle[] {
  const next: Particle[] = [];
  const { w, h } = bounds;
  for (let i = 0; i < particles.length; i++) {
    const p = { ...particles[i] };
    p.x += p.vx;
    p.y += p.vy;
    p.vy += gravity;
    p.life -= 1;
    p.vx *= drag;
    p.vy *= drag;
    if (p.life > 0 && p.x >= -50 && p.x <= w + 50 && p.y <= h + 200) {
      next.push(p);
    }
  }
  return next;
}

// Draw particles using an explicit context and parameters (no captured state)
export function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  bounds: Bounds,
  prefersDark: boolean
) {
  const { w, h } = bounds;
  ctx.clearRect(0, 0, w, h);
  for (const p of particles) {
    const alpha = Math.max(0, Math.min(1, p.life / 80));
    ctx.beginPath();
    const lightness = prefersDark ? 60 : 45;
    const saturation = prefersDark ? 90 : 75;
    ctx.fillStyle = `hsla(${p.hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    ctx.globalCompositeOperation = "lighter";
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalCompositeOperation = "source-over";
}

// ParticleCanvas: renders decorative particle trails and fireworks.
// - Runs entirely client-side and scales for DPR.
// - `paused` disables updates when true.
// Note: density has been removed; this canvas always runs in 'high' mode.
export default function ParticleCanvas({
  paused = false,
}: {
  paused?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number | null>(null);
  const MAX_PARTICLES = 800;

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let w = 0,
      h = 0;
    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      // Use viewport size so canvas stays performant on tall pages
      w = window.innerWidth;
      h = window.innerHeight;
      // Ensure CSS size matches viewport to avoid stretching
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    // determine preferred color scheme once and listen for changes
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    let prefersDark = mql.matches;
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", (e: MediaQueryListEvent) => {
        prefersDark = e.matches;
      });
    } else {
      const mqlAny = mql as unknown as {
        addListener?: (cb: (mq: MediaQueryList) => void) => void;
      };
      if (typeof mqlAny.addListener === "function") {
        mqlAny.addListener((mq: MediaQueryList) => {
          prefersDark = mq.matches;
        });
      }
    }

    // detect touch devices (coarse pointer or touch points)
    const isTouchDevice =
      (navigator.maxTouchPoints || 0) > 0 ||
      (typeof window.matchMedia === "function" &&
        window.matchMedia("(pointer: coarse)").matches) ||
      "ontouchstart" in window;

    // Small wrappers that call the extracted helpers and minimize captured state
    function spawnTrail(x: number, y: number, hue = Math.random() * 360) {
      particles.current = particles.current.concat(
        spawnTrailParticles(x, y, hue)
      );
    }

    function spawnFirework(x: number, y: number, hue = Math.random() * 360) {
      particles.current = particles.current.concat(
        spawnFireworkParticles(x, y, hue)
      );
    }

    // helper: ignore events that originate from interactive elements so navigation
    // and UI controls continue to behave normally when the user clicks/touches
    function isEventOnInteractive(target: EventTarget | null) {
      if (!(target instanceof Element)) return false;
      return !!target.closest(
        'a, button, input, textarea, select, summary, label, [role="button"], [role="link"], nav, header'
      );
    }

    // listen on window so events fire even when the canvas is behind other elements.
    // However, ignore events that start on interactive elements so we don't interfere
    // with navigation or UI interactions.
    const onPointerMove = (e: PointerEvent) => {
      if (paused) return;
      if (isEventOnInteractive(e.target)) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnTrail(x, y, (e.clientX + e.clientY) % 360);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (paused) return;
      if (isEventOnInteractive(e.target)) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnFirework(x, y);
    };

    // touch handlers
    const touchMoveHandler = (ev: TouchEvent) => {
      if (paused) return;
      const t = ev.touches[0];
      if (!t) return;
      // If the original touch start was on an interactive element, ignore it.
      if (isEventOnInteractive(ev.target)) return;
      const rect = canvas.getBoundingClientRect();
      spawnTrail(t.clientX - rect.left, t.clientY - rect.top);
    };
    const touchStartHandler = (ev: TouchEvent) => {
      if (paused) return;
      const t = ev.touches[0];
      if (!t) return;
      if (isEventOnInteractive(ev.target)) return;
      const rect = canvas.getBoundingClientRect();
      spawnFirework(t.clientX - rect.left, t.clientY - rect.top);
    };

    if (!isTouchDevice) {
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerdown", onPointerDown);
    } else {
      window.addEventListener(
        "touchmove",
        touchMoveHandler as EventListener,
        { passive: false } as AddEventListenerOptions
      );
      window.addEventListener("touchstart", touchStartHandler as EventListener);
    }

    function update() {
      particles.current = updateParticles(particles.current, { w, h });
    }

    function draw() {
      drawParticles(ctx, particles.current, { w, h }, prefersDark);
    }

    function loop() {
      update();
      draw();
      raf.current = requestAnimationFrame(loop);
    }

    // ambient burst on load (kept for all devices). Use viewport-based ambient.
    if (!paused) {
      const area = Math.max(1, w * h);
      const ambient = Math.min(30, Math.floor(area / 200000));
      for (let i = 0; i < ambient; i++) {
        particles.current = particles.current.concat(
          spawnTrailParticles(Math.random() * w, Math.random() * h)
        );
      }
      if (particles.current.length > MAX_PARTICLES) {
        particles.current = particles.current.slice(-MAX_PARTICLES);
      }
    }

    // listen for programmatic firework events
    const fireHandler = (ev: Event) => {
      if (paused) return;
      const ce = ev as CustomEvent<{ x?: number; y?: number }>; // detail may contain coords
      const rect = canvas.getBoundingClientRect();
      let x = rect.width / 2;
      let y = rect.height / 2;
      if (ce?.detail?.x !== undefined && ce?.detail?.y !== undefined) {
        x = ce.detail.x - rect.left;
        y = ce.detail.y - rect.top;
      }
      particles.current = particles.current.concat(
        spawnFireworkParticles(x, y)
      );
      if (particles.current.length > MAX_PARTICLES) {
        particles.current = particles.current.slice(-MAX_PARTICLES);
      }
    };
    window.addEventListener("firework", fireHandler as EventListener);

    raf.current = requestAnimationFrame(loop);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      if (!isTouchDevice) {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerdown", onPointerDown);
      } else {
        window.removeEventListener(
          "touchmove",
          touchMoveHandler as EventListener
        );
        window.removeEventListener(
          "touchstart",
          touchStartHandler as EventListener
        );
      }
      window.removeEventListener("firework", fireHandler as EventListener);
    };
  }, [paused]);

  return (
    <canvas
      ref={ref}
      // keep the canvas visually behind UI and allow clicks to pass through
      className="fixed inset-0 pointer-events-none z-30"
      style={{ touchAction: "none" }}
      aria-hidden
    />
  );
}
