import { createFileRoute } from "@tanstack/react-router";
import { ListiclePageV28 } from "@/features/haircare-challenge-v28/ListiclePageV28";

const pageTitle = "5 Reasons Your Hair Never Grows Past The Same Length | Hairqare";
const pageDescription =
  "If your hair stalls at the same length year after year, here's why. See what 250,000+ women learned about why their hair stopped, and how they got it growing again.";
const pageUrl = "https://glow.hairqare.co/28-the-haircare-challenge";

export const Route = createFileRoute("/28-the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: "Why 250,000+ women learned their hair never stopped growing, in 14 days." },
      { property: "og:url", content: pageUrl },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: "Why 250,000+ women learned their hair never stopped growing, in 14 days." },
      { name: "twitter:url", content: pageUrl },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: ListiclePageV28,
});
