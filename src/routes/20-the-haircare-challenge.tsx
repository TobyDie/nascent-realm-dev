import { createFileRoute } from "@tanstack/react-router";
import { HaircareChallengePageV20 } from "@/features/haircare-challenge-v20/HaircareChallengePageV20";

const HERO_SIZES = "(max-width: 720px) 100vw, (max-width: 860px) 90vw, 405px";

export const Route = createFileRoute("/20-the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: "Grow Longer, Thicker, Fuller Hair in 14 Days | Hairqare Challenge" },
      { name: "description", content: "Built for women in their 20s and 30s. Break past your length plateau, undo color & heat damage, and build the hair you actually want — in 14 days. 250,000+ women joined." },
      { property: "og:title", content: "Grow Longer, Thicker, Fuller Hair in 14 Days | Hairqare Challenge" },
      { property: "og:description", content: "Built for women in their 20s and 30s. Break past your length plateau, undo color & heat damage, and build the hair you actually want — in 14 days." },
      { property: "og:url", content: "https://glow.hairqare.co/20-the-haircare-challenge" },
      { name: "twitter:title", content: "Grow Longer, Thicker, Fuller Hair in 14 Days | Hairqare Challenge" },
      { name: "twitter:description", content: "Built for women in their 20s and 30s. Break past your length plateau, undo color & heat damage, and build the hair you actually want — in 14 days." },
      { name: "twitter:url", content: "https://glow.hairqare.co/20-the-haircare-challenge" },
    ],
    links: [
      { rel: "canonical", href: "https://glow.hairqare.co/20-the-haircare-challenge" },
      {
        rel: "preload",
        as: "image",
        href: r2img("sarah-hero-v2.webp", 800),
        imageSrcSet: r2srcset("sarah-hero-v2.webp", HERO_WIDTHS),
        imageSizes: HERO_SIZES,
        fetchPriority: "high",
      },
    ],
  }),
  component: HaircareChallengePageV20,
});