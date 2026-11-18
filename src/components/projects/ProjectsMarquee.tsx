import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

/** Carrossel infinito: a lista é duplicada e rola -50% em loop. Pausa no hover/foco. */
export default function ProjectsMarquee() {
  return (
    <div
      className="group/marquee relative overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
      aria-label="Carrossel de projetos"
    >
      <div className="flex w-max animate-marquee gap-6 pl-6 group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused]">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
        {projects.map((p) => (
          <div key={`dup-${p.title}`} aria-hidden="true" inert className="flex">
            <ProjectCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
