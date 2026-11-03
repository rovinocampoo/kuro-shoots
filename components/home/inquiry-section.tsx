import Link from "next/link";
import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { SectionHeading } from "@/components/ui/section-heading";

const inquiryTypes = ["Commissions", "Collaborations", "Editing work"];

export function InquirySection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-hairline bg-ink/40 py-28 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_100%_at_90%_55%,rgba(38,56,44,0.55),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 size-[34rem] rounded-full border border-bone/[0.05]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-[-8rem] size-[46rem] rounded-full border border-bone/[0.03]"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="04 — Inquiries"
              title={
                <>
                  Bring the next frame
                  <br />
                  <span className="italic text-sage">into focus.</span>
                </>
              }
              description="Commissions, collaborations, and dedicated editing work. The inquiry form and direct contact details will be published here soon."
            />

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {inquiryTypes.map((type) => (
                <li
                  key={type}
                  className="flex items-center gap-3 text-[0.56rem] uppercase tracking-[0.26em] text-bone/55"
                >
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-moss"
                  />
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-hairline bg-void/70 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[0.54rem] font-medium uppercase tracking-[0.32em] text-moss">
                  Inquiry form
                </p>
                <span className="rounded-full border border-moss/30 px-3 py-1 text-[0.48rem] uppercase tracking-[0.24em] text-sage">
                  Coming soon
                </span>
              </div>

              <p className="mt-4 font-display text-3xl font-light leading-tight text-bone">
                Opening soon
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                The form is intentionally not live yet. No placeholder contact
                details are shown.
              </p>

              <ul className="mt-6 space-y-3 border-t border-hairline pt-5 text-[0.54rem] uppercase tracking-[0.24em]">
                <li className="flex items-center justify-between gap-4">
                  <span className="text-muted">Commissions</span>
                  <span className="text-bone/60">Reserved</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span className="text-muted">Collaborations</span>
                  <span className="text-bone/60">Reserved</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span className="text-muted">Editing work</span>
                  <span className="text-bone/60">Reserved</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[0.54rem] uppercase tracking-[0.26em] text-muted">
            Direct contact details and response times will be published with the
            form.
          </p>
          <Link
            href="/#work"
            className="group inline-flex items-center gap-3 text-[0.56rem] uppercase tracking-[0.28em] text-bone/65 transition-colors duration-300 hover:text-bone"
          >
            Return to selected work
            <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
