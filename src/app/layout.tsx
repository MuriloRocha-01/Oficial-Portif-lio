import type { Metadata, Viewport } from "next";
import { Dancing_Script, Geist_Mono, Inter_Tight, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import { defaultOgImage, siteDescription, siteKeywords, siteTitle, siteUrl } from "@/data/seo";
import "./globals.css";

// Fontes do Google carregadas pelo Next (sem pedir nada ao Google no navegador).
// Cada uma vira uma variável CSS (--f-*) que o globals.css liga aos nomes font-sans, font-mono, etc.
const sans = Inter_Tight({ variable: "--f-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--f-mono", subsets: ["latin"] });
const display = Instrument_Serif({
  variable: "--f-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const script = Dancing_Script({ variable: "--f-script", subsets: ["latin"], weight: ["600", "700"] });

/**
 * Metadados do site inteiro (o que Google, WhatsApp e LinkedIn leem).
 * - title.template: as páginas de projeto só informam o nome ("Pokédex") e saem como "Pokédex | Murilo Rocha".
 * - A imagem de compartilhamento é public/og-image.jpg (veja defaultOgImage em data/seo.ts).
 * - metadataBase transforma endereços relativos ("/") em completos, como os cartões exigem.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | Murilo Rocha" },
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: "Portfólio de Murilo Rocha",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Portfólio de Murilo Rocha",
    locale: "pt_BR",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: [defaultOgImage] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

// Cor da barra do navegador no celular.
export const viewport: Viewport = { themeColor: "#f6efe4" };

/** Estrutura comum a todas as páginas: idioma, fontes e o <body>. */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${mono.variable} ${display.variable} ${script.variable} antialiased`}
    >
      <body className="min-h-dvh overflow-x-hidden">{children}</body>
    </html>
  );
}
