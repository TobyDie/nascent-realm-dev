import { createFileRoute } from "@tanstack/react-router";
import { StartHerePage } from "@/features/creators/hub/pages/StartHerePage";

export const Route = createFileRoute("/creators/hub/start")({
  head: () => ({
    meta: [{ title: "Start here — Hairqare Creators" }],
  }),
  component: StartHerePage,
});
