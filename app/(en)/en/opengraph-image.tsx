import { LANDING } from "../../_content/landing";
import { badgeFor, OG_COPY } from "../../_content/og";
import { OG_SIZE, renderOgImage } from "../../_lib/og";

export const alt = OG_COPY.en.homeAlt;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: LANDING.en.heroTitle,
    subtitle: OG_COPY.en.homeSubtitle,
    badge: badgeFor("en"),
    footer: OG_COPY.en.footer,
    distance: LANDING.en.dist,
  });
}
