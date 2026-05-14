import React from "react";
import { Sparkles } from "lucide-react";
import { topBannerText } from "@/data/mock";

const TopBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#10b981] via-[#84cc16] to-[#facc15] text-[#0a2419] py-2.5">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold tracking-[0.18em]">
        <Sparkles className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
        <span className="text-center">{topBannerText}</span>
        <Sparkles className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default TopBanner;
