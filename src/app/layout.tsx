import type { Metadata, Viewport } from "next";
import { Dancing_Script, Geist_Mono, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Inter_Tight({ variable: "--f-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--f-mono", subsets: ["latin"] });
const display = Instrument_Serif({
  variable: "--f-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const script = Dancing_Script({ variable: "--f-script", subsets: ["latin"], weight: ["600", "700"] });

export const metadata: Metadata = {
  title: "Murilo Rocha | Desenvolvedor Full Stack",
  description:
    "Portfólio de Murilo Rocha, desenvolvedor Full Stack e estudante de Sistemas de Informação. Projetos, habilidades, formação e contato.",
  openGraph: {
    title: "Murilo Rocha | Desenvolvedor Full Stack",
    description: "Projetos, habilidades, formação e contato.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f6efe4" };

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
