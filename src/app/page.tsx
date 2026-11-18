import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

/**
 * Página inicial. Cada bloco da tela é uma seção em components/sections;
 * para mudar a ordem das seções, é só mudar a ordem abaixo.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <ProjectsSection />
        <About />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
