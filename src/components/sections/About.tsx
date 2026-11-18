import Image from "next/image";
import { Mail } from "lucide-react";
import Flower from "@/components/decor/Flower";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import Reveal from "@/components/ui/Reveal";
import { milestones } from "@/data/milestones";
import { profile } from "@/data/profile";

/** Foto com a etiqueta "sobre mim" e a flor no canto. */
function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <span className="absolute -left-4 -top-5 z-10 -rotate-6 rounded-xl border-4 border-white bg-ink px-5 py-1 font-script text-4xl font-bold text-bg shadow-md">
        sobre mim
      </span>
      <Image
        src="/images/foto_perfil.jpg"
        alt={`Foto de ${profile.name}`}
        width={480}
        height={600}
        className="aspect-[4/5] w-full rounded-3xl border-[6px] border-ink object-cover grayscale"
      />
      <Flower className="absolute -bottom-5 -right-4 w-14" />
    </div>
  );
}

/** Apresentação em texto: saudação, parágrafos e áreas de atuação. */
function Introduction() {
  return (
    <div>
      <p className="font-script text-5xl font-semibold leading-tight md:text-6xl">Oi, eu sou o {profile.firstName}!</p>
      <div className="mt-5 space-y-4 text-lg leading-relaxed">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 font-semibold">Em que eu trabalho:</p>
      <ul className="mt-2 space-y-1.5">
        {profile.focusAreas.map((area) => (
          <li key={area.title}>
            <span className="mr-2 text-accent">✦</span>
            <strong>{area.title}</strong> — {area.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Linha de baixo do cartão: formação, habilidades resumidas e contatos. */
function Details() {
  return (
    <div className="mt-12 grid gap-8 border-t border-border pt-8 text-sm sm:grid-cols-3">
      <div>
        <h3 className="mb-3 font-bold">Formação e cursos</h3>
        <ul className="space-y-3">
          {milestones.map((milestone) => (
            <li key={milestone.title}>
              <p className="font-mono text-xs text-muted">{milestone.period}</p>
              <p className="font-semibold">{milestone.title}</p>
              <p className="text-muted">{milestone.place}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-3 font-bold">Habilidades</h3>
        <ul className="space-y-1 text-muted">
          {profile.skillSummary.map((item) => (
            <li key={item}>{item}</li>
          ))}
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
  );
}

/** Seção "sobre": um cartão grande com foto, texto e os detalhes. Os textos vêm de data/profile.ts. */
export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-[0_20px_50px_-30px_rgb(58_31_28/0.35)] md:p-12">
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
            <Portrait />
            <Introduction />
          </div>
          <Details />
        </div>
      </Reveal>
    </section>
  );
}
