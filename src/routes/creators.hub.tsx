import { createFileRoute } from "@tanstack/react-router";
import { CreatorHubPage } from "@/features/creators/CreatorHubPage";

export const Route = createFileRoute("/creators/hub")({
  head: () => ({
    meta: [
      { title: "Hairqare Creators — everything you need to know" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap" }],
  }),
  component: CreatorHubPage,
});
