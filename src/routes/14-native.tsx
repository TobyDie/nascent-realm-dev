import { createFileRoute } from "@tanstack/react-router";
import { HaircareChallengePage } from "@/features/haircare-challenge/HaircareChallengePage";

export const Route = createFileRoute("/14-native")({
  head: () => ({
    meta: [{ title: "HairQare — 14-Day Challenge (native preview)" }],
  }),
  component: HaircareChallengePage,
});