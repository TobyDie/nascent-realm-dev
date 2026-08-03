/**
 * The hub's navigation, in page order. Two tiers: what a creator *does*, which
 * stays open on the page, and what they *look up*, which is collapsed.
 *
 * Deliberately its own module: ContentsRail is a client component, so anything it
 * imports ships in the browser bundle. Keeping this out of `hub.ts` means the full
 * rulebook copy (the rules, FAQ, Do & Don'ts) stays server-only.
 */
export const SECTION_GROUPS: {
  group: string;
  items: { id: string; label: string }[];
}[] = [
  {
    group: "The essentials",
    items: [
      { id: "start", label: "Start here" },
      { id: "earn", label: "What you earn" },
      { id: "paid", label: "Getting paid" },
    ],
  },
  {
    group: "Look it up",
    items: [
      { id: "eligible", label: "Which videos count?" },
      { id: "rules", label: "The rules" },
      { id: "dos", label: "Do & Don'ts" },
      { id: "ideas", label: "Content ideas" },
      { id: "faq", label: "FAQ" },
      { id: "support", label: "Support" },
    ],
  },
];

export const SECTIONS = SECTION_GROUPS.flatMap((g) => g.items);
