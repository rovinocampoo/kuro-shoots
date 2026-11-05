"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ScrollRevealProps = HTMLAttributes<HTMLDivElement>;

export function ScrollReveal({
  className,
  ...props
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (!("IntersectionObserver" in window)) return;

    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight && bounds.bottom > 0) {
      element.dataset.reveal = "visible";
      return;
    }

    element.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.reveal = "visible";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn("scroll-reveal", className)}
      {...props}
    />
  );
}
