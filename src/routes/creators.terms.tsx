import { createFileRoute } from "@tanstack/react-router";
import { CreatorTermsPage } from "@/features/creators/CreatorTermsPage";

export const Route = createFileRoute("/creators/terms")({
  head: () => ({
    meta: [
      { title: "Program terms — Hairqare Creators" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap" }],
  }),
  component: CreatorTermsPage,
});
