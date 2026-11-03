import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { BeforeAfterSlider } from "@/components/portfolio/before-after-slider";
import { Breadcrumbs } from "@/components/portfolio/breadcrumbs";
import { PortfolioMediaFrame } from "@/components/portfolio/portfolio-media";
import {
  getAdjacentProjects,
  getCategoryBySlug,
  getCategoryHref,
  getProjectBySlug,
  getProjectHref,
  portfolioProjects,
} from "@/lib/portfolio";
import { cn } from "@/lib/cn";

export const ensureStatic = "navigation";

type ProjectPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { category: categoryParam, slug } = await params;
  const category = getCategoryBySlug(categoryParam);
  const project = getProjectBySlug(categoryParam, slug);

  if (!category || !project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: getProjectHref(project),
    },
    openGraph: {
      type: "article",
      title: `${project.title} — KURO SHOOTS`,
      description: project.shortDescription,
      url: getProjectHref(project),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { category: categoryParam, slug } = await params;
  const category = getCategoryBySlug(categoryParam);
  const project = getProjectBySlug(categoryParam, slug);

  if (!category || !project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project);

  return (
    <>
      <section className="relative isolate min-h-[78svh] overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <PortfolioMediaFrame
            media={project.coverImage}
            showCaption={false}
            preload
            sizes="100vw"
            badgeClassName="right-5 top-24 sm:right-8 lg:right-12"
            className="h-full w-full rounded-none border-0"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-void via-void/45 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-[82%] bg-gradient-to-t from-void via-void/75 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-void/80 via-void/10 to-void/25"
        />

        <Container className="relative flex min-h-[78svh] flex-col justify-end pb-12 pt-32">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Portfolio", href: "/portfolio" },
              { label: category.title, href: getCategoryHref(category.slug) },
              { label: project.title },
            ]}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-8">
              <Link
                href={getCategoryHref(category.slug)}
                className="inline-flex items-center gap-3 text-[0.54rem] uppercase tracking-[0.28em] text-moss transition-colors duration-300 hover:text-sage"
              >
                <span aria-hidden="true" className="size-1 rounded-full bg-moss" />
                {category.title}
              </Link>

              <h1 className="mt-4 font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.88] tracking-[-0.03em] text-bone text-balance">
                {project.title}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-bone/65 sm:text-base">
                {project.shortDescription}
              </p>
            </div>

            <aside className="border-t border-bone/15 pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8">
              <p className="text-[0.54rem] uppercase tracking-[0.28em] text-bone/45">
                {project.subtitle}
              </p>
              <div className="mt-4 flex items-center justify-between gap-4 border-t border-bone/10 pt-4">
                <span className="text-[0.52rem] uppercase tracking-[0.26em] text-bone/45">
                  Status
                </span>
                <span className="rounded-full border border-moss/30 px-3 py-1.5 text-[0.48rem] uppercase tracking-[0.24em] text-sage">
                  Placeholder project
                </span>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {project.comparison ? (
        <section
          aria-labelledby="project-comparison-heading"
          className="border-b border-hairline bg-ink/40 py-20 sm:py-24 lg:py-28"
        >
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                  Before &amp; after
                </p>
                <h2
                  id="project-comparison-heading"
                  className="mt-3 max-w-3xl font-display text-4xl font-light leading-[0.98] text-bone sm:text-5xl lg:text-6xl"
                >
                  The original, and the final.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted lg:col-span-4 lg:justify-self-end">
                Drag the divider to move between the original and edited frame.
                Switch to side-by-side for a direct read, or open the full-screen
                comparison for a closer look.
              </p>
            </div>

            <div className="mt-10 lg:mt-12">
              <BeforeAfterSlider
                comparison={project.comparison}
                title={project.title}
                sizes="(min-width: 1280px) 1100px, 100vw"
              />
            </div>
          </Container>
        </section>
      ) : null}

      <section
        aria-labelledby="project-statement-heading"
        className="py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                Project statement
              </p>
              <h2
                id="project-statement-heading"
                className="mt-3 font-display text-4xl font-light text-bone sm:text-5xl"
              >
                A frame in progress.
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted sm:text-base">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 border border-hairline bg-ink/30 p-6">
                <p className="text-[0.5rem] uppercase tracking-[0.3em] text-moss">
                  Placeholder project
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  This page is a structural sample. Final photographs, captions,
                  and case-study notes will replace the current placeholder
                  content.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                Project details
              </p>
              <dl className="mt-6 border-t border-hairline">
                {project.metadata.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-6 border-b border-hairline py-4"
                  >
                    <dt className="text-[0.52rem] uppercase tracking-[0.26em] text-muted">
                      {item.label}
                    </dt>
                    <dd className="text-right text-[0.54rem] uppercase tracking-[0.22em] text-bone/70">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <Link
                href={getCategoryHref(project.category)}
                className="group mt-6 inline-flex items-center gap-3 border-b border-bone/20 pb-2 text-[0.54rem] uppercase tracking-[0.28em] text-bone/65 transition-colors duration-300 hover:border-moss hover:text-bone"
              >
                Back to {category.title}
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {project.galleryImages.length > 0 ? (
        <section
          aria-labelledby="project-gallery-heading"
          className="border-t border-hairline py-20 sm:py-24 lg:py-28"
        >
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                  Selected frames
                </p>
                <h2
                  id="project-gallery-heading"
                  className="mt-3 font-display text-4xl font-light text-bone sm:text-5xl"
                >
                  Gallery study.
                </h2>
              </div>
              <p className="text-[0.54rem] uppercase tracking-[0.26em] text-muted">
                Placeholder gallery — final images pending
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {project.galleryImages.map((media, index) => {
                const spanFirst = project.galleryImages.length !== 2;

                return (
                  <PortfolioMediaFrame
                    key={`${media.kind}-${index}`}
                    media={media}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className={cn(
                      "w-full",
                      index === 0 && spanFirst
                        ? "aspect-[16/9] sm:col-span-2"
                        : "aspect-[4/5]",
                    )}
                  />
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <section
        aria-labelledby="project-process-heading"
        className="border-t border-hairline bg-ink/40 py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
                Process notes
              </p>
              <h2
                id="project-process-heading"
                className="mt-3 font-display text-4xl font-light text-bone sm:text-5xl"
              >
                Editing approach.
              </h2>
            </div>
            <p className="max-w-xs text-[0.54rem] uppercase tracking-[0.26em] text-muted">
              Sample process notes — final techniques to be documented
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {project.techniques.map((technique, index) => (
              <article
                key={technique.title}
                className="border-t border-hairline pt-5"
              >
                <p className="font-display text-sm text-moss">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl font-light text-bone">
                  {technique.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {technique.description}
                </p>
              </article>
            ))}
          </div>

        </Container>
      </section>

      <section className="border-t border-hairline py-12">
        <Container>
          <nav
            aria-label="Project navigation"
            className="grid gap-8 sm:grid-cols-3 sm:items-end"
          >
            <div>
              <p className="text-[0.5rem] uppercase tracking-[0.3em] text-moss">
                Previous project
              </p>
              {previous ? (
                <Link
                  href={getProjectHref(previous)}
                  className="mt-2 block font-display text-2xl font-light text-bone transition-colors duration-300 hover:text-sage"
                >
                  {previous.title}
                </Link>
              ) : (
                <p className="mt-2 text-sm text-muted">Start of category</p>
              )}
            </div>

            <div className="sm:text-center">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 border-b border-bone/20 pb-2 text-[0.54rem] uppercase tracking-[0.28em] text-bone/65 transition-colors duration-300 hover:border-moss hover:text-bone"
              >
                All projects
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="sm:text-right">
              <p className="text-[0.5rem] uppercase tracking-[0.3em] text-moss">
                Next project
              </p>
              {next ? (
                <Link
                  href={getProjectHref(next)}
                  className="mt-2 block font-display text-2xl font-light text-bone transition-colors duration-300 hover:text-sage"
                >
                  {next.title}
                </Link>
              ) : (
                <p className="mt-2 text-sm text-muted">End of category</p>
              )}
            </div>
          </nav>
        </Container>
      </section>
    </>
  );
}
