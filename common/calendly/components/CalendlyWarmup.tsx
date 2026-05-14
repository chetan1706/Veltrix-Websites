"use client";

import { useEffect } from "react";
import { ensureCalendlyLoaded } from "@/common/calendly/service";

/**
 * Starts loading Calendly's widget script during idle time so the contact page
 * embed can call `initInlineWidget` without waiting on the network for `widget.js`.
 */
export default function CalendlyWarmup() {
  useEffect(() => {
    const run = () => {
      void ensureCalendlyLoaded();
    };

    const idleHandle = window.requestIdleCallback?.(run, { timeout: 4000 });
    if (idleHandle !== undefined) {
      return () => window.cancelIdleCallback(idleHandle);
    }

    const timeoutId = window.setTimeout(run, 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}
