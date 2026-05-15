import type { MetadataRoute } from "next";

const routes = ["", "/projects", "/products", "/certificates", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://rohit94r.github.io/Rohit-Portfolio${route}`,
    lastModified: new Date(),
  }));
}
