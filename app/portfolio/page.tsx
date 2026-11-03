import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { CategoryCard } from "@/components/portfolio/category-card";
import { PortfolioPageHeader } from "@/components/portfolio/portfolio-page-header";
import { ProjectCard } from "@/components/portfolio/project-card";
import {
  getComparisonProjects,
  getProjectHref,
  getProjectsByCategory,
  portfolioCategories,
  portfolioProjects,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse placeholder photography, retouching, and color grading studies from KURO SHOOTS. Final photographic work will replace the current sample projects.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio — KURO SHOOTS",
    description:
      "A working preview of the KURO SHOOTS photography, retouching, and color grading portfolio.",
    url: "/portfolio",
  },
};

const countLabel = (count: number) => count.toString().padStart(2, "0");

export default function PortfolioPage() {
  const comparisonProjects = getComparisonProjects();

  return (
    <>
      <PortfolioPageHeader
        eyebrow="Portfolio — Placeholder preview"
        title={
          <>
            Photographic studies
            <br />
            <span className="italic text-sage">& the finishing room.</span>
          </>
        }
        description="A working preview of the KURO SHOOTS portfolio. Every project is clearly labeled as placeholder content until the final photographs and editing work are supplied."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio" },
        ]}
        aside={
          <div className="border-t border-bone/15 pt-5 lg:border-l lg:border-t-0 lg:pl-8">
            <dl className="space-y-3 text-[0.55rem] uppercase tracking-[0.28em]">
              <div className="flex justify-between gap-4 border-b border-bone/10 pb-3">
                <dt className="text-bone/40">Categories</dt>
                <dd className="text-bone/75">
                  {countLabel(portfolioCategories.length)}
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-bone/10 pb-3">
                <dt className="text-bone/40">Projects</dt>
                <dd className="text-bone/75">
                  {countLabel(portfolioProjects.length)}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-bone/40">Status</dt>
                <dd className="text-bone/75">Placeholders</dd>
              </div>
            </dl>

            <Link
              href="#categories"
              className="group mt-6 inline-flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.28em] text-bone/55 transition-colors duration-300 hover:text-bone"
            >
              Browse categories
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        }
      />

      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                Categories
              </p>
              <h2
                id="categories-heading"
                className="mt-3 font-display text-4xl font-light text-bone sm:text-5xl"
              >
                Three disciplines.
              </h2>
            </div>
            <p className="max-w-xs text-[0.54rem] uppercase tracking-[0.26em] text-muted">
              Select a category to view its placeholder project index.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portfolioCategories.map((category) => {
              const categoryProjects = getProjectsByCategory(category.slug);
              const preview = categoryProjects[0]?.coverImage;

              if (!preview) return null;

              return (
                <CategoryCard
                  key={category.slug}
                  category={category}
                  projectCount={categoryProjects.length}
                  preview={preview}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {comparisonProjects.length > 0 ? (
        <section
          id="comparisons"
          aria-labelledby="comparisons-heading"
          className="border-t border-hairline bg-ink/40 py-20 sm:py-24 lg:py-28"
        >
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                  Editing comparisons
                </p>
                <h2
                  id="comparisons-heading"
                  className="mt-3 font-display text-4xl font-light text-bone sm:text-5xl"
                >
                  Original / final.
                </h2>
              </div>
              <p className="max-w-xs text-[0.54rem] uppercase tracking-[0.26em] text-muted">
                Open a study to drag between the original and edited frame.
              </p>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2">
              {comparisonProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  href={getProjectHref(project)}
                  className="group flex flex-col justify-between gap-8 bg-void/60 p-6 transition-colors duration-300 hover:bg-ink sm:p-8"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[0.5rem] uppercase tracking-[0.28em] text-moss">
                        Comparison 0{index + 1}
                      </p>
                      <span className="rounded-full border border-moss/30 px-3 py-1.5 text-[0.46rem] uppercase tracking-[0.22em] text-sage">
                        Before &amp; after
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-light text-bone transition-colors duration-300 group-hover:text-sage sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      {project.shortDescription}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-3 border-b border-bone/20 pb-2 text-[0.52rem] uppercase tracking-[0.26em] text-bone/65 transition-colors duration-300 group-hover:border-moss group-hover:text-bone">
                    View comparison
                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-5 text-[0.5rem] uppercase tracking-[0.26em] text-muted">
              Placeholder comparisons — final before and after imagery pending.
            </p>
          </Container>
        </section>
      ) : null}

      <section
        aria-labelledby="projects-heading"
        className="border-t border-hairline py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                Project index
              </p>
              <h2
                id="projects-heading"
                className="mt-3 font-display text-4xl font-light text-bone sm:text-5xl"
              >
                All placeholder studies.
              </h2>
            </div>
            <p className="text-[0.54rem] uppercase tracking-[0.26em] text-muted">
              {countLabel(portfolioProjects.length)} projects / sample layout
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={countLabel(index + 1)}
              />
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.54rem] uppercase tracking-[0.26em] text-muted">
              Final photography, case studies, and comparisons will replace the
              current placeholders.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.28em] text-bone/65 transition-colors duration-300 hover:text-bone"
            >
              Return home
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
