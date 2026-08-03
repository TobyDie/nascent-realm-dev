# Give /creators/hub its own "The program" overview

## The problem

Someone who lands straight on `/creators/hub` (from a DM, an email, a link a friend
sent) never sees `/creators`. The hub explains *how to operate* the program (start
here, what you earn, getting paid, rules) but it never explains *what the program is*
or *why it exists*. It reads like an operations manual handed to someone who missed
the meeting.

## Recommendation: a condensed overview, not a clone

Cloning `/creators` into the hub would be wrong:

- The whole sales page drives one action, "Apply to Join". A hub visitor is either
  already in or about to be, so a big Apply CTA is confusing.
- The perk cards and Build Your Journey calculator repeat what "What you earn"
  (section 02) already covers in more detail, so a clone creates two sources of
  truth that will drift apart.
- The hub's whole design language is a quiet reading document with a contents rail.
  Dropping a full-bleed hero banner and four image cards at the top of it breaks
  that and pushes "Start here" far below the fold.

Instead: add a short, hub-styled **"The program"** section as the very first entry in
the contents rail, before "Start here". It answers what this is, why Sarah is doing
it, and what the three ways to earn are, in about a screen and a half, then hands
off to the existing sections for detail.

## What gets added

New section `00 The program`, at the top of the hub under a new "The program" group
in the contents rail:

1. **What this is** - two or three short lines: a small founding crew of Hairqare
   students, not hired influencers. Your account, your words, your style.
2. **Why students, not influencers** - a trimmed version of Sarah's message from
   `/creators` (roughly three of the five paragraphs), ending on the microphone
   line, signed Sarah. Rendered in the hub's plain-prose style, no photo card.
3. **The three ways to earn** - the four perk cards from `/creators` reduced to a
   compact text list (50% per sale, post 5 videos, 100k views, founding rate for
   life), each one line, each linking down to the matching detail in section 02.
4. **One line for people who haven't applied yet** - a quiet inline link to
   `/creators` for anyone who arrived here before applying.

Everything reads in the same short-sentence, plain-English register the rest of the
hub was rewritten into.

## No duplicated copy

The section pulls its strings from the existing `/creators` copy module where the
wording is identical (Sarah's message, the perk headlines), so a future edit to the
program story updates both surfaces. Only the hub-specific connective lines are new.

## Technical notes

- `src/features/creators/copy/hub.ts` gains a `PROGRAM` block: the intro lines, the
  selected letter paragraphs (imported from `copy/creators.ts`), and the four
  earn-summary rows with their anchor targets.
- `src/features/creators/copy/hub-sections.ts` gains a leading group
  `{ group: "The program", items: [{ id: "program", label: "The program" }] }`, so
  the desktop rail, the mobile contents sheet, and the scroll-spy all pick it up
  with no further changes.
- `src/features/creators/CreatorHubPage.tsx` renders the new `<Section id="program"
  n="00" title="The program">` above the existing `TierLabel "The essentials"`,
  reusing the existing `Section`, `Prose`, and pill/list primitives. No new
  components, no images, no new CSS.
- The existing "Submit your video" action card stays where it is, directly under the
  page header and above the new section, so the primary action is still first.
