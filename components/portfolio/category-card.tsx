import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { PortfolioMediaFrame } from "@/components/portfolio/portfolio-media";
import {
  getCategoryHref,
  type PortfolioCategory,
  type PortfolioMedia,
} from "@/lib/portfolio";

type CategoryCardProps = {
  category: PortfolioCategory;
  projectCount: number;
  preview: PortfolioMedia;
};

export function CategoryCard({
  category,
  projectCount,
  preview,
}: CategoryCardProps) {
  const count = projectCount.toString().padStart(2, "0");

  return (
    <Link
      href={getCategoryHref(category.slug)}
      aria-label={`View ${category.title} category, ${projectCount} placeholder ${
        projectCount === 1 ? "project" : "projects"
      }`}
      className="group flex flex-col border border-hairline bg-ink/30 p-3 transition-colors duration-300 hover:border-moss/40"
    >
      <div className="relative overflow-hidden">
        <PortfolioMediaFrame
          media={preview}
          showCaption={false}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="aspect-[4/3] w-full transition-transform duration-700 group-hover:scale-[1.01]"
        />
        <span className="absolute right-4 top-4 rounded-full border border-bone/20 bg-void/45 px-3 py-1.5 text-[0.5rem] uppercase tracking-[0.26em] text-bone/75 backdrop-blur-sm">
          {count} {projectCount === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3 pt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.52rem] uppercase tracking-[0.3em] text-moss">
            {category.index} — Category
          </p>
          <ArrowUpRight className="text-muted transition-colors duration-300 group-hover:text-bone" />
        </div>

        <h3 className="mt-3 font-display text-3xl font-light leading-tight text-bone">
          {category.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {category.summary}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-hairline pt-4 text-[0.52rem] uppercase tracking-[0.24em]">
          <span className="text-muted/70">Placeholder work</span>
          <span className="text-bone/65">View category</span>
        </div>
      </div>
    </Link>
  );
}
