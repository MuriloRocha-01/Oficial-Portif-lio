import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import AppTile from "@/components/decor/AppTile";
import Cursor from "@/components/decor/Cursor";
import Folder from "@/components/decor/Folder";
import { buttonGhost, buttonPrimary } from "@/components/ui/buttonStyles";
import { profile, siteYear } from "@/data/profile";

/** Moldura branca de "arquivo na área de trabalho" usada pelas miniaturas espalhadas. */
const thumbFrame =
  "absolute w-24 overflow-hidden rounded-md bg-white p-1 shadow-[0_6px_16px_rgb(58_31_28/0.18)]";

/** Miniatura com nome de arquivo embaixo, como um ícone na área de trabalho (só no desktop). */
function FileThumb({
  src,
  fileName,
  className,
  width,
  height,
  aspect,
  animated = false,
  grayscale = false,
}: {
  src: string;
  fileName: string;
  /** posição na tela (e largura, quando diferente do padrão) */
  className: string;
  width: number;
  height: number;
  /** proporção da imagem, classe do Tailwind */
  aspect: string;
  /** true para GIFs: o otimizador do Next quebraria a animação */
  animated?: boolean;
  grayscale?: boolean;
}) {
  return (
    <div className={`${thumbFrame} ${className}`}>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        unoptimized={animated}
        className={`${aspect} w-full object-cover${grayscale ? " grayscale" : ""}`}
      />
      <p className="mt-1 text-center font-mono text-[9px]">{fileName}</p>
    </div>
  );
}

/** Início da página: título gigante, botões e a "área de trabalho" com pastas, ícones e miniaturas. */
export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-10 pt-14 md:min-h-[44rem] md:pt-24">
      {/* itens espalhados (desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block [&>*]:pointer-events-auto">
        <Folder label="projetos" href="#projetos" className="absolute left-[3%] top-[28%] w-20" />
        <Folder label="sobre" href="#sobre" className="absolute right-[5%] top-[10%] w-20" />
        <Folder label="contato" href="#contato" className="absolute bottom-[14%] left-[40%] w-20" />
        <AppTile icon="nextjs" label="Next.js" className="absolute left-[2%] top-[8%] animate-float" />
        <AppTile icon="react" label="React" className="absolute right-[18%] top-[56%] animate-float [animation-delay:-2s]" />
        <AppTile icon="typescript" label="TypeScript" className="absolute left-[14%] top-[52%] animate-float [animation-delay:-4s]" />
        <FileThumb
          src="/projects/pokedex.gif"
          fileName="pokedex.gif"
          className="right-[3%] top-[36%]"
          width={96}
          height={72}
          aspect="aspect-[4/3]"
          animated
        />
        <FileThumb
          src="/images/foto_perfil.jpg"
          fileName="murilo.jpeg"
          className="bottom-[8%] left-[7%] w-20"
          width={80}
          height={100}
          aspect="aspect-[4/5]"
          grayscale
        />
        <FileThumb
          src="/projects/cinemurilo.gif"
          fileName="cine_murilo.gif"
          className="bottom-[6%] right-[8%]"
          width={96}
          height={72}
          aspect="aspect-[4/3]"
          animated
        />
      </div>

      <div className="relative text-center">
        {/* barra de menu falsa, só no celular */}
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
          <a href="#projetos" className={buttonPrimary}>
            Ver projetos <ArrowDown size={18} />
          </a>
          <a href={profile.cv} download className={buttonGhost}>
            <Download size={18} /> Baixar CV
          </a>
        </div>
        <p className="mt-6 font-display text-2xl italic">({siteYear})</p>
        <Cursor className="absolute -bottom-2 left-[58%] hidden w-9 md:block" />
      </div>

      {/* pastas no mobile (no desktop elas ficam espalhadas, acima) */}
      <div className="mt-10 grid grid-cols-3 gap-6 md:hidden">
        <Folder label="projetos" href="#projetos" />
        <Folder label="sobre" href="#sobre" />
        <Folder label="contato" href="#contato" />
      </div>
    </section>
  );
}
