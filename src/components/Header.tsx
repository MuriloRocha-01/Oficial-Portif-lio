"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#projetos", label: "projetos" },
  { href: "#sobre", label: "sobre" },
  { href: "#habilidades", label: "habilidades" },
  { href: "#contato", label: "contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-sm font-semibold tracking-tight">
          desenvolvimento web
        </a>
        <a href="#" className="absolute left-1/2 hidden -translate-x-1/2 font-mono text-sm md:block">
          portfolio
        </a>
        <nav aria-label="Principal" className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold tracking-tight hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="flex flex-col border-t border-border bg-bg px-6 py-3 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 font-semibold hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
