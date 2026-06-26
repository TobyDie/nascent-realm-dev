import { useEffect, useState } from "react";
import { Stars } from "../primitives";

export function FloatingChip() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`v24-chip ${show ? "is-show" : ""}`} aria-hidden={!show}>
      <img
        src="https://placehold.co/88x88/FBE7DE/D86B4A?text=G"
        width={44}
        height={44}
        alt="Graduate headshot, healthy hair, solution state"
      />
      <div className="v24-chip__body">
        <Stars />
        <p>"The hardest part was throwing out all the products I thought were good."</p>
        <span className="v24-chip__meta">
          Chloe R. · <span className="v24-verified__tick" aria-hidden="true">✓</span> Verified
        </span>
      </div>
    </div>
  );
}