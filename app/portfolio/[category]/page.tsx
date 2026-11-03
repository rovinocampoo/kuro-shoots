import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { PortfolioPageHeader } from "@/components/portfolio/portfolio-page-header";
import { ProjectCard } from "@/components/portfolio/project-card";
import {
  getCategoryBySlug,
  getProjectsByCategory,
  portfolioCategories,
} from "@/lib/portfolio";

export const ensureStatic = "navigation";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categoryParam } = await params;
  const category = getCategoryBySlug(categoryParam);

  if (!category) {
    return { title: "Category not found" };
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/portfolio/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} — KURO SHOOTS`,
      description: category.description,
      url: `/portfolio/${category.slug}`,
    },
  };
}

const countLabel = (count: number) => count.toString().padStart(2, "0");

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryParam } = await params;
  const category = getCategoryBySlug(categoryParam);

  if (!category) {
    notFound();
  }

  const projects = getProjectsByCategory(category.slug);

  return (
    <>
      <PortfolioPageHeader
        eyebrow={`Category ${category.index} — Placeholder work`}
        title={category.title}
        description={category.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
          { label: category.title },
        ]}
        aside={
          <div className="border-t border-bone/15 pt-5 lg:border-l lg:border-t-0 lg:pl-8">
            <p className="font-display text-5xl font-light text-bone sm:text-6xl">
              {countLabel(projects.length)}
            </p>
            <p className="mt-2 text-[0.54rem] uppercase tracking-[0.28em] text-muted">
              Placeholder {projects.length === 1 ? "project" : "projects"}
            </p>
            <Link
              href="/portfolio"
              className="group mt-6 inline-flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.28em] text-bone/55 transition-colors duration-300 hover:text-bone"
            >
              All categories
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        }
      />

      <div className="border-b border-hairline bg-void">
        <Container>
          <nav
            aria-label="Portfolio categories"
            className="flex flex-wrap gap-x-8 gap-y-3 py-5"
          >
            {portfolioCategories.map((item) => {
              const isCurrent = item.slug === category.slug;

              return (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={
                    isCurrent
                      ? "text-[0.54rem] uppercase tracking-[0.26em] text-bone"
                      : "text-[0.54rem] uppercase tracking-[0.26em] text-muted transition-colors duration-300 hover:text-bone"
                  }
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>

      <section
        aria-labelledby="category-projects-heading"
        className="py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                Project index
              </p>
              <h2
                id="category-projects-heading"
                className="mt-3 font-display text-4xl font-light text-bone sm:text-5xl"
              >
                {category.title} studies.
              </h2>
            </div>
            <p className="text-[0.54rem] uppercase tracking-[0.26em] text-muted">
              {countLabel(projects.length)} / placeholder studies
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={countLabel(index + 1)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-12 border border-hairline bg-ink/30 px-6 py-16 text-center sm:px-10">
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                No projects yet
              </p>
              <p className="mt-4 font-display text-3xl font-light text-bone sm:text-4xl">
                This category is being prepared.
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
                Placeholder projects will appear here once the final photography
                and editing work is supplied.
              </p>
              <Link
                href="/portfolio"
                className="group mt-8 inline-flex items-center gap-3 border-b border-bone/25 pb-2 text-[0.54rem] uppercase tracking-[0.28em] text-bone/70 transition-colors duration-300 hover:border-moss hover:text-bone"
              >
                Return to portfolio
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          )}

          <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.54rem] uppercase tracking-[0.26em] text-muted">
              Sample projects — final photography to be supplied.
            </p>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.28em] text-bone/65 transition-colors duration-300 hover:text-bone"
            >
              Back to portfolio
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
