import { Mail } from "lucide-react";
import Folder from "@/components/decor/Folder";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { buttonGhost, buttonPrimary } from "@/components/ui/buttonStyles";
import Reveal from "@/components/ui/Reveal";
import { sectionHeading } from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

/** Seção final "vamos conversar?": chamada e botões de e-mail, LinkedIn e GitHub. */
export default function Contact() {
  return (
    <section id="contato" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24 text-center">
      <Reveal>
        <div className="mx-auto mb-4 w-24">
          <Folder label="contato" />
        </div>
        <h2 className={sectionHeading}>
          vamos <span className="font-display font-normal italic tracking-normal text-accent">conversar</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-muted">{profile.contactPitch}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${profile.email}`} className={buttonPrimary}>
            <Mail size={18} /> Enviar e-mail
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={buttonGhost}>
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={buttonGhost}>
            <Github size={18} /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
