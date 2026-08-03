import { Outlet, createFileRoute } from "@tanstack/react-router";

/**
 * Pass-through parent for /creators/*. Required because `creators.hub` and
 * `creators.terms` nest under it — without this the children have no parent
 * route to attach to. It renders nothing of its own; each child owns its head
 * and its page, and creators.index.tsx is the program page at /creators.
 */
export const Route = createFileRoute("/creators")({
  component: Outlet,
});
