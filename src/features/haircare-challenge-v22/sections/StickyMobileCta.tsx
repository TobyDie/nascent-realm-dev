import { useEffect, useState } from "react";
import { CtaButton } from "../primitives";

export function StickyMobileCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`v22-stickycta ${show ? "is-show" : ""}`} aria-hidden={!show}>
      <CtaButton full>Healthier hair in 14 days →</CtaButton>
    </div>
  );
}
