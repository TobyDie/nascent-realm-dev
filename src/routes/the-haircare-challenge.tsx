import { createFileRoute } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: "The Haircare Challenge | Hairqare" },
      { name: "description", content: "Join 200,000+ women who transformed their hair with the Hairqare Challenge." },
      { property: "og:title", content: "The Haircare Challenge | Hairqare" },
      { property: "og:description", content: "Join 200,000+ women who transformed their hair with the Hairqare Challenge." },
      { property: "og:url", content: "https://glow.hairqare.co/the-haircare-challenge" },
      { name: "twitter:title", content: "The Haircare Challenge | Hairqare" },
      { name: "twitter:description", content: "Join 200,000+ women who transformed their hair with the Hairqare Challenge." },
      { name: "twitter:url", content: "https://glow.hairqare.co/the-haircare-challenge" },
    ],
    links: [
      { rel: "canonical", href: "https://glow.hairqare.co/the-haircare-challenge" },
    ],
  }),
  component: HaircareChallengePage,
});

function HaircareChallengePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
      <h1 className="text-3xl font-display text-foreground text-center">
        The Haircare Challenge
      </h1>
      <Label className="text-muted-foreground">Placeholder label</Label>
    </main>
  );
}
