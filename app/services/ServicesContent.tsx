"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Smartphone,
  Code,
  Brain,
  Megaphone,
  Workflow,
  LayoutDashboard,
  ArrowRight,
  Check,
} from "lucide-react";
import { servicesPage } from "@/data/mock";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  smartphone: Smartphone,
  code: Code,
  brain: Brain,
  megaphone: Megaphone,
  workflow: Workflow,
  "layout-dashboard": LayoutDashboard,
};

interface ServiceItem {
  id?: string;
  icon: string;
  title: string;
  text: string;
  bullets?: string[];
}

export default function ServicesContent() {
  const { hero, items: fallback, process } = servicesPage;
  const [items, setItems] = useState<ServiceItem[]>(fallback);

  return (
    <div className="bg-[#fffbeb] text-[#1a1a2e]">
      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = iconMap[it.icon] || Code;
            return (
              <Reveal key={it.id || it.title} delay={i * 80}>
                <div className="group relative bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-7 card-lift hover:bg-white hover:border-[#10b981]/30 h-full">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#10b981]/15 text-[#10b981] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{it.title}</h3>
                  <p className="text-[#4a4a5e] text-[15px] leading-relaxed mb-5">
                    {it.text}
                  </p>
                  <ul className="space-y-2">
                    {(it.bullets || []).map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#3a3a4e]">
                        <Check className="w-4 h-4 text-[#10b981]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fffbeb] py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#059669] uppercase">
                How We Work
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
                A four-step rhythm
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-7 card-lift hover:border-[#10b981]/40">
                  <p className="text-5xl font-bold text-[#10b981]/30">{p.step}</p>
                  <h3 className="text-xl font-bold mt-3">{p.title}</h3>
                  <p className="text-[#4a4a5e] text-sm mt-2 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="scale">
            <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white border border-[#fde68a] rounded-2xl p-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to build something remarkable?
                </h3>
                <p className="text-[#4a4a5e] mt-2">
                  Book a 30-minute discovery call with our team.
                </p>
              </div>
              <Link href="/portfolio">
                <Button className="btn-shine rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-6 h-12">
                  View our work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
