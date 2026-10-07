import { badgeFor, OG_COPY } from "../../../_content/og";
import { PRIVACY } from "../../../_content/privacy";
import { OG_SIZE, renderOgImage } from "../../../_lib/og";

export const alt = OG_COPY.en.privacyAlt;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    title: PRIVACY.en.title,
    subtitle: PRIVACY.en.tldr,
    badge: badgeFor("en"),
    footer: OG_COPY.en.footer,
  });
}
