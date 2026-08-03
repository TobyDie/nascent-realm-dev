/**
 * Image sources + Cloudflare Image Transformation helpers.
 *
 * Everything is hosted on R2 behind `pub.hairqare.co`, which has Cloudflare Image
 * Transformations enabled: inserting `/cdn-cgi/image/<options>/` between the
 * domain and the file path returns a resized/re-encoded variant. The original
 * file is never renamed or altered.
 *
 * Every variant uses `quality=80,format=auto` (AVIF/WebP negotiated per browser).
 * Consumers must set an aspect ratio on the wrapper so swaps cause zero CLS.
 */

const ORIGIN = "https://pub.hairqare.co";

/** Widths for an image that can fill the viewport. */
export const FULL_WIDTHS = [500, 800, 1200, 1600];
/** Widths for an image that never exceeds a column — no point shipping 1600. */
export const COLUMN_WIDTHS = [500, 800, 1200];
/** Widths for a small, always-constrained image. */
export const SMALL_WIDTHS = [500, 800];

/** One transformed variant. */
export function cdn(src: string, width: number): string {
  const path = src.startsWith(ORIGIN) ? src.slice(ORIGIN.length + 1) : src;
  return `${ORIGIN}/cdn-cgi/image/width=${width},quality=80,format=auto/${path}`;
}

/** A `srcset` string across the given widths. */
export function srcSet(src: string, widths: number[] = FULL_WIDTHS): string {
  return widths.map((w) => `${cdn(src, w)} ${w}w`).join(", ");
}

export const IMG = {
  /** /creators full-bleed banner — 1672×941 (16:9). Above the fold, the LCP element. */
  creatorsBanner: `${ORIGIN}/creators/Sarah-1.2.webp`,

  /** S2 "Haircare made simple" letter portrait — 2160×2700 (4:5). */
  missionLetter: `${ORIGIN}/creators/Haircare-made-simple-for-every-woman-2.webp`,

  // S3 "What you get" cards — all 1800×2400 (3:4), matching the card containers.
  perkEarn: `${ORIGIN}/creators/Earn-50-of-every-Challenge-sale-2.webp`,
  perkGifts: `${ORIGIN}/creators/Unlock-gifts-and-the-founding-draw.webp`,
  perkLab: `${ORIGIN}/creators/Hairqare-Lab-is-yours-free-for-life-3.webp`,
  perkForLife: `${ORIGIN}/creators/Keep-earning-for-life-4.webp`,

  // Placeholders still awaiting real art (see README "Image swap map").
  square: `${ORIGIN}/site-assets/placeholder-square.webp`,
  wide16x9: `${ORIGIN}/site-assets/placeholder-image-gray-16x9.webp`,
  vertical9x16: `${ORIGIN}/site-assets/placeholder-9-16.webp`,
  portrait4x5: `${ORIGIN}/site-assets/placeholder-4X5.webp`,
  portrait3x4: `${ORIGIN}/site-assets/3-4.webp`,
} as const;
