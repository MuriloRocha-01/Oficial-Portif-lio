import type { Project } from "../types";

/** GranPerfil — site de uma distribuidora de ferro e aço, no ar com domínio próprio (Next.js). */
export const granperfil: Project = {
  slug: "granperfil",
  title: "GranPerfil",
  description: "Site de uma distribuidora de ferro e aço, com catálogo, calculadora de peso e pedido de orçamento pelo WhatsApp.",
  repo: "https://github.com/MuriloRocha-01/Granperfil",
  live: "https://granperfil.com.br",
  stack: ["Next.js", "TypeScript", "Tailwind"],
  image: "/projects/granperfil.jpg",
  fit: "contain",
  gradient: ["#7f1d1d", "#0a0a0b"],
  year: "2026",
  detalhes: {
    resumo:
      "Site de uma distribuidora de ferro e aço estrutural. Reúne o catálogo de produtos, uma calculadora de peso de perfis e um pedido de orçamento que chega por WhatsApp, e está no ar com domínio próprio.",
    dores: [
      "Construtoras, serralherias e fabricantes precisam ver rápido quais perfis, chapas e tubos a empresa vende.",
      "Estimar o peso do material antes de pedir o preço.",
      "Pedir orçamento sem cadastro e sem esperar a resposta de um formulário.",
    ],
    utilidades: [
      "Catálogo com cantoneira, perfis laminados, dobrados, U simples e U enrijecido, vigas, tubos, ferro redondo e barra chata.",
      "Calculadora que informa o peso por peça e por metro de perfis U (simples e enrijecido), a partir de comprimento, quantidade, espessura, base, aba e enrijecimento.",
      "Pedido de orçamento: o formulário monta a mensagem e abre o WhatsApp da empresa.",
      "Página Sobre, botão flutuante de WhatsApp e layout que se adapta ao celular e ao computador.",
    ],
    decisoes: [
      {
        titulo: "Orçamento sem back-end",
        problema:
          "A empresa precisa receber pedidos de orçamento sem manter servidor, banco de dados ou serviço de e-mail.",
        solucao:
          "O formulário junta empresa, produto e quantidade em uma mensagem e abre o WhatsApp da empresa com o texto já escrito.",
        resultado: "O pedido chega direto no canal em que a equipe já atende os clientes.",
      },
      {
        titulo: "Site estático, sem aplicação rodando",
        problema: "As páginas quase não mudam, então um servidor de aplicação ligado o tempo todo não compensa.",
        solucao:
          "O Next.js está configurado com output: \"export\", que gera só arquivos (HTML, CSS e JavaScript) para um servidor web comum entregar, e as imagens ficam sem o otimizador do Next.",
        resultado: "Carregamento rápido e uma hospedagem simples.",
      },
      {
        titulo: "O mesmo código em subpasta de teste e no domínio",
        problema:
          "Com o site em uma subpasta, os caminhos absolutos das imagens (como /assets/foto.png) deixam de funcionar.",
        solucao:
          "Uma função, getPath, monta cada caminho de imagem com o prefixo lido da variável de ambiente NEXT_PUBLIC_BASE_PATH.",
        resultado: "Trocar a variável faz o mesmo código funcionar na pasta de teste e no endereço final.",
      },
    ],
    tecnologias: [
      { nome: "Next.js", uso: "Páginas e rotas, exportadas como site estático." },
      { nome: "TypeScript", uso: "Tipagem do código." },
      { nome: "Tailwind CSS", uso: "Estilo e layout responsivo." },
      { nome: "Swiper", uso: "Carrosséis da página inicial e dos produtos." },
      { nome: "React Icons", uso: "Ícones do site." },
    ],
  },
};
