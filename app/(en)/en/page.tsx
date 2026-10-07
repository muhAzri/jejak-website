import { LandingPage } from "../../_components/LandingPage";
import { LANDING } from "../../_content/landing";
import { pageMetadata } from "../../_lib/seo";

export const metadata = pageMetadata({
  lang: "en",
  route: "home",
  title: LANDING.en.metaTitle,
  description: LANDING.en.heroBody,
});

export default function HomeEn() {
  return <LandingPage lang="en" />;
}
