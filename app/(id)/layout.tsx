import type { Metadata } from "next";
import { RootShell } from "../_components/RootShell";
import { AUTHOR, LANDING } from "../_content/landing";

export const metadata: Metadata = {
  title: LANDING.id.metaTitle,
  description: LANDING.id.heroBody,
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
};

export default function IdRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="id">{children}</RootShell>;
}
