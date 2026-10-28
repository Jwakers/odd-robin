import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://penumbradigital",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://penumbradigital/services",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://penumbradigital/who-am-i",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://penumbradigital/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://penumbradigital/projects/foodedo",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://penumbradigital/projects/mike-hamer-gardens",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://penumbradigital/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
