"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/mock";
import { Button } from "@/components/ui/button";

/**
 * Full-document `<a>` navigation (not Next `<Link>`) so static export on shared hosting
 * (e.g. Hostinger/Apache) always loads the correct HTML per route. Client-side transitions
 * can otherwise leave the URL on `/contact/` while the home shell stays mounted.
 */
function navItemIsActive(pathname: string, to: string): boolean {
  const path =
    pathname === "/" || pathname === "" || pathname.endsWith("/")
      ? pathname || "/"
      : `${pathname}/`;
  if (to === "/") {
    return path === "/" || path === "";
  }
  return path === to || path.startsWith(to);
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-[#fffbeb]/95 backdrop-blur-md" : "bg-[#fffbeb]"
      } border-b border-[#e8dcc0]`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/branding/veltrix-logo.jpg"
            alt="Veltrix"
            className="w-10 h-10 rounded-md object-cover shadow-sm group-hover:shadow-md transition-shadow"
          />
          <span className="text-[#1a1a2e] text-2xl font-bold tracking-tight">
            Veltrix
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = navItemIsActive(pathname, link.to);
            return (
              <li key={link.label}>
                <a
                  href={link.to}
                  {...(link.openInNewTab
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide pb-1 border-b-2 transition-colors ${
                    isActive
                      ? "text-[#10b981] border-[#10b981]"
                      : "text-[#1a1a2e] border-transparent hover:text-[#10b981]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="btn-shine rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-6 h-11 shadow-lg shadow-[#10b981]/10 hover:shadow-[#10b981]/25 transition-shadow"
          >
            <a href="/contact/" target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#1a1a2e]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#fffbeb] border-t border-[#e8dcc0] px-5 py-5">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = navItemIsActive(pathname, link.to);
              return (
                <li key={link.label}>
                  <a
                    href={link.to}
                    onClick={() => setMobileOpen(false)}
                    {...(link.openInNewTab
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`text-sm font-semibold ${
                      isActive ? "text-[#10b981]" : "text-[#1a1a2e]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <Button
                asChild
                className="w-full rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold"
              >
                <a
                  href="/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Free Strategy Call
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
