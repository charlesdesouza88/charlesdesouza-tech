"use client";

import { useEffect, useRef, useState } from "react";

/** Progress bar that animates width when scrolled into view. */
export default function AnimatedBar({
  value,
  max = 10,
  className = "",
}: {
  value: number;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`mt-1 h-1 overflow-hidden rounded-full bg-[var(--line)] ${className}`}>
      <span
        ref={ref}
        className={`bar-fill block h-full rounded-full bg-ember/80 ${inView ? "in" : ""}`}
        style={inView ? { width: `${pct}%` } : { width: 0 }}
      />
    </div>
  );
}
