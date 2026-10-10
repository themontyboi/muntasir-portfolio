import type { MetadataRoute } from "next";
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
  ];
}
