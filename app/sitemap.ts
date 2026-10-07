import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "./_lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(ROUTES).flatMap((paths) =>
    (["id", "en"] as const).map((lang) => ({
      url: `${SITE_URL}${paths[lang] === "/" ? "" : paths[lang]}`,
      changeFrequency: "monthly" as const,
      priority: paths === ROUTES.home ? 1 : 0.5,
      alternates: {
        languages: {
          id: `${SITE_URL}${paths.id === "/" ? "" : paths.id}`,
          en: `${SITE_URL}${paths.en}`,
        },
      },
    })),
  );
}
