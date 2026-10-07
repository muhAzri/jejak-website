import { PrivacyPage } from "../../../_components/PrivacyPage";
import { PRIVACY } from "../../../_content/privacy";
import { pageMetadata } from "../../../_lib/seo";

export const metadata = pageMetadata({
  lang: "en",
  route: "privacy",
  title: PRIVACY.en.metaTitle,
  description: PRIVACY.en.tldr,
});

export default function PrivacyEn() {
  return <PrivacyPage lang="en" />;
}
