import { useId } from "react";

/** Pasta azul estilo macOS, com rótulo em fonte mono. Vira link quando recebe `href`. */
export default function Folder({
  label,
  href,
  className = "",
}: {
  label: string;
  href?: string;
  className?: string;
}) {
  // id único por pasta: os gradientes do SVG precisam de ids que não se repitam na página
  const id = useId();
  const body = (
    <>
      <svg viewBox="0 0 64 52" className="w-full drop-shadow-[0_6px_8px_rgb(58_31_28/0.18)]" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}f`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8cc3ee" />
            <stop offset="1" stopColor="#4e8fd0" />
          </linearGradient>
          <linearGradient id={`${id}b`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5aa0dc" />
            <stop offset="1" stopColor="#3b78b8" />
          </linearGradient>
        </defs>
        {/* aba de trás */}
        <path d="M4 8a4 4 0 0 1 4-4h14l6 6h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" fill={`url(#${id}b)`} />
        {/* frente da pasta */}
        <path d="M4 18a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" fill={`url(#${id}f)`} />
      </svg>
      <span className="mt-1.5 block text-center font-mono text-[11px] text-ink">{label}</span>
    </>
  );
  const cls = `block transition-transform hover:-translate-y-1 ${className}`;
  return href ? (
    <a href={href} className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}
