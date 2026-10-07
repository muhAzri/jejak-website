import type { Metadata, Viewport } from "next";
import { RootShell } from "../_components/RootShell";
import { BRAND_YELLOW, rootMetadata } from "../_lib/seo";

export const metadata: Metadata = rootMetadata("en");

export const viewport: Viewport = { themeColor: BRAND_YELLOW };

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
