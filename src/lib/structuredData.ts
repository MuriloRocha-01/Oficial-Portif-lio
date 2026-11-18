import { profile } from "@/data/profile";
import { siteDescription, siteUrl } from "@/data/seo";
import { skills } from "@/data/skills";

/**
 * Dados estruturados da página inicial: a pessoa (Person) e o site (WebSite) ligados entre si.
 * `sameAs` aponta para os perfis oficiais (GitHub e LinkedIn): é o que ajuda o Google a
 * entender que este site, o GitHub e o LinkedIn pertencem à mesma pessoa.
 */
export function homeStructuredData() {
  const personId = `${siteUrl}/#pessoa`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        jobTitle: profile.role,
        description: siteDescription,
        url: siteUrl,
        image: `${siteUrl}/images/foto_perfil.jpg`,
        address: { "@type": "PostalAddress", addressLocality: "Peruíbe", addressRegion: "SP", addressCountry: "BR" },
        knowsAbout: skills.map((skill) => skill.name),
        sameAs: [profile.github, profile.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#site`,
        url: siteUrl,
        name: `Portfólio de ${profile.name}`,
        inLanguage: "pt-BR",
        author: { "@id": personId },
      },
    ],
  };
}
