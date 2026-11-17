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

export type Project = {
  title: string;
  description: string;
  repo: string;
  live?: string;
  image?: string;
  stack: string[];
  /** par de cores do cartão quando não há imagem */
  gradient: [string, string];
};

// Ordem = ordem no carrossel. Projetos com `live` aparecem primeiro.
export const projects: Project[] = [
  {
    title: "Cine Murilo",
    description: "Busca de filmes recém-lançados, com favoritos e trailers.",
    image: "/projects/cinemurilo.gif",
    repo: "https://github.com/MuriloRocha-01/CineMurilo",
    live: "https://cine-murilo.vercel.app",
    stack: ["React", "API"],
    gradient: ["#1b4332", "#081c15"],
  },
  {
    title: "Pokédex",
    description: "Busca de Pokémon por nome com imagem, número e tipos.",
    image: "/projects/pokedex.gif",
    repo: "https://github.com/MuriloRocha-01/Pok-dex",
    live: "https://pok-dex-sigma-three.vercel.app",
    stack: ["JavaScript", "CSS"],
    gradient: ["#7f1d1d", "#1c1917"],
  },
  {
    title: "Pet Shop",
    description: "Loja de produtos para pets com carrinho, quantidade e finalização de pedido simulada.",
    repo: "https://github.com/MuriloRocha-01/Pet-shop-Stude-React",
    live: "https://pet-shop-wheat-delta.vercel.app",
    stack: ["React", "TypeScript", "Tailwind"],
    gradient: ["#166534", "#052e16"],
  },
  {
    title: "Lokos de S.I",
    description: "Finanças e agenda pessoais: app Android com API própria. Veja o vídeo de demonstração no repositório.",
    repo: "https://github.com/MuriloRocha-01/Mobile-lokosdeSI",
    stack: ["React Native", "Expo", "FastAPI"],
    gradient: ["#5b21b6", "#1e1b4b"],
  },
  {
    title: "Evermont",
    description: "Projeto front-end em TypeScript.",
    repo: "https://github.com/MuriloRocha-01/Evermont",
    stack: ["TypeScript"],
    gradient: ["#065f46", "#022c22"],
  },
  {
    title: "Hamburgueria",
    description: "Projeto de cardápio e pedidos para uma hamburgueria.",
    repo: "https://github.com/MuriloRocha-01/hamburgueria",
    stack: ["TypeScript"],
    gradient: ["#9a3412", "#1c1917"],
  },
  {
    title: "Projeto Clínica",
    description: "Sistema para clínica, em TypeScript.",
    repo: "https://github.com/MuriloRocha-01/Projeto-clinica",
    stack: ["TypeScript"],
    gradient: ["#155e75", "#0c0a09"],
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
