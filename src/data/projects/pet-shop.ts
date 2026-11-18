import type { Project } from "../types";

/** Pet Shop — loja de produtos para pets com carrinho (projeto de estudo). */
export const petShop: Project = {
  slug: "pet-shop",
  title: "Pet Shop",
  description: "Loja de produtos para pets com carrinho, quantidade e finalização de pedido simulada.",
  repo: "https://github.com/MuriloRocha-01/Pet-shop-Stude-React",
  live: "https://pet-shop-wheat-delta.vercel.app",
  stack: ["React", "TypeScript", "Tailwind"],
  image: "/projects/petshop.jpg",
  fit: "contain",
  gradient: ["#166534", "#052e16"],
  year: "2026",
  tipo: "estudo",
  detalhes: {
    resumo:
      "Uma loja virtual de produtos para pets que fiz para estudar React com TypeScript. Depois, revisei o carrinho e a interface para funcionarem bem no celular e no computador.",
    dores: [
      "Ver os produtos e os preços de forma clara, em qualquer tela.",
      "Saber quanto vai pagar antes de finalizar a compra.",
    ],
    utilidades: [
      "Lista de produtos e página de detalhes de cada um.",
      "Carrinho com quantidade, total e opção de remover itens.",
      "Finalização de pedido simulada, sem pagamento real.",
      "Funciona no celular e no PC, e dá para usar só com o teclado.",
    ],
    tecnologias: [
      { nome: "React", uso: "Interface em componentes." },
      { nome: "TypeScript", uso: "Tipagem de produtos e carrinho." },
      { nome: "React Router", uso: "Rotas da loja, do produto e do carrinho." },
      { nome: "Context API", uso: "Estado do carrinho compartilhado entre as telas." },
      { nome: "Tailwind CSS", uso: "Estilo e layout responsivo." },
      { nome: "Vite", uso: "Ambiente de desenvolvimento e build." },
    ],
    aprendizados: [
      "Gerenciar o estado global do carrinho com Context API.",
      "Atualizar o estado sem duplicar produto em cliques rápidos.",
      "Criar rotas com React Router, inclusive a página de produto não encontrado.",
      "Fazer layout responsivo com Tailwind para celular e PC.",
      "Cuidar de UX: aviso ao adicionar, botões de 44 px e foco visível no teclado.",
      "Trocar um servidor de mentira (json-server) por dados locais para publicar na Vercel.",
    ],
  },
};
