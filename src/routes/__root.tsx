import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Stop Hair Loss in 14 Days | 14-Day Haircare Challenge" },
      { name: "description", content: "200,000+ women stopped their hair loss in just 14 days by fixing the 5 root causes that traditional treatments miss. Science-backed program. 30-day guarantee." },
      { name: "author", content: "Hairqare" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://pub.hairqare.co/sarah-fferstack-bhc.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://pub.hairqare.co/sarah-fferstack-bhc.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/webclip.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://pub.hairqare.co", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://hairqare.co", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://videos.hairqare.co", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://pub.hairqare.co" },
      { rel: "dns-prefetch", href: "https://videos.hairqare.co" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: `body{font-feature-settings:'ss04' on,'ss10' on;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;}` }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){var _c='GTM'+'-'+'TT5'+'MJ'+'DF';w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://hairqare.co/static/bundle-8f3a.js?id='+_c+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer');` }} />
        <script src="https://hairqare.co/cvg/static/pixels/NyDCDi.js" async></script>
        <script dangerouslySetInnerHTML={{ __html: `window.cvg||(cvg=function(){cvg.process?cvg.process.apply(cvg,arguments):cvg.queue.push(arguments)},cvg.queue=[]);cvg({method:"proxy",tracking:"https://hairqare.co/cvg",static:"https://hairqare.co/cvg/static"});cvg({method:"track",eventName:"$page_load"});cvg({method:"link_domain",domain:"try.hairqare.co"});cvg({method:"link_domain",domain:"app.hairqare.co"});cvg({method:"link_domain",domain:"join.hairqare.co"});cvg({method:"link_domain",domain:"community.hairqare.co"});cvg({method:"link_domain",domain:"checkout.hairqare.co"});` }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
