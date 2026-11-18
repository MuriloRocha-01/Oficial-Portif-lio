import type { Metadata, Viewport } from "next";
import { Dancing_Script, Geist_Mono, Inter_Tight, Instrument_Serif } from "next/font/google";
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

// Título e descrição padrão do site (a página de cada projeto define os seus).
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
