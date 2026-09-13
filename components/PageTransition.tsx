"use client";

/**
 * PageTransition
 * ---------------
 * Simple, plain-CSS route transition for the Next.js App Router.
 *
 * The trick: give the wrapper a `key={pathname}`. Every time the route
 * changes, React sees a "new" element and mounts a fresh DOM node —
 * which naturally re-triggers the CSS animation defined in globals.css
 * (see `.page-transition` / `@keyframes pageEnter`).
 *
 * No click hijacking, no manual timelines, no phase tracking — it just
 * works for <Link> clicks, plain <a> tags, back/forward, and redirects,
 * because it's driven entirely by the pathname changing.
 *
 * Usage — wrap the routed content in app/layout.tsx:
 *
 *   <Header />
 *   <PageTransition>{children}</PageTransition>
 *   <CustomCursor />
 */

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}