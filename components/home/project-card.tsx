import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/cn";
import type { PlaceholderWork } from "@/lib/site";

type ProjectCardProps = {
  work: PlaceholderWork;
  variant?: "featured" | "standard";
  href?: string;
};

export function ProjectCard({
  work,
  variant = "standard",
  href,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  const card = (
    <article className="group">
      <div className="relative overflow-hidden">
        <PlaceholderImage
          tone={work.tone}
          label={work.label}
          className={cn(
            "w-full",
            isFeatured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/5]",
          )}
        />
        {href ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-void/0 transition-colors duration-500 group-hover:bg-void/15"
          />
        ) : null}
      </div>

      <div className="mt-5 flex gap-4 border-b border-hairline pb-5 sm:gap-6">
        <span
          className={cn(
            "shrink-0 font-display font-light leading-none text-moss/80",
            isFeatured ? "text-4xl sm:text-5xl" : "text-3xl",
          )}
        >
          {work.index}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
              {work.category}
            </p>
            <span className="inline-flex items-center gap-1.5 text-[0.5rem] uppercase tracking-[0.24em] text-muted/70 transition-colors duration-300 group-hover:text-bone/70">
              {href ? "View project" : "Project page soon"}
              {href ? <ArrowUpRight /> : null}
            </span>
          </div>

          <h3
            className={cn(
              "mt-2 font-display font-light text-bone",
              isFeatured
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-2xl sm:text-3xl",
            )}
          >
            {work.title}
          </h3>

          {isFeatured ? (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {work.summary}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      aria-label={`View project: ${work.title}`}
      className="block"
    >
      {card}
    </Link>
  );
}
