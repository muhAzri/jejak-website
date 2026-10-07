import type { Metadata, Viewport } from "next";
import { RootShell } from "../_components/RootShell";
import { BRAND_YELLOW, rootMetadata } from "../_lib/seo";

export const metadata: Metadata = rootMetadata("id");

export const viewport: Viewport = { themeColor: BRAND_YELLOW };

export default function IdRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="id">{children}</RootShell>;
}
