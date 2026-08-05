import { createFileRoute } from "@tanstack/react-router";
import { RewardsPage } from "@/features/creators/hub/pages/RewardsPage";

export const Route = createFileRoute("/creators/hub/rewards")({
  head: () => ({
    meta: [{ title: "Rewards & pay — Hairqare Creators" }],
  }),
  component: RewardsPage,
});
