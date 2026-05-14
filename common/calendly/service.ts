import { getCalendlyConfig } from "@/common/calendly/config";
import type { CalendlyApi } from "@/common/calendly/types";

const CALENDLY_WIDGET_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
/** Calendly mounts this when the popup is open; when it is removed, scroll lock should be released. */
const CALENDLY_OVERLAY_SELECTOR = ".calendly-overlay";

let loadPromise: Promise<void> | null = null;
let overlayWatcher: MutationObserver | null = null;
let calendlyMessageListenerAttached = false;

/**
 * Calendly's popup sets body/html scroll lock (often `overflow: hidden` and `position: fixed` with
 * `top: -scrollY`). In some cases those styles are not cleared after close, which breaks scrolling
 * for the whole app until refresh.
 */
export function restoreDocumentScrollAfterCalendly(): void {
  if (typeof document === "undefined") return;

  const body = document.body;
  const html = document.documentElement;

  let scrollY: number | null = null;
  if (body.style.position === "fixed" && body.style.top) {
    const parsed = Number.parseInt(body.style.top, 10);
    if (!Number.isNaN(parsed)) scrollY = Math.abs(parsed);
  }

  const props = [
    "overflow",
    "position",
    "top",
    "left",
    "right",
    "width",
    "height",
    "padding-right",
    "touch-action",
    "pointer-events",
  ] as const;
  for (const p of props) {
    body.style.removeProperty(p);
  }
  html.style.removeProperty("overflow");
  html.style.removeProperty("position");

  if (scrollY != null && scrollY > 0) {
    window.scrollTo(0, scrollY);
  }
}

function stopOverlayWatcher(): void {
  overlayWatcher?.disconnect();
  overlayWatcher = null;
}

function startOverlayWatcher(): void {
  stopOverlayWatcher();

  let sawOverlay = document.querySelector(CALENDLY_OVERLAY_SELECTOR) != null;
  overlayWatcher = new MutationObserver(() => {
    const open = document.querySelector(CALENDLY_OVERLAY_SELECTOR) != null;
    if (open) sawOverlay = true;
    else if (sawOverlay) {
      restoreDocumentScrollAfterCalendly();
      stopOverlayWatcher();
    }
  });

  overlayWatcher.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(stopOverlayWatcher, 24 * 60 * 60 * 1000);
}

function ensureCalendlyPostMessageCleanup(): void {
  if (typeof window === "undefined" || calendlyMessageListenerAttached) return;
  calendlyMessageListenerAttached = true;

  window.addEventListener("message", (event: MessageEvent) => {
    if (event.origin !== "https://calendly.com") return;
    const name = event.data?.event;
    if (typeof name !== "string" || !name.startsWith("calendly.")) return;

    // Booking complete — popup may close asynchronously; overlay watcher is primary.
    if (name === "calendly.event_scheduled") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!document.querySelector(CALENDLY_OVERLAY_SELECTOR)) {
            restoreDocumentScrollAfterCalendly();
          }
        });
      });
    }
  });
}

function isCalendlyLoaded(calendly: unknown): calendly is CalendlyApi {
  if (typeof calendly !== "object" || calendly === null) return false;
  const api = calendly as CalendlyApi;
  return (
    typeof api.initPopupWidget === "function" ||
    typeof api.initInlineWidget === "function"
  );
}

export function ensureCalendlyLoaded(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (isCalendlyLoaded(window.Calendly)) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${CALENDLY_WIDGET_SCRIPT_SRC}"]`);
    if (existing) {
      if (isCalendlyLoaded(window.Calendly)) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Failed to load Calendly widget script.")),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_WIDGET_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly widget script."));
    document.body.appendChild(script);
  });

  return loadPromise;
}

export async function openCalendlyPopup(overrides?: { url?: string }) {
  const { schedulingUrl } = getCalendlyConfig();
  const url = overrides?.url ?? schedulingUrl;
  if (!url) throw new Error("Calendly URL is not configured. Set NEXT_PUBLIC_CALENDLY_URL.");

  await ensureCalendlyLoaded();
  if (!isCalendlyLoaded(window.Calendly)) {
    throw new Error("Calendly did not initialize correctly.");
  }

  ensureCalendlyPostMessageCleanup();
  startOverlayWatcher();
  window.Calendly.initPopupWidget({ url });
}

