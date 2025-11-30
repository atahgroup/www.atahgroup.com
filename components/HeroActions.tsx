import React from "react";
import Link from "next/link";

function cssVars(vars: Record<string, string>): React.CSSProperties {
  return Object.fromEntries(
    Object.entries(vars)
  ) as unknown as React.CSSProperties;
}

function TopLeftArrow() {
  return (
    <span
      className="swarm-arrow absolute -top-3 -left-3 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "-20px",
        "--ty": "-20px",
        "--rot-start": "90deg",
        "--rot-mid": "90deg",
      })}
    >
      💸
    </span>
  );
}

function TopRightArrow() {
  return (
    <span
      className="swarm-arrow absolute -top-3 -right-2 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "20px",
        "--ty": "-20px",
        "--rot-start": "180deg",
        "--rot-mid": "180deg",
      })}
    >
      💸
    </span>
  );
}

function MidRightArrow() {
  return (
    <span
      className="swarm-arrow absolute top-1/2 -translate-y-1/2 -right-4 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "28px",
        "--ty": "0px",
        "--rot-start": "225deg",
        "--rot-mid": "225deg",
      })}
    >
      💸
    </span>
  );
}

function BottomRightArrow() {
  return (
    <span
      className="swarm-arrow absolute -bottom-3 -right-2 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "18px",
        "--ty": "20px",
        "--rot-start": "270deg",
        "--rot-mid": "270deg",
      })}
    >
      💸
    </span>
  );
}

function BottomLeftArrow() {
  return (
    <span
      className="swarm-arrow absolute -bottom-3 -left-2 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "-18px",
        "--ty": "20px",
        "--rot-start": "0deg",
        "--rot-mid": "0deg",
      })}
    >
      💸
    </span>
  );
}

function MidLeftArrow() {
  return (
    <span
      className="swarm-arrow absolute top-1/2 -translate-y-1/2 -left-4 w-4 h-4 text-red-500 opacity-0 pointer-events-none"
      style={cssVars({
        "--tx": "-28px",
        "--ty": "0px",
        "--rot-start": "45deg",
        "--rot-mid": "45deg",
      })}
    >
      💸
    </span>
  );
}

export default function HeroActions() {
  return (
    <div className="mt-6 flex flex-wrap gap-3 items-center">
      <div className="relative inline-block">
        <Link
          href="/portfolio"
          className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold hover:underline underline-offset-7 shadow-md transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/40"
        >
          🚀 View Portfolio
        </Link>

        <TopLeftArrow />
        <TopRightArrow />
        <MidRightArrow />
        <BottomRightArrow />
        <BottomLeftArrow />
        <MidLeftArrow />
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
