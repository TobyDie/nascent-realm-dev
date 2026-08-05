import "../creators.css";

import { useEffect } from "react";
import { Link, Outlet } from "@tanstack/react-router";
import { HubRail, HubTabs } from "./HubNav";

/**
 * Surface B — the creator hub. The layout route for /creators/hub/*: rail on
 * desktop, tab strip on mobile, and one topic in the column at a time.
 *
 * Was a single ~500-line page with nine anchored sections. Creators told us the
 * everything-at-once scroll was hard to navigate, so each topic is now its own
 * route with its own URL.
 */
export function HubShell() {
  // Smooth in-page anchor jumps, added to <html> only while the hub is mounted
  // so no other glow page inherits it.
  useEffect(() => {
    document.documentElement.classList.add("hq-creators-smooth");
    return () => document.documentElement.classList.remove("hq-creators-smooth");
  }, []);

  return (
    <div className="hq-creators flex min-h-dvh">
      <HubRail />
      <main className="min-w-0 flex-1">
        {/* mobile brand bar (the rail is desktop-only) */}
        <header className="flex items-center justify-between px-5 pb-2 pt-4 cm:hidden">
          <Link to="/creators/hub">
            <span className="font-fraunces text-lg text-ink">Hairqare</span>
            <span className="ml-1 text-sm text-flame-deep">Creators</span>
          </Link>
        </header>
        <HubTabs />
        <div className="mx-auto max-w-3xl px-5 py-9 cm:px-10 cm:py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
