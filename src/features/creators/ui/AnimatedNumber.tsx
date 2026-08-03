import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Matches --ease-out-quiet's shape (fast out, long settle). */
const easeOutQuiet = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Rolling-digit counter (Doc 11 §6, Control 3). Eases to the target value;
 * skips the animation entirely under prefers-reduced-motion.
 *
 * Was framer-motion's `animate()`; this is a plain rAF tween so the creator
 * pages add no dependency to this repo. Same duration and easing shape, and it
 * tweens from wherever the previous animation got to, so dragging a slider
 * stays smooth instead of snapping.
 */
export function AnimatedNumber({
  value,
  format,
  className = "",
  duration = 0.5,
}: {
  value: number;
  format: (n: number) => string;
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => format(value));
  const currentRef = useRef(value);

  useEffect(() => {
    const from = currentRef.current;
    const to = value;
    if (reduce || from === to || duration <= 0) {
      currentRef.current = to;
      setDisplay(format(to));
      return;
    }

    let raf = 0;
    let start: number | null = null;
    const ms = duration * 1000;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min((now - start) / ms, 1);
      const current = from + (to - from) * easeOutQuiet(t);
      currentRef.current = current;
      setDisplay(format(current));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        currentRef.current = to;
        setDisplay(format(to));
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, reduce, format, duration]);

  return (
    <span className={`tnum ${className}`} aria-live="off">
      {display}
    </span>
  );
}
