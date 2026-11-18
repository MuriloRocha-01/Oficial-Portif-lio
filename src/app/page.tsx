import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import JsonLd from "@/components/seo/JsonLd";
import SkillsSection from "@/components/sections/SkillsSection";
import StudiesSection from "@/components/sections/StudiesSection";
import { homeStructuredData } from "@/lib/structuredData";

// endereço oficial da página inicial: evita o Google tratar variações da URL como páginas diferentes
export const metadata: Metadata = { alternates: { canonical: "/" } };

/**
 * Página inicial. Cada bloco da tela é uma seção em components/sections;
 * para mudar a ordem das seções, é só mudar a ordem abaixo.
 */
export default function Home() {
  return (
    <>
      <JsonLd data={homeStructuredData()} />
      <Header />
      <main className="pt-16">
        <Hero />
        <ProjectsSection />
        <StudiesSection />
        <About />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
