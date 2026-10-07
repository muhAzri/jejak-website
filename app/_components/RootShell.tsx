import { Mochiy_Pop_One, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import type { Lang } from "../_content/landing";
import "../globals.css";

const mochiy = Mochiy_Pop_One({
  variable: "--font-mochiy",
  weight: "400",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

/** <html>/<body> shared by the Indonesian and English root layouts. */
export function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${mochiy.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
