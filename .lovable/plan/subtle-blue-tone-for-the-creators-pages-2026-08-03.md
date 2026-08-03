# Subtle blue tone for the Creators pages

## What's there now
The three creator pages (`/creators`, `/creators/hub`, `/creators/terms`) run on an all-warm palette: ivory `#faf8f5` background, sand `#f0eae2` bands, warm line `#e4ddd3`, flame orange CTA, plus a green sage accent and gold.

The listicle pages (`/20-`, `/30-`) are also warm, but `/20-` carries a cool counterpoint the creators pages lack: a lavender-gray section surface `#F0F0F6` and a cool hairline `#E3E3EC` used on those cool bands.

## The change
Borrow exactly that cool counterpoint. Layout, type, spacing, and the flame CTA stay untouched.

1. Add two cool tokens alongside the existing ones (nothing removed):
   - `--color-mist: #f0f0f6` (cool lavender-gray band, same value `/20-` uses)
   - `--color-line-cool: #e3e3ec` (hairline on cool surfaces)
   - `--color-slate-blue: #6f7d92` (muted blue accent to replace the green sage on the creators pages only)
2. Alternate section bands: the sand-filled sections become mist, so the page breathes warm/cool instead of warm/warm. Ivory stays the base.
3. Hairlines and card borders on any mist band switch to `line-cool`.
4. Sage-tinted chips, ticks, and reward accents move from green to `slate-blue` at the same low opacities (`/[0.12]`–`/45`), so weight is identical, only hue shifts.
5. Flame orange CTAs, gold Hairqare Lab card, and ink text are unchanged.

## Technical notes
- New tokens go in the existing creators `@theme` block at the bottom of `src/styles.css`; they are additive and unused elsewhere, so no other route changes.
- Class swaps happen in `CreatorsProgramPage.tsx`, `CreatorHubPage.tsx`, `CreatorTermsPage.tsx`, `sections/*`, `hub/*`, and `ui/Chip.tsx`, `ui/RewardCard.tsx`, `ui/Accordion.tsx` — `bg-sand` → `bg-mist` on alternating sections, `sage` → `slate-blue`, `border-line` → `border-line-cool` inside mist bands.
- `creators.css` only needs a check on the range-slider track/thumb colors so they sit correctly on the cooler bands.
- Contrast: `slate-blue` on ivory is ~4.6:1, safe for the small text it carries.
