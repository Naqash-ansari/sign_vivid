import { ImageResponse } from "next/og";

export const alt = "Sign Vivid signage preview card";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2D2D2D",
          color: "white",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#E8720C",
            bottom: -180,
            display: "flex",
            height: 420,
            position: "absolute",
            right: -120,
            transform: "rotate(-18deg)",
            width: 520,
          }}
        />
        <div
          style={{
            border: "2px solid rgba(255,255,255,0.12)",
            borderRadius: 38,
            display: "flex",
            flexDirection: "column",
            height: 534,
            justifyContent: "space-between",
            margin: 48,
            padding: 58,
            position: "relative",
            width: 1104,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                alignItems: "center",
                background: "white",
                borderRadius: 18,
                color: "#2D2D2D",
                display: "flex",
                fontSize: 42,
                fontWeight: 900,
                height: 88,
                justifyContent: "center",
                letterSpacing: -3,
                width: 88,
              }}
            >
              SV
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#E8720C", fontSize: 24, fontWeight: 800, letterSpacing: 5 }}>
                SIGN VIVID
              </div>
              <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 26, marginTop: 8 }}>
                Design, Print & Sign
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 76,
                fontWeight: 900,
                letterSpacing: -4,
                lineHeight: 0.98,
              }}
            >
              <div>Professional signage,</div>
              <div>made vivid.</div>
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: 30,
                lineHeight: 1.35,
                marginTop: 30,
                maxWidth: 760,
              }}
            >
              Custom neon, letters, lightboxes, moss signs, and installation across the UK.
            </div>
          </div>

          <div style={{ display: "flex", gap: 14 }}>
            {["Neon", "Letters", "Lightbox", "Moss"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: 999,
                  color: "white",
                  fontSize: 24,
                  fontWeight: 700,
                  padding: "12px 22px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
