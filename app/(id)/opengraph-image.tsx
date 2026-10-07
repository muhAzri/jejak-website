import { LANDING } from "../_content/landing";
import { badgeFor, OG_COPY } from "../_content/og";
import { OG_SIZE, renderOgImage } from "../_lib/og";

export const alt = OG_COPY.id.homeAlt;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: LANDING.id.heroTitle,
    subtitle: OG_COPY.id.homeSubtitle,
    badge: badgeFor("id"),
    footer: OG_COPY.id.footer,
    distance: LANDING.id.dist,
  });
}
