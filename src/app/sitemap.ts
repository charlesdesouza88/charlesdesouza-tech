import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";

const SITE = "https://charlesdesouza.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const studies = caseStudies.map((c) => ({
    url: `${SITE}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...studies,
  ];
}
