"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

interface CounterProps {
  value: string | number;
  duration?: number;
}

const Counter = ({ value, duration = 1600 }: CounterProps) => {
  const [ref, visible] = useReveal();
  const [display, setDisplay] = useState<string | number>(value);
  const startedRef = useRef(false);

  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const hasNumber = Boolean(match);
  const prefix = match ? match[1] : "";
  const end = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!visible || !hasNumber || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const isInt = Number.isInteger(end);

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;
      const formatted = isInt
        ? Math.round(current).toString()
        : current.toFixed(1);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, hasNumber, end, prefix, suffix, duration]);

  useEffect(() => {
    if (!hasNumber) setDisplay(value);
  }, [hasNumber, value]);

  return <span ref={ref}>{hasNumber ? display : value}</span>;
};

export default Counter;
