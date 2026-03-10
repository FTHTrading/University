import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fitzherbert University",
    short_name: "Fitzherbert",
    description:
      "AI-native university, satirical in tone and serious in presentation. Chartered 1783. Rechartered 2025.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F3B",
    theme_color: "#0B1F3B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.svg",
        sizes: "180x180",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
