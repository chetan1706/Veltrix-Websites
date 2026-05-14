import React from "react";

const HeroVisual = () => {
  return (
    <div className="hero-visual" aria-hidden="true">
      {/* Hex grid backdrop (faded) */}
      <svg
        className="hex-grid"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hex"
            width="42"
            height="36.4"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="21,1 40,11 40,29 21,39 2,29 2,11"
              fill="none"
              stroke="rgba(16, 185, 129,0.22)"
              strokeWidth="0.7"
            />
          </pattern>
          <radialGradient id="fadeG" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="70%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hexFade">
            <rect width="600" height="600" fill="url(#fadeG)" />
          </mask>
        </defs>
        <rect
          width="600"
          height="600"
          fill="url(#hex)"
          mask="url(#hexFade)"
        />
      </svg>

      {/* Soft ambient halo */}
      <div className="v2-halo" />

      {/* Concentric orbit rings */}
      <svg className="v2-rings" viewBox="0 0 600 600">
        <circle
          cx="300"
          cy="300"
          r="120"
          fill="none"
          stroke="rgba(16, 185, 129,0.45)"
          strokeWidth="1.25"
          strokeDasharray="4 6"
        />
        <circle
          cx="300"
          cy="300"
          r="190"
          fill="none"
          stroke="rgba(16, 185, 129,0.35)"
          strokeWidth="1.25"
        />
        <circle
          cx="300"
          cy="300"
          r="260"
          fill="none"
          stroke="rgba(16, 185, 129,0.22)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
      </svg>

      {/* Orbiting satellites (2D rotation around center) */}
      <div className="v2-orbit v2-orbit-1">
        <span className="v2-dot v2-dot-md" />
      </div>
      <div className="v2-orbit v2-orbit-2 reverse">
        <span className="v2-dot v2-dot-lg" />
        <span className="v2-dot v2-dot-sm v2-dot-offset" />
      </div>
      <div className="v2-orbit v2-orbit-3 slow">
        <span className="v2-dot v2-dot-md" />
      </div>

      {/* Core orb */}
      <div className="v2-core-wrap">
        <div className="v2-core-glow" />
        <div className="v2-core">
          <div className="v2-core-highlight" />
        </div>
      </div>

      {/* Floating particles */}
      <div className="v2-particles">
        {[...Array(8)].map((_, i) => (
          <span key={i} className={`v2-particle v2-p-${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
