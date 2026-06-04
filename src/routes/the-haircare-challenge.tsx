import { createFileRoute } from "@tanstack/react-router";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/the-haircare-challenge")({
  head: () => ({
    meta: [
      { title: "The Haircare Challenge — Sales Page" },
      { name: "description", content: "Join the Haircare Challenge and transform your routine in 14 days." },
      { property: "og:title", content: "The Haircare Challenge — Sales Page" },
      { property: "og:description", content: "Join the Haircare Challenge and transform your routine in 14 days." },
    ],
  }),
  component: HaircareChallengePage,
});

function HaircareChallengePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <h1 className="text-3xl font-display text-foreground text-center">
        The Haircare Challenge
      </h1>
    </main>
  );
}
