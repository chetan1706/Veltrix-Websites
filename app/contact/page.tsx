import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { buildPageMetadata } from "@/lib/seo/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  stemTitle: "Book a free strategy call",
  description:
    "Tell us about your product idea. Veltrix builds AI-native software, mobile apps and automation systems for ambitious teams worldwide.",
  path: "/contact",
  extraKeywords: ["contact Veltrix", "hire software developers", "project inquiry"],
});

export default function ContactPage() {
  return <ContactContent />;
}
