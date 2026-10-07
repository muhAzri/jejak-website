import { LANDING, type Lang } from "./landing";

/** Short copy for the social share images. */
export const OG_COPY = {
  id: {
    homeSubtitle: "Rekam lari & jalan kaki — jarak, pace, dan rute. Tersimpan di HP-mu sendiri.",
    footer: "Gratis di Google Play",
    homeAlt: "Jejak — aplikasi rekam lari dan jalan kaki tanpa akun",
    privacyAlt: "Kebijakan Privasi Jejak",
  },
  en: {
    homeSubtitle: "Record runs & walks — distance, pace and route. Stored on your own phone.",
    footer: "Free on Google Play",
    homeAlt: "Jejak — a run and walk tracker with no account",
    privacyAlt: "Jejak Privacy Policy",
  },
} as const;

export const badgeFor = (lang: Lang) => LANDING[lang].badge;
