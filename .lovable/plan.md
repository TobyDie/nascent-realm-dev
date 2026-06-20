# /22-the-haircare-challenge — Three targeted changes

Scope is strictly v22. No layout/type changes outside what's listed.

## A. Inline conviction cards (new component)

Create `src/features/haircare-challenge-v22/sections/ConvictionCard.tsx` — a single full-width pull-quote card visually distinct from the carousel and from the inline italic body quotes.

Card structure (props: `initial`, `name`, `descriptor`, `tag`, `quote`, `bhcId`):
- White surface card with `border-radius: 18px`, soft shadow, 28px padding.
- 4px left accent rule in `var(--accent)`.
- Large decorative coral `"` mark top-left (~40px, `var(--accent)`).
- Quote: 20px desktop / 18px mobile, weight 500, `var(--ink)`, line-height 1.45, NOT italic.
- Attribution row (margin-top 18px, flex/centered):
  - 40px circular initial badge — `var(--accent-soft)` bg, `var(--accent-deep)` bold initial (matches carousel K/E style).
  - Name (`var(--ink)` 600) + descriptor (`var(--muted)` 13px) stacked.
  - Pushed right: 5 gold stars (`var(--star)`) + small "Verified · Day 14" label (`var(--muted)` 12px).
- One concern-tag pill under attribution: `var(--accent-soft)` bg, `var(--accent-deep)` text, `--radius-pill`, 12px.
- `data-bhc-id={bhcId}` attribute preserved on the root for verification.

All styles added to `listicle-v22.css` under `.hq-sp-v22` scope (classes prefixed `v22-conviction*`). Section vertical margin = existing v22 section gap so it reads as its own beat.

### Placement (in `Reasons.tsx` or composed in `ListiclePageV22.tsx`)

The current `Reasons` component renders 5 `<Reason>` sections back-to-back. Refactor so cards can sit between them — simplest path: have `Reasons` render `<Reason />` + optional `<ConvictionCard />` siblings inline, in the right order. Card 3 goes inside `Transition.tsx` directly after the body copy and before the CTA/stars line (since the Stats section currently doesn't exist on this page — the after-Solution / before-stats slot is the end of the Transition section).

Order:
1. After Reason 03 — Card 1 (G · A pharmacist · "Product Overload") — BHC `ddbcc5bb-3670-46e4-9636-0dbf07baf0a0`.
2. After Reason 05 — Card 2 (B · Brooke · Canada · "Free Of The Shelf") — BHC `d457edad-ef31-46a2-8e1d-3ff27ab65243`.
3. Inside `Transition.tsx`, after the closing "first honest look" paragraph and before the CTA — Card 3 (A · Abigail · United States · "Made Her Own") — BHC `bf43cac3-602a-4e4b-b529-d3ddab807e7f`.

All quotes verbatim per spec. No 4th card (optional, skipping). Existing italic inline quotes in R01/R04 left as-is (no consistency rewrite).

## B. Delay the sticky urgency bar past Reason 01

Edit `Reasons.tsx`: append a sentinel `<div id="v22-r1-end" aria-hidden="true" />` at the very end of Reason 01's section.

Edit `StickyMobileCta.tsx`: replace the current hero/scroll logic with a single IntersectionObserver on `#v22-r1-end`:
- Initial state: hidden.
- When the sentinel's `boundingClientRect.top <= 0` (scrolled past), set `show=true` and **latch** it — never flip back to false (persistent for rest of page, even on scroll-up to hero).
- Keep the existing `.is-show` class + CSS transition (slide-up + fade ~200ms already in CSS, verify `.v22-stickycta` transition is ≤200ms; tune in CSS only if currently longer).
- Fallback: if sentinel missing, observe `document.body` scroll past `100vh` with the same latch behavior.

Bar content (copy, countdown, group date, CTA) is untouched.

## C. Fix Trustpilot count

In `SocialProofV22.tsx`:
- Change `4.8/5 · 12,400 reviews` → `4.8/5 · 1,400+ reviews`.
- Wrap the entire Trustpilot block in an `<a href="https://www.trustpilot.com/review/hairqare.co" target="_blank" rel="noopener noreferrer">` with a class (`v22-sp22__tp-link`) that removes default underline/color so visual is unchanged.

## Files touched

- new `src/features/haircare-challenge-v22/sections/ConvictionCard.tsx`
- `src/features/haircare-challenge-v22/sections/Reasons.tsx` — insert cards after R03 + R05, add R01-end sentinel.
- `src/features/haircare-challenge-v22/sections/Transition.tsx` — insert Card 3 before CTA.
- `src/features/haircare-challenge-v22/sections/StickyMobileCta.tsx` — switch trigger to sentinel + latch.
- `src/features/haircare-challenge-v22/sections/SocialProofV22.tsx` — fix count + wrap in link.
- `src/features/haircare-challenge-v22/listicle-v22.css` — add `.v22-conviction*` styles (scoped under `.hq-sp-v22`); no other rules changed.

## QA

- 3 conviction cards render in the correct slots, visually distinct from carousel + italic inline quotes; left accent rule, initial avatar, tag, 5 stars, "Verified · Day 14" all present; `data-bhc-id` on each.
- Sticky bar hidden on initial load over Hero + R01; slides in once R01 scrolls off; stays visible thereafter (including scroll-up to hero).
- Trustpilot reads `4.8/5 · 1,400+ reviews`, badge links to live profile in new tab.
- No regrowth/"reverse" copy introduced.
