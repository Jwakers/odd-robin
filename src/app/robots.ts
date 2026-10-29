import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://oddrobin.co.uk/sitemap.xml",
    host: "https://oddrobin.co.uk",
  };
}
