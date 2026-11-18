import type { Project } from "../types";
import { cineMurilo } from "./cine-murilo";
import { evermont } from "./evermont";
import { granperfil } from "./granperfil";
import { hamburgueria } from "./hamburgueria";
import { lokosDeSi } from "./lokos-de-si";
import { petShop } from "./pet-shop";
import { pokedex } from "./pokedex";
import { projetoClinica } from "./projeto-clinica";

/**
 * Todos os projetos, na ordem em que aparecem no site.
 * Para adicionar um projeto: crie um arquivo nesta pasta (copie um existente) e inclua-o abaixo.
 * Projetos com `tipo: "estudo"` vão para o bloco "estudos"; os demais, para o carrossel principal.
 */
export const projects: Project[] = [
  projetoClinica,
  granperfil,
  evermont,
  hamburgueria,
  lokosDeSi,
  petShop,
  cineMurilo,
  pokedex,
];

/** Projetos principais (carrossel da página inicial): tudo o que não é estudo. */
export const featuredProjects: Project[] = projects.filter((project) => project.tipo !== "estudo");

/** Projetos de estudo, feitos em cursos para praticar (bloco "estudos"). */
export const studyProjects: Project[] = projects.filter((project) => project.tipo === "estudo");

/** Procura um projeto pelo slug da URL; devolve undefined se não existir. */
export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
