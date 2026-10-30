import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://oddrobin.co.uk",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://oddrobin.co.uk/services",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://oddrobin.co.uk/who-am-i",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://oddrobin.co.uk/projects",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://oddrobin.co.uk/projects/foodedo",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://oddrobin.co.uk/projects/mike-hamer-gardens",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://oddrobin.co.uk/projects/aster-hall",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://oddrobin.co.uk/for-agencies",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://oddrobin.co.uk/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
