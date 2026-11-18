import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/types";
import { toSlug } from "@/lib/slugify";
import ProjectCover from "./ProjectCover";

/** Cartão no estilo "janela" do macOS. O clique abre a página de detalhes do projeto. */
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative flex w-[290px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_10px_30px_-12px_rgb(58_31_28/0.25)] transition-transform hover:-translate-y-1 sm:w-[360px]">
      {/* barra de título da "janela": três bolinhas, nome do app e selo "online" */}
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted">{toSlug(p.title)}.app</span>
        {p.live && (
          <span className="ml-auto rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] text-bg">online</span>
        )}
      </div>

      <Link href={`/projetos/${p.slug}`} aria-label={`Ver detalhes de ${p.title}`} className="flex flex-1 flex-col">
        <ProjectCover project={p} variant="card" />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-extrabold leading-none tracking-tight">{p.title}</h3>
            <ArrowRight className="shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent" />
          </div>
          <p className="min-h-10 text-sm leading-relaxed text-muted">{p.description}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pr-8">
            {p.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-border px-3 py-0.5 font-mono text-xs">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Link>

      {/* link do GitHub fora do <Link> acima: um link não pode ficar dentro de outro */}
      <a
        href={p.repo}
        target="_blank"
        rel="noreferrer"
        aria-label={`Código de ${p.title} no GitHub`}
        className="absolute bottom-5 right-5 text-muted transition-colors hover:text-ink"
      >
        <Github size={18} />
      </a>
    </article>
  );
}
