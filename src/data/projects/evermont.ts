import type { Project } from "../types";

/** Evermont — site institucional de uma consultoria, no ar com domínio próprio (Next.js). */
export const evermont: Project = {
  slug: "evermont",
  title: "Evermont",
  description: "Site de uma consultoria em estratégia, dados e tecnologia, com quatro páginas e formulário de contato.",
  repo: "https://github.com/MuriloRocha-01/Evermont",
  live: "https://evermontconsultoria.com.br",
  stack: ["Next.js", "TypeScript", "Tailwind"],
  image: "/projects/evermont.jpg",
  fit: "contain",
  gradient: ["#17376b", "#050d22"],
  year: "2026",
  detalhes: {
    resumo:
      "Site institucional de uma empresa de consultoria em estratégia, dados e tecnologia. Tem quatro páginas (Home, Sobre, Áreas de Atuação e Contato) e está no ar com domínio próprio.",
    dores: [
      "Apresentar a empresa, a experiência e as áreas de atuação de forma clara.",
      "Deixar o contato fácil de achar, com um formulário direto.",
    ],
    utilidades: [
      "Home com a proposta da consultoria e os números de experiência.",
      "Página de áreas de atuação, com os três eixos de trabalho e as etapas de como a empresa conduz a transformação.",
      "Página Sobre, com visão, missão e valores.",
      "Formulário de contato que monta o e-mail e abre o Gmail já preenchido.",
      "Layout que se adapta ao celular e ao computador.",
    ],
    decisoes: [
      {
        titulo: "Contato sem servidor",
        problema:
          "Um site institucional precisa receber contatos, mas manter um servidor de e-mail só para isso seria trabalho e custo demais.",
        solucao:
          "O formulário monta o assunto e o corpo da mensagem com o que o visitante digitou e abre o Gmail na tela de escrever, já endereçado à empresa e preenchido.",
        resultado: "Não há servidor, banco nem chave de e-mail para configurar ou manter.",
      },
      {
        titulo: "Site estático, sem aplicação rodando",
        problema: "As páginas quase não mudam, então um servidor de aplicação ligado o tempo todo não compensa.",
        solucao:
          "O Next.js está configurado com output: \"export\", que gera só arquivos (HTML, CSS e JavaScript) para um servidor web comum entregar.",
        resultado: "Carregamento rápido e uma hospedagem simples.",
      },
    ],
    tecnologias: [
      { nome: "Next.js", uso: "Páginas e rotas, exportadas como site estático." },
      { nome: "TypeScript", uso: "Tipagem do código." },
      { nome: "Tailwind CSS", uso: "Estilo e layout responsivo." },
      { nome: "Tabler e Lucide", uso: "Ícones das áreas de atuação." },
    ],
  },
};
