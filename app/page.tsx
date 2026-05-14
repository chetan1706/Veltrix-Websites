import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import MissionVision from "@/components/MissionVision";
import Testimonials from "@/components/Testimonials";
import {
  DEFAULT_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
} from "@/lib/site";

const HOME_TITLE = "Veltrix — Powering Next-Gen Products";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: DEFAULT_DESCRIPTION,
  keywords: [...SITE_KEYWORDS, "software studio", "enterprise software", "SaaS development"],
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "/",
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: "/branding/veltrix-logo.jpg",
        width: 512,
        height: 512,
        alt: HOME_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/branding/veltrix-logo.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <MissionVision />
      <Testimonials />
    </>
  );
}
