import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: site.siteUrl ? new URL(site.siteUrl) : undefined,
  title: {
    default: "Menú Digital Inteligente con QR | Morpho — La Plata",
    template: "%s | Morpho",
  },
  description:
    "Menú digital (carta digital QR) editable desde Google Sheets. Optimizado para SEO local en La Plata, Buenos Aires, Argentina: ideal para restaurantes, bares, cervecerías y paradores. Sin apps, sin PDF, rápido y responsive.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    title: "Menú Digital Inteligente con QR | Morpho — La Plata",
    description:
      "Carta digital QR editable desde Google Sheets. Orden visual total, fotos y videos. Optimizada para Google y turismo.",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
