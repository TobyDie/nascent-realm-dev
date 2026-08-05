import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/features/creators/hub/pages/ProgramPage";

export const Route = createFileRoute("/creators/hub/program")({
  head: () => ({
    meta: [{ title: "The program — Hairqare Creators" }],
  }),
  component: ProgramPage,
});
