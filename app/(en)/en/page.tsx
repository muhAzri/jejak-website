import type { Metadata } from "next";
import { LandingPage } from "../../_components/LandingPage";

export const metadata: Metadata = {
  alternates: { canonical: "/en", languages: { id: "/", en: "/en" } },
};

export default function HomeEn() {
  return <LandingPage lang="en" />;
}
