
# Redesign "None of this was your fault" — a scannable, hopeful story

Goal: turn the three flat cards into a visual storyline that a skimmer instantly "gets" in 3 beats, then closes on a hopeful CTA. Mobile-first (390px), still scoped under `.hq-sp-v21`.

## The narrative arc (unchanged copy, new staging)

The section becomes a **three-beat journey** with a clear emotional curve:

```text
  Beat 1 (heavy)   →   Beat 2 (heavier)   →   Beat 3 (RELIEF, hopeful)
  "routine for 25"     "tried to buy fix"     "it's actually easy"
        ◯  ───────────────  ◯  ───────────────  ★
   muted cream          muted cream         warm sunrise card
```

A hand-drawn vertical squiggle/path (inline SVG) connects the three beats on the left rail — like a story timeline. Each beat is a numbered "chapter" (01 / 02 / 03). Beat 3 visually "blooms": warmer color, a hand-drawn sunrise/sparkle doodle, larger type — the moment of hope.

## Visual moves (scoped to `.nyf-*`, no new deps)

1. **Section frame**
   - Soft gradient background (cream → very light peach) instead of flat white, signaling a shift from the heavy "WHY" block above.
   - Centered eyebrow stays. Headline gets a **hand-underline SVG** under the word "fault" (orange, wobbly stroke).

2. **Storyline rail (the spine)**
   - Inline SVG vertical dashed/wavy line on the left, drawn as if by hand.
   - Three numbered circles (01, 02, 03) sit on the rail. 01 + 02 are muted ink; 03 is filled orange with a tiny sparkle doodle.
   - On desktop (≥820px) the rail becomes horizontal: three beats in a row with the squiggle connecting them.

3. **Beat cards (chapters, not feature tiles)**
   - Card 1: small "Chapter 01 · The routine" label, headline, 1-sentence body. A tiny hand-drawn doodle to the right: a crossed-out shampoo bottle (inline SVG, 2-color, sketchy stroke).
   - Card 2: "Chapter 02 · The spend". Doodle: a stack of products with a small "$$$" sketch and a question mark.
   - Card 3 (the turn): "Chapter 03 · The truth" tag in orange. Card has warm peach background, slightly larger, soft sunrise SVG behind the title (rays + half-sun, very subtle, ~12% opacity). Hand-drawn checkmark doodle replaces the question mark.

4. **Micro-engagement for skimmers**
   - Each card has a **pull-quote line** rendered in serif italic above the body — the single sentence a skimmer needs to "get it" without reading the paragraph. Examples (derived from existing copy, not new claims):
     - 01: *"You followed what used to work."*
     - 02: *"You tried to buy the answer."*
     - 03: *"Once you understand it, it's easy."*
   - Body paragraph stays for readers who slow down.

5. **Reveal motion (reuse existing `Reveal`)**
   - Stagger 0 / 120 / 260ms so the eye is pulled down the rail.
   - The orange Chapter 03 circle pulses once on reveal (CSS keyframe, respects `prefers-reduced-motion`).

6. **Closing CTA**
   - Keep the orange pill `Button` (unchanged style per page-wide rule).
   - Add a tiny hand-drawn arrow doodle (SVG) curving from Chapter 03 down to the button — visually saying "this is where it leads".
   - Above the button, a small hopeful kicker line in serif italic: *"The hard part is already behind you."*

## Hand-drawn assets (all inline SVG, no new files)

- Squiggle rail (vertical + horizontal variants)
- Wobbly underline under "fault"
- Crossed-out shampoo bottle (Chapter 01)
- Product stack + "$$$" sketch (Chapter 02)
- Half-sun with rays + sparkle (Chapter 03)
- Curved arrow to CTA

All strokes use `currentColor` so they inherit ink/orange tokens. Kept under ~40 lines of SVG total.

## Mobile-first layout (390px)

```text
┌─────────────────────────────┐
│   BEFORE YOU BLAME YOURSELF │
│   None of this was your     │
│           ~~~fault~~~       │
│                             │
│ ◯ 01  Chapter · The routine │
│ │     "You followed what    │
│ │      used to work."       │
│ │     [body sentence]       │
│ │                  🍶✗      │
│ ◯ 02  Chapter · The spend   │
│ │     "You tried to buy…"   │
│ │     [body sentence]       │
│ │                  💰?      │
│ ★ 03  Chapter · The truth   │
│       "Once you understand  │
│        it, it's easy."      │
│       [body sentence]       │
│  ☀ ✨           ✓           │
│                             │
│   "The hard part is         │
│    already behind you."     │
│      ↘  [ Show me what my   │
│           hair needs now → ]│
└─────────────────────────────┘
```

Desktop (≥820px): rail becomes horizontal, three chapters sit in a row, Chapter 03 slightly larger; squiggle connects them; CTA centered below.

## Files to change (build phase)

- `src/features/haircare-challenge-v21/sections/NotYourFault.tsx` — full rewrite of the JSX: chapter rail, three beat cards with inline SVG doodles, pull-quote lines, closing kicker + curved arrow to CTA. Keep `onCta` prop and `Button` import.
- `src/features/haircare-challenge-v21/haircare-challenge-v21.css` — replace the existing `.nyf-*` block (lines ~1818–1880) with the new storyline styles: gradient section bg, rail, numbered chapter markers, doodle positioning, Chapter 03 accent, pull-quote serif italic, mobile→desktop layout, reduced-motion guard, pulse keyframe.

No changes to `Science.tsx`, page wiring, or other CTAs. Copy is preserved verbatim; only the pull-quote lines are added as visual scan-anchors derived from the same content.

## Out of scope

- No new images uploaded (all doodles inline SVG).
- No new dependencies.
- No changes to other sections, CTAs, or routes.
