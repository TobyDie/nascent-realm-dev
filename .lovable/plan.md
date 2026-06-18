All changes scoped to `src/features/haircare-challenge-v22/` and the v22 route. No other pages touched.

## 1. Headings — lighter weight, centered, serif-style (match reference)

In `listicle-v22.css`:
- Replace `--font-display` with a serif display in the reference's spirit: **"DM Serif Display"** (closest free Google match to Glow's heavy-but-not-blocky serif). Add it to the Google Fonts URL in `src/routes/22-the-haircare-challenge.tsx`.
- Drop `font-weight` from 900 → **400** (DM Serif Display only ships in 400; the face itself is heavy enough). Remove `Archivo Black` from the stack everywhere.
- `.v22-h1`, `.v22-reason__h`, `.v22-h2`, `.v22-stats__title`, `.v22-footer__h`, `.v22-marquee--cta .v22-marquee__item`: `font-weight: 400`, `letter-spacing: -0.01em`, `line-height: 1.05`.
- Center the hero: `.v22-hero__copy { text-align: center }`, center the pill, lede, stars line, CTA.
- Collapse hero to a single centered column on ALL viewports (remove the 2-col `@media (min-width: 900px)` grid). Image on top, copy below — exactly like the reference screenshot.
- Move the floating in-image testimonial card out of the hero (delete it from `Hero.tsx`) — reference has no overlay card on the hero image.
- Stars row: center it (`.v22-stars-line--center` already exists, apply it).

## 2. Remove top-left Hairqare logo / Nav entirely

- Delete `<Nav />` from `ListiclePageV22.tsx` (keep file but stop rendering it). Result: no header element on the page.

## 3. Remove footer entirely

- Delete `<Footer />` from `ListiclePageV22.tsx`. Page ends after the bottom CTA marquee. No nav links, no email form, no social, no footer logo anywhere.
- Also remove any in-page nav anchors that might remain.

## 4. Stats — change 4.9 → 4.8

- In `Hero.tsx` `.v22-stars-line`: `4.9` → `4.8`.
- Anywhere else `4.9` appears in v22 → `4.8`.

## 5. Replace `ResultCards` section with v21-style SocialProof block

The reference "250,000+ Women / 92% / 86% / Trustpilot 4.8" block (screenshot 2) maps directly to a simplified version of v21's SocialProof trust bar. Build it natively in v22 (no cross-folder import — keeps v22 isolated per the page-fork rule):

- New section `sections/SocialProofV22.tsx`:
  - Avatar row (10 small circular profile photos + an orange "+" chip), using `pub.hairqare.co` profile images via `/cdn-cgi/image/`.
  - Big serif heading `250,000+ Women` in orange + small grey subline `have taken the challenge`.
  - Two-column stat block: `92% — saw results within 14 days` | `86% — called it life-changing` (vertical divider between, stacks on mobile).
  - Trustpilot row: `Trustpilot` wordmark + 5 green star tiles + `4.8/5 · 12,400 reviews`.
- Remove `ResultCards.tsx` from `ListiclePageV22.tsx` and replace with `<SocialProofV22 />` in the same slot.
- Remove the separate `<Stats />` section since SocialProofV22 already carries the headline stats (avoids duplication). If keeping, leave it but verify spacing.

## 6. Sticky bottom CTA — port v20 style + animated rising women count

Rewrite `sections/StickyMobileCta.tsx` (rename concept; keep filename so imports don't break) to mirror v20's `StickyCta.tsx` visually but inside the v22 namespace:

- Left column (stacked, small text):
  - Orange offer chip: `85% OFF` + live countdown `HH:MM:SS` to next 10:00/22:00 WITA boundary.
  - Bold line: `Next cohort: Fri, Jun 26th` (orange date) — use a simple v22-local `useStartDate` helper (next Friday).
  - Muted line: `<animated number> women joining this week` — number animates upward.
- Right: orange pill CTA `Join now →` (or current "Healthier hair in 14 days →" — confirm copy preference, default to `Join now →` matching v20).
- Show after `scrollY > 90vh`, hide when hero or final CTA in view (IntersectionObserver on `#hero` and a sentinel at the bottom CTA).
- Reveal on BOTH mobile and desktop (current v22 is mobile-only `display:none ≥768px`). Reference flow uses sticky on all sizes; keep desktop too — confirm in implementation.

### Gamified rising women count (new — beyond v20)
Add a v22-local `useJoiningCount.ts` cloned from v20 with one upgrade for visible animation in the sticky bar:
- Base ramp identical to v20 (1,222 Mon 12:00 WITA → 2,593 Sun 24:00 WITA).
- `useLiveJoiningCount` ticker fires more visibly: every **6–10s** add +1 (jittered). Respects `prefers-reduced-motion`.
- Render the number with a CSS roll/fade animation on each change: wrap digits in a span with `key={value}` + `@keyframes v22-tick-up { 0% { transform: translateY(8px); opacity: 0 } 100% { transform: translateY(0); opacity: 1 } }` so each new value slides up. Small green ▲ indicator next to it.

## Files

Edit:
- `src/routes/22-the-haircare-challenge.tsx` — swap font URL to DM Serif Display + Inter.
- `src/features/haircare-challenge-v22/listicle-v22.css` — font swap, weight 400, center hero, single-column hero, sticky bar styles, tick-up keyframes, remove footer/nav-related rules.
- `src/features/haircare-challenge-v22/ListiclePageV22.tsx` — remove `<Nav/>`, `<Footer/>`, `<ResultCards/>`; insert `<SocialProofV22/>`.
- `src/features/haircare-challenge-v22/sections/Hero.tsx` — centered single-column, remove overlay testimonial card, 4.8 stars.
- `src/features/haircare-challenge-v22/sections/StickyMobileCta.tsx` — full rewrite (offer chip, countdown, animated count, desktop+mobile).

Create:
- `src/features/haircare-challenge-v22/sections/SocialProofV22.tsx`
- `src/features/haircare-challenge-v22/useJoiningCount.ts`
- `src/features/haircare-challenge-v22/useStartDate.ts`

Leave alone (still present but unused): `Nav.tsx`, `Footer.tsx`, `ResultCards.tsx`, `Stats.tsx` (or remove from import list — files stay for safety).

## Out of scope
- Real photography (continues to use `placehold.co` / R2 placeholders).
- Real Trustpilot widget integration.
- Touching any other `/14`…`/21` page.
