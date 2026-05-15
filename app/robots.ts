import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rohit94r.github.io/Rohit-Portfolio/sitemap.xml",
  };
}
