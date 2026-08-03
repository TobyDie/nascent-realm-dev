import type { ReactNode } from "react";
import { CheckIcon } from "./Icons";

type Treatment = "sage" | "gold";

/**
 * RewardCard — the unit stacked in Build Your Journey and reused on the dashboard.
 * `gold` treatment is reserved for the Hairqare Lab unlock ONLY (Doc 11 §4, one use).
 */
export function RewardCard({
  title,
  note,
  treatment = "sage",
  icon,
  value,
}: {
  title: string;
  note?: string;
  treatment?: Treatment;
  icon?: ReactNode;
  value?: string;
}) {
  const isGold = treatment === "gold";
  return (
    <div
      className={[
        "flex items-center gap-3 rounded-card border px-4 py-3.5 transition-colors duration-200",
        isGold
          ? "border-gold/50 bg-gold/[0.10]"
          : "border-sage/45 bg-sage/[0.12]",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-pill",
          isGold ? "bg-gold text-ivory" : "bg-sage text-ivory",
        ].join(" ")}
      >
        {icon ?? <CheckIcon width={17} height={17} />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-fraunces text-[1.05rem] leading-tight text-ink">
          {title}
        </span>
        {note && (
          <span className="block text-sm text-ink/60">{note}</span>
        )}
      </span>
      {value && (
        <span
          className={[
            "tnum shrink-0 font-fraunces text-base",
            isGold ? "text-[#7a6224]" : "text-[#4d5c50]",
          ].join(" ")}
        >
          {value}
        </span>
      )}
    </div>
  );
}
