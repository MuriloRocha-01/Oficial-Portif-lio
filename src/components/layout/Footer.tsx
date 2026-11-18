import { copyright } from "@/data/profile";

/** Rodapé com os direitos autorais. Aparece em todas as páginas. */
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted">{copyright}</footer>
  );
}
