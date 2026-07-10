import { useEffect, useState } from "react";
import { CTA_URL } from "../ListiclePageV29";
import { useLiveJoiningCount, formatJoiningCount } from "../useJoiningCount";
import { useStartDate, fmtShort } from "../useStartDate";

function computeRemaining(): string {
  const now = Date.now();
  const d = new Date(now);
  const utcMs =
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) +
    d.getUTCHours() * 3600_000 +
    d.getUTCMinutes() * 60_000 +
    d.getUTCSeconds() * 1000;
  const dayStart = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  const b1 = dayStart + 2 * 3600_000;
  const b2 = dayStart + 14 * 3600_000;
  const b3 = dayStart + 26 * 3600_000;
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

export function StickyMobileCta() {
  const [show, setShow] = useState(false);
  const countdown = useCountdown();
  const joining = useLiveJoiningCount();
  const startDate = useStartDate();

  useEffect(() => {
    // Reveal after the user has scrolled past a fixed distance, roughly a
    // couple of scrolls on mobile. Plain scroll-distance check on purpose:
    // no dependency on any specific content element existing on the page,
    // so a future copy rewrite can never silently break this again.
    const threshold = window.innerHeight * 1.2;
    const onScroll = () => {
      if (window.scrollY > threshold) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const formatted = formatJoiningCount(joining);

  return (
    <div className={`v29-stickycta ${show ? "is-show" : ""}`} aria-hidden={!show}>
      <div className="v29-stickycta__inner">
        <div className="v29-stickycta__meta">
          <span className="v29-stickycta__chip">
            <span className="v29-stickycta__chip-label">85% OFF</span>
            <span className="v29-stickycta__chip-timer" aria-live="off">{countdown}</span>
          </span>
          <span className="v29-stickycta__group">
            Next group starts <span className="v29-stickycta__date">{startDate ? fmtShort(startDate) : "Fri, Jun 26th"}</span>
          </span>
          <span className="v29-stickycta__count">
            <span className="v29-stickycta__tick" aria-hidden="true">▲</span>
            <span key={formatted} className="v29-stickycta__num">{formatted}</span>
            <span> women joining this week</span>
          </span>
        </div>
        <a className="v29-stickycta__btn" href={CTA_URL}>Join now <span aria-hidden="true">→</span></a>
      </div>
    </div>
  );
}
