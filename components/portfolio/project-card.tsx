import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { PortfolioMediaFrame } from "@/components/portfolio/portfolio-media";
import { cn } from "@/lib/cn";
import {
  getCategoryBySlug,
  getProjectHref,
  type PortfolioProject,
} from "@/lib/portfolio";

type ProjectCardProps = {
  project: PortfolioProject;
  index?: string;
  variant?: "featured" | "standard";
  href?: string;
  className?: string;
};

export function ProjectCard({
  project,
  index,
  variant = "standard",
  href,
  className,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const projectHref = href ?? getProjectHref(project);
  const category = getCategoryBySlug(project.category);

  return (
    <article className={cn("group", className)}>
      <Link
        href={projectHref}
        aria-label={`View project: ${project.title}${
          project.isPlaceholder ? " (placeholder project)" : ""
        }`}
        className="block"
      >
        <div className="relative overflow-hidden">
          <PortfolioMediaFrame
            media={project.coverImage}
            sizes={
              isFeatured
                ? "(min-width: 1024px) 80vw, 100vw"
                : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className={cn(
              "w-full transition-transform duration-700 group-hover:scale-[1.01]",
              isFeatured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/5]",
            )}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-void/0 transition-colors duration-500 group-hover:bg-void/15"
          />
          {project.comparison ? (
            <span className="absolute right-4 top-4 z-10 rounded-full border border-moss/40 bg-void/60 px-3 py-1.5 text-[0.46rem] uppercase tracking-[0.22em] text-sage backdrop-blur-sm">
              Before &amp; after
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex gap-4 border-b border-hairline pb-5 sm:gap-6">
          {index ? (
            <span
              className={cn(
                "shrink-0 font-display font-light leading-none text-moss/80",
                isFeatured ? "text-4xl sm:text-5xl" : "text-3xl",
              )}
            >
              {index}
            </span>
          ) : null}

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                {category?.title ?? project.category}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.5rem] uppercase tracking-[0.24em] text-muted/70 transition-colors duration-300 group-hover:text-bone/70">
                View project
                <ArrowUpRight />
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
              {project.title}
            </h3>

            {isFeatured ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {project.shortDescription}
              </p>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
