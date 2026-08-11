# Clone /22 sales page to /31

Create an exact, fully independent copy of the `/22-the-haircare-challenge` page at `/31-the-haircare-challenge`, with the CTA pointing to `https://join.hairqare.co/1-take-the-quiz/`.

## What gets built

- A new page folder `src/features/haircare-challenge-v31/` containing a copy of every file from the v22 folder: page component, all 15 sections, primitives, CSS, and the joining-count / start-date hooks.
- A new route file for `/31-the-haircare-challenge` with its own head metadata (unique title, description, og/twitter tags, canonical `https://glow.hairqare.co/31-the-haircare-challenge`), otherwise matching /22's copy.
- Every CTA on the new page links to `https://join.hairqare.co/1-take-the-quiz/`.

## Isolation

- CSS root class renamed from `.hq-sp-v22` to `.hq-sp-v31` throughout the copied stylesheet and components, so styles can never leak between the two pages.
- Component names suffixed V31 (`ListiclePageV31`, `SocialProofV31`).
- The new route imports only from `src/features/haircare-challenge-v31/`. No shared files, no edits to any existing v22 file, so future changes on either page never affect the other.

## Verification

- Load `/31` and confirm it renders identically to `/22`.
- Confirm the sticky bar timer, cohort start date, and joining counter all work.
- Confirm every button (hero, inline, bottom, sticky) goes to the new quiz URL.
