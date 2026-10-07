import Link from "next/link";
import type { CSSProperties } from "react";
import { AUTHOR, homeHref, LANDING, playUrl, privacyHref, type Lang } from "../_content/landing";
import { BrandLink, PlayBadge } from "./Brand";
import { Icon, type IconName } from "./Icon";
import { PhoneFrame } from "./PhoneFrame";
import { HomeScreen, MAP_GRID_DARK, PaceRoute, RecordingScreen } from "./PhoneScreens";

const FEATURE_ICONS: IconName[] = ["20-solid-bolt", "24-solid-map", "24-solid-chart-bar", "24-solid-signal-slash"];
const PRIVACY_ICONS: IconName[] = ["24-solid-user", "24-solid-device-phone-mobile", "24-solid-map-pin", "24-solid-trash"];

const container: CSSProperties = { maxWidth: 1120, width: "100%", margin: "0 auto" };
const h2: CSSProperties = {
  margin: 0,
  font: "400 clamp(28px,4vw,40px)/1.3 var(--font-display)",
  textWrap: "balance",
};
const lead: CSSProperties = {
  margin: 0,
  font: "400 16px/28px var(--font-body)",
  color: "var(--text-secondary)",
  textWrap: "pretty",
};
const statLabel: CSSProperties = { font: "var(--type-p3-semibold)", color: "#9A9A9A" };

export function LandingPage({ lang }: { lang: Lang }) {
  const t = LANDING[lang];
  const s = t.scr;
  const play = playUrl(lang);
  const otherLang: Lang = lang === "en" ? "id" : "en";

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
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "var(--surface-default)",
          borderBottom: "1px solid var(--border-default)",
        }}
      >
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
          <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a href="#fitur" className="lp-navlink" style={{ font: "var(--type-p1-semibold)", textDecoration: "none" }}>
              {t.navFeatures}
            </a>
            <a href="#privasi" className="lp-navlink" style={{ font: "var(--type-p1-semibold)", textDecoration: "none" }}>
              {t.navPrivacy}
            </a>
            <a
              href={play}
              target="_blank"
              rel="noopener"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                minHeight: 44,
                padding: "0 20px",
                borderRadius: 999,
                background: "#262626",
                color: "#fff",
                font: "var(--type-p1-bold)",
                textDecoration: "none",
              }}
            >
              <Icon name="24-solid-arrow-down-tray" size={18} color="#fff" />
              {t.download}
            </a>
          </nav>
        </div>
      </header>

      <main style={{ display: "flex", flexDirection: "column" }}>
        {/* Hero */}
        <section style={{ background: "#FFEE00", color: "#262626" }}>
          <div
            className="lp-hero"
            style={{
              ...container,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(320px,100%),1fr))",
              alignItems: "end",
            }}
          >
            <div className="lp-hero-copy" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <span
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 8,
                  background: "#262626",
                  color: "#FFEE00",
                  font: "var(--type-p3-bold)",
                }}
              >
                <Icon name="24-solid-lock-closed" size={14} color="#FFEE00" />
                {t.badge}
              </span>
              <h1
                style={{
                  margin: 0,
                  font: "400 clamp(40px,6vw,64px)/1.15 var(--font-display)",
                  textWrap: "balance",
                }}
              >
                {t.heroTitle}
              </h1>
              <p style={{ margin: 0, maxWidth: 480, font: "400 18px/30px var(--font-body)", textWrap: "pretty" }}>
                {t.heroBody}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 8 }}>
                <PlayBadge href={play} label={t.getItOn} />
                <span style={{ font: "var(--type-p2-semibold)" }}>{t.free}</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "4%",
                alignItems: "flex-end",
                minWidth: 0,
                maxWidth: "100%",
              }}
            >
              <PhoneFrame
                initialScale={0.52}
                frameStyle={{
                  flex: "0 1 220px",
                  minWidth: 0,
                  aspectRatio: "1/2",
                  borderRadius: "32px 32px 0 0",
                  border: "8px solid #262626",
                  borderBottom: 0,
                  overflow: "hidden",
                  background: "#fff",
                }}
                screenStyle={{ background: "#fff", color: "#262626" }}
              >
                <HomeScreen s={s} />
              </PhoneFrame>
              <PhoneFrame
                initialScale={0.57}
                frameStyle={{
                  flex: "0 1 240px",
                  minWidth: 0,
                  aspectRatio: "12/25",
                  borderRadius: "34px 34px 0 0",
                  border: "8px solid #262626",
                  borderBottom: 0,
                  overflow: "hidden",
                  background: "#0B0B0B",
                }}
                screenStyle={{ background: "#0B0B0B", color: "#F2F2F2" }}
              >
                <RecordingScreen s={s} />
              </PhoneFrame>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="fitur"
          className="lp-features"
          style={{ ...container, display: "flex", flexDirection: "column" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 640 }}>
            <h2 style={h2}>{t.featTitle}</h2>
            <p style={lead}>{t.featBody}</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(240px,100%),1fr))",
              gap: 16,
            }}
          >
            {t.features.map((f, i) => (
              <div
                key={f.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  padding: 24,
                  borderRadius: 12,
                  background: "var(--surface-tint)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#FFEE00",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name={FEATURE_ICONS[i]} size={24} color="#262626" />
                </div>
                <h3 style={{ margin: 0, font: "var(--type-h2)" }}>{f.title}</h3>
                <p style={{ margin: 0, font: "var(--type-p1)", color: "var(--text-secondary)", textWrap: "pretty" }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample session */}
        <section className="lp-sample-sec" style={container}>
          <div
            className="lp-sample"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              alignItems: "center",
              borderRadius: 12,
              background: "#0B0B0B",
              color: "#F2F2F2",
            }}
          >
            <div className="lp-sample-map" style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: "#161616" }}>
              <div style={{ position: "absolute", inset: 0, ...MAP_GRID_DARK }}>
                <PaceRoute gradientId="lpg2" />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: 12,
                  bottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 10px",
                  borderRadius: 8,
                  background: "#161616",
                  color: "#F2F2F2",
                  font: "var(--type-p3)",
                }}
              >
                <span>{s.slow}</span>
                <div
                  style={{
                    width: 56,
                    height: 6,
                    borderRadius: 999,
                    background: "linear-gradient(90deg,#9A9A9A,#FFEE00,#DB0826)",
                  }}
                />
                <span>{s.fast}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, fontVariantNumeric: "tabular-nums" }}>
              <span style={statLabel}>{t.statLabel}</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span style={{ font: "400 clamp(56px,8vw,88px)/1.1 var(--font-display)" }}>{t.dist}</span>
                <span style={{ font: "700 18px/28px var(--font-body)", color: "#9A9A9A" }}>km</span>
              </div>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={statLabel}>{t.duration}</span>
                  <span style={{ font: "400 28px/40px var(--font-display)" }}>28:41</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={statLabel}>{t.pace}</span>
                  <span style={{ font: "400 28px/40px var(--font-display)" }}>5:28</span>
                </div>
              </div>
              <p style={{ margin: 0, font: "400 16px/28px var(--font-body)", color: "#C9C9C9", textWrap: "pretty" }}>
                {t.statBody}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy */}
        <section id="privasi" style={{ background: "var(--surface-tint)" }}>
          <div
            className="lp-section"
            style={{
              ...container,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "#FFEE00",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon name="24-solid-shield-check" size={36} color="#262626" />
              </div>
              <h2 style={h2}>{t.privTitle}</h2>
              <p style={lead}>{t.privBody}</p>
              <Link
                href={privacyHref(lang)}
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 48,
                  padding: "0 20px",
                  borderRadius: 999,
                  background: "var(--surface-default)",
                  boxShadow: "inset 0 0 0 1px var(--border-default)",
                  font: "var(--type-p1-bold)",
                  textDecoration: "none",
                }}
              >
                {t.readPolicy}
                <Icon name="20-solid-arrow-right" size={18} />
              </Link>
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                borderRadius: 12,
                background: "var(--surface-default)",
              }}
            >
              {t.privItems.map((p, i) => (
                <li
                  key={p.title}
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "flex-start",
                    padding: "20px 24px",
                    borderTop: i ? "1px solid var(--border-default)" : 0,
                  }}
                >
                  <Icon name={PRIVACY_ICONS[i]} size={24} color="var(--text-primary)" style={{ marginTop: 2 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ font: "var(--type-p1-bold)" }}>{p.title}</span>
                    <span style={{ font: "var(--type-p2)", color: "var(--text-secondary)", textWrap: "pretty" }}>
                      {p.body}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          className="lp-section"
          style={{
            ...container,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            textAlign: "center",
          }}
        >
          <h2 style={h2}>{t.ctaTitle}</h2>
          <p style={{ ...lead, maxWidth: 520 }}>{t.ctaBody}</p>
          <PlayBadge href={play} label={t.getItOn} />
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--border-default)", marginTop: "auto" }}>
        <div
          style={{
            ...container,
            padding: 24,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <span style={{ font: "var(--type-p2)", color: "var(--text-secondary)" }}>
            © 2026 Jejak · {LANDING[lang].madeBy} {AUTHOR}
          </span>
          <nav style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <Link href={privacyHref(lang)} style={{ font: "var(--type-p2-semibold)", textDecoration: "none" }}>
              {t.policy}
            </Link>
            <a href={play} target="_blank" rel="noopener" style={{ font: "var(--type-p2-semibold)", textDecoration: "none" }}>
              Google Play
            </a>
            <a
              href={homeHref(otherLang)}
              hrefLang={otherLang}
              style={{ font: "var(--type-p2-semibold)", textDecoration: "none" }}
            >
              {t.otherLang}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
