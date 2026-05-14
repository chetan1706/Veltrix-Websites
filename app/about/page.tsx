import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  stemTitle: "About Veltrix — engineering bold futures",
  description:
    "Veltrix is a global technology studio crafting AI-native software, mobile experiences and automation systems for teams in the US, UK, India and Dubai.",
  path: "/about",
  extraKeywords: [
    "about Veltrix",
    "technology studio",
    "AI-native software",
    "mobile experiences",
  ],
});

export default function AboutPage() {
  return <AboutContent />;
}
