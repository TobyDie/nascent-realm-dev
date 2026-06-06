import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/14-the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: "Stop Hair Loss in 14 Days | 14-Day Haircare Challenge" },
      { name: "description", content: "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results." },
      { property: "og:title", content: "Stop Hair Loss in 14 Days | 14-Day Haircare Challenge" },
      { property: "og:description", content: "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results." },
      { property: "og:url", content: "https://glow.hairqare.co/" },
      { name: "twitter:title", content: "Stop Hair Loss in 14 Days | 14-Day Haircare Challenge" },
      { name: "twitter:description", content: "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results." },
      { name: "twitter:url", content: "https://glow.hairqare.co/" },
    ],
    links: [
      { rel: "canonical", href: "https://glow.hairqare.co/" },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <iframe
      src="/14-the-haircare-challenge/index.html"
      title="HairQare 14-Day Challenge"
      className="block w-screen h-screen border-0"
    />
  );
}