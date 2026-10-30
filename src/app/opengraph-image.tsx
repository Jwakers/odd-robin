import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Odd Robin - local digital support for Gloucester small businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const [robinIcon, wordmarkFont, bodyFont] = await Promise.all([
    readFile(join(process.cwd(), "public/icons/odd-robin.png")),
    readFile(join(process.cwd(), "src/assets/fonts/geist-mono-semibold.ttf")),
    readFile(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f5f8",
          backgroundImage:
            "linear-gradient(to right, rgba(95, 104, 135, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(95, 104, 135, 0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "64px 72px",
          color: "#141824",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            color: "#0b4edb",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <img src={`data:image/png;base64,${robinIcon.toString("base64")}`} width={56} height={56} alt="" />
          <span style={{ fontFamily: "Geist Mono", fontWeight: 600 }}>Odd Robin</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0939a1",
              maxWidth: 980,
            }}
          >
            Get Seen in Gloucester
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#141824",
              opacity: 0.8,
              maxWidth: 860,
            }}
          >
            Bold websites, local visibility, and practical digital support for
            small businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "2px solid #0b4edb",
              color: "#0b4edb",
              padding: "10px 18px",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "#ffffff",
            }}
          >
            Gloucester · Small business focus
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#5f6887",
              fontWeight: 600,
            }}
          >
            oddrobin.co.uk
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "sans-serif", data: bodyFont, weight: 400, style: "normal" }, { name: "Geist Mono", data: wordmarkFont, weight: 600, style: "normal" }],
    },
  );
}
