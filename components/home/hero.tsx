import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { ButtonLink } from "@/components/ui/button-link";
import { getPhotoById } from "@/lib/photo-library";

export function Hero() {
  const heroPhoto = getPhotoById("K0123");

  if (!heroPhoto) return null;

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <Image
        src={heroPhoto.src}
        alt="A boat moving across a dark river at night"
        fill
        sizes="100vw"
        preload
        className="-z-20 object-cover"
      />

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-4 top-24 -z-10 border border-bone/[0.07] sm:inset-x-6 lg:inset-x-10"
      />

      <Container className="relative flex min-h-[100svh] flex-col justify-end pb-8 pt-36 sm:pb-10 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="animate-fade-up lg:col-span-8">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.56rem] font-medium uppercase tracking-[0.34em] text-bone/60">
              <span className="size-1.5 rounded-full bg-moss" />
              <span>Photography portfolio</span>
              <span aria-hidden="true" className="h-px w-7 bg-bone/25" />
              <span className="text-moss">KURO SHOOTS</span>
            </p>

            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.35rem,9.6vw,9rem)] font-light leading-[0.86] tracking-[-0.03em] text-bone text-balance">
              Through my lens.
              <br />
              <span className="italic text-sage">Beyond the ordinary.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-relaxed text-bone/65 sm:text-base">
              Photography by Rovin Ocampo — weddings, coffee, events, and
              street scenes, shaped by atmosphere and light.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <ButtonLink href="/portfolio" className="group">
                View Photography
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </ButtonLink>

              <Link
                href="/before-after"
                className="group inline-flex items-center gap-3 border-b border-bone/25 pb-2 text-[0.6rem] font-medium uppercase tracking-[0.26em] text-bone/70 transition-colors duration-300 hover:border-moss hover:text-bone"
              >
                Before &amp; After
                <ArrowUpRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <aside
            className="animate-fade-up border-t border-bone/15 pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
            style={{ animationDelay: "160ms" }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[0.55rem] uppercase tracking-[0.32em] text-bone/45">
                Featured frame
              </p>
              <span className="font-display text-3xl font-light text-bone/25">
                01
              </span>
            </div>

            <p className="mt-4 max-w-[17rem] font-display text-2xl font-light leading-snug text-bone/85">
              Real photographs, gathered by collection.
            </p>
            <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-bone/50">
              Browse the complete portfolio, compare original and edited
              frames, or view the four ordered carousel sequences.
            </p>

            <dl className="mt-6 space-y-3 border-t border-bone/10 pt-4 text-[0.55rem] uppercase tracking-[0.28em]">
              <div className="flex justify-between gap-4">
                <dt className="text-bone/40">Practice</dt>
                <dd className="text-bone/70">Rovin Ocampo</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-bone/40">Focus</dt>
                <dd className="text-right text-bone/70">Photo & finishing</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-bone/40">Imagery</dt>
                <dd className="text-bone/70">Photography</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/10 pt-4 text-[0.52rem] uppercase tracking-[0.28em] text-bone/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Photography / Retouching / Color grading</p>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 transition-colors duration-300 hover:text-bone"
          >
            Scroll to explore
            <span
              aria-hidden="true"
              className="h-px w-10 bg-current transition-[width] duration-300 group-hover:w-16"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
