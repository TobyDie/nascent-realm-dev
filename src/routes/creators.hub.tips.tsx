import { createFileRoute } from "@tanstack/react-router";
import { TipsPage } from "@/features/creators/hub/pages/TipsPage";

export const Route = createFileRoute("/creators/hub/tips")({
  head: () => ({
    meta: [{ title: "Tips & advice — Hairqare Creators" }],
  }),
  component: TipsPage,
});
