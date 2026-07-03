import { createFileRoute } from "@tanstack/react-router";
import { ListiclePageV27 } from "@/features/haircare-challenge-v27/ListiclePageV27";

const pageTitle = "5 Reasons Women Are Finally Quitting Expensive Hair Products | Hairqare";
const pageDescription =
  "Tired of buying bottle after bottle that promised everything and changed nothing? Here's why 250,000+ women stopped shopping for the answer and started learning it.";
const pageUrl = "https://glow.hairqare.co/27-the-haircare-challenge";

export const Route = createFileRoute("/27-the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: "Why 250,000+ women stopped shopping for the answer and started learning it — in 14 days." },
      { property: "og:url", content: pageUrl },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: "Why 250,000+ women stopped shopping for the answer and started learning it — in 14 days." },
      { name: "twitter:url", content: pageUrl },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: ListiclePageV27,
});