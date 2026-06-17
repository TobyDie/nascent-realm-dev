import type { CSSProperties, ReactNode } from "react";
import { CTA_URL } from "./ListiclePageV22";

export function Stars({ className }: { className?: string }) {
  return <span className={`v22-stars ${className ?? ""}`} aria-label="5 out of 5 stars">★★★★★</span>;
}

export function CtaButton({ children, full }: { children: ReactNode; full?: boolean }) {
  return (
    <a className={`v22-cta ${full ? "v22-cta--full" : ""}`} href={CTA_URL}>
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
      className={fullBleed ? "v22-img v22-img--bleed" : "v22-img"}
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

export function Marquee({
  items,
  variant = "bar",
}: {
  items: string[];
  variant?: "bar" | "cta";
}) {
  const track = [...items, ...items, ...items];
  return (
    <div className={`v22-marquee v22-marquee--${variant}`} role="marquee" aria-hidden="true">
      <div className="v22-marquee__track">
        {track.map((t, i) => (
          <span key={i} className="v22-marquee__item">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}