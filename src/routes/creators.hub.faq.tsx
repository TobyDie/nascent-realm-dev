import { createFileRoute } from "@tanstack/react-router";
import { RulesFaqPage } from "@/features/creators/hub/pages/RulesFaqPage";

export const Route = createFileRoute("/creators/hub/faq")({
  head: () => ({
    meta: [{ title: "Rules & FAQ — Hairqare Creators" }],
  }),
  component: RulesFaqPage,
});
