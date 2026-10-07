import type { Metadata } from "next";
import { RootShell } from "../_components/RootShell";
import { AUTHOR, LANDING } from "../_content/landing";

export const metadata: Metadata = {
  title: LANDING.en.metaTitle,
  description: LANDING.en.heroBody,
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
