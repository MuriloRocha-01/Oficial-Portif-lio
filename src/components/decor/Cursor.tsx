/** Seta de mouse desenhada em SVG, usada como enfeite no início da página. */
export default function Cursor({ className = "" }: { className?: string }) {
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
