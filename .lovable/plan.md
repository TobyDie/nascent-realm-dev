## Goal
Add an always-running HH:MM:SS countdown timer to the sticky bottom CTA bar (`src/features/haircare-challenge/sections/StickyCta.tsx`) that:
- Ties to the "85% OFF TODAY" badge (urgency for the discount).
- Counts down in 12-hour cycles.
- Auto-resets to a fresh 12:00:00 at **10:00 PM WITA** and again at **10:00 AM WITA** (every day, in perpetuity), in the user's local clock equivalent.
- Keeps all existing sticky-bar text/elements (cohort date, 85% OFF pill, "2,400 women joining", Join now button) — nothing removed.

## Timer logic
- WITA = UTC+8 (fixed, no DST).
- Two daily reset boundaries in UTC: 14:00 UTC (= 22:00 WITA) and 02:00 UTC (= 10:00 WITA).
- On every tick (1s interval): compute `now` in UTC, find the next boundary ≥ now, `remaining = next - now`. Format as `HH:MM:SS` (zero-padded). When `remaining` hits 0, the next tick naturally rolls to the following 12-hour window — no manual reset needed.
- Use `setInterval(1000)` started in `useEffect`; clear on unmount. Use `requestAnimationFrame`-free, simple seconds precision (smooth enough, no jank).
- SSR-safe: initialize state to `"12:00:00"` and compute real value inside `useEffect` so server render is stable.

## Sticky bar redesign (mobile-first, single row)
Keep one compact row, but reorganize so the timer fits without crowding. New layout (left → right):

```
[ 85% OFF · 11:58:42 ]   Next cohort: Fri, June 6th         [ Join now → ]
                          ★ 2,400 women joining
```

- **Left chip (new combined unit)**: orange pill containing "85% OFF" + monospaced countdown `HH:MM:SS`. Replaces the old standalone "85% OFF TODAY" badge — same orange tokens, slightly wider. Use `font-variant-numeric: tabular-nums` and a fixed min-width so digits don't reflow each second.
- **Middle column**: cohort line (bold) on top, "2,400 women joining" small text below — same copy as today.
- **Right**: existing Join now button, unchanged.

On very narrow screens (<360px) the chip wraps under the cohort text instead of squeezing the button. Desktop keeps the same single-row layout with more breathing room.

## Files to change
- `src/features/haircare-challenge/sections/StickyCta.tsx` — add `useCountdown` hook (inline), restructure the inner flex layout, render the new chip with the live timer. No prop changes; `onCta` still wired to Join now.
- `src/features/haircare-challenge/haircare-challenge.css` — add small styles for `.sticky-offer-chip` (orange bg, tabular-nums, rounded pill) and tighten gaps for the 3-column flex. Scoped under `.hq-sp`.

No other sections, no copy removed, no new dependencies.
