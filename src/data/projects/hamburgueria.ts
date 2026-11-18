import type { Project } from "../types";

/** Hamburgueria — cardápio digital por QR Code, em desenvolvimento. */
export const hamburgueria: Project = {
  slug: "hamburgueria",
  title: "Hamburgueria",
  description: "Cardápio digital por QR Code: o cliente pede pela mesa e o pedido é gravado direto no banco.",
  repo: "https://github.com/MuriloRocha-01/hamburgueria",
  stack: ["Expo", "Node.js", "PostgreSQL"],
  image: "/projects/hamburgueria.jpg",
  fit: "contain",
  gradient: ["#9a3412", "#1c1917"],
  year: "2026",
  detalhes: {
    resumo:
      "App de cardápio digital para hamburgueria, em desenvolvimento. O cliente identifica a mesa, escolhe os pratos e envia o pedido, que uma API própria grava no PostgreSQL. A tela da cozinha é a próxima etapa.",
    dores: [
      "Cliente esperando o garçom só para ver o cardápio ou fazer o pedido.",
      "Pedido anotado errado ou perdido no caminho até a cozinha.",
      "Cozinha sem uma visão única dos pedidos abertos.",
    ],
    utilidades: [
      "Identificação da mesa por QR Code ou digitando o número.",
      "Cardápio com busca, categorias e fotos dos pratos, vindo do banco.",
      "Carrinho com quantidades e total, e envio do pedido.",
      "API em camadas (rotas, serviços e repositórios) que avisa novos pedidos por sockets.",
    ],
    tecnologias: [
      { nome: "Expo e React Native", uso: "App que roda no celular e na web." },
      { nome: "NativeWind", uso: "Estilo com classes Tailwind." },
      { nome: "Node.js, Express e TypeScript", uso: "API em camadas." },
      { nome: "PostgreSQL (Supabase)", uso: "Cardápio, mesas e pedidos." },
      { nome: "Socket.IO", uso: "Aviso de pedidos em tempo real." },
    ],
  },
};
