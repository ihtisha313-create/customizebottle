import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = ["", "/bottles", "/industries", "/how-it-works", "/portfolio", "/about", "/contact", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: siteConfig.domain + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
