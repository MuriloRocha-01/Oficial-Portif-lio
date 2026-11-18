// Dados pessoais e textos do site. Para mudar um texto da página inicial, comece por aqui.

export const profile = {
  name: "Murilo Rocha",
  firstName: "Murilo",
  role: "Desenvolvedor Full Stack & Mobile",
  tagline: "Transformo ideias em interfaces bonitas, rápidas e funcionais.",
  email: "murilorochadelima.10@gmail.com",
  github: "https://github.com/MuriloRocha-01",
  linkedin: "https://www.linkedin.com/in/murilo-rocha-6706a41aa/",
  cv: "http://drive.google.com/u/0/uc?id=1UN4TcHKidxjti1-4qZE_n5zw9PrQwScJ&export=download",
  location: "Peruíbe, SP",
  /** parágrafos da seção "sobre mim" */
  about: [
    "Sou Murilo Rocha, desenvolvedor Full Stack & Mobile e estudante de Sistemas de Informação na UNISANTA.",
    "Construo aplicações completas, do banco de dados à tela, com TypeScript, Next.js, React Native, Node.js, Go e PostgreSQL: um sistema de gestão para clínicas, um cardápio digital por QR Code que avisa a cozinha em tempo real com WebSockets e um app de finanças pessoais para Android.",
    "Busco minha primeira oportunidade como Desenvolvedor Júnior ou Estágio, e também aceito projetos freelance.",
  ],
  /** lista "Em que eu trabalho" */
  focusAreas: [
    { title: "Front-end", text: "interfaces responsivas e acessíveis com React e Next.js" },
    { title: "Full stack", text: "APIs, integração e publicação de projetos web" },
  ],
  /** lista curta "Habilidades" dentro do cartão "sobre" (o painel de ícones está em skills.ts) */
  skillSummary: [
    "Desenvolvimento web responsivo",
    "React, Next.js e TypeScript",
    "Node.js e APIs",
    "Trabalho em equipe e comunicação",
  ],
  /** frase da seção de contato */
  contactPitch: "Aberto a oportunidades como Desenvolvedor Front-end / Full Stack e a projetos freelance.",
};

/**
 * Ano mostrado no rodapé e na página inicial.
 * Fixo de propósito: ler a data atual durante a geração das páginas quebra o build do Next 16.
 */
export const siteYear = "2025";

export const copyright = `© ${siteYear} Murilo Rocha de Lima. Todos os direitos reservados.`;
