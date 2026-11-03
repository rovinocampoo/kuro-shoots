import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/portfolio/project-card";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getCategoryHref,
  getFeaturedProjects,
  portfolioCategories,
} from "@/lib/portfolio";

export function SelectedWork() {
  const [featured, ...supporting] = getFeaturedProjects();

  if (!featured) return null;

  return (
    <section id="work" className="py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="01 — Selected Work"
            title="Studies in light, shadow, and stillness."
            description="A placeholder selection while the final photographic series are prepared. Every visual is clearly marked until real work is supplied."
          />
          <div className="shrink-0 lg:pb-2 lg:text-right">
            <p className="text-[0.56rem] uppercase tracking-[0.3em] text-muted">
              Portfolio preview
              <span aria-hidden="true" className="mx-2 text-moss">
                /
              </span>
              2026
            </p>
            <Link
              href="/portfolio"
              className="group mt-3 inline-flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.28em] text-bone/65 transition-colors duration-300 hover:text-bone"
            >
              View full portfolio
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14">
          <ProjectCard project={featured} index="01" variant="featured" />
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:gap-12">
          {supporting.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={`0${index + 2}`}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.56rem] uppercase tracking-[0.28em] text-muted">
            Sample layout — final photographic series to be supplied
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {portfolioCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={getCategoryHref(category.slug)}
                  className="text-[0.52rem] uppercase tracking-[0.24em] text-muted/70 transition-colors duration-300 hover:text-bone"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
