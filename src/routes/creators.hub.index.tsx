import { createFileRoute } from "@tanstack/react-router";
import { WelcomePage } from "@/features/creators/hub/pages/WelcomePage";

export const Route = createFileRoute("/creators/hub/")({
  head: () => ({
    meta: [{ title: "Welcome to the Founding Crew — Hairqare Creators" }],
  }),
  component: WelcomePage,
});
