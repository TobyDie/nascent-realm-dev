/* Cloudflare R2 + Image Transformations helper.
   All page imagery lives at pub.hairqare.co/glow/<file> and is served resized,
   quality=80, format=auto (AVIF/WebP) via Cloudflare's /cdn-cgi/image pipeline. */
const BASE = "https://pub.hairqare.co/cdn-cgi/image";
const PREFIX = "glow";

/** Build a single transformed image URL for an R2 file key (e.g. "ba-1.webp"). */
export function r2img(file: string, w: number, q = 80): string {
  return `${BASE}/width=${w},quality=${q},format=auto/${PREFIX}/${file}`;
}

/** Build a responsive srcSet string across the given widths. */
export function r2srcset(file: string, widths: number[], q = 80): string {
  return widths.map((w) => `${r2img(file, w, q)} ${w}w`).join(", ");
}

/* Common width ladders */
export const BA_WIDTHS = [400, 700, 1000, 1400]; // before/after cards + figures
export const HERO_WIDTHS = [400, 600, 800, 1100];
export const PORTRAIT_WIDTHS = [500, 800, 1040];
export const AVATAR_W = 96; // small round avatars (display ~38–52px)
