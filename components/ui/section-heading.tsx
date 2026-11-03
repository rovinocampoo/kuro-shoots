import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="flex items-center gap-3 text-[0.6rem] font-medium uppercase tracking-[0.34em] text-moss">
        <span aria-hidden="true" className="h-px w-8 bg-moss/60" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl font-light leading-[1.02] tracking-[-0.01em] text-bone text-balance sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
