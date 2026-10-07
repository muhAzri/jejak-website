import type { Metadata } from "next";
import { LandingPage } from "../_components/LandingPage";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { id: "/", en: "/en" } },
};

export default function Home() {
  return <LandingPage lang="id" />;
}
