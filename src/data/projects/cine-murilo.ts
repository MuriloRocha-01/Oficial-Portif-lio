import type { Project } from "../types";

/** Cine Murilo — vitrine de filmes (projeto de estudo com React e a API do TMDB). */
export const cineMurilo: Project = {
  slug: "cine-murilo",
  title: "Cine Murilo",
  description: "Busca de filmes recém-lançados, com favoritos e trailers.",
  image: "/projects/cinemurilo.jpg",
  fit: "contain",
  repo: "https://github.com/MuriloRocha-01/CineMurilo",
  live: "https://cine-murilo.vercel.app",
  stack: ["React", "API"],
  gradient: ["#3b0a0a", "#160404"],
  year: "2025",
  tipo: "estudo",
  detalhes: {
    resumo:
      "Meu primeiro projeto consumindo uma API de verdade: uma vitrine de filmes em cartaz onde dá para salvar favoritos e ver o trailer. Foi desenvolvido durante o curso da Sujeito Programador.",
    dores: [
      "Descobrir o que está em cartaz sem sair de um só lugar.",
      "Guardar os filmes que quero ver depois, sem criar conta.",
    ],
    utilidades: [
      "Lista de filmes recém-lançados vinda da API do TMDB.",
      "Favoritos salvos no próprio navegador.",
      "Trailer do filme.",
      "Avisos na tela quando algo dá certo, como remover um favorito.",
    ],
    tecnologias: [
      { nome: "React", uso: "Interface em componentes." },
      { nome: "React Router", uso: "Navegação entre início, favoritos e página de erro." },
      { nome: "Axios", uso: "Chamadas à API do TMDB." },
      { nome: "React Toastify", uso: "Mensagens de confirmação." },
      { nome: "CSS3", uso: "Estilo e layout." },
    ],
    aprendizados: [
      "Consumir uma API REST e tratar o carregamento dos dados.",
      "Usar useState e useEffect para buscar dados quando a tela abre.",
      "Criar rotas com React Router, incluindo uma página de erro.",
      "Guardar dados no navegador com localStorage.",
      "Dar feedback ao usuário com notificações.",
    ],
  },
};
