import { createFileRoute } from "@tanstack/react-router";
import { HubShell } from "@/features/creators/hub/HubShell";

/**
 * Layout route for the creator hub. Each topic is a child route
 * (creators.hub.index / .program / .rewards / .tips / .faq) rendered into the
 * shell's <Outlet>; the children inherit this head and override the title.
 */
export const Route = createFileRoute("/creators/hub")({
  head: () => ({
    meta: [
      { title: "Hairqare Creators — everything you need to know" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap",
      },
    ],
  }),
  component: HubShell,
});
