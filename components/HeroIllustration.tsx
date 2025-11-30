"use client";

import React from "react";

export default function HeroIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className} aria-hidden>
      <svg viewBox="0 0 160 100" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#7c3aed" stopOpacity=".9" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity=".75" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="10"
          width="120"
          height="60"
          rx="8"
          fill="url(#g1)"
          opacity="0.9"
        />
        <circle cx="120" cy="20" r="18" fill="#fff" opacity="0.12" />
        <circle cx="130" cy="70" r="10" fill="#fff" opacity="0.08" />
        <rect
          x="12"
          y="22"
          width="56"
          height="6"
          rx="3"
          fill="#fff"
          opacity="0.18"
        />
      </svg>
    </div>
  );
}
