import { useEffect, useState } from "react";
import { Button } from "../primitives";
import { useJoiningCount, formatJoiningCount } from "../useJoiningCount";
import { useStartDate, fmtShort } from "../useStartDate";

// Countdown to the next 10:00 / 22:00 WITA (UTC+8) boundary.
// Boundaries in UTC: 02:00 and 14:00. Returns "HH:MM:SS".
function computeRemaining(): string {
  const now = Date.now();
  const d = new Date(now);
  const utcMs =
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) +
    d.getUTCHours() * 3600_000 +
    d.getUTCMinutes() * 60_000 +
    d.getUTCSeconds() * 1000 +
    d.getUTCMilliseconds();
  const dayStart = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  const b1 = dayStart + 2 * 3600_000;   // 02:00 UTC = 10:00 WITA
  const b2 = dayStart + 14 * 3600_000;  // 14:00 UTC = 22:00 WITA
  const b3 = dayStart + 26 * 3600_000;  // next day 02:00 UTC
  const next = utcMs < b1 ? b1 : utcMs < b2 ? b2 : b3;
  let s = Math.max(0, Math.floor((next - utcMs) / 1000));
  const h = Math.floor(s / 3600); s -= h * 3600;
  const m = Math.floor(s / 60); s -= m * 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function useCountdown() {
  const [t, setT] = useState("12:00:00");
  useEffect(() => {
    setT(computeRemaining());
    const id = setInterval(() => setT(computeRemaining()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function StickyCta({ onCta }: { onCta?: () => void }) {
  const [show, setShow] = useState(false);
  const countdown = useCountdown();
  const joining = useJoiningCount();
  const startDate = useStartDate();

  useEffect(() => {
    let heroVisible = true;
    let finalVisible = false;
    let scrolledPast = false;
    const update = () => setShow(scrolledPast && !heroVisible && !finalVisible);

    const onScroll = () => {
      const threshold = window.innerHeight * 0.9;
      const next = window.scrollY > threshold;
      if (next !== scrolledPast) {
        scrolledPast = next;
        update();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const hero = document.getElementById("hero-cta-sentinel");
    const finalEl = document.getElementById("start");

    let heroIO: IntersectionObserver | undefined;
    let finalIO: IntersectionObserver | undefined;
    if (hero) {
      heroIO = new IntersectionObserver(([e]) => {
        heroVisible = e.isIntersecting;
        update();
      }, { threshold: 0.1 });
      heroIO.observe(hero);
    } else {
      heroVisible = false;
    }
    if (finalEl) {
      finalIO = new IntersectionObserver(([e]) => {
        finalVisible = e.isIntersecting;
        update();
      }, { threshold: 0.15 });
      finalIO.observe(finalEl);
    }
    update();
    return () => {
      if (heroIO) heroIO.disconnect();
      if (finalIO) finalIO.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const root = document.querySelector(".hq-sp");
    root?.classList.toggle("has-sticky-cta", show);
    return () => {
      root?.classList.remove("has-sticky-cta");
    };
  }, [show]);

  return (
    <div style={{
      position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60,
      transform: show ? "translateY(0)" : "translateY(110%)",
      transition: "transform .35s var(--ease)",
      background: "rgba(255,255,255,.96)", backdropFilter: "blur(10px)",
      borderTop: "1px solid var(--line)", boxShadow: "0 -6px 24px rgba(60,40,20,.08)",
    }}>
      <div className="wrap-wide sticky-cta-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", gap: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0, flex: 1 }} className="sticky-meta">
          <span className="sticky-offer-chip">
            <span className="sticky-offer-label">85% OFF</span>
            <span className="sticky-offer-timer" aria-live="off">{countdown}</span>
          </span>
          <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink)", lineHeight: 1.25 }}>
            Next cohort: <span className="start-date" style={{ color: "var(--orange-700)" }}>{startDate ? fmtShort(startDate) : "Fri, June 6th"}</span>
          </span>
          <span style={{ fontSize: 11.5, fontWeight: 500, color: "var(--slate)", lineHeight: 1.2 }}>
            {formatJoiningCount(joining)} women joining this week
          </span>
        </div>
        <Button id="cta-sticky" onClick={onCta} icon="arrow-right" className="cta-arrow-nudge" style={{ padding: "11px 18px", fontSize: 14, flex: "none" }}>Join now</Button>
      </div>
    </div>
  );
}

export default StickyCta;