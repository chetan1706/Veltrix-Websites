/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Override locally via NEXT_PUBLIC_SITE_URL when previewing SEO on another host.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://veltrixinnovation.org"
).replace(/\/$/, "");

export const SITE_NAME = "Veltrix";

export const SITE_TAGLINE = "Powering Next-Gen Products";

export const DEFAULT_DESCRIPTION =
  "Veltrix is a senior-team software studio building AI-native products, mobile apps, and automation systems for ambitious teams worldwide.";

/** Shared keywords for sitewide discoverability; pages may extend these. */
export const SITE_KEYWORDS = [
  "Veltrix",
  "software development company",
  "mobile app development",
  "AI software",
  "custom software",
  "GoHighLevel",
  "GHL automation",
  "product design",
  "digital transformation",
] as const;
