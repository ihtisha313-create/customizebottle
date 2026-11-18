import type { MetadataRoute } from "next";

const baseUrl = "https://customisebottle.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/bottles", "/industries", "/contact"];
  return routes.map((route) => ({
    url: baseUrl + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
