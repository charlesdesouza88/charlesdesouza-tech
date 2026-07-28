import { ImageResponse } from "next/og";

export const alt = "Charles DeSouza — Creative Technologist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#14110f",
          backgroundImage:
            "radial-gradient(80% 70% at 15% 0%, rgba(238,139,67,0.18), transparent 55%), radial-gradient(70% 60% at 100% 100%, rgba(111,182,166,0.14), transparent 50%)",
          color: "#f2ebe3",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a79b8e",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 999,
              border: "2px solid #ee8b43",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ee8b43",
              fontSize: 14,
              letterSpacing: 0,
            }}
          >
            CMD
          </div>
          charlesdesouza.tech
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              maxWidth: 980,
            }}
          >
            I compose systems, sound, and plates.
          </div>
          <div
            style={{
              fontFamily: "ui-monospace, Menlo, monospace",
              fontSize: 24,
              color: "#a79b8e",
              letterSpacing: "0.04em",
            }}
          >
            Creative Technologist · Cape Cod / Brazil
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 18,
            color: "#8b8073",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>Full-stack · Blockchain · Product</span>
          <span style={{ color: "#ee8b43" }}>Available for work</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
