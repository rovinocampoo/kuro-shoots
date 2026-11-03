import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-8"
            eyebrow="03 — Services"
            title="From capture to final grade."
            description="A complete image-making and finishing practice for editorial, portrait, and brand work."
          />

          <div className="lg:col-span-3 lg:col-start-10 lg:pb-2">
            <p className="text-[0.54rem] uppercase tracking-[0.3em] text-moss">
              Three disciplines
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              One continuous finish, from the first frame to the final grade.
            </p>
          </div>
        </div>

        <div className="mt-16 border-b border-hairline">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative grid gap-5 border-t border-hairline py-9 md:grid-cols-12 md:items-start md:gap-6 md:py-11"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-moss/70 transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-center justify-between gap-4 md:col-span-1 md:block">
                <span className="font-display text-xl font-light leading-none text-moss/85">
                  0{index + 1}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-hairline md:mt-4 md:block"
                />
              </div>

              <h3 className="font-display text-4xl font-light leading-none text-bone transition-colors duration-300 group-hover:text-sage md:col-span-4">
                {service.title}
              </h3>

              <p className="max-w-md text-sm leading-relaxed text-muted md:col-span-4">
                {service.description}
              </p>

              <div className="md:col-span-3">
                <p className="text-[0.5rem] uppercase tracking-[0.28em] text-muted/60 md:text-right">
                  Includes
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-[0.56rem] uppercase tracking-[0.22em] text-bone/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
