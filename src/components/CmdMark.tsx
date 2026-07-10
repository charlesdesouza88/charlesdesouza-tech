// CMD monogram — concentric "C"s opening right, crossbar running out through
// the gap. Vector recreation of Charles's brand mark; inherits currentColor.

const C = 50; // center

// One "C": a circle broken by a right-facing gap of ±halfGapDeg degrees.
function cPath(r: number, halfGapDeg: number) {
  const a = (halfGapDeg * Math.PI) / 180;
  const x = C + r * Math.cos(a);
  const y1 = C - r * Math.sin(a);
  const y2 = C + r * Math.sin(a);
  // Long way around (through the left side).
  return `M ${x.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 1 0 ${x.toFixed(2)} ${y2.toFixed(2)}`;
}

export default function CmdMark({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      fill="none"
    >
      {title ? <title>{title}</title> : null}
      <path d={cPath(42, 17)} stroke="currentColor" strokeWidth="11" />
      <path d={cPath(25, 30)} stroke="currentColor" strokeWidth="10" />
      <path d={cPath(10.5, 45)} stroke="currentColor" strokeWidth="8" />
      {/* crossbar through the gap */}
      <rect x="60" y="45.6" width="37" height="8.8" fill="currentColor" />
    </svg>
  );
}
