import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CustomizeBottle",
    short_name: "CustomizeBottle",
    description: "Customized drinking-water bottles for businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#10283B",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
