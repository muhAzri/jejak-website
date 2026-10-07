import { PrivacyPage } from "../../_components/PrivacyPage";
import { PRIVACY } from "../../_content/privacy";
import { pageMetadata } from "../../_lib/seo";

export const metadata = pageMetadata({
  lang: "id",
  route: "privacy",
  title: PRIVACY.id.metaTitle,
  description: PRIVACY.id.tldr,
});

export default function Privacy() {
  return <PrivacyPage lang="id" />;
}
