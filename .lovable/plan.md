## Goal

Make the cohort strip impossible to miss while staying minimal and on-brand. Replace the current quiet two-block label/value layout with a **live, gamified scarcity bar** — a thin gradient progress meter, a live-pulsing tick-up counter, a "just joined" micro-ticker, and a small avatar cluster. Free vertical space by removing the redundant GuaranteeBadge under the hero CTA.

## Files to change

1. `src/features/haircare-challenge-v20/sections/Hero.tsx`
  - Remove the `<GuaranteeBadge size="sm" className="guarantee-not-cta" />` line directly under the CTA (final-CTA guarantee remains untouched, this one is duplicative — guarantee already lives inside the CTA button area visually and is repeated near final-cta).
  - Replace the current `.hero-cohort-strip` block with the new gamified strip described below.
  - Add a small local `useEffect` to drive the live tick-up.
2. `src/features/haircare-challenge-v20/haircare-challenge-v20.css`
  - Replace `.hero-cohort-strip` and `.hcs-*` rules + the mobile overrides with the new `.live-cohort` ruleset.
3. `src/features/haircare-challenge-v20/useJoiningCount.ts`
  - No behavior change; just expose a derived `COHORT_CAPACITY = 3000` constant alongside existing exports so progress % is computed in one place.

No new packages, no new files, no Reveal wrappers (must render instantly above the fold).

## New strip — anatomy (mobile-first, ~64px tall)

```text
 🟢 LIVE  ·  Next community batch starts sun, june 14th                 ▲ 12 joined in the last hour
 ────────────────────────────────────────────────── 
 [👤][👤][👤][👤]+   2,364 women have joined
```

Three short rows, no borders, no card, sits flush in the hero column under the CTA. The whole strip has `margin-top: 14px` and no padding.

### Row 1 — live eyebrow (single line, space-between)

Left: green `.live-cohort-pulse` dot (8px) with a 2.2s ping ring + the label `Live · cohort fills` in 10.5px uppercase tracked `--slate-soft`, followed by the date `Sun, June 14th` in serif italic 12.5px `--ink`.

Right (mobile: wraps under on ≤360px): a tiny "just joined" chip — `↑ 12 joined in the last hour` in 11px `--orange-700`, no background. The number animates +1 every 18–28s (randomized) with a `scale(1)→1.18→1` pop and re-settles; resets when it crosses 30.

### Row 2 — scarcity progress bar (full width, 5px tall)

A hairline track in `rgba(0,0,0,0.06)` with a gradient fill `linear-gradient(90deg, var(--orange-100), var(--orange-500), var(--orange-700))` and a soft glow `box-shadow: 0 0 6px rgba(232,98,42,0.45)`. Width animates from `0%` to the real percentage (`joining / 3000 * 100`) over 1.4s `cubic-bezier(.2,.7,.2,1)` once on mount.

Right of the bar: a small `78%` label, 11px tabular-nums, `--slate`. The percent number also animates (CSS `transition` on a JS-updated value).

A subtle moving sheen sweeps left→right across the filled portion every 4s (`::after` with a linear-gradient highlight, 18% width, translating from -30% to 130%) to telegraph "live filling". Disabled under `prefers-reduced-motion`.

### Row 3 — proof line

Left: overlapping mini avatars (5 round 22px images from `HERO_AVATARS`, `-8px` overlap, 1.5px `--cream` ring) + a `+` chip.

Right of avatars (same line): `**2,364** of 3,000 women have joined` — number in serif 18px `--ink` weight 700 tabular-nums, the rest in 12.5px sans `--slate`. The big number gets a subtle `pop` animation each time the live tick fires (synced with row 1's "+X joined").

## Live behavior (no backend, deterministic-feeling but lightweight)

- Base count comes from existing `useJoiningCount()` (already updates each minute).
- Add a local `useEffect` that, every 14–26s (randomized), increments a `localBump` state by 1, plays the pop animation, and pushes the "+X joined in the last hour" number up by 1. Every 60s, decay that "last hour" number by 1 toward 0 so it feels organic and never balloons.
- Displayed count = `useJoiningCount() + localBump`. When `useJoiningCount()` ticks the next minute, reset `localBump` to 0 so we never exceed real ramp drift.
- All animations honor `prefers-reduced-motion`.

## Color & spacing revision

- Use brand orange ramp (no new colors): track on neutral, fill on brand gradient, percent in slate, live dot in `--trust-green`.
- Generous breathing room: `gap: 10px` between rows on mobile, `12px` desktop.
- Typography: row 1 eyebrow tracked uppercase, row 2 numeric, row 3 mixes serif emphasis (the count number) with sans to draw the eye. This is the only place in the hero block that uses serif at body size, so it stands out.
- No box, no border, no background fill anywhere — relies on the progress bar and pulse motion to anchor attention.

## Vertical budget

Removing the hero GuaranteeBadge frees ~28–34px on mobile. New strip is ~60–66px tall (three short lines + 5px bar + 6px gaps). Net change: roughly neutral on mobile (≤6px more), zero or negative on desktop. Well within the "don't grow vertical space" guardrail.

## Edge cases / safety

- Avatars hidden on `< 340px` viewports (already done in current rule, kept).
- Progress bar capped at 100%; if `joining > 3000`, label switches to `cohort full · join the waitlist` (still no background, just text color shifts to `--orange-700`).
- All timers cleaned up on unmount.
- `useReducedMotion` check: no pop, no sheen, no ping; progress bar still renders at final width but skips the width transition.

## Explicitly out of scope

- The desktop layout / image column on /20 — untouched.
- Other sales pages (v17/v18/v19) — untouched, per page-fork rule.
- Final-CTA cohort line further down the page — untouched.
- The GuaranteeBadge component itself — only the hero usage is removed; component remains for FinalCta which still uses it.