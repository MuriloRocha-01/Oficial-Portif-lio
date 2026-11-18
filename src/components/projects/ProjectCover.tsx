import Image from "next/image";
import type { Project } from "@/data/types";

/**
 * Onde a capa aparece. Cada lugar tem seu tamanho e seu jeito de encaixar a imagem:
 * - card: miniatura 4:3 do carrossel, com zoom suave ao passar o mouse;
 * - detail: imagem larga 16:9 no topo da página do projeto.
 */
type Variant = "card" | "detail";

const settings = {
  card: {
    frame: "relative aspect-[4/3] overflow-hidden",
    sizes: "360px",
    priority: false,
    image: (fit: Project["fit"]) =>
      `${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`,
    letter:
      "absolute inset-0 grid place-items-center font-display text-[9rem] italic leading-none text-white/20 transition-transform duration-500 group-hover:scale-110",
  },
  detail: {
    frame: "relative aspect-video overflow-hidden rounded-2xl border border-border",
    sizes: "(min-width: 896px) 896px, 100vw",
    priority: true,
    image: (fit: Project["fit"]) => (fit === "contain" ? "object-contain" : "object-cover object-top"),
    letter:
      "absolute inset-0 grid place-items-center font-display text-[12rem] italic leading-none text-white/20",
  },
} satisfies Record<Variant, unknown>;

/**
 * Capa do projeto: a imagem sobre um degradê com as cores do projeto.
 * Sem imagem, mostra a inicial do nome em letra grande.
 */
export default function ProjectCover({ project, variant }: { project: Project; variant: Variant }) {
  const s = settings[variant];
  return (
    <div
      className={s.frame}
      style={{ background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})` }}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`Demonstração do projeto ${project.title}`}
          fill
          priority={s.priority}
          // unoptimized: as capas já estão no tamanho certo e alguns são GIFs animados
          unoptimized
          sizes={s.sizes}
          className={s.image(project.fit)}
        />
      ) : (
        <span className={s.letter}>{project.title[0]}</span>
      )}
    </div>
  );
}
