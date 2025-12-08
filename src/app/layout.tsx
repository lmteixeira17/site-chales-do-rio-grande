import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chalés do Rio Grande | Miguelópolis - SP",
  description: "Aluguel de rancho em Miguelópolis, Pontal do Rio Grande. 4 chalés climatizados, piscina aquecida, internet Starlink e rampa para barcos. Lazer completo para 24 pessoas.",
  openGraph: {
    title: "Chalés do Rio Grande | O seu refúgio em Miguelópolis",
    description: "Rancho completo no Pontal do Rio Grande. Piscina aquecida, área gourmet e acesso ao rio.",
    url: "https://chalesdoriogrande.com.br",
    siteName: "Chalés do Rio Grande",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
