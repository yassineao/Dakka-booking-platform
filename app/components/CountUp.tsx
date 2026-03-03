"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

type CountUpProps = {
  to: number;
  from?: number;
  duration?: number; // in Sekunden
  decimals?: number;
  once?: boolean;
};

export default function CountUp({
  to,
  from = 0,
  duration = 1,
  decimals = 0,
  once = true,
}: CountUpProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const inView = useInView(spanRef, { once });

  const mv = useMotionValue(from);
  const spring = useSpring(mv, {
    // grob an "duration" angenähert (Motion springt physikalisch, nicht exakt timed)
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (!inView) return;
    mv.set(to);
  }, [inView, mv, to]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (!spanRef.current) return;
      spanRef.current.textContent = Number(latest).toFixed(decimals);
    });
    return () => unsub();
  }, [spring, decimals]);

  return <span ref={spanRef} />;
}