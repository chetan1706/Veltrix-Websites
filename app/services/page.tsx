import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  stemTitle: "Services",
  description:
    "Mobile app development, custom software, AI and automation, marketing and branding, GoHighLevel (GHL), and product design for category-defining teams.",
  path: "/services",
  extraKeywords: [
    "React Native",
    "Flutter",
    "LLM assistants",
    "RAG pipelines",
    "UI UX design",
    "GHL snapshots",
  ],
});

export default function ServicesPage() {
  return <ServicesContent />;
}
