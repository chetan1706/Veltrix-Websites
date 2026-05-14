"use client";

import React from "react";
import { Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroVisual from "@/components/HeroVisual";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#fffbeb] text-[#1a1a2e]"
    >
      {/* Ambient backdrop glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 50%, rgba(16, 185, 129,0.15), transparent 55%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129,0.08), transparent 50%)"
        }}
      />

      {/* Soft emerald glow pulse behind text */}
      <div
        className="absolute -left-40 top-1/3 w-[560px] h-[560px] rounded-full soft-pulse pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129,0.18), transparent 65%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div>
            <h1 className="font-bold leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-[5.25rem]">
              <span
                className="block text-[#1a1a2e] rise-in"
                style={{ animationDelay: "0.05s" }}
              >
                POWERING NEXT-GEN
              </span>
              <span
                className="block text-[#10b981] mt-2 rise-in"
                style={{ animationDelay: "0.25s" }}
              >
                PRODUCTS
              </span>
            </h1>

            <p
              className="mt-8 text-base md:text-lg text-[#3a3a4e] max-w-md leading-relaxed rise-in"
              style={{ animationDelay: "0.45s" }}
            >
              Partner with a team that ships bold ideas into real-world
              products, fast.
            </p>

            <div className="mt-10 rise-in" style={{ animationDelay: "0.6s" }}>
              <Button
                asChild
                className="btn-shine rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-8 h-12 text-sm tracking-wide shadow-lg shadow-[#10b981]/20 hover:shadow-[#10b981]/40 transition-shadow"
              >
                <a href="/contact/" target="_blank" rel="noopener noreferrer">
                  Book a Free Strategy Call
                </a>
              </Button>
            </div>

            {/* Badges */}
            <div
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-xl rise-in"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex flex-col items-center text-center">
                <Award
                  className="w-12 h-12 text-[#10b981] mb-3"
                  strokeWidth={1.5}
                />
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#10b981] uppercase">
                  Top Software Development Company
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPin
                  className="w-12 h-12 text-[#10b981] mb-3"
                  strokeWidth={1.5}
                />
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#10b981] uppercase">
                  Global Leaders, Top B2B Company, Top Developers
                </p>
              </div>
            </div>
          </div>

          {/* Right: animated visual */}
          <div className="relative flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
