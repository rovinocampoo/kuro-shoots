import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/portfolio/breadcrumbs";
import { cn } from "@/lib/cn";

type PortfolioPageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  aside?: ReactNode;
  className?: string;
};

export function PortfolioPageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  aside,
  className,
}: PortfolioPageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-hairline bg-ink/40 pb-14 pt-32 sm:pb-16 lg:pb-20 lg:pt-40",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_85%_10%,rgba(38,56,44,0.5),transparent_65%)]"
      />

      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-moss">
              <span aria-hidden="true" className="h-px w-8 bg-moss/60" />
              {eyebrow}
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.9rem,7.2vw,6.4rem)] font-light leading-[0.9] tracking-[-0.025em] text-bone text-balance">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          </div>

          {aside ? <div className="lg:col-span-4">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
