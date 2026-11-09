"use client";

import { useEffect, useRef, useState } from "react";
import { number } from "@/content/site";

export function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    if (!ref.current || matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const started = performance.now();
      function tick(now: number) {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCurrent(value);
          return;
        }
        const progress = Math.min(1, (now - started) / 580);
        setCurrent(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    });
    observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);
  return <span ref={ref} className="animated-number">
    <span className="sr-only">{prefix}{number(value)}{suffix}</span>
    <span className="number-sizing" aria-hidden="true">{prefix}{number(value)}{suffix}</span>
    <span className="number-visible" aria-hidden="true">{prefix}{number(current)}{suffix}</span>
  </span>;
}
