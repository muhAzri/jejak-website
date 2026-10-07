import Link from "next/link";
import type { CSSProperties } from "react";
import { homeHref, playUrl, type Lang } from "../_content/landing";
import { CONTACT_EMAIL, PRIVACY } from "../_content/privacy";
import { BrandLink } from "./Brand";
import { Icon } from "./Icon";

const container: CSSProperties = { maxWidth: 760, width: "100%", margin: "0 auto" };
const sectionTitle: CSSProperties = { margin: 0, font: "700 20px/32px var(--font-body)" };
const body: CSSProperties = { margin: 0, font: "400 16px/28px var(--font-body)", textWrap: "pretty" };

export function PrivacyPage({ lang }: { lang: Lang }) {
  const t = PRIVACY[lang];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-default)",
        color: "var(--text-primary)",
      }}
    >
      <header style={{ borderBottom: "1px solid var(--border-default)" }}>
        <div
          style={{
            ...container,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <BrandLink href={homeHref(lang)} />
          <Link
            href={homeHref(lang)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              minHeight: 44,
              font: "var(--type-p1-semibold)",
              textDecoration: "none",
            }}
          >
            <Icon name="24-solid-arrow-left" size={18} />
            {t.back}
          </Link>
        </div>
      </header>

      <main style={{ ...container, padding: "56px 24px 96px", display: "flex", flexDirection: "column", gap: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h1 style={{ margin: 0, font: "400 clamp(32px,5vw,44px)/1.3 var(--font-display)" }}>{t.title}</h1>
          <span style={{ font: "var(--type-p2-semibold)", color: "var(--text-secondary)" }}>{t.updated}</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            padding: "20px 24px",
            borderRadius: 12,
            background: "#FFEE00",
            color: "#262626",
          }}
        >
          <Icon name="24-solid-shield-check" size={28} color="#262626" />
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ font: "var(--type-p1-bold)" }}>{t.tldrTitle}</span>
            <span style={{ font: "400 15px/26px var(--font-body)", textWrap: "pretty" }}>{t.tldr}</span>
          </div>
        </div>

        {t.sections.map((s) => (
          <section key={s.h} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h2 style={sectionTitle}>{s.h}</h2>
            {s.p.map((para) => (
              <p key={para} style={{ ...body, color: "var(--text-primary)" }}>
                {para}
              </p>
            ))}
          </section>
        ))}

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            padding: 24,
            borderRadius: 12,
            background: "var(--surface-tint)",
          }}
        >
          <h2 style={sectionTitle}>{t.contactH}</h2>
          <p style={body}>{t.contactP}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              minHeight: 44,
              font: "var(--type-p1-bold)",
            }}
          >
            <Icon name="24-solid-envelope" size={20} />
            {CONTACT_EMAIL}
          </a>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--border-default)", marginTop: "auto" }}>
        <div
          style={{
            ...container,
            padding: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <span style={{ font: "var(--type-p2)", color: "var(--text-secondary)" }}>© 2026 Jejak</span>
          <a
            href={playUrl(lang)}
            target="_blank"
            rel="noopener"
            style={{ font: "var(--type-p2-semibold)", textDecoration: "none" }}
          >
            Google Play
          </a>
        </div>
      </footer>
    </div>
  );
}
