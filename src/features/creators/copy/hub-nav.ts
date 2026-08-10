/**
 * The hub's top-level topics, in reading order.
 *
 * Each tab is a real route rather than a scroll anchor, so support can send a
 * creator straight to the answer ("it's all on /creators/hub/rewards") and the
 * back button behaves.
 *
 * Welcome and Start here are split on purpose. Welcome is the home base a
 * creator comes back to every week — congratulations, the submit button, and
 * the way in to everything. Start here is the onboarding they read once. Before
 * the split both lived on one page, and a creator in week three had to scroll
 * past the whole first-day walkthrough to reach the submit button.
 *
 * Deliberately its own module: the nav renders on every hub page, so anything
 * it imports ships with all of them. Keeping this out of `hub.ts` means the
 * full rulebook copy (the rules, the FAQ, Do & Don'ts) is only pulled in by the
 * one page that actually shows it.
 */
export type HubTabId = "welcome" | "start" | "program" | "rewards" | "tips" | "faq";

/** Literal paths, not `string`, so TanStack's <Link to> stays type-checked. */
export type HubTabPath =
  | "/creators/hub"
  | "/creators/hub/start"
  | "/creators/hub/program"
  | "/creators/hub/rewards"
  | "/creators/hub/tips"
  | "/creators/hub/faq";

export const HUB_TABS: {
  id: HubTabId;
  to: HubTabPath;
  /** Full label — the rail and the cards on Welcome. */
  label: string;
  /** Short label for the mobile strip. Six tabs only fit if these stay tight. */
  short: string;
  /** One line explaining what's behind the tab. Cards only. */
  blurb: string;
}[] = [
  {
    id: "welcome",
    to: "/creators/hub",
    label: "Welcome",
    short: "Home",
    blurb: "Your home base.",
  },
  {
    id: "start",
    to: "/creators/hub/start",
    label: "Start here",
    short: "Start",
    blurb:
      "Start here before you share your first video. This page gives you everything you need to begin with confidence: your personal code, your link, where to send us your posts, and the simple steps to make sure every video you create is counted properly toward your rewards.",
  },
  {
    id: "program",
    to: "/creators/hub/program",
    label: "The program",
    short: "Program",
    blurb: "Why we built this for students like you, and how your story can create real impact.",
  },
  {
    id: "rewards",
    to: "/creators/hub/rewards",
    label: "Rewards & pay",
    short: "Rewards",
    blurb:
      "All the practical details about the benefits and earnings you can get through the program.",
  },
  {
    id: "tips",
    to: "/creators/hub/tips",
    label: "Tips & advice",
    short: "Tips",
    blurb:
      "Tips and tricks to start with confidence and make this a confidence-boosting experience for you!",
  },
  {
    id: "faq",
    to: "/creators/hub/faq",
    label: "Rules & FAQ",
    short: "Rules",
    blurb:
      "How to make your efforts pay off, what to avoid, and the answers to the most common questions so everything stays clear, fair, and easy.",
  },
];

/**
 * The tab after `id`, the default for the "next" link at the foot of a page.
 *
 * A page can override this (see PageFooter's `next` prop) when the most useful
 * page to read next isn't the one that happens to sit beside it in the nav.
 * The rail order is the menu; the "next" link is the suggested reading path,
 * and the two don't have to agree.
 */
export function nextTab(id: HubTabId) {
  const i = HUB_TABS.findIndex((t) => t.id === id);
  return i >= 0 ? HUB_TABS[i + 1] : undefined;
}

export function tabById(id: HubTabId) {
  return HUB_TABS.find((t) => t.id === id);
}
