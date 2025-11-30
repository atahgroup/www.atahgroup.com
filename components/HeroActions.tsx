import React from "react";
import Link from "next/link";

function cssVars(vars: Record<string, string>): React.CSSProperties {
  return Object.fromEntries(
    Object.entries(vars)
  ) as unknown as React.CSSProperties;
}

function Arrow1() {
  return (
    <span
      className="swarm-arrow -top-3 -left-3 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "-20px",
        "--ty": "-20px",
        "--rot-start": "45deg",
        "--rot-mid": "0deg",
      })}
    >
      <svg
        viewBox="0 0 8 8"
        className="w-full h-full"
        fill="currentColor"
        aria-hidden
      >
        <path d="M1 0 L7 4 L1 8 L2 4 z" />
      </svg>
    </span>
  );
}

function Arrow2() {
  return (
    <span
      className="swarm-arrow -top-3 -right-2 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "20px",
        "--ty": "-20px",
        "--rot-start": "-135deg",
        "--rot-mid": "180deg",
      })}
    >
      <svg
        viewBox="0 0 8 8"
        className="w-full h-full"
        fill="currentColor"
        aria-hidden
      >
        <path d="M1 0 L7 4 L1 8 L2 4 z" />
      </svg>
    </span>
  );
}

function Arrow3() {
  return (
    <span
      className="swarm-arrow top-1/2 -translate-y-1/2 -left-4 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "-28px",
        "--ty": "0px",
        "--rot-start": "0deg",
        "--rot-mid": "0deg",
      })}
    >
      <svg
        viewBox="0 0 8 8"
        className="w-full h-full"
        fill="currentColor"
        aria-hidden
      >
        <path d="M1 0 L7 4 L1 8 L2 4 z" />
      </svg>
    </span>
  );
}

function Arrow4() {
  return (
    <span
      className="swarm-arrow top-1/2 -translate-y-1/2 -right-4 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "28px",
        "--ty": "0px",
        "--rot-start": "180deg",
        "--rot-mid": "180deg",
      })}
    >
      <svg
        viewBox="0 0 8 8"
        className="w-full h-full"
        fill="currentColor"
        aria-hidden
      >
        <path d="M1 0 L7 4 L1 8 L2 4 z" />
      </svg>
    </span>
  );
}

function Arrow5() {
  return (
    <span
      className="swarm-arrow -bottom-3 -left-2 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "-18px",
        "--ty": "20px",
        "--rot-start": "-45deg",
        "--rot-mid": "0deg",
      })}
    >
      <svg
        viewBox="0 0 8 8"
        className="w-full h-full"
        fill="currentColor"
        aria-hidden
      >
        <path d="M1 0 L7 4 L1 8 L2 4 z" />
      </svg>
    </span>
  );
}

function Arrow6() {
  return (
    <span
      className="swarm-arrow -bottom-3 -right-2 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "18px",
        "--ty": "20px",
        "--rot-start": "-135deg",
        "--rot-mid": "180deg",
      })}
    >
      <svg
        viewBox="0 0 8 8"
        className="w-full h-full"
        fill="currentColor"
        aria-hidden
      >
        <path d="M1 0 L7 4 L1 8 L2 4 z" />
      </svg>
    </span>
  );
}

export default function HeroActions() {
  return (
    <div className="mt-6 flex flex-wrap gap-3 items-center">
      <div className="btn-swarm">
        <Link
          href="/portfolio"
          className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold hover:underline underline-offset-7 shadow-md transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/40"
        >
          🚀 View Portfolio
        </Link>

        {/* Swarm arrows - positioned around the CTA and animated on hover (non-touch only via CSS) */}
        <Arrow1 />
        <Arrow2 />
        <Arrow3 />
        <Arrow4 />
        <Arrow5 />
        <Arrow6 />
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center px-4 py-3 rounded-lg border border-white/20 bg-white/20 text-md font-bold hover:underline underline-offset-7 text-white transform transition duration-180 ease-out hover:-translate-y-1 hover:shadow-md active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/10 dark:focus-visible:ring-white/10"
      >
        👨‍💻 Contact
      </Link>
    </div>
  );
}
