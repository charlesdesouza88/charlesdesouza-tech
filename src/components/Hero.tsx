"use client";

import { useEffect, useState } from "react";
import Waveform from "./Waveform";
import HeroVideo from "./HeroVideo";
import { profile } from "@/lib/content";

export default function Hero() {
  const words = profile.mediums;
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-28"
    >
      <HeroVideo />

      {/* Dark wash so light studio footage reads on the warm night palette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              105deg,
              color-mix(in srgb, var(--bg) 94%, transparent) 0%,
              color-mix(in srgb, var(--bg) 78%, transparent) 38%,
              color-mix(in srgb, var(--bg) 45%, transparent) 62%,
              color-mix(in srgb, var(--bg) 22%, transparent) 100%
            ),
            linear-gradient(
              to top,
              var(--bg) 0%,
              color-mix(in srgb, var(--bg) 70%, transparent) 28%,
              transparent 55%
            ),
            radial-gradient(
              70% 50% at 70% 40%,
              color-mix(in srgb, var(--ember) 12%, transparent),
              transparent 65%
            )
          `,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="eyebrow hero-enter hero-enter-1 mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span>Creative Technologist</span>
          <span className="text-ember">/</span>
          <span>Cape Cod ⇄ Brazil</span>
          <span className="text-ember">/</span>
          <span className="inline-flex items-center gap-2 text-muted">
            <span className="live-dot" aria-hidden="true" />
            Available for work
          </span>
        </p>

        <h1 className="hero-enter hero-enter-2 font-display text-[clamp(3rem,10vw,7.5rem)] font-light leading-[0.92] tracking-[-0.025em]">
          <span className="block text-ink">I compose</span>
          <span className="relative block min-h-[1.05em]">
            <span key={i} className="word-wipe italic text-ember">
              {words[i]}
            </span>
            <span className="text-ink">.</span>
          </span>
        </h1>

        <div
          className="hero-enter hero-enter-3 mt-6 max-w-2xl"
          style={{ ["--wave-opacity" as string]: 0.55 }}
        >
          <Waveform
            className="wave-pulse h-10 sm:h-12"
            opacity={0.55}
            color="var(--ember)"
          />
        </div>

        <p className="hero-enter hero-enter-4 mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Most engineers come from one world. I come from three — code, music, and
          the kitchen. A full-stack &amp; blockchain developer and product manager
          who learns fast, ships under pressure, and builds{" "}
          <span className="text-ink">software people actually want to use.</span>
        </p>

        <div className="hero-enter hero-enter-5 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="btn-glow btn-glow-primary rounded-full bg-ember px-7 py-3.5 font-mono text-sm font-medium text-bg"
          >
            See the work →
          </a>
          <a
            href="#contact"
            className="btn-glow btn-glow-ghost rounded-full border border-line-strong px-7 py-3.5 font-mono text-sm text-ink hover:border-ember hover:text-ember"
          >
            Get in touch
          </a>
          <a
            href="/Charles_DeSouza_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-2 py-3 font-mono text-sm text-muted underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-ember hover:decoration-ember"
          >
            Résumé ↓
          </a>
        </div>
      </div>
    </section>
  );
}
