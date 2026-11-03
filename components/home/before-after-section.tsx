import Link from "next/link";
import { Container } from "@/components/layout/container";
import { BeforeAfterSlider } from "@/components/portfolio/before-after-slider";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import {
  getComparisonProjects,
  getProjectHref,
} from "@/lib/portfolio";

export function BeforeAfterSection() {
  const comparisonProjects = getComparisonProjects();
  const project =
    comparisonProjects.find((item) => item.featured) ?? comparisonProjects[0];

  if (!project) return null;

  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="border-b border-hairline bg-ink/40 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 text-[0.6rem] font-medium uppercase tracking-[0.34em] text-moss">
              <span aria-hidden="true" className="h-px w-8 bg-moss/60" />
              Signature — Before &amp; after
            </p>

            <h2
              id="comparison-heading"
              className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,6vw,5.75rem)] font-light leading-[0.94] tracking-[-0.02em] text-bone text-balance"
            >
              The frame is only half the work.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-bone/15 lg:pl-8">
            <p className="font-display text-2xl font-light leading-snug text-bone/85">
              Original / final.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A direct look at the retouching and grading decisions that move an
              original frame into its finished form. Drag the divider to compare{" "}
              {project.title.toLowerCase()}.
            </p>
            <Link
              href={getProjectHref(project)}
              className="group mt-6 inline-flex items-center gap-3 border-b border-bone/25 pb-2 text-[0.56rem] uppercase tracking-[0.28em] text-bone/70 transition-colors duration-300 hover:border-moss hover:text-bone"
            >
              Open the full study
              <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <BeforeAfterSlider
            comparison={project.comparison}
            title={project.title}
            sizes="(min-width: 1280px) 1200px, 90vw"
            preload
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-hairline pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.5rem] uppercase tracking-[0.26em] text-muted">
            Placeholder comparison — final photography pending
          </p>
          <Link
            href="/portfolio#comparisons"
            className="group inline-flex items-center gap-3 text-[0.52rem] uppercase tracking-[0.26em] text-bone/65 transition-colors duration-300 hover:text-bone"
          >
            Browse editing comparisons
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
