import { Container } from "@/components/layout/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
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
            title={
              <>
                Studies in light, shadow, and stillness.
              </>
            }
            description="A placeholder selection while the final photographic series are prepared. Every visual is clearly marked until real work is supplied."
          />
          <p className="shrink-0 text-[0.56rem] uppercase tracking-[0.3em] text-muted lg:pb-2">
            Portfolio preview
            <span aria-hidden="true" className="mx-2 text-moss">
              /
            </span>
            2026
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <article className="group md:col-span-7">
            <PlaceholderImage
              tone={featured.tone}
              label={featured.label}
              className="aspect-[4/3] w-full"
            />
            <div className="mt-5 flex items-start justify-between gap-6 border-b border-hairline pb-5">
              <div>
                <p className="text-[0.56rem] uppercase tracking-[0.3em] text-moss">
                  {featured.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-light text-bone sm:text-3xl">
                  {featured.title}
                </h3>
              </div>
              <span className="font-display text-sm text-muted">
                {featured.index}
              </span>
            </div>
          </article>

          <div className="grid gap-8 md:col-span-5">
            {supporting.map((work) => (
              <article key={work.index} className="group">
                <PlaceholderImage
                  tone={work.tone}
                  label={work.label}
                  className="aspect-[16/10] w-full"
                />
                <div className="mt-5 flex items-start justify-between gap-6 border-b border-hairline pb-5">
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.3em] text-moss">
                      {work.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-light text-bone sm:text-2xl">
                      {work.title}
                    </h3>
                  </div>
                  <span className="font-display text-sm text-muted">
                    {work.index}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-hairline pt-5 text-[0.56rem] uppercase tracking-[0.28em] text-muted">
          Sample layout — final photographic series to be supplied
        </p>
      </Container>
    </section>
  );
}
