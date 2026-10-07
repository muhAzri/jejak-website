import type { Metadata } from "next";
import { PrivacyPage } from "../../_components/PrivacyPage";
import { PRIVACY } from "../../_content/privacy";

export const metadata: Metadata = {
  title: PRIVACY.id.metaTitle,
  description: PRIVACY.id.tldr,
  alternates: { canonical: "/privacy", languages: { id: "/privacy", en: "/en/privacy" } },
};

export default function Privacy() {
  return <PrivacyPage lang="id" />;
}
