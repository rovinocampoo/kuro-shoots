import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="03 — Services"
          title="From capture to final grade."
          description="A complete image-making and finishing practice for editorial, portrait, and brand work."
        />

        <div className="mt-14 border-b border-hairline">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group grid gap-4 border-t border-hairline py-8 transition-colors duration-300 md:grid-cols-12 md:items-start md:gap-6 md:py-10"
            >
              <p className="font-display text-sm text-moss md:col-span-1">
                0{index + 1}
              </p>
              <h3 className="font-display text-3xl font-light text-bone transition-colors duration-300 group-hover:text-sage md:col-span-4 lg:text-4xl">
                {service.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted md:col-span-4">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-hairline px-3 py-1.5 text-[0.52rem] uppercase tracking-[0.22em] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
