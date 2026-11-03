import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40 lg:py-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_80%_20%,rgba(38,56,44,0.45),transparent_65%)]"
      />

      <Container className="relative">
        <p className="flex items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-moss">
          <span aria-hidden="true" className="h-px w-8 bg-moss/60" />
          404 — Frame not found
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.9] tracking-[-0.025em] text-bone text-balance">
          This frame is out of focus.
        </h1>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          The page you are looking for does not exist. It may have been moved,
          or the link may be incomplete.
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
          <ButtonLink href="/">Return home</ButtonLink>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 border-b border-bone/25 pb-2 text-[0.6rem] uppercase tracking-[0.26em] text-bone/70 transition-colors duration-300 hover:border-moss hover:text-bone"
          >
            View the portfolio
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
