import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import { buttonPill } from "@/components/ui/buttonStyles";
import type { Project } from "@/data/types";
import ProjectCover from "./ProjectCover";

/** Título pequeno em caixa alta de cada bloco da página. */
const blockLabel = "mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent";

/** Selo que diz que tipo de projeto é (aparece só quando `tipo` está preenchido). */
function typeBadge(tipo: Project["tipo"]) {
  if (tipo === "estudo") return "Projeto de estudo";
  if (tipo === "pessoal") return "Projeto pessoal";
  return null;
}

/** Lista com "✓" na frente de cada item. `className` troca o espaçamento padrão. */
function CheckList({ items, className = "space-y-3" }: { items: string[]; className?: string }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Lista com "✦" na frente de cada item (usada nas dores do cliente). */
function SparkList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span className="mt-0.5 text-accent" aria-hidden="true">
            ✦
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/**
 * Conteúdo da página de um projeto (/projetos/[slug]), de cima para baixo:
 * voltar, capa, selos, título e resumo, links, dores e utilidades, tecnologias e
 * (só em projetos de estudo) o que foi aprendido. Os textos vêm de data/projects.
 */
export default function ProjectDetail({ project: p }: { project: Project }) {
  const { detalhes: d } = p;
  const badge = typeBadge(p.tipo);

  return (
    <main className="mx-auto max-w-4xl px-6 pb-24 pt-28">
      <Link href="/#projetos" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:text-accent">
        <ArrowLeft size={18} /> Voltar aos projetos
      </Link>

      <ProjectCover project={p} variant="detail" />

      <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs">
        {badge && <span className="rounded-full bg-ink px-3 py-1 text-bg">{badge}</span>}
        {p.live && <span className="rounded-full border border-ink px-3 py-1">online</span>}
        {p.year && <span className="text-muted">{p.year}</span>}
      </div>

      <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">{p.title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{d.resumo}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {p.live && (
          <a href={p.live} target="_blank" rel="noreferrer" className={buttonPill}>
            Abrir projeto <ArrowUpRight size={16} />
          </a>
        )}
        <a href={p.repo} target="_blank" rel="noreferrer" className={buttonPill}>
          <Github size={16} /> Código no GitHub
        </a>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {d.dores.length > 0 && (
          <section>
            <h2 className={blockLabel}>Dores que resolve</h2>
            <SparkList items={d.dores} />
          </section>
        )}
        {/* sem "dores", a coluna das utilidades ocupa a largura toda */}
        <section className={d.dores.length === 0 ? "md:col-span-2" : ""}>
          <h2 className={blockLabel}>O que ele faz</h2>
          <CheckList items={d.utilidades} />
        </section>
      </div>

      <section className="mt-14">
        <h2 className={blockLabel}>Tecnologias utilizadas</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.tecnologias.map((tech) => (
            <li key={tech.nome} className="rounded-2xl border border-border bg-surface p-5">
              <p className="font-semibold">{tech.nome}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{tech.uso}</p>
            </li>
          ))}
        </ul>
      </section>

      {p.tipo === "estudo" && d.aprendizados && d.aprendizados.length > 0 && (
        <section className="mt-14 rounded-[2rem] border-2 border-ink bg-surface p-8 md:p-10">
          <p className={blockLabel}>Projeto de estudo</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            O que eu <em className="text-accent">aprendi</em> com ele
          </h2>
          <CheckList items={d.aprendizados} className="mt-6 space-y-3" />
        </section>
      )}
    </main>
  );
}
