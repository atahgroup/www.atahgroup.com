import React from "react";
import Link from "next/link";

function cssVars(vars: Record<string, string>): React.CSSProperties {
  return Object.fromEntries(
    Object.entries(vars)
  ) as unknown as React.CSSProperties;
}

function TopLeftArrow({ emoji }: { emoji: string }) {
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
      {emoji}
    </span>
  );
}

function TopRightArrow({ emoji }: { emoji: string }) {
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
      {emoji}
    </span>
  );
}

function MidRightArrow({ emoji }: { emoji: string }) {
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
      {emoji}
    </span>
  );
}

function BottomRightArrow({ emoji }: { emoji: string }) {
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
      {emoji}
    </span>
  );
}

function BottomLeftArrow({ emoji }: { emoji: string }) {
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
      {emoji}
    </span>
  );
}

function MidLeftArrow({ emoji }: { emoji: string }) {
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
      {emoji}
    </span>
  );
}

interface SuperButtonProps {
  text: string;
  href: string;
  emoji: string;
  className?: string;
}

export default function SuperButton({
  text,
  href,
  emoji,
  className,
}: SuperButtonProps) {
  const classes =
    "inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold hover:underline underline-offset-7 shadow-md transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/40";

  return (
    <div className="relative inline-block">
      <Link href={href} className={`${classes} ${className || ""}`}>
        {text}
      </Link>

      <TopLeftArrow emoji={emoji} />
      <TopRightArrow emoji={emoji} />
      <MidRightArrow emoji={emoji} />
      <BottomRightArrow emoji={emoji} />
      <BottomLeftArrow emoji={emoji} />
      <MidLeftArrow emoji={emoji} />
    </div>
  );
}
