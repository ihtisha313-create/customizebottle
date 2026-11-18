import type { MetadataRoute } from "next";

const baseUrl = "https://customisebottle.com";
const routes = ["", "/bottles", "/industries", "/how-it-works", "/portfolio", "/about", "/contact", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: baseUrl + route,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
