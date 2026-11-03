import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <PlaceholderImage
        label="Hero photograph — placeholder"
        tone="forest"
        showCaption={false}
        className="absolute inset-0 -z-20 h-full w-full rounded-none border-0"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-void/85 via-void/25 to-void"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-void/80 via-transparent to-void/30"
      />

      <Container className="relative flex flex-1 flex-col justify-end pb-12 pt-32 sm:pb-16 lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="animate-fade-up lg:col-span-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-bone/65">
              <span className="text-moss">KURO SHOOTS</span>
              <span aria-hidden="true" className="h-px w-6 bg-bone/25" />
              <span>Rovin Ocampo Photography</span>
            </p>

            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.1rem,10vw,8.5rem)] font-light leading-[0.88] tracking-[-0.025em] text-bone text-balance">
              Through my lens.
              <br />
              <span className="italic text-sage">Beyond the ordinary.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-relaxed text-bone/65 sm:text-base">
              A photography and creative editing portfolio shaped by
              atmosphere, restraint, and cinematic light.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/#work">View selected work</ButtonLink>
              <ButtonLink href="/#studio" variant="ghost">
                The studio
              </ButtonLink>
            </div>
          </div>

          <div
            className="animate-fade-up border-t border-bone/15 pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
            style={{ animationDelay: "160ms" }}
          >
            <dl className="space-y-4 text-[0.58rem] uppercase tracking-[0.28em]">
              <div className="flex justify-between gap-4 border-b border-bone/10 pb-3">
                <dt className="text-bone/45">Practice</dt>
                <dd className="text-bone/75">Independent</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-bone/10 pb-3">
                <dt className="text-bone/45">Focus</dt>
                <dd className="text-right text-bone/75">Image & finishing</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-bone/45">Imagery</dt>
                <dd className="text-bone/75">Placeholders</dd>
              </div>
            </dl>

            <Link
              href="/#work"
              className="group mt-8 inline-flex items-center gap-3 text-[0.55rem] uppercase tracking-[0.32em] text-bone/50 transition-colors duration-300 hover:text-bone"
            >
              Scroll
              <span
                aria-hidden="true"
                className="h-px w-10 bg-current transition-[width] duration-300 group-hover:w-16"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
