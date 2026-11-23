import type { MetadataRoute } from "next";
import { showcaseApps } from "@/data/app-showcase";
import { siteConfig } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/projects/desk-ai-tutor`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${siteConfig.url}/apps`, priority: 0.9 },
    ...showcaseApps.map(({ slug }) => ({ url: `${siteConfig.url}/apps/${slug}`, priority: 0.7 })),
  ];
}
