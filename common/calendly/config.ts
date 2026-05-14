export type CalendlyConfig = {
  schedulingUrl: string | null;
};

export function getCalendlyConfig(): CalendlyConfig {
  const schedulingUrl = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || null;
  return { schedulingUrl };
}

