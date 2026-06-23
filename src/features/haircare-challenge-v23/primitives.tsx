import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CalendarHeart,
  Check,
  Star,
  Info,
  Quote,
  ShieldCheck,
  Users,
  Minus,
  Plus,
  Infinity as InfinityIcon,
} from "lucide-react";
import { r2img, r2srcset, BA_WIDTHS, AVATAR_W } from "./img";

const DEFAULT_BA = "hairloss-before-after.webp";

/* Responsive R2 image. Pass an R2 file key (e.g. "ba-1.webp"). Above-the-fold
   images set eager (loading=eager + fetchPriority=high); everything else lazy. */
export function RImg({
  file, widths, sizes, alt = "", eager = false, className, style,
}: { file: string; widths: number[]; sizes?: string; alt?: string; eager?: boolean; className?: string; style?: React.CSSProperties }) {
  const fallbackW = widths.find((w) => w >= 800) ?? widths[widths.length - 1];
  const loadProps = eager
    ? ({ loading: "eager", fetchPriority: "high" } as const)
    : ({ loading: "lazy", decoding: "async" } as const);
  return (
    <img
      src={r2img(file, fallbackW)}
      srcSet={r2srcset(file, widths)}
      sizes={sizes}
      alt={alt}
      className={className}
      style={style}
      {...loadProps}
    />
  );
}

/* ---------------- Hooks ---------------- */
export function useIsMobile(bp = 720) {
  const [m, setM] = useState(false);
  useEffect(() => {
    setM(window.innerWidth < bp);
    const onR = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [bp]);
  return m;
}

/* ---------------- Icon (lucide-react wrapper) ---------------- */
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  "arrow-right": ArrowRight,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "calendar-heart": CalendarHeart,
  check: Check,
  star: Star,
  info: Info,
  quote: Quote,
  "shield-check": ShieldCheck,
  users: Users,
  minus: Minus,
  plus: Plus,
  infinity: InfinityIcon,
};

export function Icon({
  name,
  size = 20,
  color,
  stroke = 1.75,
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  stroke?: number;
  style?: React.CSSProperties;
}) {
  const Cmp = ICON_MAP[name];
  if (!Cmp) {
    if (typeof console !== "undefined") console.warn(`[hq] missing lucide icon: ${name}`);
    return null;
  }
  return (
    <span style={{ display: "inline-flex", color, ...style }}>
      <Cmp size={size} color={color} strokeWidth={stroke} />
    </span>
  );
}

/* ---------------- Layout primitives ---------------- */
export function Anno(_: { children?: React.ReactNode }) {
  return null;
}

export function Eyebrow({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div className="eyebrow" style={style}>{children}</div>;
}

export function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  style,
  className = "",
  id,
}: {
  children: React.ReactNode;
  variant?: string;
  icon?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  id?: string;
}) {
  return (
    <button id={id} className={`btn btn-${variant} ${className}`} onClick={onClick} style={style}>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}

export function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {children}
      <svg viewBox="0 0 120 14" preserveAspectRatio="none"
        style={{ position: "absolute", left: -3, right: -3, bottom: -9, width: "calc(100% + 6px)", height: 12 }}>
        <path d="M2 8 C 30 13, 90 13, 118 5" stroke="var(--orange-500)" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Hand({
  children, color = "var(--orange-700)", size = 22, rotate = 0, style,
}: { children: React.ReactNode; color?: string; size?: number; rotate?: number; style?: React.CSSProperties }) {
  return (
    <span style={{
      fontFamily: '"Caveat", cursive', fontWeight: 700,
      fontSize: size, color, lineHeight: 1,
      display: "inline-block", transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style,
    }}>{children}</span>
  );
}

export function Pin({
  children, rotate = -4, color = "var(--orange-700)", bg = "#fff", style,
}: { children: React.ReactNode; rotate?: number; color?: string; bg?: string; style?: React.CSSProperties }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      transform: `rotate(${rotate}deg)`,
      background: bg, color,
      border: `1.5px solid ${color}`,
      borderRadius: 999, padding: "5px 12px",
      fontFamily: '"Caveat", cursive', fontWeight: 700,
      fontSize: 19, lineHeight: 1,
      boxShadow: "0 4px 10px rgba(60,40,20,.12)",
      whiteSpace: "nowrap",
      ...style,
    }}>{children}</span>
  );
}

export function StickyNote({
  children, rotate = -3, color = "#FFF1A8", style,
}: { children: React.ReactNode; rotate?: number; color?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      transform: `rotate(${rotate}deg)`,
      background: color,
      padding: "14px 16px",
      borderRadius: 4,
      boxShadow: "0 10px 20px rgba(60,40,20,.16), 0 2px 4px rgba(60,40,20,.10)",
      fontFamily: '"Caveat", cursive',
      fontSize: 19, fontWeight: 500, lineHeight: 1.3,
      color: "var(--ink)",
      ...style,
    }}>{children}</div>
  );
}

export function HandArrow({
  direction = "right", size = 80, color = "var(--orange-600)", style,
}: { direction?: string; size?: number; color?: string; style?: React.CSSProperties }) {
  const map: Record<string, number> = { right: 0, down: 90, left: 180, up: 270, "down-right": 45, "down-left": 135 };
  const rotate = map[direction] ?? 0;
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 100 55"
      style={{ display: "block", transform: `rotate(${rotate}deg)`, ...style }}>
      <path d="M4 30 Q 22 8, 50 28 T 92 26" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M82 18 L 92 26 L 82 36" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HandLine({
  height = 60, color = "var(--orange-500)", arrow = false, style,
}: { height?: number; color?: string; arrow?: boolean; style?: React.CSSProperties }) {
  return (
    <svg width={32} height={height} viewBox={`0 0 32 ${height}`} style={{ display: "block", ...style }}>
      <path d={`M16 2 C 22 ${height*0.25}, 10 ${height*0.5}, 16 ${height*0.75} S 22 ${height - 8}, 16 ${height - 4}`}
        stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="5 4" />
      {arrow && <path d={`M10 ${height - 10} L 16 ${height - 2} L 22 ${height - 10}`}
        stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

/* ---------------- Carousel ---------------- */
export function Carousel({
  children, peek = 0.82, gap = 14, dots = true, controls, ariaLabel, className = "",
}: {
  children: React.ReactNode;
  peek?: number;
  gap?: number;
  dots?: boolean;
  controls?: string;
  ariaLabel?: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);
  const items = React.Children.toArray(children);
  const useCounter = controls === "counter" || (controls == null && items.length >= 5);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const first = track.children[0] as HTMLElement | undefined;
        if (!first) return;
        const w = first.offsetWidth + gap;
        const i = Math.round(track.scrollLeft / w);
        setIdx(Math.min(items.length - 1, Math.max(0, i)));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [items.length, gap]);
  const scrollTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    if (!first) return;
    track.scrollTo({ left: i * (first.offsetWidth + gap), behavior: "smooth" });
  };
  return (
    <div className={`carousel ${className}`} aria-label={ariaLabel} role="region">
      <div ref={trackRef} className="carousel-track" style={{ gap }}>
        {items.map((c, i) => (
          <div key={i} className="carousel-item" style={{ flex: `0 0 ${peek * 100}%` }}>
            {c}
          </div>
        ))}
      </div>
      {useCounter && items.length > 1 ? (
        <div className="carousel-counter">
          <button
            className="carousel-counter-btn"
            onClick={() => scrollTo(Math.max(0, idx - 1))}
            disabled={idx === 0}
            aria-label="Previous"
          >
            <Icon name="chevron-left" size={20} />
          </button>
          <span className="carousel-counter-label">
            <strong>{idx + 1}</strong> <em>/ {items.length}</em>
          </span>
          <button
            className="carousel-counter-btn"
            onClick={() => scrollTo(Math.min(items.length - 1, idx + 1))}
            disabled={idx === items.length - 1}
            aria-label="Next"
          >
            <Icon name="chevron-right" size={20} />
          </button>
        </div>
      ) : dots && items.length > 1 && (
        <div className="carousel-dots">
          {items.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)} className={`carousel-dot ${i === idx ? "on" : ""}`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- StarRow, CheckItem, Stat, Photo, Trustpilot, GreenCallout ---------------- */
export function StarRow({ size = 16, color = "var(--star)", count = 5, style }: { size?: number; color?: string; count?: number; style?: React.CSSProperties }) {
  return (
    <span style={{ display: "inline-flex", gap: 2, color, ...style }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2.5l2.95 6.18 6.8.74-5.08 4.6 1.45 6.68L12 17.3l-6.12 3.4 1.45-6.68L2.25 9.42l6.8-.74L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

export function CheckItem({ children, sub }: { children: React.ReactNode; sub?: React.ReactNode }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 13, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.5 }}>
      <span style={{ flex: "none", width: 26, height: 26, borderRadius: 999, background: "var(--check-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
        <Icon name="check" size={15} color="#fff" stroke={2.5} />
      </span>
      <span>{children}{sub && <span style={{ color: "var(--slate-soft)", fontWeight: 600 }}> · {sub}</span>}</span>
    </li>
  );
}

export function CheckList({ items, columns = 1 }: { items: any[]; columns?: number }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 14 }}>
      {items.map((it, i) => <CheckItem key={i} sub={it.sub}>{it.t || it}</CheckItem>)}
    </ul>
  );
}

export function Stat({ num, label, size = 80, color }: { num: React.ReactNode; label: React.ReactNode; size?: number; color?: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="stat-num" style={{ fontSize: size, color }}>{num}</div>
      <div className="small" style={{ marginTop: 6, maxWidth: 180, marginInline: "auto" }}>{label}</div>
    </div>
  );
}

export function Divider() {
  return <div style={{ width: 1, height: 42, background: "var(--line)" }} className="trust-divider" />;
}

export function EditableImage({
  h = 220, cool = false, label = "photo", radius, style, className = "", children,
}: { h?: number; cool?: boolean; label?: React.ReactNode; radius?: number | string; style?: React.CSSProperties; className?: string; children?: React.ReactNode }) {
  const labelText = typeof label === "string" ? label : undefined;
  return (
    <div
      className={`ph ${cool ? "cool" : ""} ${className}`}
      style={{ height: h, borderRadius: radius, overflow: "hidden", position: "relative", padding: 0, ...style }}
    >
      <img
        src="https://pub.hairqare.co/cdn-cgi/image/width=800,quality=80,format=auto/placeholder.webp"
        alt={labelText || "photo"}
        loading="lazy"
        decoding="async"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <span className="ph-label" style={{ position: "absolute", top: 8, left: 8 }}>{label}</span>
      {children}
    </div>
  );
}

export const Photo = EditableImage;

export function Trustpilot({ rating = "4.8", reviews }: { rating?: string; reviews?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 9, flexWrap: "wrap", justifyContent: "center" }}>
      <span style={{ fontWeight: 700, fontSize: 15 }}>Trustpilot</span>
      <span style={{ display: "inline-flex", gap: 3 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ width: 22, height: 22, background: "var(--trust-green)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="star" size={14} style={{ fill: "#fff", color: "#fff" }} />
          </span>
        ))}
      </span>
      <span className="small" style={{ fontWeight: 600 }}>{rating}/5{reviews ? ` · ${reviews}` : ""}</span>
    </div>
  );
}

export function GreenCallout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "var(--green-bg)", borderLeft: "4px solid var(--green-line)", borderRadius: 14, padding: "20px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
      <Icon name="info" size={22} color="var(--green-line)" style={{ flex: "none", marginTop: 1 }} />
      <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "var(--green-text)" }}>{children}</p>
    </div>
  );
}

export function BeforeAfter({ day, cool }: { day: React.ReactNode; cool?: boolean }) {
  const label = `${day} · crown / part`;
  return (
    <EditableImage h={120} radius={12} cool={cool} label={label} />
  );
}

export function TestimonialCard({
  name, age, flag, initials, context, text, image,
}: { name: string; age?: React.ReactNode; flag?: React.ReactNode; initials: React.ReactNode; context: React.ReactNode; text: React.ReactNode; image?: string }) {
  return (
    <div className="testi-card">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 48, height: 48, borderRadius: 999, background: "var(--orange-100)", color: "var(--orange-700)", fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{initials}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 15.5 }}>
            {name}{age ? `, ${age}` : ""}{flag ? <> <span style={{ fontWeight: 400 }}>{flag}</span></> : null}
          </div>
          <div style={{ fontSize: 13, color: "var(--slate)" }}>{context}</div>
        </div>
        <StarRow size={14} />
      </div>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink)" }}>“{text}”</p>
      <div style={{ marginTop: "auto", borderRadius: 12, overflow: "hidden" }}>
        <RImg
          file={image ?? DEFAULT_BA}
          widths={BA_WIDTHS}
          sizes="(max-width: 860px) 92vw, 440px"
          alt="Before and after - Day 1 vs Day 14"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </div>
  );
}

export function InlineTestimonial({
  name, age, flag, quote, accent = "var(--orange-600)", avatar, style,
}: { name: string; age?: React.ReactNode; flag?: React.ReactNode; quote: React.ReactNode; accent?: string; avatar?: string; style?: React.CSSProperties }) {
  const initials = (name || "?").trim().charAt(0).toUpperCase();
  return (
    <div className="inline-testi" style={{ borderLeft: `3px solid ${accent}`, ...style }}>
      <div
        className="inline-testi-avatar"
        style={{
          background: "var(--orange-100)",
          color: "var(--orange-700)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 18,
          fontFamily: "var(--font-serif)",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        {avatar ? (
          <img
            src={r2img(avatar, AVATAR_W)}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          initials
        )}
      </div>
      <div className="inline-testi-body">
        <StarRow size={13} />
        <p className="inline-testi-quote">“{quote}”</p>
        <div className="inline-testi-meta">- {name}{age ? `, ${age}` : ""}{flag ? ` · ${flag}` : ""}</div>
      </div>
    </div>
  );
}

export function Reveal({
  children, delay = 0, style, className = "",
}: { children: React.ReactNode; delay?: number; style?: React.CSSProperties; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`entrance ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>{children}</div>;
}

/* Compact image testimonial - small thumb on the left, quote on the right.
   Used in dense interstitial strips so we don't burn vertical space. */
export function CompactImageTestimonial({
  name, age, flag, context, text, image, accent = "var(--orange-600)", style,
}: { name: string; age?: React.ReactNode; flag?: React.ReactNode; context?: React.ReactNode; text: React.ReactNode; image?: string; accent?: string; style?: React.CSSProperties }) {
  return (
    <div className="compact-image-testi" style={{ borderLeft: `3px solid ${accent}`, ...style }}>
      <div className="compact-image-testi-thumb">
        <img
          src={r2img(image ?? DEFAULT_BA, 700)}
          srcSet={r2srcset(image ?? DEFAULT_BA, [200, 400, 700])}
          sizes="120px"
          alt="Before and after"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="compact-image-testi-body">
        <StarRow size={13} />
        <p className="compact-image-testi-quote">“{text}”</p>
        <div className="compact-image-testi-meta">
          - {name}{age ? `, ${age}` : ""}{flag ? ` · ${flag}` : ""}
          {context ? <span className="compact-image-testi-context"> · {context}</span> : null}
        </div>
      </div>
    </div>
  );
}

/* ---------- GuaranteeBadge - risk reversal next to every primary CTA ---------- */
export function GuaranteeBadge({
  size = "sm",
  style,
  className = "",
}: { size?: "sm" | "md"; style?: React.CSSProperties; className?: string }) {
  return (
    <span className={`guarantee-badge guarantee-${size} ${className}`} style={style}>
      <Icon name="shield-check" size={size === "md" ? 18 : 15} color="var(--trust-green)" />
      <span className="guarantee-text">
        <strong>See visible results in 14 days or your money back&nbsp;</strong>{" "}
        <span className="guarantee-sub">No questions, no forms - just email us.</span>
      </span>
    </span>
  );
}