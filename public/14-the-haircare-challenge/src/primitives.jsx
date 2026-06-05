/* HairQare sales page — shared primitives.
   Forked from the SP/Rooted design-system UI kit, extended for this brief. */
const { useState, useEffect, useRef, useLayoutEffect } = React;

/* ---------------- Hooks ---------------- */
function useIsMobile(bp = 720) {
  const [m, setM] = useState(typeof window !== "undefined" ? window.innerWidth < bp : false);
  useEffect(() => {
    const onR = () => setM(window.innerWidth < bp);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, [bp]);
  return m;
}

/* ---------------- Lucide icon helper ---------------- */
function Icon({ name, size = 20, color, stroke = 1.75, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": stroke },
        nameAttr: "data-lucide",
      });
    }
  }, [name, size, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", color, ...style }} />;
}

/* ---------------- Layout primitives ---------------- */
function Anno({ children }) {
  return null;
}

function Eyebrow({ children, style }) {
  return <div className="eyebrow" style={style}>{children}</div>;
}

function Button({ children, variant = "primary", icon, onClick, style, className = "" }) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick} style={style}>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}

/* hand-drawn squiggle underline */
function Underline({ children }) {
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

/* ---------------- Hand-drawn / sketchy accents ---------------- */
function Hand({ children, color = "var(--orange-700)", size = 22, rotate = 0, style }) {
  return (
    <span style={{
      fontFamily: '"Caveat", cursive', fontWeight: 700,
      fontSize: size, color, lineHeight: 1,
      display: "inline-block", transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style,
    }}>{children}</span>
  );
}

function Pin({ children, rotate = -4, color = "var(--orange-700)", bg = "#fff", style }) {
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

function StickyNote({ children, rotate = -3, color = "#FFF1A8", style }) {
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

/* Hand-drawn arrow. direction: "right" | "down" | "down-right" | etc. via rotate. */
function HandArrow({ direction = "right", size = 80, color = "var(--orange-600)", style }) {
  const rotate = { right: 0, down: 90, left: 180, up: 270, "down-right": 45, "down-left": 135 }[direction] || 0;
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 100 55"
      style={{ display: "block", transform: `rotate(${rotate}deg)`, ...style }}>
      <path d="M4 30 Q 22 8, 50 28 T 92 26" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M82 18 L 92 26 L 82 36" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Hand-drawn vertical wavy connector for timelines */
function HandLine({ height = 60, color = "var(--orange-500)", arrow = false, style }) {
  return (
    <svg width={32} height={height} viewBox={`0 0 32 ${height}`} style={{ display: "block", ...style }}>
      <path d={`M16 2 C 22 ${height*0.25}, 10 ${height*0.5}, 16 ${height*0.75} S 22 ${height - 8}, 16 ${height - 4}`}
        stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="5 4" />
      {arrow && <path d={`M10 ${height - 10} L 16 ${height - 2} L 22 ${height - 10}`}
        stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

/* ---------------- Carousel (snap-scroll, dots) ---------------- */
function Carousel({ children, peek = 0.82, gap = 14, dots = true, controls, ariaLabel, className = "" }) {
  const trackRef = useRef(null);
  const [idx, setIdx] = useState(0);
  const items = React.Children.toArray(children);
  const useCounter = controls === "counter" || (controls == null && items.length >= 5);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const first = track.children[0];
        if (!first) return;
        const w = first.offsetWidth + gap;
        const i = Math.round(track.scrollLeft / w);
        setIdx(Math.min(items.length - 1, Math.max(0, i)));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => { track.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [items.length, gap]);
  const scrollTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0];
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
function StarRow({ size = 16, color = "var(--star)", count = 5 }) {
  return (
    <span style={{ display: "inline-flex", gap: 2, color }}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" size={size} style={{ fill: color, color }} />
      ))}
    </span>
  );
}

function CheckItem({ children, sub }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 13, fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.5 }}>
      <span style={{ flex: "none", width: 26, height: 26, borderRadius: 999, background: "var(--check-bg)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
        <Icon name="check" size={15} color="#fff" stroke={2.5} />
      </span>
      <span>{children}{sub && <span style={{ color: "var(--slate-soft)", fontWeight: 600 }}> · {sub}</span>}</span>
    </li>
  );
}

function CheckList({ items, columns = 1 }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 14 }}>
      {items.map((it, i) => <CheckItem key={i} sub={it.sub}>{it.t || it}</CheckItem>)}
    </ul>
  );
}

function Stat({ num, label, size = 80, color }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="stat-num" style={{ fontSize: size, color }}>{num}</div>
      <div className="small" style={{ marginTop: 6, maxWidth: 180, marginInline: "auto" }}>{label}</div>
    </div>
  );
}

function Photo({ h = 220, cool = false, label = "photo", radius, style, children }) {
  return (
    <div className={`ph ${cool ? "cool" : ""}`} style={{ height: h, borderRadius: radius, padding: 20, ...style }}>
      <span className="ph-label">IMAGE</span>
      <span style={{ maxWidth: "82%", fontSize: 13, lineHeight: 1.45, color: "rgba(26,26,26,.62)", fontWeight: 500 }}>{label}</span>
      {children}
    </div>
  );
}

function Trustpilot({ rating = "4.8", reviews }) {
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

function GreenCallout({ children }) {
  return (
    <div style={{ background: "var(--green-bg)", borderLeft: "4px solid var(--green-line)", borderRadius: 14, padding: "20px 22px", display: "flex", gap: 14, alignItems: "flex-start" }}>
      <Icon name="info" size={22} color="var(--green-line)" style={{ flex: "none", marginTop: 1 }} />
      <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "var(--green-text)" }}>{children}</p>
    </div>
  );
}

/* ICP-matched testimonial — full-width on mobile, with before/after */
function TestimonialCard({ name, age, flag, initials, context, text }) {
  return (
    <div className="testi-card">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 48, height: 48, borderRadius: 999, background: "var(--orange-100)", color: "var(--orange-700)", fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{initials}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 15.5 }}>{name}, {age} <span style={{ fontWeight: 400 }}>{flag}</span></div>
          <div style={{ fontSize: 13, color: "var(--slate)" }}>{context}</div>
        </div>
        <StarRow size={14} />
      </div>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink)" }}>“{text}”</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: "auto" }}>
        <BeforeAfter day="Day 1" cool />
        <BeforeAfter day="Day 14" />
      </div>
    </div>
  );
}
function BeforeAfter({ day, cool }) {
  return (
    <div className={`ph ${cool ? "cool" : ""}`} style={{ height: 120, borderRadius: 12, padding: 0 }}>
      <span className="ph-label" style={{ fontSize: 11 }}>{day} · crown / part</span>
    </div>
  );
}

/* Inline testimonial — compact trust card. Initials avatar (no broken-image placeholder). */
function InlineTestimonial({ name, age, flag, quote, accent = "var(--orange-600)", style }) {
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
        }}
        aria-hidden="true"
      >
        {initials}
      </div>
      <div className="inline-testi-body">
        <StarRow size={13} />
        <p className="inline-testi-quote">“{quote}”</p>
        <div className="inline-testi-meta">— {name}, {age}{flag ? ` · ${flag}` : ""}</div>
      </div>
    </div>
  );
}

/* reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, style, className = "" }) {
  const ref = useRef(null);
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

Object.assign(window, {
  useIsMobile,
  Icon, Anno, Eyebrow, Button, Underline, StarRow, CheckItem, CheckList,
  Stat, Photo, Trustpilot, GreenCallout, TestimonialCard, BeforeAfter, InlineTestimonial, Reveal,
  Hand, Pin, StickyNote, HandArrow, HandLine, Carousel,
});
