import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/seo";

/**
 * sitemap.xml: a lista de páginas que o Google deve visitar (a inicial e uma por projeto).
 * Fica de fora a data de modificação de propósito: ler a data atual durante o build quebra o Next 16.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    ...projects.map((project) => ({ url: `${siteUrl}/projetos/${project.slug}`, priority: 0.7 })),
  ];
}
