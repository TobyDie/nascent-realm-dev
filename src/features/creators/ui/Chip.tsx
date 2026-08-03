import type { ReactNode } from "react";

type Tone = "default" | "flame" | "sage" | "gold";

const tones: Record<Tone, string> = {
  default: "bg-ivory border-line text-ink/80",
  flame: "bg-flame/[0.08] border-flame/25 text-flame-deep",
  sage: "bg-sage/[0.14] border-sage/40 text-[#4d5c50]",
  gold: "bg-gold/[0.12] border-gold/40 text-[#7a6224]",
};

export function Chip({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-pill border px-3 py-1.5 text-sm font-medium leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
