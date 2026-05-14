"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { testimonials as fallback } from "@/data/mock";

interface Testimonial {
  id?: string | number;
  rating?: number;
  feedback: string;
  avatar: string;
  name: string;
  location: string;
}

const Testimonials = () => {
  const [items, setItems] = useState<Testimonial[]>(fallback);

  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-b from-[#fde68a] via-[#fef3c7] to-[#fffbeb] py-20 md:py-28 text-[#1a1a2e]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal variant="fade">
          <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter mb-6">
            Client Feedback
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-center text-[#4a4a5e] max-w-2xl mx-auto text-[15px]">
            Discover how our solutions transformed businesses across various
            industries.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <Reveal key={t.id || idx} delay={idx * 120}>
              <div className="group relative bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-7 card-lift hover:bg-white hover:border-[#10b981]/30">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#facc15] text-[#facc15]"
                    />
                  ))}
                </div>
                <p className="text-[#3a3a4e] leading-relaxed text-[15px] mb-6">
                  &ldquo;{t.feedback}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-[#fde68a]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-[#1a1a2e] font-bold text-sm">{t.name}</p>
                    <p className="text-[#5a5a6b] text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
