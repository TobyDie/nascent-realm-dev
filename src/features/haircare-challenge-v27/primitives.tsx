import type { CSSProperties, ReactNode } from "react";
import { CTA_URL } from "./ListiclePageV27";

export function Stars({ className }: { className?: string }) {
  return <span className={`v27-stars ${className ?? ""}`} aria-label="5 out of 5 stars">★★★★★</span>;
}

export function CtaButton({ children, full }: { children: ReactNode; full?: boolean }) {
  return (
    <a className={`v27-cta ${full ? "v27-cta--full" : ""}`} href={CTA_URL}>
      {children}
    </a>
  );
}

export function Placeholder({
  w,
  h,
  label,
  alt,
  fullBleed = true,
  style,
}: {
  w: number;
  h: number;
  label: string;
  alt: string;
  fullBleed?: boolean;
  style?: CSSProperties;
}) {
  const src = `https://placehold.co/${w}x${h}/FBE7DE/D86B4A?text=${encodeURIComponent(label)}`;
  return (
    <img
      className={fullBleed ? "v27-img v27-img--bleed" : "v27-img"}
      src={src}
      width={w}
      height={h}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={style}
    />
  );
}

export function R2Image({
  url,
  w,
  h,
  alt,
  eager = false,
  widths = [500, 800, 1200, 1600],
  sizes = "100vw",
  fullBleed = true,
}: {
  url: string;
  w: number;
  h: number;
  alt: string;
  eager?: boolean;
  widths?: number[];
  sizes?: string;
  fullBleed?: boolean;
}) {
  const m = url.match(/^(https?:\/\/[^/]+)(\/.*)$/);
  const origin = m ? m[1] : "";
  const path = m ? m[2] : url;
  const tx = (width: number) =>
    `${origin}/cdn-cgi/image/width=${width},quality=80,format=auto${path}`;
  const srcSet = widths.map((wd) => `${tx(wd)} ${wd}w`).join(", ");
  return (
    <img
      className={fullBleed ? "v27-img v27-img--bleed" : "v27-img"}
      src={tx(800)}
      srcSet={srcSet}
      sizes={sizes}
      width={w}
      height={h}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      {...(eager ? { fetchPriority: "high" as const } : {})}
    />
  );
}

export function Marquee({
  items,
  variant = "bar",
}: {
  items: string[];
  variant?: "bar" | "cta";
}) {
  const track = [...items, ...items, ...items];
  return (
    <div className={`v27-marquee v27-marquee--${variant}`} role="marquee" aria-hidden="true">
      <div className="v27-marquee__track">
        {track.map((t, i) => (
          <span key={i} className="v27-marquee__item">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}