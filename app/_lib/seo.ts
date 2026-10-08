import type { Metadata } from "next";
import { AUTHOR, LANDING, type Lang } from "../_content/landing";

/** Public origin of the site. Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://jejak.zrifapps.my.id").replace(/\/$/, "");

export const SITE_NAME = "Jejak";
export const PLAY_APP_ID = "com.muhazri.jejak";
export const BRAND_YELLOW = "#FFEE00";

const OG_LOCALE: Record<Lang, string> = { id: "id_ID", en: "en_US" };

const KEYWORDS: Record<Lang, string[]> = {
  id: [
    "aplikasi lari",
    "aplikasi jalan kaki",
    "pelacak lari",
    "rekam lari",
    "GPS lari",
    "pace lari",
    "aplikasi lari tanpa akun",
    "aplikasi lari offline",
    "privasi",
    "Android",
    "Jejak",
  ],
  en: [
    "running app",
    "walking app",
    "run tracker",
    "GPS run tracker",
    "running pace",
    "no account running app",
    "offline running app",
    "privacy-first",
    "Android",
    "Jejak",
  ],
};

/** Route pairs used for canonical + hreflang links. */
export const ROUTES = {
  home: { id: "/", en: "/en" },
  privacy: { id: "/privacy", en: "/en/privacy" },
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Shared metadata for a language's root layout. */
export function rootMetadata(lang: Lang): Metadata {
  const t = LANDING[lang];
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: t.metaTitle,
    description: t.heroBody,
    keywords: KEYWORDS[lang],
    authors: [{ name: AUTHOR }],
    creator: AUTHOR,
    publisher: AUTHOR,
    category: "health",
    formatDetection: { telephone: false, email: false, address: false },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    manifest: "/manifest.webmanifest",
    other: { "google-play-app": `app-id=${PLAY_APP_ID}` },
  };
}

/**
 * Per-page metadata: canonical, hreflang, Open Graph and Twitter card.
 * The share image comes from the segment's opengraph-image file.
 */
export function pageMetadata({
  lang,
  route,
  title,
  description,
}: {
  lang: Lang;
  route: RouteKey;
  title: string;
  description: string;
}): Metadata {
  const paths = ROUTES[route];
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: paths[lang],
      languages: { id: paths.id, en: paths.en, "x-default": paths.id },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: paths[lang],
      locale: OG_LOCALE[lang],
      alternateLocale: OG_LOCALE[lang === "id" ? "en" : "id"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
