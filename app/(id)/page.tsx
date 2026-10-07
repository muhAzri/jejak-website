import { LandingPage } from "../_components/LandingPage";
import { LANDING } from "../_content/landing";
import { pageMetadata } from "../_lib/seo";

export const metadata = pageMetadata({
  lang: "id",
  route: "home",
  title: LANDING.id.metaTitle,
  description: LANDING.id.heroBody,
});

export default function Home() {
  return <LandingPage lang="id" />;
}
