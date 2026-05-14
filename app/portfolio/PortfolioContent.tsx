"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioPage } from "@/data/mock";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

interface Project {
  id?: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  slug?: string;
}

export default function PortfolioContent() {
  const { hero, categories } = portfolioPage;
  const [projects, setProjects] = useState<Project[]>(portfolioPage.projects);
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  );

  return (
    <div className="bg-[#fffbeb] text-[#1a1a2e]">
      <PageHeader
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-6">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 h-10 rounded-full text-sm font-semibold transition-all border ${
                  active === c
                    ? "bg-[#10b981] text-white border-[#10b981] scale-[1.02]"
                    : "bg-transparent text-[#3a3a4e] border-[#d4c594] hover:border-[#10b981]/60 hover:text-[#1a1a2e] hover:-translate-y-0.5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((p, i) => (
            <Reveal key={p.id || p.title} delay={i * 70}>
              <Link
                href="/portfolio"
                className="group relative overflow-hidden rounded-2xl bg-[#fffbeb] border border-[#fde68a] hover:border-[#10b981]/40 card-lift block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#059669]">
                      {p.tag}
                    </p>
                    <h3 className="text-xl font-bold mt-2">{p.title}</h3>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fef3c7] group-hover:bg-[#10b981] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[#5a5a6b] py-20">
            No projects under this category yet.
          </p>
        )}
      </section>
    </div>
  );
}
