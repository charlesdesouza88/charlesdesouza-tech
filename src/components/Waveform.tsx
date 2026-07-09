// Signature "signal" line — a nod to sound. Two seamless tiles drift left.
// Server component (pure SVG); animation is CSS-driven and respects reduced motion.

export default function Waveform({
  color = "var(--ember)",
  className = "",
  opacity = 0.5,
}: {
  color?: string;
  className?: string;
  opacity?: number;
}) {
  // One tile is 600 wide; we render two side by side and drift by -50%.
  const tile =
    "M0 20 Q 15 20 22 20 T 44 20 Q 52 20 58 6 T 72 20 Q 80 20 96 20 T 130 20 Q 142 20 150 34 T 168 20 Q 182 20 210 20 T 250 20 Q 262 20 270 8 T 288 20 Q 300 20 330 20 T 372 20 Q 386 20 396 32 T 416 20 Q 430 20 470 20 T 520 20 Q 534 20 542 10 T 560 20 Q 574 20 600 20";

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <div className="wave-track flex" style={{ width: "200%" }}>
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox="0 0 600 40"
            preserveAspectRatio="none"
            className="h-6 w-1/2 shrink-0"
          >
            <path
              d={tile}
              fill="none"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
