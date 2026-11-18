import { ImageResponse } from "next/og";

export const alt = "CustomizeBottle — Your Brand. On Every Bottle.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "68px 82px", background: "linear-gradient(120deg, #10283B 0%, #16394D 65%, #0E7778 100%)", color: "white", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 58, height: 58, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 18, border: "2px solid #64D7CC", color: "#64D7CC", fontSize: 34, fontWeight: 700 }}>C</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 31, fontWeight: 800, letterSpacing: -1 }}>CustomizeBottle</div>
            <div style={{ marginTop: 5, color: "#A8D9D5", fontSize: 13, fontWeight: 700, letterSpacing: 3 }}>CUSTOM-BRANDED BOTTLES &amp; SUPPLY</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 74, lineHeight: 1.04, fontWeight: 800, letterSpacing: -4 }}>Your Brand.</div>
          <div style={{ color: "#6EDCD1", fontSize: 74, lineHeight: 1.04, fontWeight: 800, letterSpacing: -4 }}>On Every Bottle.</div>
          <div style={{ marginTop: 28, color: "#D6E5E9", fontSize: 24 }}>Customized bottled-water solutions for businesses.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,.25)", paddingTop: 20, color: "#B8D7DA", fontSize: 18 }}>
          <span>PESHAWAR · PAKISTAN</span>
          <span>MINIMUM ORDER 500 BOTTLES</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
