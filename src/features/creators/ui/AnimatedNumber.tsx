
import { animate, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Rolling-digit counter (Doc 11 §6, Control 3). Springs to the target value;
 * skips the animation entirely under prefers-reduced-motion.
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
  const mv = useMotionValue(value);
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => format(value));

  useEffect(() => {
    if (reduce) {
      setDisplay(format(value));
      return;
    }
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(format(v)),
    });
    return () => controls.stop();
  }, [value, reduce, format, mv, duration]);

  return (
    <span className={`tnum ${className}`} aria-live="off">
      {display}
    </span>
  );
}
