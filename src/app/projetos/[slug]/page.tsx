import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { findProject, projects } from "@/data/projects";
import { defaultOgImage } from "@/data/seo";

/** Gera uma página para cada projeto da lista na hora do build. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Título e descrição da aba do navegador, tirados do próprio projeto. */
export async function generateMetadata(props: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) return {};
  const path = `/projetos/${project.slug}`;
  // cartão de compartilhamento com a capa do próprio projeto (GIF não serve: usa a imagem padrão do site)
  const images =
    project.image && /\.(jpe?g|png)$/i.test(project.image)
      ? [{ url: project.image, alt: `Capa do projeto ${project.title}` }]
      : [defaultOgImage];
  return {
    title: project.title, // o layout acrescenta " | Murilo Rocha"
    description: project.detalhes.resumo,
    alternates: { canonical: path },
    // o openGraph da página substitui o do layout, então repete o essencial
    openGraph: {
      title: `${project.title} | Murilo Rocha`,
      description: project.detalhes.resumo,
      url: path,
      siteName: "Portfólio de Murilo Rocha",
      locale: "pt_BR",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", images },
  };
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
