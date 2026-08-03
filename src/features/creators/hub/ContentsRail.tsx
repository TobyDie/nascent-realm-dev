
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronIcon } from "../ui/Icons";
import { SECTIONS, SECTION_GROUPS } from "../copy/hub-sections";
import { SUPPORT_EMAIL } from "../config";

const IDS = SECTIONS.map((s) => s.id);

/**
 * Scroll-spy over the hub's section anchors. The rootMargin puts a narrow band
 * just below the top of the viewport; whichever section occupies that band is
 * the one being read. When nothing intersects (mid-jump, or the very bottom of
 * the page) the last active id is kept rather than flickering to none.
 */
function useActiveSection() {
  const [active, setActive] = useState(IDS[0]);
  const visible = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) visible.current.add(id);
          else visible.current.delete(id);
        }
        const first = IDS.find((id) => visible.current.has(id));
        if (first) setActive(first);
      },
      { rootMargin: "-12% 0px -80% 0px", threshold: 0 }
    );

    for (const id of IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

function TermsLink({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/creators/terms"
      className={`flex items-center gap-2 text-ink/55 transition-colors hover:text-ink ${className}`}
    >
      Terms
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-45"
        aria-hidden
      >
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </Link>
  );
}

/** Desktop contents rail (>= md). */
export function ContentsRail() {
  const active = useActiveSection();

  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-line bg-sand px-5 py-6 cm:flex">
      <a href="#top" className="mb-8 px-2">
        <span className="font-fraunces text-xl text-ink">Hairqare</span>
        <span className="ml-1.5 text-sm text-flame-deep">Creators</span>
      </a>

      <nav className="flex flex-1 flex-col gap-5 overflow-y-auto">
        {SECTION_GROUPS.map((group) => (
          <div key={group.group}>
            <p className="mb-1.5 px-3 text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
              {group.group}
            </p>
            <div className="flex flex-col gap-0.5">
              {group.items.map((s) => {
                const isActive = s.id === active;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-input px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-ivory text-ink shadow-sm"
                        : "text-ink/55 hover:bg-ivory/60 hover:text-ink"
                    }`}
                  >
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
        {/* Terms is its own page, so it sits at the end of "Look it up" as a link. */}
        <TermsLink className="-mt-4 rounded-input px-3 py-2 text-sm font-medium hover:bg-ivory/60" />
      </nav>

      <div className="mt-4 border-t border-line px-3 pt-4 text-xs">
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-flame-deep hover:underline">
          {SUPPORT_EMAIL}
        </a>
      </div>
    </aside>
  );
}

/**
 * Mobile contents menu (< md). A sticky bar showing the section you're in, which
 * opens a full list on tap — one tap to anywhere, nothing scrolled off-screen the
 * way a horizontal chip row hides it.
 */
export function MobileContents() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const activeLabel =
    SECTIONS.find((s) => s.id === active)?.label ?? SECTIONS[0].label;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sticky top-0 z-30 border-b border-line bg-ivory/95 backdrop-blur-sm cm:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="hub-contents-menu"
        className="flex min-h-[52px] w-full items-center justify-between gap-3 px-5 py-3 text-left"
      >
        <span className="min-w-0">
          <span className="block text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink/40">
            Contents
          </span>
          <span className="block truncate text-sm font-medium text-ink">
            {activeLabel}
          </span>
        </span>
        <ChevronIcon
          width={20}
          height={20}
          className={`shrink-0 text-ink/50 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          id="hub-contents-menu"
          className="max-h-[70dvh] overflow-y-auto border-t border-line bg-ivory px-5 pb-4 pt-2"
        >
          {SECTION_GROUPS.map((group) => (
            <div key={group.group} className="mb-2">
              <p className="px-1 pb-1 pt-3 text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
                {group.group}
              </p>
              {group.items.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={s.id === active ? "true" : undefined}
                  className={`flex min-h-[44px] items-center rounded-input px-3 text-sm font-medium ${
                    s.id === active ? "bg-sand text-ink" : "text-ink/70"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          ))}
          <TermsLink
            className="flex min-h-[44px] items-center rounded-input px-3 text-sm font-medium"
          />
        </div>
      )}
    </div>
  );
}
