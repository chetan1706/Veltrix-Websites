import type { Metadata } from "next";
import { SITE_KEYWORDS, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const DEFAULT_OG_IMAGE = {
  url: "/branding/veltrix-logo.jpg",
  width: 512,
  height: 512,
  alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
} as const;

interface BuildPageMetadataInput {
  /** Value passed to `metadata.title` (combined with root `title.template`). */
  stemTitle: string;
  description: string;
  /** Path including leading slash, e.g. `/about`. */
  path: string;
  extraKeywords?: readonly string[];
}

/**
 * Consistent page-level SEO: canonical URL, Open Graph, Twitter, and keywords.
 */
export function buildPageMetadata({
  stemTitle,
  description,
  path,
  extraKeywords = [],
}: BuildPageMetadataInput): Metadata {
  const pathNorm = path.startsWith("/") ? path : `/${path}`;
  const socialTitle = `${stemTitle} | ${SITE_NAME}`;
  const keywords = [...SITE_KEYWORDS, ...extraKeywords];

  return {
    title: stemTitle,
    description,
    keywords: [...keywords],
    alternates: { canonical: pathNorm },
    openGraph: {
      title: socialTitle,
      description,
      url: pathNorm,
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    robots: { index: true, follow: true },
  };
}
