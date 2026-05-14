import React from "react";
import { missionVision } from "@/data/mock";
import Reveal from "@/components/Reveal";

const MissionVision = () => {
  const { sectionTitle, intro, mission, vision, ctaPrimary, ctaSecondary } =
    missionVision;

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#fef3c7] via-[#fde68a] to-[#fef3c7] py-20 md:py-28 text-[#1a1a2e]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center max-w-4xl mx-auto leading-tight">
            {sectionTitle}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-[#4a4a5e] text-center max-w-4xl mx-auto text-[15px] md:text-base leading-relaxed">
            {intro}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <Reveal>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">
                {mission.title}
              </h3>
              <p className="text-[#4a4a5e] leading-relaxed text-[15px]">
                {mission.text}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">
                {vision.title}
              </h3>
              <p className="text-[#4a4a5e] leading-relaxed text-[15px]">
                {vision.text}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale">
          <div
            id="solutions"
            className="mt-16 relative rounded-3xl overflow-hidden h-80 md:h-96 flex items-center"
            style={{
              background:
                "linear-gradient(120deg, #052e22 0%, #064e3b 35%, #10b981 100%)"
            }}
          >
            {/* Ambient glow orbs */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(110, 231, 183,0.55), transparent 70%)",
                filter: "blur(20px)"
              }}
            />
            <div
              className="absolute -bottom-24 left-10 w-80 h-80 rounded-full opacity-50 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(16, 185, 129,0.6), transparent 70%)",
                filter: "blur(30px)"
              }}
            />
            {/* Soft hex grid overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern
                  id="ctaHex"
                  width="40"
                  height="34.64"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="20,1 38,11 38,28 20,38 2,28 2,11"
                    fill="none"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="0.6"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaHex)" />
            </svg>

            <div className="relative z-10 p-8 md:p-16 max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Your Vision, our Expertise!
              </h3>
              <p className="text-white/90 text-base md:text-lg font-medium">
                {ctaPrimary}
              </p>
              <p className="text-[#a7f3d0] mt-2 font-semibold text-sm md:text-base">
                {ctaSecondary}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MissionVision;
