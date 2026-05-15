import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Caveat } from "next/font/google";
import { Masthead } from "@/components/masthead";
import { Colophon } from "@/components/colophon";
import { currentEdition } from "@/data/edition";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Premio Di Nicola — ${currentEdition.numberLabel}`,
    template: "%s · Premio Di Nicola",
  },
  description:
    "Concorso annuale di Matematica e cultura generale per studenti di scuola superiore in Abruzzo. Fondato nel 2008 da Vincenzo Di Nicola.",
  keywords:
    "Premio Di Nicola, matematica, Abruzzo, studenti, scuola superiore, concorso, Teramo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Masthead />
        <main className="flex-1">{children}</main>
        <Colophon />
      </body>
    </html>
  );
}
