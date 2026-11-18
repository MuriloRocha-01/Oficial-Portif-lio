// Dados usados pelos mecanismos de busca (Google) e pelos cartões de compartilhamento (WhatsApp, LinkedIn).

/**
 * Endereço oficial do site, sem barra no final.
 * Quando você comprar um domínio próprio, troque só esta linha: canonical, sitemap, robots,
 * imagem de compartilhamento e dados estruturados passam a usar o novo endereço.
 */
export const siteUrl = "https://oficial-portifolio-six.vercel.app";

/** Título da página inicial (as páginas de projeto usam "Nome do projeto | Murilo Rocha"). */
export const siteTitle = "Murilo Rocha | Desenvolvedor Full Stack & Mobile";

/** Descrição que aparece abaixo do título no Google (ideal: até uns 160 caracteres). */
export const siteDescription =
  "Portfólio de Murilo Rocha, desenvolvedor Full Stack & Mobile. Aplicações web e mobile com Next.js, React Native, Node.js e TypeScript.";

/** Imagem do cartão de compartilhamento (1200x630), em public/og-image.jpg. Para trocar, substitua o arquivo. */
export const defaultOgImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Murilo Rocha, Desenvolvedor Full Stack & Mobile. Next.js, React Native, Node.js e TypeScript.",
};

/** Palavras-chave do site. O Google quase não usa, mas outros buscadores e ferramentas ainda leem. */
export const siteKeywords = [
  "Murilo Rocha",
  "desenvolvedor full stack",
  "desenvolvedor mobile",
  "Next.js",
  "React Native",
  "Node.js",
  "TypeScript",
  "portfólio",
];
