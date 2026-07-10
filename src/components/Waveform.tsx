// Signature "sound wave" — an audio amplitude waveform (a nod to Charles the
// music producer). Two identical tiles drift left seamlessly. Pure SVG; the
// animation is CSS-driven and respects reduced motion.

const TILE_W = 1200;
const BAR_COUNT = 80;
const STEP = TILE_W / BAR_COUNT; // uniform spacing → seamless tiling
const MID = 24;
const MAX_AMP = 22;

// Deterministic, musical-looking amplitudes: a slow envelope × finer detail,
// with a couple of louder "peaks" so it reads like real audio, not a sine.
// Geometry is rounded to fixed precision so the server and client render
// byte-identical values (avoids float-serialization hydration mismatches).
const r2 = (n: number) => Math.round(n * 100) / 100;
const BARS = Array.from({ length: BAR_COUNT }, (_, i) => {
  const t = i / BAR_COUNT;
  const envelope = 0.35 + 0.65 * Math.abs(Math.sin(t * Math.PI * 3));
  const detail = 0.55 + 0.45 * Math.sin(i * 1.7) * Math.cos(i * 0.6);
  const amp = Math.min(1, Math.max(0.09, envelope * detail)) * MAX_AMP;
  return {
    x: r2(STEP / 2 + i * STEP - 2),
    y: r2(MID - amp),
    h: r2(amp * 2),
  };
});

export default function Waveform({
  color = "var(--ember)",
  className = "",
  opacity = 0.5,
}: {
  color?: string;
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      <div className="wave-track flex" style={{ width: "200%" }}>
        {[0, 1].map((tile) => (
          <svg
            key={tile}
            viewBox={`0 0 ${TILE_W} ${MID * 2}`}
            preserveAspectRatio="none"
            className="h-7 w-1/2 shrink-0"
          >
            {BARS.map((bar, i) => (
              <rect
                key={i}
                x={bar.x}
                y={bar.y}
                width={4}
                height={bar.h}
                rx={2}
                fill={color}
              />
            ))}
          </svg>
        ))}
      </div>
    </div>
  );
}
