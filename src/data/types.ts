// Formatos dos dados do site. Quem edita o conteúdo só precisa conhecer estes tipos.

/** Uma tecnologia usada em um projeto e para que ela serviu. */
export type Tecnologia = { nome: string; uso: string };

/** Texto completo da página de um projeto (/projetos/[slug]). */
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

/** Um projeto do portfólio: aparece como card no carrossel e tem uma página própria. */
export type Project = {
  /** parte final do endereço: /projetos/<slug> */
  slug: string;
  title: string;
  /** frase curta usada no card do carrossel */
  description: string;
  /** link do código no GitHub */
  repo: string;
  /** link do projeto no ar (quando existe) */
  live?: string;
  /** capa, dentro de /public */
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

/** Um item da linha "Formação e cursos". */
export type Milestone = {
  period: string;
  title: string;
  place: string;
  kind: "formação" | "curso" | "certificação";
};

/** Uma habilidade da seção "Habilidades"; `icon` é o nome da pasta no Devicon. */
export type Skill = { name: string; icon: string };
