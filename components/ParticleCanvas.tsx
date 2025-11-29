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

type Density = "low" | "med" | "high";

export default function ParticleCanvas({
  density = "med",
  paused = false,
  disableOnMobile = true,
}: {
  density?: Density;
  paused?: boolean;
  disableOnMobile?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let w = 0,
      h = 0;
    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
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

    function spawnTrail(x: number, y: number, hue = Math.random() * 360) {
      const mult = density === "low" ? 0.6 : density === "high" ? 1.6 : 1;
      const base = Math.max(1, Math.round(3 * mult));
      for (let i = 0; i < base; i++) {
        particles.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.5) * 1.4 - 0.5,
          life: 40 + Math.random() * 30,
          size: 1 + Math.random() * 3,
          hue,
        });
      }
    }

    function spawnFirework(x: number, y: number, hue = Math.random() * 360) {
      const mult = density === "low" ? 0.6 : density === "high" ? 1.6 : 1;
      const count = Math.max(12, Math.floor((30 + Math.random() * 40) * mult));
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count;
        const speed = 1 + Math.random() * 4;
        particles.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 40 + Math.random() * 60,
          size: 1 + Math.random() * 3,
          hue: hue + (Math.random() - 0.5) * 40,
        });
      }
    }

    // listen on window so events fire even when the canvas is behind other elements
    const onPointerMove = (e: PointerEvent) => {
      if (paused) return;
      if (disableOnMobile && (navigator.maxTouchPoints || 0) > 0) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnTrail(x, y, (e.clientX + e.clientY) % 360);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (paused) return;
      if (disableOnMobile && (navigator.maxTouchPoints || 0) > 0) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnFirework(x, y);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);

    // Also support touch in case pointer events are not available
    const touchMoveHandler = (ev: TouchEvent) => {
      if (paused) return;
      if (disableOnMobile) return;
      ev.preventDefault();
      const t = ev.touches[0];
      const rect = canvas.getBoundingClientRect();
      spawnTrail(t.clientX - rect.left, t.clientY - rect.top);
    };
    const touchStartHandler = (ev: TouchEvent) => {
      if (paused) return;
      if (disableOnMobile) return;
      const t = ev.touches[0];
      const rect = canvas.getBoundingClientRect();
      spawnFirework(t.clientX - rect.left, t.clientY - rect.top);
    };

    // attach touch handlers to window as well so interactions over cards still generate particles
    window.addEventListener(
      "touchmove",
      touchMoveHandler as EventListener,
      { passive: false } as AddEventListenerOptions
    );
    window.addEventListener("touchstart", touchStartHandler as EventListener);

    function update() {
      // update particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.life -= 1;
        p.vx *= 0.99;
        p.vy *= 0.99;
        if (p.life <= 0 || p.x < -50 || p.x > w + 50 || p.y > h + 200) {
          particles.current.splice(i, 1);
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles.current) {
        const alpha = Math.max(0, Math.min(1, p.life / 80));
        ctx.beginPath();
        // adjust lightness for dark vs light theme so particles remain visible
        const lightness = prefersDark ? 60 : 45;
        const saturation = prefersDark ? 90 : 75;
        ctx.fillStyle = `hsla(${p.hue}, ${saturation}%, ${lightness}%, ${alpha})`;
        ctx.globalCompositeOperation = "lighter";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function loop() {
      update();
      draw();
      raf.current = requestAnimationFrame(loop);
    }

    // spawn a few ambient particles so the canvas isn't empty on first load
    if (!paused) {
      const ambient = density === "low" ? 6 : density === "high" ? 20 : 12;
      for (let i = 0; i < ambient; i++) {
        spawnTrail(
          Math.random() * (canvas.clientWidth || 800),
          Math.random() * (canvas.clientHeight || 600)
        );
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
      spawnFirework(x, y);
    };
    window.addEventListener("firework", fireHandler as EventListener);

    raf.current = requestAnimationFrame(loop);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener(
        "touchmove",
        touchMoveHandler as EventListener
      );
      window.removeEventListener(
        "touchstart",
        touchStartHandler as EventListener
      );
      window.removeEventListener("firework", fireHandler as EventListener);
    };
  }, [density, paused, disableOnMobile]);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none z-30"
      style={{ touchAction: "none" }}
      aria-hidden
    />
  );
}
