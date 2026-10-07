import type { Metadata } from "next";
import { PrivacyPage } from "../../../_components/PrivacyPage";
import { PRIVACY } from "../../../_content/privacy";

export const metadata: Metadata = {
  title: PRIVACY.en.metaTitle,
  description: PRIVACY.en.tldr,
  alternates: { canonical: "/en/privacy", languages: { id: "/privacy", en: "/en/privacy" } },
};

export default function PrivacyEn() {
  return <PrivacyPage lang="en" />;
}
