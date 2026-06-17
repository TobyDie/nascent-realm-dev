# Plan: /22-the-haircare-challenge — Listicle Landing Page

Build a brand-new, fully isolated route at `/22-the-haircare-challenge` implementing the "5 Reasons Women Are Finally Quitting Expensive Hair Products" listicle brief. Per project memory, this page is completely forked — no shared section files, no shared CSS, no shared hooks with v17–v21.

## Isolation rules (per project memory)
- All code lives under `src/features/haircare-challenge-v22/`.
- CSS root scope: `.hq-sp-v22` (every selector prefixed with it).
- Route file imports ONLY from `src/features/haircare-challenge-v22/`.
- No edits to any other page, feature folder, or shared component.

## File structure

```text
src/routes/22-the-haircare-challenge.tsx          (route + head/SEO metadata)
src/features/haircare-challenge-v22/
  ListiclePageV22.tsx                              (page composition)
  listicle-v22.css                                 (all styles, scoped to .hq-sp-v22)
  primitives.tsx                                   (Placeholder image, Stars, CtaButton, Marquee)
  sections/
    AnnouncementBar.tsx        (S4 marquee bar — top)
    Nav.tsx                    (logo + links + hairline)
    FloatingChip.tsx           (sticky testimonial chip, appears after 400px scroll)
    Hero.tsx                   (S5: eyebrow, H1, lede, CTA, stars, hero image)
    RiskStrip.tsx              (thin accent-soft band)
    Reason.tsx                 (shared reason block: eyebrow/number/headline/image/body/optional quote)
    Reasons.tsx                (renders R1–R5 with the exact copy from the brief)
    Transition.tsx             (S11 program pivot)
    Stats.tsx                  (S12 — 3 stat blocks, __% placeholders)
    ResultCards.tsx            (S13 — 4 transformation cards w/ placeholder images, real quotes + tags)
    BottomCta.tsx              (S14 marquee + final button)
    Footer.tsx                 (S15 email capture + links + logo)
    StickyMobileCta.tsx        (mobile-only bottom bar)
```

## Route + SEO (`src/routes/22-the-haircare-challenge.tsx`)
- `createFileRoute("/22-the-haircare-challenge")`
- `head()` with unique title, description, og:*, twitter:*, canonical = `https://glow.hairqare.co/22-the-haircare-challenge` (per project convention).
- Title: `5 Reasons Women Are Finally Quitting Expensive Hair Products | Hairqare`
- Description: lede line from the brief, trimmed to <160 chars.
- Renders `<ListiclePageV22 />`.

## Design system (in `listicle-v22.css`, all under `.hq-sp-v22`)
- CSS custom props: `--bg #FFFDFB`, `--surface #FFFFFF`, `--ink #1E1A17`, `--body #4A433D`, `--muted #8A817A`, `--accent #D86B4A`, `--accent-deep #B4502F`, `--accent-soft #FBE7DE`, `--star #E8A33D`, `--line #EDE6DF`, plus radius/shadow tokens.
- Container: max-width 640px desktop, 20/24px side padding, mobile-first.
- Full-bleed images break out via negative margins to the viewport.
- Typography: Archivo 800 for H1/reason headlines, Inter 400/700 for body/eyebrow. Fonts loaded via `<link>` tags injected from the page component head — local to v22 only (no global font changes).
- Section gap: 64px mobile / 88px desktop.
- Marquee: CSS `@keyframes` translateX, ~25s linear infinite, two duplicated tracks for seamless loop.
- Buttons: pill, full-width on mobile, accent bg, hover -> accent-deep.

## Content
- All copy pasted verbatim from the brief (eyebrows, numbers 01–05, "Because…" headlines, body paragraphs, quote blocks for R1 + R4).
- Image placeholders use `placehold.co/{W}x{H}/FBE7DE/D86B4A?text=…` URLs at exact dimensions specified per section, with the brief's alt text.
- Data-pull slots (S12 stats, S13 result-card photos) kept as `__%` and placeholder images; real quotes from brief slotted into the 4 cards with the tag pills.
- All 4 CTAs (+ sticky mobile bar) point to a single `CTA_URL` const = `https://join.hairqare.co/the-quiz-haircare` (matching the convention used by sibling pages; trivially swappable later).

## Behavior
- Floating chip: `useEffect` listens to scroll, toggles visibility after `window.scrollY > 400`.
- Sticky mobile CTA: visible only `< 768px`, appears after hero scrolls past (IntersectionObserver on hero sentinel).
- Reduced motion: marquee animation paused under `prefers-reduced-motion`.

## Out of scope
- No real assets uploaded (placeholders only — per brief).
- No live stat numbers or real card photos (data-pull slots).
- No edits to `__root.tsx`, other routes, or any sibling `haircare-challenge-v*` folder.
- `src/routeTree.gen.ts` will be regenerated automatically by the TanStack Router plugin.
