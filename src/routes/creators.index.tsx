import { createFileRoute } from "@tanstack/react-router";
import { CreatorsProgramPage } from "@/features/creators/CreatorsProgramPage";

// Invite-only pilot: every creator route overrides the app-wide
// `robots: index, follow` set in __root.tsx.
export const Route = createFileRoute("/creators/")({
  head: () => ({
    meta: [
      { title: "Hairqare Creators: Share Your Hair Journey | Hairqare" },
      { name: "description", content: "A small founding crew of Better Hair Challenge students sharing their real hair journey. Earn on every sale for life, and earn your way into Hairqare Lab. By application only." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Hairqare Creators: Share Your Hair Journey" },
      { property: "og:description", content: "Share your real hair journey. Earn on every sale for life, and earn your way into Hairqare Lab. By application only." },
      { property: "og:url", content: "https://glow.hairqare.co/creators" },
    ],
    links: [
      { rel: "canonical", href: "https://glow.hairqare.co/creators" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap" },
    ],
  }),
  component: CreatorsProgramPage,
});
