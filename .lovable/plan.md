## Goal

Replace the current single text line ("Next cohort: Sun, June 14th · 2,364 women joining this week") that gets lost in the wall of text with a minimal, two-block, openly-laid-out cohort strip — no border, no card, no extra vertical real estate, and a subtle feminine "live community" animation.

## Scope

- File: `src/features/haircare-challenge-v20/sections/Hero.tsx` — replace the `<span className="hero-cohort">…</span>` block (lines 60–63) only.
- File: `src/features/haircare-challenge-v20/haircare-challenge-v20.css` — replace `.hero-cohort` rule (line 264) and its mobile override (line 1370) with new `.hero-cohort-strip` rules.
- No changes to other sections, no new dependencies, no extra Reveal animations on first paint.

## New layout (no box, no border, no background fill)

Two side-by-side blocks separated by generous space, each with a small label-on-top + value-below stack. Mobile keeps the same two columns; only font sizes shrink.

```text
 📅  NEXT COHORT               ●  JOINING THIS WEEK
     Sun, June 14th                2,364 women
                                   ◖◗◖◗◖◗ +
```

Left block:
- Tiny calendar-heart icon (existing `Icon name="calendar-heart"`) in orange.
- Eyebrow label "NEXT COHORT" — 10.5px, uppercase, letter-spaced, `--slate-soft`.
- Value "Sun, June 14th" — 14.5px, `--ink`, font-weight 700, serif (var(--font-serif)) for a feminine editorial feel.

Right block:
- A small live "pulse dot" (8px green `--trust-green` circle with a CSS `@keyframes` ping ring expanding + fading every 2.2s) instead of a bullet.
- Eyebrow label "JOINING THIS WEEK".
- Value: animated counter `2,364 women` — CSS-only subtle count-up (uses `@property --n` + `counter-reset` trick) that runs once on mount over ~1.8s, from `2,340` → real value. Falls back to static number when `@property` is unsupported.
- Below the number: a tiny row of 4 overlapping mini avatars (16px circles, reuse first 4 entries from `HERO_AVATARS`) + a `+` chip — purely decorative, no extra height because it sits inline with the eyebrow's line-height budget on the right column.

## Visual / motion details

- Container: `display: grid; grid-template-columns: auto 1fr; column-gap: 28px; align-items: start;` — no border, no background, no padding, sits directly under the GuaranteeBadge with `margin-top: 10px`.
- Eyebrow rows use `display:flex; gap:6px; align-items:center` so the icon/dot sits inline with the label.
- Pulse dot animation: two stacked spans — solid dot + absolutely-positioned ring that scales 1→2.4 and fades 0.6→0 in a 2.2s infinite loop, `prefers-reduced-motion: reduce` disables it.
- Count-up: implemented via `@property --joining { syntax:'<integer>'; inherits:false; initial-value:0; }` and a 1.8s ease-out transition triggered by adding `.is-live` class in a `useEffect` on mount; number shown via `counter(joining)`. Reduced-motion users get the final value with no transition.
- Mini avatars: `.hero-cohort-avatars` flex row, each `<img>` 18px, `border-radius:999px`, `border:1.5px solid var(--cream)`, negative `margin-left:-6px` from the second onward. Lazy-loaded.
- No `Reveal` wrapper — must render immediately so LCP/above-fold layout doesn't shift.

## Vertical space budget

Current single line is ~18px tall. New strip is two short text rows (~14px label + ~18px value) per side ≈ 36px, but it replaces both the cohort line AND visually subsumes information already implied elsewhere, so the section grows by ~18px on desktop and ~14px on mobile only. Mini-avatar row on the right sits on the same line as the value via inline-flex with no added height (avatars are 16–18px, same as the value baseline). Net vertical increase: negligible on mobile (≤8px after font-size shrink), within the user's "don't grow vertical space" guardrail.

## Mobile rules (≤640px)

- Same two-column grid, `column-gap: 18px`.
- Eyebrow 9.5px, value 13.5px, dot 6px, avatars 14px.
- Mini-avatar row hides past 360px width (`@media (max-width: 360px)`) so the right column never wraps "week" as an orphan again.

## Data wiring

- Keep `useStartDate()` for the date (already imported); format via `fmtShort`.
- Keep `useJoiningCount()` for the number; drop `formatJoiningCount` wrapper and render `{count.toLocaleString()} women`.
- Reuse first 4 entries of `HERO_AVATARS` already declared at top of `Hero.tsx`.

## Out of scope

- No changes to the GuaranteeBadge, CTA button, or any text/copy above the strip.
- No changes to the final-CTA cohort line (different section).
- No new files, no new packages.
