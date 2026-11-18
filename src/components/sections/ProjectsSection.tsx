import ProjectsMarquee from "@/components/projects/ProjectsMarquee";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

/** Seção "projetos": título e o carrossel de cards (a lista vem de data/projects). */
export default function ProjectsSection() {
  return (
    <section id="projetos" className="scroll-mt-20 overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionTitle label="/ projetos" title="projetos" accent="que criei" spacing="mb-6" />
          <p className="mb-6 max-w-lg text-muted">
            Alguns trabalhos meus, do front-end ao full stack. Clique para abrir o projeto online ou o código.
          </p>
        </Reveal>
      </div>
      <ProjectsMarquee />
    </section>
  );
}
