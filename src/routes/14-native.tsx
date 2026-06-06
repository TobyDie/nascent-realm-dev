import { createFileRoute } from "@tanstack/react-router";
import { HaircareChallengePage } from "@/features/haircare-challenge/HaircareChallengePage";
import { r2img, r2srcset, HERO_WIDTHS } from "@/features/haircare-challenge/img";

const HERO_SIZES = "(max-width: 720px) 100vw, (max-width: 860px) 90vw, 405px";

export const Route = createFileRoute("/14-native")({
  head: () => ({
    meta: [
      { title: "Stop Hair Loss in 14 Days | Hairqare Native" },
      {
        name: "description",
        content:
          "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results.",
      },
      { property: "og:title", content: "Stop Hair Loss in 14 Days | Hairqare Native" },
      {
        property: "og:description",
        content:
          "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results.",
      },
      { property: "og:url", content: "https://glow.hairqare.co/14-native" },
      { name: "twitter:title", content: "Stop Hair Loss in 14 Days | Hairqare Native" },
      {
        name: "twitter:description",
        content:
          "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results.",
      },
      { name: "twitter:url", content: "https://glow.hairqare.co/14-native" },
    ],
    links: [
      { rel: "canonical", href: "https://glow.hairqare.co/14-native" },
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
  component: HaircareChallengePage,
});