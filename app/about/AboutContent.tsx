"use client";

import { useState } from "react";
import { Rocket, Shield, Users, Sparkles } from "lucide-react";
import { aboutPage } from "@/data/mock";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  rocket: Rocket,
  shield: Shield,
  users: Users,
  sparkles: Sparkles,
};

interface TeamMember {
  id?: string;
  name: string;
  role: string;
  avatar: string;
}

export default function AboutContent() {
  const { hero, stats, values } = aboutPage;
  const [team, setTeam] = useState<TeamMember[]>(aboutPage.team);

  return (
    <div className="bg-[#fffbeb] text-[#1a1a2e]">
      <PageHeader eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-6 text-center card-lift hover:border-[#facc15]/60">
                <p className="text-4xl md:text-5xl font-bold text-[#ca8a04]">
                  <Counter value={s.value} />
                </p>
                <p className="text-[#5a5a6b] text-xs md:text-sm mt-2 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fffbeb] py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#059669] uppercase">
                Our Principles
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
                How we build with you
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {values.map((v, i) => {
              const Icon = iconMap[v.icon] || Sparkles;
              return (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="group relative bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-8 card-lift hover:bg-white hover:border-[#10b981]/30">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#10b981]/15 text-[#10b981] mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                    <p className="text-[#4a4a5e] text-[15px] leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#059669] uppercase">
              The Team
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Senior craft, end-to-end
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {team.map((m, i) => (
            <Reveal key={m.id || m.name} variant="scale" delay={i * 90}>
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#fffbeb]">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <p className="mt-4 font-bold text-[#1a1a2e]">{m.name}</p>
                <p className="text-[#059669] text-xs font-semibold uppercase tracking-wider">
                  {m.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
