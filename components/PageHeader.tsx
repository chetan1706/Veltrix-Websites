import React from "react";
import Reveal from "@/components/Reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const PageHeader = ({ eyebrow, title, description }: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-[#fffbeb] text-[#1a1a2e]">
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none soft-pulse"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(16, 185, 129,0.12), transparent 50%), radial-gradient(circle at 80% 70%, rgba(14,165,233,0.08), transparent 50%)"
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 md:pt-28 pb-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#10b981] uppercase">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={200}>
            <p className="mt-6 text-[#4a4a5e] max-w-2xl text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
