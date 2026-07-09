"use client";

import { useEffect, useState } from "react";
import Waveform from "./Waveform";
import { profile } from "@/lib/content";

export default function Hero() {
  const words = profile.mediums;
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <p className="eyebrow mb-8 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span>Creative Technologist</span>
        <span className="text-ember">/</span>
        <span>Cape Cod ⇄ Brazil</span>
        <span className="text-ember">/</span>
        <span>Available for work</span>
      </p>

      <h1 className="font-display text-[clamp(2.9rem,9vw,7rem)] font-light leading-[0.95] tracking-[-0.02em]">
        <span className="block text-ink">I compose</span>
        <span className="relative block">
          <span
            key={i}
            className="inline-block italic text-ember"
            style={{ animation: "reveal-word 0.5s cubic-bezier(0.2,0.7,0.2,1)" }}
          >
            {words[i]}
          </span>
          <span className="text-ink">.</span>
        </span>
      </h1>

      <p className="mt-9 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
        Full-stack &amp; blockchain developer, product manager, and 25-year chef.
        One practice —{" "}
        <span className="text-ink">mise en place, build, refine</span> — across
        three very different mediums.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-ember px-6 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          See the work →
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[var(--line-strong)] px-6 py-3 font-mono text-sm text-ink transition-colors hover:border-ember hover:text-ember"
        >
          Get in touch
        </a>
      </div>

      <div className="mt-16 flex items-center gap-6">
        <div className="hidden shrink-0 gap-6 sm:flex">
          {[
            { n: "25", l: "years of craft" },
            { n: "4", l: "hackathons" },
            { n: "EN·PT", l: "bilingual" },
          ].map((s) => (
            <div key={s.l} className="border-l border-[var(--line)] pl-4">
              <div className="font-display text-2xl text-ink">{s.n}</div>
              <div className="eyebrow mt-1">{s.l}</div>
            </div>
          ))}
        </div>
        <Waveform className="flex-1" opacity={0.6} />
      </div>

      <style>{`
        @keyframes reveal-word {
          from { opacity: 0; transform: translateY(0.35em) skewX(-4deg); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
