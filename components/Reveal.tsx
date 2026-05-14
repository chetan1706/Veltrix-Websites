"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: React.ReactNode;
  variant?: "up" | "fade" | "scale";
  delay?: number;
  as?: React.ElementType;
  className?: string;
  [key: string]: unknown;
}

const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}: RevealProps) => {
  const [ref, visible] = useReveal();
  const variantClass =
    variant === "fade"
      ? "reveal-fade"
      : variant === "scale"
      ? "reveal-scale"
      : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${variantClass} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
