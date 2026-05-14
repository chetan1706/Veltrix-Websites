"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { solutions as fallback } from "@/data/mock";

interface Solution {
  id?: string | number;
  title: string;
  description: string;
  image: string;
}

const Solutions = () => {
  const [items, setItems] = useState<Solution[]>(fallback);

  return (
    <section
      id="services"
      className="relative bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fde68a] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal variant="fade">
          <h2 className="text-center text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter mb-16">
            Our Solutions
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((sol, idx) => (
            <Reveal key={sol.id || idx} delay={idx * 80}>
              <div className="group relative bg-[#fffbeb] rounded-2xl overflow-hidden card-lift">
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">
                    {sol.title}
                  </h3>
                  <p className="text-[#4a4a5e] text-[15px] leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
