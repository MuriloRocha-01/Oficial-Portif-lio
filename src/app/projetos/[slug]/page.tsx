import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import Header from "@/components/Header";
import { projects } from "@/data/site";

const label = "mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent";
const pill =
  "inline-flex items-center gap-2 rounded-full border-2 border-ink px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-bg";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title} | Murilo Rocha`, description: p.detalhes.resumo };
}

export default async function ProjetoPage(props: PageProps<"/projetos/[slug]">) {
  const { slug } = await props.params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const { detalhes: d } = p;
  const selo = p.tipo === "estudo" ? "Projeto de estudo" : p.tipo === "pessoal" ? "Projeto pessoal" : null;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-28">
        <Link
          href="/#projetos"
          className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold hover:text-accent"
        >
          <ArrowLeft size={18} /> Voltar aos projetos
        </Link>

        <div
          className="relative aspect-video overflow-hidden rounded-2xl border border-border"
          style={{ background: `linear-gradient(135deg, ${p.gradient[0]}, ${p.gradient[1]})` }}
        >
          {p.image ? (
            <Image
              src={p.image}
              alt={`Demonstração do projeto ${p.title}`}
              fill
              priority
              unoptimized
              sizes="(min-width: 896px) 896px, 100vw"
              className={p.fit === "contain" ? "object-contain" : "object-cover object-top"}
            />
          ) : (
            <span className="absolute inset-0 grid place-items-center font-display text-[12rem] italic leading-none text-white/20">
              {p.title[0]}
            </span>
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs">
          {selo && <span className="rounded-full bg-ink px-3 py-1 text-bg">{selo}</span>}
          {p.live && <span className="rounded-full border border-ink px-3 py-1">online</span>}
          {p.year && <span className="text-muted">{p.year}</span>}
        </div>

        <h1 className="mt-4 font-display text-5xl leading-none md:text-7xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{d.resumo}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" className={pill}>
              Abrir projeto <ArrowUpRight size={16} />
            </a>
          )}
          <a href={p.repo} target="_blank" rel="noreferrer" className={pill}>
            <Github size={16} /> Código no GitHub
          </a>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {d.dores.length > 0 && (
            <section>
              <h2 className={label}>Dores que resolve</h2>
              <ul className="space-y-3">
                {d.dores.map((t) => (
                  <li key={t} className="flex gap-3 leading-relaxed">
                    <span className="mt-0.5 text-accent" aria-hidden="true">
                      ✦
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section className={d.dores.length === 0 ? "md:col-span-2" : ""}>
            <h2 className={label}>O que ele faz</h2>
            <ul className="space-y-3">
              {d.utilidades.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-14">
          <h2 className={label}>Tecnologias utilizadas</h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.tecnologias.map((t) => (
              <li key={t.nome} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-semibold">{t.nome}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{t.uso}</p>
              </li>
            ))}
          </ul>
        </section>

        {p.tipo === "estudo" && d.aprendizados && d.aprendizados.length > 0 && (
          <section className="mt-14 rounded-[2rem] border-2 border-ink bg-surface p-8 md:p-10">
            <p className={label}>Projeto de estudo</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              O que eu <em className="text-accent">aprendi</em> com ele
            </h2>
            <ul className="mt-6 space-y-3">
              {d.aprendizados.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <Check size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © 2025 Murilo Rocha de Lima. Todos os direitos reservados.
      </footer>
    </>
  );
}
