export type CalendlyInitPopupWidgetArgs = {
  url: string;
};

/** Arguments for programmatic inline embeds (required for SPAs / remounts). */
export type CalendlyInitInlineWidgetArgs = {
  url: string;
  parentElement: HTMLElement;
};

export type CalendlyApi = {
  initPopupWidget: (args: CalendlyInitPopupWidgetArgs) => void;
  initInlineWidget?: (args: CalendlyInitInlineWidgetArgs) => void;
  /** Present on hosted widget.js; restores internal state when closing programmatically. */
  closePopupWidget?: () => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

export {};
