import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "@/components/ui/arrow-icon";

const contactLinks = [
  {
    label: "Instagram",
    value: "@kuroshoots_",
    href: "https://www.instagram.com/kuroshoots_/",
    external: true,
  },
  {
    label: "Email",
    value: "rovinocampoo@gmail.com",
    href: "mailto:rovinocampoo@gmail.com",
    external: false,
  },
  {
    label: "Phone",
    value: "0956 226 8180",
    href: "tel:+639562268180",
    external: false,
  },
];

export function PhotographerIntro() {
  return (
    <section
      id="about"
      aria-labelledby="photographer-heading"
      className="overflow-hidden border-y border-hairline bg-ink/35 py-16 sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-moss/70 sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />
            <div className="relative aspect-[4/5] overflow-hidden border border-bone/10 bg-charcoal">
              <Image
                src="/images/rovin-ocampo.webp"
                alt="Rovin Ocampo holding his camera"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-void/90 via-void/35 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                <div>
                  <p className="text-[0.52rem] uppercase tracking-[0.28em] text-sage">
                    Behind the lens
                  </p>
                  <p className="mt-1 font-display text-3xl font-light text-bone">
                    Rovin Ocampo
                  </p>
                </div>
                <span className="pb-1 font-display text-2xl text-bone/50">
                  KS.
                </span>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-moss/70 sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28" />
            <p className="absolute -left-8 top-1/2 hidden -translate-x-full -rotate-90 text-[0.48rem] uppercase tracking-[0.32em] text-muted xl:block">
              Photographer / visual storyteller
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[0.58rem] uppercase tracking-[0.3em] text-moss">
              The person behind Kuro Shoots
            </p>
            <h2
              id="photographer-heading"
              className="mt-4 max-w-2xl font-display text-5xl font-light leading-[0.98] text-bone sm:text-6xl lg:text-7xl"
            >
              Every frame starts with{" "}
              <span className="text-sage">a point of view.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              I’m Rovin, the photographer behind Kuro Shoots. I make
              photographs of people, places, and the small details that give a
              moment its feeling.
            </p>
            <div className="mt-10 border-t border-hairline">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-5 border-b border-hairline py-4 transition-colors hover:text-bone sm:py-5"
                >
                  <span className="flex items-center gap-4 sm:gap-6">
                    <span className="text-[0.5rem] tracking-[0.2em] text-moss">
                      0{index + 1}
                    </span>
                    <span className="text-[0.54rem] uppercase tracking-[0.22em] text-muted">
                      {link.label}
                    </span>
                  </span>
                  <span className="flex min-w-0 items-center gap-2 text-right text-xs text-bone/80 sm:text-sm">
                    <span className="truncate">{link.value}</span>
                    {link.external ? (
                      <ArrowUpRight className="size-3.5 shrink-0 text-moss transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    ) : null}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
