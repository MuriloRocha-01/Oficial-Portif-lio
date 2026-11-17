import Image from "next/image";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { AppTile, Cursor, Flower, Folder } from "@/components/Desktop";
import Header from "@/components/Header";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import Reveal from "@/components/Reveal";
import { milestones, profile, skills } from "@/data/site";

const h2 = "text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl";
const accentWord =
  "ml-3 align-middle font-display text-5xl font-normal italic tracking-normal text-accent md:text-7xl";
const btnPrimary =
  "inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-bg transition-transform hover:-translate-y-0.5";
const btnGhost =
  "inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-bg";
const thumb = "absolute w-24 overflow-hidden rounded-md bg-white p-1 shadow-[0_6px_16px_rgb(58_31_28/0.18)]";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-14 md:min-h-[44rem] md:pt-24">
          {/* itens espalhados (desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block [&>*]:pointer-events-auto">
            <Folder label="projetos" href="#projetos" className="absolute left-[3%] top-[28%] w-20" />
            <Folder label="sobre" href="#sobre" className="absolute right-[5%] top-[10%] w-20" />
            <Folder label="contato" href="#contato" className="absolute bottom-[14%] left-[40%] w-20" />
            <AppTile icon="nextjs" label="Next.js" className="absolute left-[2%] top-[8%] animate-float" />
            <AppTile icon="react" label="React" className="absolute right-[18%] top-[56%] animate-float [animation-delay:-2s]" />
            <AppTile icon="typescript" label="TypeScript" className="absolute left-[14%] top-[52%] animate-float [animation-delay:-4s]" />
            <div className={`${thumb} right-[3%] top-[36%]`}>
              <Image src="/projects/pokedex.gif" alt="" width={96} height={72} unoptimized className="aspect-[4/3] w-full object-cover" />
              <p className="mt-1 text-center font-mono text-[9px]">pokedex.gif</p>
            </div>
            <div className={`${thumb} bottom-[8%] left-[7%] w-20`}>
              <Image src="/images/foto_perfil.jpg" alt="" width={80} height={100} className="aspect-[4/5] w-full object-cover grayscale" />
              <p className="mt-1 text-center font-mono text-[9px]">murilo.jpeg</p>
            </div>
            <div className={`${thumb} bottom-[6%] right-[8%]`}>
              <Image src="/projects/cinemurilo.gif" alt="" width={96} height={72} unoptimized className="aspect-[4/3] w-full object-cover" />
              <p className="mt-1 text-center font-mono text-[9px]">cine_murilo.gif</p>
            </div>
          </div>

          <div className="relative text-center">
            <p className="mx-auto mb-6 flex max-w-xl justify-between font-mono text-xs md:hidden">
              <span>web</span>
              <span>portfolio</span>
              <span>projetos</span>
            </p>
            <div className="relative inline-block">
              <span className="absolute -left-2 -top-8 -rotate-6 font-display text-5xl italic text-accent sm:text-7xl md:-left-24 md:-top-14 md:text-8xl">
                desenvolvedor
              </span>
              <h1 className="text-[22vw] font-black leading-[0.85] tracking-tighter sm:text-[9rem] md:text-[13rem]">
                portfolio
              </h1>
            </div>
            <p className="mx-auto mt-6 max-w-md text-lg text-muted">
              {profile.name} — {profile.role}. {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#projetos" className={btnPrimary}>
                Ver projetos <ArrowDown size={18} />
              </a>
              <a href={profile.cv} download className={btnGhost}>
                <Download size={18} /> Baixar CV
              </a>
            </div>
            <p className="mt-6 font-display text-2xl italic">(2025)</p>
            <Cursor className="absolute -bottom-2 left-[58%] hidden w-9 md:block" />
          </div>

          {/* pastas no mobile */}
          <div className="mt-10 grid grid-cols-3 gap-6 md:hidden">
            <Folder label="projetos" href="#projetos" />
            <Folder label="sobre" href="#sobre" />
            <Folder label="contato" href="#contato" />
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="scroll-mt-20 overflow-hidden py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="mb-3 font-mono text-xs">/ projetos</p>
              <h2 className={`${h2} mb-6`}>
                projetos
                <span className={accentWord}>que criei</span>
              </h2>
              <p className="mb-6 max-w-lg text-muted">
                Alguns trabalhos meus, do front-end ao full stack. Clique para abrir o projeto online ou o código.
              </p>
            </Reveal>
          </div>
          <ProjectsMarquee />
        </section>

        {/* SOBRE */}
        <section id="sobre" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_20px_50px_-30px_rgb(58_31_28/0.35)] md:p-12">
              <div className="grid items-start gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
                <div className="relative mx-auto w-full max-w-xs">
                  <span className="absolute -left-4 -top-5 z-10 -rotate-6 rounded-xl border-4 border-white bg-ink px-5 py-1 font-script text-4xl font-bold text-bg shadow-md">
                    sobre mim
                  </span>
                  <Image
                    src="/images/foto_perfil.jpg"
                    alt="Foto de Murilo Rocha"
                    width={480}
                    height={600}
                    className="aspect-[4/5] w-full rounded-3xl border-[6px] border-ink object-cover grayscale"
                  />
                  <Flower className="absolute -bottom-5 -right-4 w-14" />
                </div>
                <div>
                  <p className="font-script text-5xl font-semibold leading-tight md:text-6xl">
                    Oi, eu sou o {profile.firstName}!
                  </p>
                  <div className="mt-5 space-y-4 text-lg leading-relaxed">
                    {profile.about.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  <p className="mt-6 font-semibold">Em que eu trabalho:</p>
                  <ul className="mt-2 space-y-1.5">
                    <li>
                      <span className="mr-2 text-accent">✦</span>
                      <strong>Front-end</strong> — interfaces responsivas e acessíveis com React e Next.js
                    </li>
                    <li>
                      <span className="mr-2 text-accent">✦</span>
                      <strong>Full stack</strong> — APIs, integração e publicação de projetos web
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 grid gap-8 border-t border-border pt-8 text-sm sm:grid-cols-3">
                <div>
                  <h3 className="mb-3 font-bold">Formação e cursos</h3>
                  <ul className="space-y-3">
                    {milestones.map((m) => (
                      <li key={m.title}>
                        <p className="font-mono text-xs text-muted">{m.period}</p>
                        <p className="font-semibold">{m.title}</p>
                        <p className="text-muted">{m.place}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">Habilidades</h3>
                  <ul className="space-y-1 text-muted">
                    <li>Desenvolvimento web responsivo</li>
                    <li>React, Next.js e TypeScript</li>
                    <li>Node.js e APIs</li>
                    <li>Trabalho em equipe e comunicação</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-bold">Contatos</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href={`mailto:${profile.email}`} className="flex items-center gap-2 break-all hover:text-accent">
                        <Mail size={16} /> {profile.email}
                      </a>
                    </li>
                    <li>
                      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent">
                        <Linkedin size={16} /> LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent">
                        <Github size={16} /> GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
          <Reveal>
            <p className="mb-3 font-mono text-xs">/ habilidades</p>
            <h2 className={`${h2} mb-10`}>
              habilidades
              <span className={accentWord}>& stack</span>
            </h2>
            <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5">
              {skills.map((s, i) => (
                <li key={s.name} className="flex flex-col items-center gap-2">
                  <AppTile
                    icon={s.icon}
                    label={s.name}
                    className={`!size-20 transition-transform hover:-translate-y-1 hover:rotate-3 ${i % 2 ? "" : "animate-float"}`}
                  />
                  <span className="font-mono text-[11px]">{s.name.toLowerCase()}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* CONTATO */}
        <section id="contato" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 text-center">
          <Reveal>
            <div className="mx-auto mb-4 w-24">
              <Folder label="contato" />
            </div>
            <h2 className={h2}>
              vamos <span className="font-display font-normal italic tracking-normal text-accent">conversar</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-muted">
              Aberto a oportunidades como Desenvolvedor Front-end / Full Stack e a projetos freelance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${profile.email}`} className={btnPrimary}>
                <Mail size={18} /> Enviar e-mail
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btnGhost}>
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className={btnGhost}>
                <Github size={18} /> GitHub
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">
        © 2025 Murilo Rocha de Lima. Todos os direitos reservados.
      </footer>
    </>
  );
}
