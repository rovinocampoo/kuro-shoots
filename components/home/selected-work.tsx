import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/home/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { placeholderWorks } from "@/lib/site";

export function SelectedWork() {
  const [featured, ...supporting] = placeholderWorks;

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
            <p className="mt-2 text-[0.5rem] uppercase tracking-[0.28em] text-muted/60">
              Full project pages in preparation
            </p>
          </div>
        </div>

        <div className="mt-14">
          <ProjectCard work={featured} variant="featured" />
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:gap-12">
          {supporting.map((work) => (
            <ProjectCard key={work.index} work={work} />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.56rem] uppercase tracking-[0.28em] text-muted">
            Sample layout — final photographic series to be supplied
          </p>
          <p className="text-[0.5rem] uppercase tracking-[0.28em] text-muted/60">
            Case studies / before & after / full gallery
          </p>
        </div>
      </Container>
    </section>
  );
}
