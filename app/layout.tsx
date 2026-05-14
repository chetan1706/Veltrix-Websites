import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import CalendlyWarmup from "@/common/calendly/components/CalendlyWarmup";
import { Toaster } from "@/components/ui/toaster";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import {
  DEFAULT_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#10b981",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/branding/veltrix-logo.jpg", type: "image/jpeg" }],
    apple: [{ url: "/branding/veltrix-logo.jpg" }],
    shortcut: "/branding/veltrix-logo.jpg",
  },
  title: {
    template: "%s | Veltrix",
    default: "Veltrix — Powering Next-Gen Products",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/branding/veltrix-logo.jpg",
        width: 512,
        height: 512,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: DEFAULT_DESCRIPTION,
    images: ["/branding/veltrix-logo.jpg"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/icon.jpg" type="image/jpeg" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon.jpg" />
        <link rel="preconnect" href="https://assets.calendly.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className={poppins.className}>
        <SiteJsonLd />
        <CalendlyWarmup />
        <TopBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
