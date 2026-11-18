import ProjectCard from "@/components/projects/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { studyProjects } from "@/data/projects";

/**
 * Bloco "estudos": projetos feitos em cursos para praticar (os que têm `tipo: "estudo"` em data/projects).
 * Ficam separados do carrossel principal e cada página mostra o que foi aprendido.
 */
export default function StudiesSection() {
  return (
    <section id="estudos" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <SectionTitle label="/ estudos" title="estudos" accent="& prática" spacing="mb-6" />
        <p className="mb-10 max-w-lg text-muted">
          Projetos que fiz durante cursos para praticar uma tecnologia de cada vez. Em cada um, conto o que aprendi.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studyProjects.map((project) => (
            <li key={project.slug} className="flex">
              <ProjectCard p={project} fluid />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
