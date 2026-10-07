import Link from "next/link";
import type { CSSProperties } from "react";

/** Jejak logo mark + wordmark, linking home. */
export function BrandLink({ href }: { href: string }) {
  return (
    <Link href={href} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
      <div
        style={{
          position: "relative",
          width: 36,
          height: 36,
          borderRadius: 9,
          background: "#FFEE00",
          overflow: "hidden",
          flex: "none",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 14,
            top: 1,
            font: "400 27px/32px var(--font-display)",
            color: "#262626",
          }}
        >
          j
        </span>
        <div style={{ ...dot, left: 5, top: 27 }} />
        <div style={{ ...dot, left: 9, top: 29 }} />
      </div>
      <span style={{ font: "400 22px/30px var(--font-display)" }}>Jejak</span>
    </Link>
  );
}

const dot: CSSProperties = {
  position: "absolute",
  width: 3,
  height: 3,
  borderRadius: "50%",
  background: "#262626",
};

/** "Get it on Google Play" badge button. */
export function PlayBadge({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        minHeight: 60,
        padding: "8px 24px 8px 18px",
        borderRadius: 14,
        background: "#000",
        color: "#fff",
        textDecoration: "none",
      }}
    >
      <svg width="26" height="28" viewBox="0 0 26 28" aria-hidden="true">
        <path d="M1 1.5 L15 14 L1 26.5 Z" fill="#00D7FE" />
        <path d="M1 1.5 L19.5 11.5 L15 14 Z" fill="#00F076" />
        <path d="M1 26.5 L15 14 L19.5 16.5 Z" fill="#FF3A44" />
        <path d="M19.5 11.5 L25 14.5 L19.5 16.5 L15 14 Z" fill="#FFD400" />
      </svg>
      <span style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
        <span
          style={{
            font: "600 11px/14px var(--font-body)",
            letterSpacing: ".04em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span style={{ font: "600 20px/26px var(--font-body)" }}>Google Play</span>
      </span>
    </a>
  );
}

/** Device status bar from the Afdol UI design system (time + battery). */
export function StatusBar({ time = "9:41" }: { time?: string }) {
  return (
    <div style={{ position: "relative", height: 64, width: "100%", color: "var(--text-primary)" }}>
      <span
        style={{
          position: "absolute",
          left: 21,
          top: 24,
          width: 54,
          textAlign: "center",
          font: "600 15px/18px var(--font-body)",
          letterSpacing: "-0.3px",
        }}
      >
        {time}
      </span>
      <span
        style={{
          position: "absolute",
          right: 34,
          top: 27,
          width: 22,
          height: 11.33,
          borderRadius: 2.67,
          boxShadow: "inset 0 0 0 1px currentColor",
          opacity: 0.35,
        }}
      />
      <span
        style={{
          position: "absolute",
          right: 36,
          top: 29,
          width: 18,
          height: 7.33,
          borderRadius: 1.33,
          background: "currentColor",
        }}
      />
      <span
        style={{
          position: "absolute",
          right: 31,
          top: 30.7,
          width: 1.33,
          height: 4,
          borderRadius: "0 1px 1px 0",
          background: "currentColor",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
