import { useId } from "react";

/** Pasta azul estilo macOS, com rótulo em mono. */
export function Folder({
  label,
  href,
  className = "",
}: {
  label: string;
  href?: string;
  className?: string;
}) {
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
        <path d="M4 8a4 4 0 0 1 4-4h14l6 6h28a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" fill={`url(#${id}b)`} />
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

export function Cursor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" className={className} aria-hidden="true">
      <path
        d="M3 2v21l5.5-5 3.5 8 3.5-1.5-3.5-8h7.5z"
        fill="#fff"
        stroke="#3a1f1c"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Ícone de app em tile arredondado. */
export function AppTile({ icon, label, className = "" }: { icon: string; label: string; className?: string }) {
  return (
    <div
      className={`grid size-14 place-items-center rounded-2xl bg-white shadow-[0_6px_16px_rgb(58_31_28/0.12)] ${className}`}
      title={label}
    >
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

export function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="#3a1f1c">
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx="24" cy="9" r="8" transform={`rotate(${i * 45} 24 24)`} />
        ))}
        <circle cx="24" cy="24" r="9" />
      </g>
    </svg>
  );
}
