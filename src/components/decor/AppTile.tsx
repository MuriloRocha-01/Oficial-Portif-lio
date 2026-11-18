/**
 * Ícone de tecnologia dentro de um quadrado arredondado, como um app do celular.
 * `icon` é o nome da pasta no Devicon (ex.: "react", "nextjs").
 */
export default function AppTile({ icon, label, className = "" }: { icon: string; label: string; className?: string }) {
  return (
    <div
      className={`grid size-14 place-items-center rounded-2xl bg-white shadow-[0_6px_16px_rgb(58_31_28/0.12)] ${className}`}
      title={label}
    >
      {/* <img> comum: o ícone é um SVG externo e pequeno, não precisa do otimizador do Next */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
        alt={label}
        width={32}
        height={32}
      />
    </div>
  );
}
