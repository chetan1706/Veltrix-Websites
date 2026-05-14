import type { Metadata } from "next";
import BlogsContent from "./BlogsContent";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  stemTitle: "Veltrix Journal — AI, product & software craft",
  description:
    "Essays, playbooks and field notes on AI-native products, engineering, design, GHL and mobile from the Veltrix team.",
  path: "/blogs",
  extraKeywords: [
    "software engineering blog",
    "AI product strategy",
    "GoHighLevel tips",
    "mobile development",
  ],
});

export default function BlogsPage() {
  return <BlogsContent />;
}
