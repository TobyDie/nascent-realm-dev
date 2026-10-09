import { createFileRoute } from "@tanstack/react-router";
import pageHtml from "@/features/haircare-challenge-v32/page.html?raw";

/* /32 is a Webflow export (built in Claude Design), served byte-for-byte so it
   matches the design exactly. It bypasses the React shell: its own Webflow CSS
   and webflow.js would clash with the app's Tailwind styles. Assets live in
   public/32-the-haircare-challenge-assets/. Tracking inside page.html mirrors
   the GTM / Converge / Clarity tags in __root.tsx; keep them in sync. */

export const Route = createFileRoute("/32-the-haircare-challenge")({
  server: {
    handlers: {
      GET: () =>
        new Response(pageHtml, {
          headers: {
            "content-type": "text/html; charset=utf-8",
            "cache-control": "no-cache, must-revalidate, max-age=0",
          },
        }),
    },
  },
  // Client-side navigation can't render a static page; hand off to a full load.
  component: FullPageLoad,
});

function FullPageLoad() {
  if (typeof window !== "undefined") window.location.replace("/32-the-haircare-challenge");
  return null;
}
