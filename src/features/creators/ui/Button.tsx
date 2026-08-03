// LinkButton was dropped in the port: the creator pages link out to Airtable
// with a plain <a>, so nothing here needs the router.
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-colors duration-200 ease-out-quiet disabled:opacity-50 disabled:pointer-events-none select-none";

const sizes: Record<Size, string> = {
  md: "min-h-[48px] px-6 text-[0.95rem]",
  lg: "min-h-[56px] px-8 text-base",
};

// Brand orange #E8622C is the required CTA fill; hover darkens to flame-deep.
const variants: Record<Variant, string> = {
  primary: "bg-flame text-ivory hover:bg-flame-deep active:bg-[#A83F16]",
  secondary:
    "border border-ink/25 text-ink bg-transparent hover:bg-ink/[0.04] active:bg-ink/[0.07]",
  ghost: "text-flame-deep hover:text-flame-deep hover:bg-flame/[0.06]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
