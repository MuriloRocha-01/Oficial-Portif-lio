export const profile = {
  name: "Murilo Rocha",
  firstName: "Murilo",
  role: "Desenvolvedor Full Stack",
  tagline: "Transformo ideias em interfaces bonitas, rápidas e funcionais.",
  email: "murilorochadelima.10@gmail.com",
  github: "https://github.com/MuriloRocha-01",
  linkedin: "https://www.linkedin.com/in/murilo-rocha-6706a41aa/",
  cv: "http://drive.google.com/u/0/uc?id=1UN4TcHKidxjti1-4qZE_n5zw9PrQwScJ&export=download",
  location: "Peruíbe, SP",
  about: [
    "Desde pequeno sou apaixonado por tecnologia, principalmente pelo meu amor por jogos, o que despertou minha curiosidade pelo mundo digital.",
    "Hoje curso Sistemas de Informação na UNISANTA e gosto de transformar desafios reais em soluções inovadoras. Fiz parte da banda municipal de Peruíbe, onde aprendi a ser proativo, a me comunicar bem e a trabalhar em equipe.",
    "Estou sempre em busca de aprendizado e de oportunidades que me façam evoluir, não só como profissional, mas como pessoa.",
  ],
  stats: [
    { value: "13+", label: "Projetos no GitHub" },
    { value: "5", label: "Projetos online" },
    { value: "2025", label: "Início na graduação" },
  ],
};

export const skills = [
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Node.js", icon: "nodejs" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "Tailwind", icon: "tailwindcss" },
  { name: "C#", icon: "csharp" },
  { name: "Git", icon: "git" },
] as const;

export type Tecnologia = { nome: string; uso: string };

export type Detalhes = {
  /** parágrafo de abertura da página do projeto */
  resumo: string;
  /** problemas / "dores" que o projeto resolve */
  dores: string[];
  /** o que o projeto faz na prática */
  utilidades: string[];
  /** tecnologias e para que cada uma foi usada */
  tecnologias: Tecnologia[];
  /** só para projetos de estudo: o que foi aprendido */
  aprendizados?: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** frase curta usada no card do carrossel */
  description: string;
  repo: string;
  live?: string;
  image?: string;
  /** como a imagem ocupa o espaço: "cover" corta, "contain" mostra inteira (padrão: cover) */
  fit?: "cover" | "contain";
  /** etiquetas curtas do card */
  stack: string[];
  /** par de cores do cartão quando não há imagem */
  gradient: [string, string];
  year?: string;
  /** define o selo da página; "estudo" mostra a seção "O que aprendi" */
  tipo?: "estudo" | "pessoal";
  detalhes: Detalhes;
};

// Ordem = ordem no carrossel. Projetos com `live` aparecem primeiro.
export const projects: Project[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
    slug: "lokos-de-si",
    title: "Lokos de S.I",
    description: "Finanças e agenda pessoais: app Android com API própria. Veja o vídeo de demonstração no repositório.",
    repo: "https://github.com/MuriloRocha-01/Mobile-lokosdeSI",
    stack: ["React Native", "Expo", "FastAPI"],
    gradient: ["#5b21b6", "#1e1b4b"],
    year: "2026",
    tipo: "pessoal",
    detalhes: {
      resumo:
        "Aplicativo Android de finanças e agenda pessoais. Ele usa a mesma conta e o mesmo servidor do app desktop, então o que eu lanço no celular aparece nos dois.",
      dores: [
        "Controlar gastos e compromissos em lugares separados.",
        "Digitar à mão cada lançamento do extrato do banco.",
        "Ter de entrar de novo toda vez que o app fecha.",
      ],
      utilidades: [
        "Lançamentos financeiros e agenda no celular, sincronizados com o desktop.",
        "Importação de extratos OFX e CSV, com prévia e aviso de possíveis duplicados.",
        "Widgets de saldo e despesas na tela inicial do Android.",
        "Gastos fixos gerados automaticamente pelo servidor.",
        "Tema claro e escuro.",
      ],
      tecnologias: [
        { nome: "React Native", uso: "Aplicativo Android." },
        { nome: "Expo", uso: "Ferramentas, build e atualizações do app." },
        { nome: "TypeScript", uso: "Tipagem do app e do contrato com a API." },
        { nome: "FastAPI (Python)", uso: "API que atende o celular e o desktop." },
        { nome: "SQLite e PostgreSQL", uso: "Banco de dados da API." },
        { nome: "JWT", uso: "Login com sessão renovável." },
      ],
    },
  },
  {
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
  },
  {
    slug: "hamburgueria",
    title: "Hamburgueria",
    description: "Sistema para hamburgueria em desenvolvimento, com app e API em TypeScript.",
    repo: "https://github.com/MuriloRocha-01/hamburgueria",
    stack: ["Expo", "Node.js", "TypeScript"],
    gradient: ["#9a3412", "#1c1917"],
    year: "2026",
    detalhes: {
      resumo: "Projeto ainda em desenvolvimento: um app para hamburgueria com uma API própria em Node.js.",
      dores: [],
      utilidades: [
        "API organizada em camadas: rotas, controllers, services, repositories e models.",
        "Comunicação em tempo real com sockets.",
      ],
      tecnologias: [
        { nome: "Expo", uso: "Aplicativo." },
        { nome: "Node.js e TypeScript", uso: "API em camadas." },
        { nome: "Sockets", uso: "Comunicação em tempo real." },
      ],
    },
  },
  {
    slug: "projeto-clinica",
    title: "Projeto Clínica",
    description: "Sistema de agendamento e gestão para clínicas, com agenda semanal e fila de atendimento.",
    repo: "https://github.com/MuriloRocha-01/Projeto-clinica",
    stack: ["Next.js", "Go", "PostgreSQL"],
    image: "/projects/clinica.jpg",
    fit: "contain",
    gradient: ["#1750c4", "#0b3a8c"],
    year: "2026",
    detalhes: {
      resumo:
        "Sistema de gestão para clínicas que reúne agenda, fila de atendimento e cadastro de pacientes em um só lugar, com um modo de demonstração interativa.",
      dores: [
        "Conflito de horários e reservas simultâneas para o mesmo profissional.",
        "Recepção sem uma visão clara de quem já chegou e de quem está em atendimento.",
        "Fichas de pacientes difíceis de consultar e de atualizar.",
      ],
      utilidades: [
        "Agenda em grade semanal, por profissional.",
        "Fila de atendimento com status: aguardando, em atendimento e concluído.",
        "Ficha editável do paciente.",
        "Visão geral do dia, com valores de consultas particulares e de convênios.",
        "Busca rápida (Ctrl+K) por paciente ou tela, e tempo de espera ao vivo na fila.",
        "Painel de chamada para a sala de espera, com senha, consultório e voz.",
      ],
      tecnologias: [
        { nome: "Next.js", uso: "Interface e rotas (App Router)." },
        { nome: "TypeScript", uso: "Tipagem das entidades do sistema." },
        { nome: "Tailwind CSS", uso: "Estilo, com tokens e componentes reutilizáveis (design system)." },
        { nome: "Go", uso: "API em camadas: handlers, services e repository." },
        { nome: "PostgreSQL", uso: "Banco de dados, com transações que evitam reservas duplicadas." },
      ],
    },
  },
];

export type Milestone = {
  period: string;
  title: string;
  place: string;
  kind: "formação" | "curso" | "certificação";
};

// Adicione novos cursos/certificações aqui.
export const milestones: Milestone[] = [
  {
    period: "2025 — atual",
    title: "Sistemas de Informação",
    place: "UNISANTA",
    kind: "formação",
  },
  {
    period: "2025",
    title: "Formação em Programação",
    place: "Sujeito Programador",
    kind: "curso",
  },
];
