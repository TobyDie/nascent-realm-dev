
import { useEffect, useState } from "react";
import { CTA_LABEL } from "../copy/compliance";
import { APPLICATION_FORM_URL } from "../config";
import { ArrowRightIcon } from "./Icons";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-colors duration-200 ease-out-quiet select-none bg-flame text-ivory hover:bg-flame-deep active:bg-[#A83F16]";
const sizes = {
  md: "min-h-[48px] px-6 text-[0.95rem]",
  lg: "min-h-[56px] px-8 text-base",
};

/**
 * The single Apply CTA → the Airtable application form (per the MVP Charter).
 * Forwards any incoming utm_* params onto the form so source attribution survives.
 */
export function ApplyCTA({
  size = "md",
  className = "",
  withArrow = true,
}: {
  size?: "md" | "lg";
  className?: string;
  withArrow?: boolean;
}) {
  const [href, setHref] = useState(APPLICATION_FORM_URL);

  useEffect(() => {
    if (!APPLICATION_FORM_URL.startsWith("http")) return;
    const incoming = new URLSearchParams(window.location.search);
    const fwd = new URLSearchParams();
    incoming.forEach((v, k) => {
      if (k.startsWith("utm_")) fwd.set(k, v);
    });
    const qs = fwd.toString();
    if (qs) {
      setHref(
        APPLICATION_FORM_URL + (APPLICATION_FORM_URL.includes("?") ? "&" : "?") + qs
      );
    }
  }, []);

  const external = APPLICATION_FORM_URL.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${sizes[size]} ${className}`}
    >
      {CTA_LABEL}
      {withArrow && <ArrowRightIcon width={18} height={18} />}
    </a>
  );
}
