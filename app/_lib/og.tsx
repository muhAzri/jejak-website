import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const fontDir = join(process.cwd(), "app/_lib/og-fonts");

async function loadFonts() {
  const [display, medium, bold] = await Promise.all([
    readFile(join(fontDir, "MochiyPopOne-Latin.ttf")),
    readFile(join(fontDir, "PlusJakartaSans-Medium.ttf")),
    readFile(join(fontDir, "PlusJakartaSans-Bold.ttf")),
  ]);
  return [
    { name: "Mochiy", data: display, weight: 400 as const, style: "normal" as const },
    { name: "Jakarta", data: medium, weight: 500 as const, style: "normal" as const },
    { name: "Jakarta", data: bold, weight: 700 as const, style: "normal" as const },
  ];
}

const ROUTE_D = "M50 250 C 90 200, 70 160, 130 140 S 210 160, 240 110 S 310 50, 345 70";

function LogoMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect width="64" height="64" rx="16" fill="#262626" />
      <circle cx="38.5" cy="14.5" r="5.5" fill="#FFEE00" />
      <path d="M38.5 25.5V42.5Q38.5 53.5 27.5 53.5" fill="none" stroke="#FFEE00" strokeWidth="10" strokeLinecap="round" />
      <circle cx="10.5" cy="49.5" r="2.75" fill="#FFEE00" />
      <circle cx="17.5" cy="54" r="2.75" fill="#FFEE00" />
    </svg>
  );
}

/** Dark session card with a pace-coloured route, echoing the app UI. */
function SessionCard({ distance }: { distance: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 400,
        padding: 24,
        borderRadius: 32,
        background: "#0B0B0B",
        color: "#F2F2F2",
      }}
    >
      <div style={{ display: "flex", width: 352, height: 260, borderRadius: 20, background: "#1A1C1E", overflow: "hidden" }}>
        <svg width="352" height="260" viewBox="0 0 393 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pace" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#9A9A9A" />
              <stop offset=".5" stopColor="#FFEE00" />
              <stop offset="1" stopColor="#DB0826" />
            </linearGradient>
          </defs>
          {[56, 112, 168, 224, 280, 336].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300" stroke="rgba(255,255,255,.07)" strokeWidth="2" />
          ))}
          {[56, 112, 168, 224, 280].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="393" y2={y} stroke="rgba(255,255,255,.07)" strokeWidth="2" />
          ))}
          <path d={ROUTE_D} fill="none" stroke="#fff" strokeWidth="16" strokeLinecap="round" />
          <path d={ROUTE_D} fill="none" stroke="url(#pace)" strokeWidth="9" strokeLinecap="round" />
          <circle cx="50" cy="250" r="11" fill="#fff" stroke="#262626" strokeWidth="4" />
          <rect x="333" y="58" width="24" height="24" rx="4" fill="#262626" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 20 }}>
        <span style={{ fontFamily: "Mochiy", fontSize: 72, lineHeight: 1 }}>{distance}</span>
        <span style={{ fontFamily: "Jakarta", fontWeight: 700, fontSize: 26, color: "#9A9A9A" }}>km</span>
      </div>
      <div style={{ display: "flex", gap: 28, marginTop: 10, fontFamily: "Mochiy", fontSize: 30 }}>
        <span>28:41</span>
        <span>5:28 /km</span>
      </div>
    </div>
  );
}

export async function renderOgImage({
  title,
  subtitle,
  badge,
  footer,
  distance,
}: {
  title: string;
  subtitle: string;
  badge: string;
  footer: string;
  /** When set, shows the sample session card on the right. */
  distance?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 48,
          padding: "64px 72px",
          background: "#FFEE00",
          color: "#262626",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <LogoMark size={64} />
            <span style={{ fontFamily: "Mochiy", fontSize: 40 }}>Jejak</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 18px",
                borderRadius: 12,
                background: "#262626",
                color: "#FFEE00",
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              {badge}
            </div>
            <div style={{ display: "flex", fontFamily: "Mochiy", fontSize: distance ? 62 : 84, lineHeight: 1.15 }}>
              {title}
            </div>
            <div style={{ display: "flex", fontWeight: 500, fontSize: distance ? 28 : 30, lineHeight: 1.4, maxWidth: 640 }}>
              {subtitle}
            </div>
          </div>
          <div style={{ display: "flex", fontWeight: 700, fontSize: 24 }}>{footer}</div>
        </div>
        {distance ? <SessionCard distance={distance} /> : null}
      </div>
    ),
    { ...OG_SIZE, fonts: await loadFonts() },
  );
}
