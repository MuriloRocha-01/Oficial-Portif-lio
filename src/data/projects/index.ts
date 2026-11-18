import type { Project } from "../types";
import { cineMurilo } from "./cine-murilo";
import { evermont } from "./evermont";
import { hamburgueria } from "./hamburgueria";
import { lokosDeSi } from "./lokos-de-si";
import { petShop } from "./pet-shop";
import { pokedex } from "./pokedex";
import { projetoClinica } from "./projeto-clinica";

/**
 * Lista de projetos. A ordem aqui é a ordem do carrossel.
 * Para adicionar um projeto: crie um arquivo nesta pasta (copie um existente) e inclua-o abaixo.
 */
export const projects: Project[] = [
  cineMurilo,
  pokedex,
  petShop,
  lokosDeSi,
  evermont,
  hamburgueria,
  projetoClinica,
];

/** Procura um projeto pelo slug da URL; devolve undefined se não existir. */
export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
