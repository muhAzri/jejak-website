import type { MetadataRoute } from "next";
import { LANDING } from "./_content/landing";
import { BRAND_YELLOW, SITE_NAME } from "./_lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: LANDING.id.metaTitle,
    short_name: SITE_NAME,
    description: LANDING.id.heroBody,
    lang: "id",
    start_url: "/",
    display: "browser",
    background_color: "#FFFFFF",
    theme_color: BRAND_YELLOW,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
