"use client";

import React from "react";
import Link from "next/link";
import HeroIllustration from "../components/HeroIllustration";

function cssVars(vars: Record<string, string>): React.CSSProperties {
  return Object.fromEntries(
    Object.entries(vars)
  ) as unknown as React.CSSProperties;
}

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="relative w-full max-w-5xl">
        {/* Decorative blurred gradient behind the glass panel.
            - show a vivid colorful gradient in light mode
            - keep the softer/muted gradient in dark mode (preserves current look)
        */}
        <div
          aria-hidden
          className="absolute -inset-8 rounded-3xl blur-3xl transform-gpu"
        >
          <div className="absolute inset-0 rounded-3xl dark:hidden bg-gradient-to-r from-pink-400/60 via-amber-300/40 to-cyan-300/50" />
          <div className="absolute inset-0 rounded-3xl hidden dark:block bg-gradient-to-r from-indigo-400/20 via-sky-300/10 to-emerald-300/10" />
        </div>

        <section className="relative rounded-3xl bg-transparent dark:bg-black/30 backdrop-blur-md backdrop-saturate-150 shadow-2xl p-10 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Illustration appears first on small screens, last on md+ */}
            <div className="order-first md:order-last w-full md:w-80 lg:w-96 h-44 md:h-56 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-200/60 dark:from-white/70 to-transparent border border-white/10">
              <HeroIllustration className="w-3/4 h-3/4" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-amber-500 to-cyan-500 dark:text-white">
                Software developer & UI-minded engineer
              </h1>

              <p className="mt-4 text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
                I build thoughtful, performant web experiences — focusing on
                clear UX, accessible components, and pragmatic engineering using
                React, Next.js and TypeScript.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <div className="btn-swarm">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold shadow-md transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300/40"
                  >
                    View Portfolio
                  </Link>

                  {/* Swarm arrows - positioned around the CTA and animated on hover (non-touch only via CSS) */}
                  <span
                    className="swarm-arrow -top-3 -left-3 w-4 h-4 text-pink-500 opacity-0 pointer-events-none"
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

                  <span
                    className="swarm-arrow -top-3 -right-2 w-4 h-4 text-amber-500 opacity-0 pointer-events-none"
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

                  <span
                    className="swarm-arrow top-1/2 -translate-y-1/2 -left-4 w-4 h-4 text-cyan-500 opacity-0 pointer-events-none"
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

                  <span
                    className="swarm-arrow top-1/2 -translate-y-1/2 -right-4 w-4 h-4 text-violet-600 opacity-0 pointer-events-none"
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

                  <span
                    className="swarm-arrow -bottom-3 -right-2 w-4 h-4 text-cyan-500 opacity-0 pointer-events-none"
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
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-sm text-gray-800 dark:text-gray-100 transform transition duration-180 ease-out hover:-translate-y-1 hover:shadow-md active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-black/10 dark:focus-visible:ring-white/10"
                >
                  Contact
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-50/70 via-amber-50/60 to-cyan-50/70 text-pink-800 dark:bg-black/30">
                  Design systems
                </span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-50/70 via-cyan-50/60 to-indigo-50/70 text-amber-800 dark:bg-black/30">
                  Frontend architecture
                </span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-50/70 via-indigo-50/60 to-pink-50/70 text-cyan-800 dark:bg-black/30">
                  Performance
                </span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50/70 via-pink-50/60 to-amber-50/70 text-indigo-800 dark:bg-black/30">
                  Accessibility
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
