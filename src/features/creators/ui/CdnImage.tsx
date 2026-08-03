import { FULL_WIDTHS, cdn, srcSet } from "../images";

/**
 * A plain <img> served through Cloudflare Image Transformations.
 *
 * Replaces next/image, which is a no-op here: `output: "export"` forces
 * `images.unoptimized`, so it shipped the full-size original with none of the
 * resizing it exists for. This ships a real srcset instead.
 *
 * `priority` marks an above-the-fold image (eager + high fetchpriority);
 * everything else lazy-loads and decodes async.
 */
export function CdnImage({
  src,
  alt,
  sizes,
  widths = FULL_WIDTHS,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  /** Must describe how the image actually displays, or the browser picks wrong. */
  sizes: string;
  widths?: number[];
  priority?: boolean;
  className?: string;
}) {
  return (
    <img
      src={cdn(src, 800)}
      srcSet={srcSet(src, widths)}
      sizes={sizes}
      alt={alt}
      className={className}
      {...(priority
        ? { loading: "eager" as const, fetchPriority: "high" as const }
        : { loading: "lazy" as const, decoding: "async" as const })}
    />
  );
}
