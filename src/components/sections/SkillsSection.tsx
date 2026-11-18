import AppTile from "@/components/decor/AppTile";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/skills";

/** Seção "habilidades": grade de ícones de tecnologias (lista em data/skills.ts). */
export default function SkillsSection() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20">
      <Reveal>
        <SectionTitle label="/ habilidades" title="habilidades" accent="& stack" spacing="mb-10" />
        <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5">
          {skills.map((skill, index) => (
            <li key={skill.name} className="flex flex-col items-center gap-2">
              <AppTile
                icon={skill.icon}
                label={skill.name}
                // os ícones pares flutuam e os ímpares ficam parados, para não se mexerem todos juntos
                className={`!size-20 transition-transform hover:-translate-y-1 hover:rotate-3 ${index % 2 ? "" : "animate-float"}`}
              />
              <span className="font-mono text-[11px]">{skill.name.toLowerCase()}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
