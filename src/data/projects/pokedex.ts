import type { Project } from "../types";

/** Pokédex — busca de Pokémon com JavaScript puro (projeto de estudo). */
export const pokedex: Project = {
  slug: "pokedex",
  title: "Pokédex",
  description: "Busca de Pokémon por nome com imagem, número e tipos.",
  image: "/projects/pokedex.gif",
  repo: "https://github.com/MuriloRocha-01/Pok-dex",
  live: "https://pok-dex-sigma-three.vercel.app",
  stack: ["JavaScript", "CSS"],
  gradient: ["#7f1d1d", "#1c1917"],
  year: "2025",
  tipo: "estudo",
  detalhes: {
    resumo:
      "Uma Pokédex simples, feita só com HTML, CSS e JavaScript puro, para praticar consumo de API sem depender de framework.",
    dores: ["Consultar rápido as informações principais de um Pokémon, sem procurar em várias páginas."],
    utilidades: [
      "Busca pelo nome do Pokémon.",
      "Mostra imagem, ordem e tipos.",
      "Avisa quando o Pokémon não é encontrado.",
    ],
    tecnologias: [
      { nome: "JavaScript (ES6+)", uso: "Busca e atualização da tela." },
      { nome: "PokéAPI", uso: "Fonte dos dados e das imagens." },
      { nome: "HTML5 e CSS3", uso: "Estrutura e estilo, sem framework." },
    ],
    aprendizados: [
      "Consumir uma API com fetch e async/await.",
      "Tratar erros com try/catch e mostrar uma mensagem clara.",
      "Manipular o DOM com JavaScript puro.",
      "Separar HTML, CSS e JavaScript em arquivos.",
    ],
  },
};
