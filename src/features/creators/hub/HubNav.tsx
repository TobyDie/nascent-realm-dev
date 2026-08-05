import { Link } from "@tanstack/react-router";
import { HUB_TABS, type HubTabId } from "../copy/hub-nav";
import { BookIcon, BulbIcon, GiftIcon, HomeIcon, PlayIcon, SparkIcon } from "../ui/Icons";
import { SUPPORT_EMAIL } from "../config";

type IconProps = { width?: number; height?: number; className?: string };

/** Icons live here, not in the copy module, so the copy stays plain data. */
const TAB_ICON: Record<HubTabId, (p: IconProps) => React.ReactElement> = {
  welcome: HomeIcon,
  start: PlayIcon,
  program: SparkIcon,
  rewards: GiftIcon,
  tips: BulbIcon,
  faq: BookIcon,
};

/**
 * `to="/creators/hub"` would otherwise read as active on every child route,
 * because TanStack matches prefixes. Only Welcome needs the exact test.
 */
const exactFor = (id: HubTabId) => (id === "welcome" ? ({ exact: true } as const) : undefined);

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

/** Desktop rail (>= cm). One block per topic, icon + label. */
export function HubRail() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-line bg-sand px-5 py-6 cm:flex">
      <Link to="/creators/hub" className="mb-8 px-2">
        <span className="font-fraunces text-xl text-ink">Hairqare</span>
        <span className="ml-1.5 text-sm text-flame-deep">Creators</span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {HUB_TABS.map((tab) => {
          const Icon = TAB_ICON[tab.id];
          return (
            <Link
              key={tab.id}
              to={tab.to}
              activeOptions={exactFor(tab.id)}
              activeProps={{ className: "bg-ivory text-ink shadow-sm" }}
              inactiveProps={{
                className: "text-ink/55 hover:bg-ivory/60 hover:text-ink",
              }}
              className="flex items-center gap-3 rounded-input px-3 py-2.5 text-sm font-medium transition-colors"
            >
              <Icon width={18} height={18} className="shrink-0 opacity-70" />
              {tab.label}
            </Link>
          );
        })}
        <TermsLink className="mt-2 rounded-input px-3 py-2 text-sm font-medium hover:bg-ivory/60" />
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
 * Mobile tabs (< cm). A sticky scrollable strip — five short labels, always
 * visible, no tap needed to see where you can go. The old dropdown hid the
 * contents behind a tap, which is what made the page feel like one long scroll.
 */
export function HubTabs() {
  return (
    <div className="sticky top-0 z-30 border-b border-line bg-ivory/95 backdrop-blur-sm cm:hidden">
      <nav
        aria-label="Hub sections"
        className="flex gap-1.5 overflow-x-auto px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {HUB_TABS.map((tab) => (
          <Link
            key={tab.id}
            to={tab.to}
            activeOptions={exactFor(tab.id)}
            activeProps={{ className: "bg-ink text-ivory" }}
            inactiveProps={{ className: "bg-sand text-ink/70" }}
            className="flex min-h-[40px] shrink-0 items-center rounded-pill px-4 text-sm font-medium transition-colors"
          >
            {tab.short}
          </Link>
        ))}
      </nav>
    </div>
  );
}
