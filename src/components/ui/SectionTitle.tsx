/** Estilo do título grande das seções (também usado direto na seção de contato). */
export const sectionHeading = "text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl";

/** Palavra em destaque ao lado do título, na fonte serifada itálica. */
const accentWord =
  "ml-3 align-middle font-display text-5xl font-normal italic tracking-normal text-accent md:text-7xl";

/**
 * Cabeçalho de seção: legenda pequena ("/ projetos"), título grande e uma palavra de destaque.
 * `spacing` é a margem de baixo (classe do Tailwind) para o texto seguinte.
 */
export default function SectionTitle({
  label,
  title,
  accent,
  spacing,
}: {
  label: string;
  title: string;
  accent: string;
  spacing: "mb-6" | "mb-10";
}) {
  return (
    <>
      <p className="mb-3 font-mono text-xs">{label}</p>
      <h2 className={`${sectionHeading} ${spacing}`}>
        {title}
        <span className={accentWord}>{accent}</span>
      </h2>
    </>
  );
}
