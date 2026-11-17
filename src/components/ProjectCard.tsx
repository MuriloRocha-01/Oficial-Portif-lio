import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import type { Project } from "@/data/site";

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

/** Cartão no estilo "janela" do macOS. */
export default function ProjectCard({ p }: { p: Project }) {
  const href = p.live ?? p.repo;
  return (
    <article className="group relative flex w-[290px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_10px_30px_-12px_rgb(58_31_28/0.25)] transition-transform hover:-translate-y-1 sm:w-[360px]">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate font-mono text-[11px] text-muted">{slug(p.title)}.app</span>
        {p.live && (
          <span className="ml-auto rounded-full bg-ink px-2 py-0.5 font-mono text-[10px] text-bg">online</span>
        )}
      </div>
      <a href={href} target="_blank" rel="noreferrer" aria-label={`Abrir ${p.title}`} className="flex flex-1 flex-col">
        <div
          className="relative aspect-[4/3] overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
        >
          {p.image ? (
            <Image
              src={p.image}
              alt={`Demonstração do projeto ${p.title}`}
              fill
              unoptimized
              sizes="360px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="absolute inset-0 grid place-items-center font-display text-[9rem] italic leading-none text-white/20 transition-transform duration-500 group-hover:scale-110">
              {p.title[0]}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-extrabold leading-none tracking-tight">{p.title}</h3>
            <ArrowUpRight className="shrink-0 text-muted transition-colors group-hover:text-accent" />
          </div>
          <p className="min-h-10 text-sm leading-relaxed text-muted">{p.description}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pr-8">
            {p.stack.map((s) => (
              <li key={s} className="rounded-full border border-border px-3 py-0.5 font-mono text-xs">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </a>
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
