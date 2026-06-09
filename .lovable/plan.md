
# Plan — Fork /17-the-haircare-challenge into an isolated v17 namespace

## Goal
Make `/17-the-haircare-challenge` 100% independent of `/14-the-haircare-challenge`, `/14-native`, and `/the-haircare-challenge`. After this fork, edits to `src/features/haircare-challenge/*` will never affect /17, and edits inside `src/features/haircare-challenge-v17/*` will never affect any other page.

## Steps

1. **Create the v17 folder** `src/features/haircare-challenge-v17/` by copying these 25 files verbatim from `src/features/haircare-challenge/`:
   - `HaircareChallengePage.tsx` → rename export to `HaircareChallengePageV17`
   - `primitives.tsx`
   - `img.ts`
   - `useJoiningCount.ts`
   - `useStartDate.ts`
   - `haircare-challenge.css` → renamed `haircare-challenge-v17.css`
   - `sections/` — all 18 files copied as-is:
     AgeStripe, Faq, FinalCta, Founder, Hero, HowItWorks, Interstitial, NotAboutHair, Recognition, RecognitionVideo, ResultsIn2Weeks, ReviewedBy, Science, SelfQualifier, SocialProof, StickyCta, VideoTestimonials, WhatsIncluded

2. **Rewire imports inside the v17 folder** so every file imports only from siblings within `haircare-challenge-v17/` (no `../haircare-challenge/` references). Section files already use relative `../primitives` / `../img` paths, which after copy resolve to the v17 copies automatically — no changes needed beyond the page assembly file.

3. **Scope the CSS** in `haircare-challenge-v17.css`:
   - Change the root selector from `.hq-sp` to `.hq-sp-v17` everywhere in the file (global find/replace within that one file only).
   - Update `HaircareChallengePageV17.tsx` to render `<div className="hq-sp-v17 rooted">`.
   - This guarantees CSS cannot bleed in either direction.

4. **Update the route file** `src/routes/17-the-haircare-challenge.tsx`:
   - Import `HaircareChallengePageV17` from `@/features/haircare-challenge-v17/HaircareChallengePageV17`.
   - Import `r2img`, `r2srcset`, `HERO_WIDTHS` from `@/features/haircare-challenge-v17/img` (so even the preload helper is namespaced).
   - `head()` metadata unchanged.

5. **Verify isolation**:
   - `rg "haircare-challenge-v17" src/routes/` → only `/17` route references it.
   - `rg "from \"@/features/haircare-challenge\"" src/routes/17-the-haircare-challenge.tsx` → zero matches.
   - Build passes (TanStack Router code-splits per route, so the v17 bundle is independent).

6. **Save the isolation rule to project memory** so every future cloned sales page is forked the same way by default.

## Out of scope (this turn)
- No design changes yet. The 4 conversion fixes (thumb-stop testimonials, sticky-CTA urgency redesign, visual-story Recognition, re-sequenced CTA + quiz nudge) will be implemented in a follow-up turn, applied only inside `src/features/haircare-challenge-v17/`.
- `/14-native` and `/the-haircare-challenge` stay on the shared v14 component for now.

## Files touched
- **Added** (25): everything under `src/features/haircare-challenge-v17/`
- **Edited** (1): `src/routes/17-the-haircare-challenge.tsx`
- **Added** (2): `mem://index.md` (or update), `mem://preferences/page-fork-rule.md`
- **Not touched**: `src/features/haircare-challenge/**`, all other routes
