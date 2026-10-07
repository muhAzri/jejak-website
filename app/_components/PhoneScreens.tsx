import type { CSSProperties, ReactNode } from "react";
import type { ScreenCopy } from "../_content/landing";
import { StatusBar } from "./Brand";
import { Icon, type IconName } from "./Icon";

export const MAP_GRID_DARK: CSSProperties = {
  backgroundColor: "#1A1C1E",
  backgroundImage:
    "linear-gradient(90deg,rgba(255,255,255,.07) 2px,transparent 2px),linear-gradient(rgba(255,255,255,.07) 2px,transparent 2px),linear-gradient(115deg,transparent 46%,rgba(255,255,255,.12) 46%,rgba(255,255,255,.12) 49%,transparent 49%)",
  backgroundSize: "56px 56px,56px 56px,100% 100%",
};

const ROUTE_D = "M50 250 C 90 200, 70 160, 130 140 S 210 160, 240 110 S 310 50, 345 70";

/** Pace-coloured route (slow grey → yellow → fast red) used in summaries. */
export function PaceRoute({ gradientId }: { gradientId: string }) {
  return (
    <svg
      viewBox="0 0 393 300"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#9A9A9A" />
          <stop offset=".5" stopColor="#FFEE00" />
          <stop offset="1" stopColor="#DB0826" />
        </linearGradient>
      </defs>
      <path d={ROUTE_D} fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path d={ROUTE_D} fill="none" stroke={`url(#${gradientId})`} strokeWidth="5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <circle cx="50" cy="250" r="7" fill="#fff" stroke="#262626" strokeWidth="2.5" />
      <rect x="338" y="63" width="14" height="14" rx="2" fill="#262626" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

function Chip({ icon, color, bg, children }: { icon: IconName; color: string; bg: string; children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        alignSelf: "flex-start",
        padding: "2px 10px 2px 8px",
        borderRadius: 8,
        background: bg,
        font: "var(--type-p3-bold)",
      }}
    >
      <Icon name={icon} size={14} color={color} />
      {children}
    </span>
  );
}

function StartCard({ tint, icon, color, chip, title }: { tint: string; icon: IconName; color: string; chip: string; title: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        minHeight: 132,
        padding: 20,
        borderRadius: 12,
        background: tint,
      }}
    >
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        <Chip icon={icon} color={color} bg="#fff">
          {chip}
        </Chip>
        <span style={{ font: "400 24px/34px var(--font-display)" }}>{title}</span>
      </div>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "#FFEE00",
          display: "grid",
          placeItems: "center",
          flex: "none",
        }}
      >
        <Icon name="20-solid-arrow-right" size={28} color="#262626" />
      </div>
    </div>
  );
}

/** Home screen: start run / walk + last session. */
export function HomeScreen({ s }: { s: ScreenCopy }) {
  return (
    <>
      <StatusBar />
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, padding: "4px 16px 20px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ font: "var(--type-p2-semibold)", color: "#838383" }}>{s.date}</span>
          <span style={{ font: "400 32px/44px var(--font-display)" }}>Jejak</span>
        </div>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "rgba(0,0,0,.05)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Icon name="24-solid-cog-6-tooth" size={24} color="#262626" />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "0 16px" }}>
        <StartCard tint="rgba(242,85,44,.12)" icon="20-solid-bolt" color="#F2552C" chip={s.run} title={s.startRun} />
        <StartCard tint="rgba(14,154,139,.12)" icon="20-solid-globe-asia-australia" color="#0E9A8B" chip={s.walk} title={s.startWalk} />
      </div>
      <div style={{ padding: "28px 16px 0", display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ font: "var(--type-h2)" }}>{s.lastSession}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: 12,
            borderRadius: 12,
            background: "rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: 72,
              height: 72,
              flex: "none",
              borderRadius: 8,
              overflow: "hidden",
              backgroundColor: "#ECEAE4",
              backgroundImage:
                "linear-gradient(90deg,#fff 2px,transparent 2px),linear-gradient(#fff 2px,transparent 2px),linear-gradient(115deg,transparent 46%,#fff 46%,#fff 50%,transparent 50%)",
              backgroundSize: "22px 22px,22px 22px,100% 100%",
            }}
          >
            <PaceRoute gradientId="lpg1" />
          </div>
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Chip icon="20-solid-bolt" color="#F2552C" bg="rgba(242,85,44,.12)">
                {s.run}
              </Chip>
              <span style={{ font: "var(--type-p3)", color: "#838383" }}>{s.lastDate}</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
              <span style={{ font: "400 20px/30px var(--font-display)" }}>{s.d1}</span>
              <span style={{ font: "var(--type-p2)", color: "#838383" }}>km</span>
            </div>
            <span style={{ font: "var(--type-p2)", color: "#838383" }}>28:41 · 5:28 /km</span>
          </div>
          <Icon name="20-solid-chevron-right" size={20} color="#262626" />
        </div>
      </div>
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ font: "var(--type-p3-semibold)", color: "#9A9A9A" }}>{label}</span>
      <span style={{ font: "400 24px/34px var(--font-display)" }}>{value}</span>
    </div>
  );
}

function ControlButton({ icon, iconSize, label }: { icon: IconName; iconSize: number; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 72 }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "rgba(255,255,255,.08)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Icon name={icon} size={iconSize} color="#F2F2F2" />
      </div>
      <span style={{ font: "var(--type-p3)", color: "#9A9A9A" }}>{label}</span>
    </div>
  );
}

/** Live recording screen (dark). */
export function RecordingScreen({ s }: { s: ScreenCopy }) {
  const liveRoute = "M60 290 C 90 240, 70 200, 130 180 S 210 200, 240 150 S 300 110, 320 120";
  return (
    <>
      <div className="dark" style={{ position: "relative", height: 330, flex: "none", ...MAP_GRID_DARK }}>
        <svg
          viewBox="0 0 393 330"
          preserveAspectRatio="none"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path d={liveRoute} fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d={liveRoute} fill="none" stroke="#F2552C" strokeWidth="5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <circle cx="60" cy="290" r="6" fill="#fff" stroke="#262626" strokeWidth="2" />
        </svg>
        <div
          style={{
            position: "absolute",
            left: 309,
            top: 109,
            width: 22,
            height: 22,
            borderRadius: "50%",
            background: "#FFEE00",
            boxShadow: "0 0 0 3px #262626,0 0 0 10px rgba(255,238,0,.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 56,
            background: "linear-gradient(180deg,rgba(11,11,11,0),#0B0B0B)",
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <StatusBar />
        </div>
        <div style={{ position: "absolute", top: 68, left: 16, right: 16, display: "flex", justifyContent: "space-between" }}>
          <Chip icon="20-solid-bolt" color="#F2552C" bg="#161616">
            {s.run}
          </Chip>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 8,
              background: "#161616",
              font: "var(--type-p3-bold)",
            }}
          >
            <Icon name="20-solid-signal" size={16} color="#F2F2F2" />
            GPS
          </span>
        </div>
      </div>
      <div style={{ padding: "8px 24px 0", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ font: "var(--type-p3-semibold)", color: "#9A9A9A" }}>{s.distance}</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ font: "400 88px/96px var(--font-display)" }}>{s.d2}</span>
            <span style={{ font: "var(--type-h2)", color: "#9A9A9A" }}>km</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 12 }}>
          <Metric label={s.duration} value="17:42" />
          <Metric label={s.curPace} value="5:21" />
          <Metric label={s.avgPace} value="5:34" />
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "0 32px 120px" }}>
        <ControlButton icon="24-solid-lock-closed" iconSize={24} label={s.lock} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "#FFEE00",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Icon name="24-solid-pause" size={44} color="#262626" />
          </div>
          <span style={{ font: "var(--type-p3)", color: "#9A9A9A" }}>{s.pause}</span>
        </div>
        <ControlButton icon="24-solid-stop" iconSize={30} label={s.finish} />
      </div>
    </>
  );
}
