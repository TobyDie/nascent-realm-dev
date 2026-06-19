
## Scope
All changes are confined to `src/features/haircare-challenge-v22/` (page-fork rule). Nothing in `/21` is modified or shared.

## 1. Rebuild the Solution section (`sections/Transition.tsx`)

Keep the Sarah placeholder image at top, centered layout, same `.v22-eyebrow`, `.v22-h2`, `.v22-subhead`, `.v22-body`, `.v22-cta-wrap`, `.v22-stars-line` classes, same pill CTA. Only swap copy:

- Eyebrow: `THE WAY OUT`
- H2: `What If You Never Had To Buy Another "Miracle" Again?`
- Body paragraphs (one `<p>` each, no em dashes):
  1. Picture your bathroom shelf with nothing on it you regret.
  2. No more standing in the aisle, hoping this one's finally different. No more watching money leave your account for a result that never shows up. No more treating your own hair like a problem you can't solve.
  3. Here's the part the industry buried: your hair was never the problem. You were just never taught how it actually works.
  4. That's the whole challenge. Over 14 days, Sarah shows you what your hair truly needs, from the inside out. Not another product to add to the pile. The understanding that finally lets you stop guessing.
  5. The women who've done this don't talk about a product afterwards. They talk about relief. The quiet confidence of finally knowing. Looking in the mirror and recognising their hair again. Spending less, and somehow seeing more.
  6. Sarah did it for herself first. She walked away from an industry that paid her to sell you the problem. Today she keeps the healthiest hair of her life on two simple things and about $10 a month. She built this so you could do the same.
  7. You don't have to commit to anything right now.
  8. Just take the 60-second quiz. A few questions about your hair, and you'll see whether this is actually for you. No pressure. No shelf full of regret. Just the first honest look at your hair you've had in a long time.
- Remove the existing `.v22-subhead` ("Stop Shopping For The Answer…") since new copy has no subhead — or repurpose as the first italic line. Decision: drop subhead entirely; lead with paragraph 1 in slightly larger size via existing `.v22-body` (no new CSS).
- CTA button text: `Take the 60-second quiz →` (existing `CtaButton` + `CTA_URL`).
- Stars line: `★★★★★ 4.8 | 250,000+ women joined in 149 countries` (drop "Rated").

## 2. Port testimonial carousel from /21 — independently

Create new self-contained files under v22 (no imports from v21):

- `src/features/haircare-challenge-v22/sections/TestimonialsCarousel.tsx` — port the testimonial logic from `v21/sections/SocialProof.tsx` (the `CompactTesti` card + Carousel/grid switch, same 5 testimonials, same R2 BA image filenames, same StarRow). Self-contained: inline the small helpers (`Stars`, mobile detection via `window.matchMedia`, image URL via `https://pub.hairqare.co/cdn-cgi/image/...`).
- For the carousel mechanics, use `embla-carousel-react` directly (already in repo via `src/components/ui/carousel.tsx`) with the same peek/snap behavior as v21 (`peek: 0.78`, dot indicators, swipe). Desktop: 3-col grid. Mobile: swipeable carousel with dots.
- Add scoped CSS rules to `listicle-v22.css` under `.hq-sp-v22 .v22-testis*` (card, grid, carousel track, dots). No global selectors. No reuse of v21 classes.
- Section heading: `From women who stopped buying and started learning` (use `.v22-h2`, centered, same band styling).
- Place between `<SocialProofV22 />` and `<BottomCta />` in `ListiclePageV22.tsx`.

## 3. Ratings → 4.8 everywhere

- `Transition.tsx` stars line: `4.9` → `4.8` (covered in step 1).
- Grep confirmed only that one `4.9` occurrence in v22.

## 4. Replace "cohort" with "group"

- `StickyMobileCta.tsx` line 77: `Next cohort:` → `Next group starts`.
- Rename CSS class `.v22-stickycta__cohort` → `.v22-stickycta__group` in both the JSX and `listicle-v22.css`.
- Internal comments in `useStartDate.ts`/`useJoiningCount.ts` may stay (not user-facing) — leave untouched.

## 5. Remove the word "free"

- `AnnouncementBar.tsx`: replace marquee items with neutral copy, e.g. `["HEALTHIER HAIR GUARANTEED", "14-DAY HAIR KNOWLEDGE CHALLENGE", "HEALTHIER HAIR GUARANTEED", "14-DAY HAIR KNOWLEDGE CHALLENGE"]`.
- `Reasons.tsx` line 69 quote `"Sulfate-free." "Paraben-free." "Clean." "Natural."` — this is intentional industry-jargon quote inside Reason 02 copy. **Confirming with user**: leave as-is because it is a quoted marketing-label list illustrating the ingredient-gap reason, not a Hairqare offer claim. If user wants strict removal, will rewrite as `"Sulfate." "Paraben." "Clean." "Natural."` or paraphrase.

## Final page order (unchanged structural beyond carousel insert)

AnnouncementBar → Hero → Reasons (01–05) → Transition (rebuilt solution) → SocialProofV22 (stats) → TestimonialsCarousel (new) → BottomCta → StickyMobileCta

## QA after build

- `rg -n "cohort|4\.9|FREE|Free|\\bfree\\b" src/features/haircare-challenge-v22/` returns nothing user-facing.
- All CTAs resolve to `CTA_URL` (`https://join.hairqare.co/the-quiz-haircare`).
- No em dashes in new copy.
- Verify carousel renders + swipes via `browser--view_preview` at mobile width.

## Question for you before I implement

The Reason 02 quote uses `"Sulfate-free." "Paraben-free."` as in-world marketing labels women see on bottles. Do you want me to:
(a) keep them as-is (they're quoted industry copy, not our promise), or
(b) rewrite to remove the word entirely?
