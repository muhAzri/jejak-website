import { badgeFor, OG_COPY } from "../../_content/og";
import { PRIVACY } from "../../_content/privacy";
import { OG_SIZE, renderOgImage } from "../../_lib/og";

export const alt = OG_COPY.id.privacyAlt;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: PRIVACY.id.title,
    subtitle: PRIVACY.id.tldr,
    badge: badgeFor("id"),
    footer: OG_COPY.id.footer,
  });
}
