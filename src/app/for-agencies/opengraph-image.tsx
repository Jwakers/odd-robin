import { agencyOffer } from "@/content/agency-partnership";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Your creative team. A safe pair of dev hands. Development partner for agencies.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function AgencySocialImage() {
  const [robinIcon, wordmarkFont, bodyFont] = await Promise.all([
    readFile(join(process.cwd(), "public/icons/odd-robin.png")),
    readFile(join(process.cwd(), "src/assets/fonts/geist-mono-semibold.ttf")),
    readFile(join(process.cwd(), "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf")),
  ]);
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "64px", background: "#F3F5F8", color: "#141824", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, fontWeight: 700 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}><img src={`data:image/png;base64,${robinIcon.toString("base64")}`} width={56} height={56} alt="" /><span style={{ fontFamily: "Geist Mono", fontWeight: 600, letterSpacing: "-0.02em" }}>{agencyOffer.businessName}</span></div><span style={{ color: "#0B4EDB" }}>For agencies</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", color: "#0939A1", fontSize: 76, lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.04em" }}>
        <span>Your creative team.</span><span>A safe pair of dev hands.</span>
      </div>
      <div style={{ display: "flex", fontSize: 24 }}>Senior development · White-label by default · Priced per project</div>
    </div>,
    { ...size, fonts: [{ name: "sans-serif", data: bodyFont, weight: 400, style: "normal" }, { name: "Geist Mono", data: wordmarkFont, weight: 600, style: "normal" }] },
  );
}
