import type { Metadata } from "next";
import { RootShell } from "../_components/RootShell";
import { LANDING } from "../_content/landing";

export const metadata: Metadata = {
  title: LANDING.en.metaTitle,
  description: LANDING.en.heroBody,
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
