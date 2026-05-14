import React from "react";
import {
  Instagram, Linkedin, Facebook, Twitter, Mail
} from "lucide-react";
import { footerData } from "@/data/mock";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-[#fef3c7] text-[#1a1a2e] overflow-hidden border-t border-[#fde68a]"
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 30%, rgba(16,185,129,0.14), transparent 55%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-16 pb-8">
        {/* Tagline strip */}
        <div className="border-b border-[#fde68a] pb-10 mb-10 text-center">
          <p className="text-[#3a3a4e] text-lg md:text-2xl font-light leading-snug whitespace-normal md:whitespace-nowrap">
            {footerData.tagline}
          </p>
        </div>

        {/* Brand */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/branding/veltrix-logo.jpg"
                alt="Veltrix"
                className="w-10 h-10 rounded-md object-cover shadow-sm"
              />
              <span className="text-2xl font-bold">{footerData.brand}</span>
            </div>
            <p className="text-sm text-[#4a4a5e] leading-relaxed">
              Senior team building AI-native products, mobile apps and automation systems for ambitious teams.
            </p>
            <a
              href={`mailto:${footerData.email}`}
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#1a1a2e] hover:text-[#059669] transition-colors"
            >
              <Mail className="w-4 h-4" />
              {footerData.email}
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            {footerData.socials.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.icon}
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-white hover:bg-[#10b981] hover:text-white text-[#1a1a2e] transition-colors shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#fde68a] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[#5a5a6b] text-xs">{footerData.copyright}</p>
          <div className="flex items-center gap-5 text-xs text-[#5a5a6b]">
            <span>Built with care.</span>
            <span className="hidden sm:inline">·</span>
            <span>Designed in 2026.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
