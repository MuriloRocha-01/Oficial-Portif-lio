/** Flor preta de 8 pétalas, enfeite do canto da foto na seção "sobre". */
export default function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g fill="#3a1f1c">
        {/* 8 círculos girados de 45 em 45 graus formam as pétalas */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx="24" cy="9" r="8" transform={`rotate(${i * 45} 24 24)`} />
        ))}
        <circle cx="24" cy="24" r="9" />
      </g>
    </svg>
  );
}
