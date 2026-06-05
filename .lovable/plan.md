
# Mobile review — /14-the-haircare-challenge

Page is rendered inside a full-screen `<iframe>`, so all fixes live in `public/14-the-haircare-challenge/`. 99% of traffic is mobile, so every change is judged against the 390×682 (your current) viewport.

## Issues found (ranked by impact)

### 1. Sticky bottom CTA fires way too early and competes with the hero CTA
`sections-c.jsx` `StickyCta`: `threshold = isMobile ? 120 : 700`. At 120px scroll the user is still inside the hero — the sticky bar pops up on top of the primary hero CTA and covers the hero image caption. It also stays up across the entire page with no offset padding on `<body>`, so it permanently covers ~60px of content (including the last line of every section's CTA).

Fix:
- Trigger only after the hero CTA leaves the viewport. Use an `IntersectionObserver` on the hero `<Button>` (or the `.hero-section` element) instead of a fixed pixel threshold. Hide again when the final-CTA section is visible (avoid double-CTA stacking).
- Add `padding-bottom: 76px` to `body` (or to the last section) when the sticky bar is mounted, so nothing is permanently obscured.
- Keep desktop behavior similar (show after hero leaves).

### 2. Hero CTA is pushed below the fold on 390×682
On mobile the grid reorders image first (order 1) / text second (order 2). Image is forced to `aspect-ratio: 5/4` with `max-height: 260px` (line 549 wins over the conflicting `220px` on line 545 — that conflict itself should be cleaned up). Budget on 682px viewport: topbar 60 + age stripe ~44 + image 260 + eyebrow + 36px H1 (2 lines ≈ 80) = ~480px → CTA lands around 520–560px, below the fold once Safari/Chrome address bar is counted.

Fix:
- Cap hero image to ~180px on mobile (or use `aspect-ratio: 16/10` with `max-height: 200px`).
- Tighten H1 mobile size from 36px → 30–32px, line-height 1.05.
- Remove the empty `<p className="hero-sub-hl">` block (it ships an empty paragraph today) and tighten `hero-validation` margin.
- Reduce age-stripe vertical padding on mobile by ~2px.
Goal: orange CTA visible at first paint on a 390×640 viewport.

### 3. Carousels — peek/snap math + missing arrows + 6-item dots
All carousels (Recognition 6, Video 3, Science factors 6, Social proof 4, Founder story 3) use `<Carousel peek={0.88}>`. Issues on mobile:
- `peek: 0.88` only shows ~12% of the next card — many users miss the swipe affordance. The "Swipe to read them all →" hint helps but should be paired with stronger visual peek + edge fade.
- `.carousel-track` uses `padding: 6px 18px 10px; margin: 0 -18px;` inside `.wrap-wide` (which is also 18px padded). Combined with `scroll-padding-left: 18px`, the first slide aligns correctly, but the last slide can't snap fully (no `scroll-padding-right`). Add `scroll-padding-right: 18px` and ensure the track has trailing padding so the last card can come fully into view.
- Dots row for 6-item carousels (Recognition, Science factors) is hard to read and tap. Replace with a "1 / 6" counter + chevron buttons, or progress bar; keep dots only for ≤4 items.
- Add a soft right-edge gradient mask (`mask-image`) so the cut-off neighbor card visibly says "more →".

### 4. `.founder-layout` desktop grid is defined INSIDE the mobile media query (CSS bug)
`index.html` lines 629–651 — `.founder-layout`, `.founder-copy-wrap`, `.founder-story-grid`, `.founder-story-card`, `.founder-story-caption`, `.founder-story-num` are all declared inside `@media (max-width: 720px) { ... }` (which closes at line 672). Result: desktop shows a broken single-column founder section, and mobile is forced into a 0.85fr / 1.15fr 2-column that doesn't fit. Same problem with `.not-about-grid` on line 654.

Fix: move those base declarations OUT of the media query (above the breakpoint), keep only the actual mobile overrides (`grid-template-columns: 1fr`, photo height 320, ordering) inside.

### 5. Top bar on mobile — CTA crowding and stripe stacking
- TopBar is sticky (`top:0`) and renders BEFORE the AgeStripe in `app.jsx`. Once you scroll past the age stripe, only the topbar sticks — correct, but the topbar CTA "Join the challenge — $37" at 13.5px/9×16 padding is tight next to the 20px logo on 390px width and can wrap. Shorten mobile label to "Join — $37" or show only an icon-pill until a media-query breakpoint.
- Consider making the age stripe sticky-then-collapse, or letting it scroll away entirely (current behavior is fine if topbar CTA stays short).

### 6. Inline testimonial avatars are crosshatch placeholders
`InlineTestimonial` uses `.ph` as the avatar — on mobile that crosshatch swatch reads as "broken image" and erodes trust right next to social-proof quotes. Swap for an initials-on-orange circle (matches the existing `TestimonialCard` style) until real headshots are dropped in.

### 7. Wireframe annotation chips ("Section 1 — Hero / recognition") are still visible
Every section renders an `<Anno>` chip. These are dev wireframe markers — strip them (or wrap in a `process.env`-style flag) for the published page.

### 8. Small mobile-only cleanups
- Empty `<p className="hero-sub-hl">` shipping in the DOM (sections-a.jsx ~60).
- `.hero-image-wrap` has two competing `max-height` rules (220 vs 260) — keep one.
- `.btn` on mobile becomes 100% width inside any `section` — this also applies to the ghost "Show me how to fix it" CTA, which is fine, but the "See more stories" small ghost link in Social Proof becomes a full-width button that looks heavier than the primary above it. Add an exception class or use a text link.
- `Faq` `max-height: 280px` collapse breaks on long answers (the perimenopause and "tried so many things" answers are close to that limit at narrow widths). Replace with `grid-template-rows: 0fr → 1fr` transition for a content-agnostic collapse.

### 9. Performance (mobile-first concern, larger ticket)
The page runs React + ReactDOM + Babel-standalone in-browser with `type="text/babel"` JSX transpilation. On a mid-range Android over LTE this typically adds 1.5–3s before first interaction, after which the sticky bar and carousels can feel janky. Not in scope for a "responsiveness pass," but flagging: the eventual move is to compile these JSX files to a single bundled JS asset (or port the sections into the TanStack route) so the page ships pre-built JS.

## Proposed scope for this turn

Do the high-impact UX/responsiveness fixes; defer the perf rewrite.

1. **StickyCta**: switch to IntersectionObserver gated on the hero CTA; hide near final CTA; add body bottom padding.
2. **Hero above-the-fold**: cap image height, tighten H1 + paragraphs, remove empty `<p>`, reconcile duplicate `.hero-image-wrap` rules.
3. **Carousels**: increase peek to 0.82, add `scroll-padding-right`, add right-edge mask gradient, replace dots with "n / total + chevrons" for 5+ item carousels (Recognition + Science factors), keep dots for ≤4.
4. **CSS structure bug**: move `.founder-layout` and friends out of the mobile media query; keep only mobile overrides inside.
5. **TopBar mobile**: shorten CTA label to "Join — $37" under 720px.
6. **Inline testimonial avatars**: initials circle instead of `.ph` swatch.
7. **Strip `<Anno>` chips** for production view.
8. **FAQ collapse**: switch from `max-height` to grid-rows trick.

Out of scope (call out, don't ship):
- Build-time bundling of JSX / removing Babel-standalone.
- Replacing placeholder hero/founder photos with real assets.

## Technical notes

- All edits land in `public/14-the-haircare-challenge/index.html` (CSS block) and `public/14-the-haircare-challenge/src/*.jsx`. No changes to the TanStack route file are needed.
- `useIsMobile` already exists in `primitives.jsx` (breakpoint 720); reuse it for the IntersectionObserver fallback.
- For the carousel counter, extend `<Carousel>` in `primitives.jsx` with a `controls="counter" | "dots"` prop so existing call sites stay one-line.
- After changes, verify on 390×682 (current) and 360×800 viewports; specifically check (a) hero CTA visible at first paint, (b) sticky CTA hidden until hero CTA scrolls past, (c) all carousels show ≥18% of the next card, (d) founder section renders as 2-col on desktop and stacks on mobile.
