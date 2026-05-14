"use client";

import React, { useLayoutEffect, useRef } from "react";
import { ensureCalendlyLoaded } from "@/common/calendly/service";

/**
 * Inline Calendly embed for Next.js client navigation.
 * Calendly's script only auto-scans the DOM once; SPAs must call `initInlineWidget`
 * with `parentElement` on each mount so the iframe (and loader) stay inside this box.
 *
 * The mount node needs a stable pixel height before `initInlineWidget` runs; otherwise
 * Calendly can size the iframe too small. Avoid `overflow-hidden` on the wrapper so the
 * embed is not clipped as Calendly adjusts height.
 */
export default function CalendlyInlineEmbed({
  url,
  height = 1050,
}: {
  url: string;
  height?: number;
}) {
  const parentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    let cancelled = false;

    void (async () => {
      try {
        await ensureCalendlyLoaded();
        if (cancelled || !parentRef.current) return;

        const calendly = window.Calendly;
        const init = calendly?.initInlineWidget;
        if (typeof init !== "function") {
          console.error("Calendly initInlineWidget is not available.");
          return;
        }

        const mount = parentRef.current;
        mount.replaceChildren();
        // Explicit box before init so Calendly measures layout correctly (not just min-height).
        mount.style.minWidth = "320px";
        mount.style.minHeight = `${height}px`;
        mount.style.height = `${height}px`;

        await new Promise<void>((resolve) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => resolve());
          });
        });
        if (cancelled || !parentRef.current) return;

        init.call(calendly, { url, parentElement: parentRef.current });
      } catch (err) {
        console.error(err);
      }
    })();

    return () => {
      cancelled = true;
      parentRef.current?.replaceChildren();
    };
  }, [url, height]);

  return (
    <div
      className="w-full rounded-2xl border border-[#fde68a] bg-red shadow-sm"
      // style={{ minHeight: height }}
    >
      <div
        ref={parentRef}
        className="relative w-full calendly-inline-embed-root"
        style={{ minWidth: 320, minHeight: height, height }}
      />
    </div>
  );
}
