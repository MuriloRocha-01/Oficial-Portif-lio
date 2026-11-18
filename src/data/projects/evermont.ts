import type { Project } from "../types";

/** Evermont — site institucional em Next.js. */
export const evermont: Project = {
  slug: "evermont",
  title: "Evermont",
  description: "Site institucional em Next.js com páginas Home, Área de atuação, Sobre e Contato.",
  repo: "https://github.com/MuriloRocha-01/Evermont",
  stack: ["Next.js", "TypeScript"],
  gradient: ["#065f46", "#022c22"],
  year: "2026",
  detalhes: {
    resumo: "Site institucional com quatro páginas: Home, Área de atuação, Sobre e Contato.",
    dores: ["Apresentar a marca e deixar o contato fácil de achar."],
    utilidades: ["Páginas de apresentação e de áreas de atuação.", "Página de contato com mapa do Google."],
    tecnologias: [
      { nome: "Next.js", uso: "Páginas e rotas." },
      { nome: "TypeScript", uso: "Tipagem do código." },
      { nome: "Tailwind CSS", uso: "Estilo." },
      { nome: "Google Maps", uso: "Mapa na página de contato." },
    ],
  },
};
