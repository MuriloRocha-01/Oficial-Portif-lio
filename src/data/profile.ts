// Dados pessoais e textos do site. Para mudar um texto da página inicial, comece por aqui.

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
  /** parágrafos da seção "sobre mim" */
  about: [
    "Desde pequeno sou apaixonado por tecnologia, principalmente pelo meu amor por jogos, o que despertou minha curiosidade pelo mundo digital.",
    "Hoje curso Sistemas de Informação na UNISANTA e gosto de transformar desafios reais em soluções inovadoras. Fiz parte da banda municipal de Peruíbe, onde aprendi a ser proativo, a me comunicar bem e a trabalhar em equipe.",
    "Estou sempre em busca de aprendizado e de oportunidades que me façam evoluir, não só como profissional, mas como pessoa.",
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
