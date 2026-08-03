import { useEffect, useState } from "react";

/**
 * Local replacement for framer-motion's useReducedMotion, so the creator pages
 * add no dependency to this repo.
 *
 * Starts false so the server render and the first client render agree (there is
 * no media query on the server); the effect corrects it before paint matters.
 */
export function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduce;
}
