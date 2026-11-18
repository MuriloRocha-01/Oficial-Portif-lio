import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/seo";

/** robots.txt: libera o site todo para os buscadores e informa onde está o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
