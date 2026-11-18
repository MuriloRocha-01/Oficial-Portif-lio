import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { findProject, projects } from "@/data/projects";

/** Gera uma página para cada projeto da lista na hora do build. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Título e descrição da aba do navegador, tirados do próprio projeto. */
export async function generateMetadata(props: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) return {};
  return { title: `${project.title} | Murilo Rocha`, description: project.detalhes.resumo };
}

/** Página de um projeto. O visual fica em components/projects/ProjectDetail. */
export default async function ProjetoPage(props: PageProps<"/projetos/[slug]">) {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
