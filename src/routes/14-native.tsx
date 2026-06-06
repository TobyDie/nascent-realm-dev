import { createFileRoute } from "@tanstack/react-router";
import { HaircareChallengePage } from "@/features/haircare-challenge/HaircareChallengePage";

export const Route = createFileRoute("/14-native")({
  head: () => ({
    meta: [
      { title: "Stop Hair Loss in 14 Days | 14-Day Haircare Challenge" },
      { name: "description", content: "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results." },
      { property: "og:title", content: "Stop Hair Loss in 14 Days | 14-Day Haircare Challenge" },
      { property: "og:description", content: "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results." },
      { name: "twitter:title", content: "Stop Hair Loss in 14 Days | 14-Day Haircare Challenge" },
      { name: "twitter:description", content: "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. 94% report visible results." },
    ],
  }),
  component: HaircareChallengePage,
});