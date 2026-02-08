import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import SmartMenuLogo from "@/components/SmartMenuLogo";
import { site } from "@/lib/site";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
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
  icons: {
    icon: "/favicon.ico.png",
    shortcut: "/favicon.ico.png",
    apple: "/favicon.ico.png",
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
    <html lang="es-AR" className="scroll-smooth">
      <body
        className={`${anton.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <SmartMenuLogo /> {/* Reminder: This might need to be inside a Header component later */}
        {children}
      </body>
    </html>
  );
}
