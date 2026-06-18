import { createFileRoute } from "@tanstack/react-router";
import { ListiclePageV22 } from "@/features/haircare-challenge-v22/ListiclePageV22";

export const Route = createFileRoute("/22-the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: "5 Reasons Women Are Finally Quitting Expensive Hair Products | Hairqare" },
      { name: "description", content: "Tired of buying bottle after bottle that promised everything and changed nothing? Here's why 250,000+ women stopped shopping for the answer and started learning it." },
      { property: "og:title", content: "5 Reasons Women Are Finally Quitting Expensive Hair Products | Hairqare" },
      { property: "og:description", content: "Why 250,000+ women stopped shopping for the answer and started learning it — in 14 days." },
      { property: "og:url", content: "https://glow.hairqare.co/22-the-haircare-challenge" },
      { name: "twitter:title", content: "5 Reasons Women Are Finally Quitting Expensive Hair Products | Hairqare" },
      { name: "twitter:description", content: "Why 250,000+ women stopped shopping for the answer and started learning it — in 14 days." },
      { name: "twitter:url", content: "https://glow.hairqare.co/22-the-haircare-challenge" },
    ],
    links: [
      { rel: "canonical", href: "https://glow.hairqare.co/22-the-haircare-challenge" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: ListiclePageV22,
});