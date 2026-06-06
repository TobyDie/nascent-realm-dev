import { useEffect, useState } from "react";
import { Button } from "../primitives";

export function StickyCta({ onCta }: { onCta?: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let heroVisible = true;
    let finalVisible = false;
    const update = () => setShow(!heroVisible && !finalVisible);

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
      <div className="wrap-wide sticky-cta-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0, flex: 1 }} className="sticky-meta">
          <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--ink)", lineHeight: 1.25 }}>
            Next cohort: <span style={{ color: "var(--orange-700)" }}>Fri, June 6th</span>
          </span>
          <span style={{ fontSize: 11.5, color: "var(--slate)", display: "flex", alignItems: "center", gap: 6, lineHeight: 1.2, flexWrap: "wrap" }}>
            <span style={{ background: "var(--orange-100)", color: "var(--orange-700)", fontWeight: 700, fontSize: 10.5, letterSpacing: ".04em", padding: "2px 7px", borderRadius: 999 }}>85% OFF TODAY</span>
            <span>2,400 women joining</span>
          </span>
        </div>
        <Button onClick={onCta} icon="arrow-right" style={{ padding: "11px 18px", fontSize: 14, flex: "none" }}>Join now</Button>
      </div>
    </div>
  );
}

export default StickyCta;