import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  stemTitle: "Portfolio",
  description:
    "Selected work across fintech, healthtech, commerce, marketing and AI — mobile apps, web platforms, and intelligent products.",
  path: "/portfolio",
  extraKeywords: [
    "case studies",
    "fintech apps",
    "healthtech",
    "SaaS portfolio",
    "AI products",
  ],
});

export default function PortfolioPage() {
  return <PortfolioContent />;
}
