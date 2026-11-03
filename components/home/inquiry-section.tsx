import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function InquirySection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-hairline bg-ink/50 py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 size-[32rem] -translate-y-1/2 rounded-full bg-forest/30 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="04 — Inquiries"
              title={
                <>
                  Let&apos;s make something
                  <br />
                  <span className="italic text-sage">cinematic.</span>
                </>
              }
              description="Commission inquiries, collaborations, and editing work. The inquiry form and direct contact details will be published in the next phase."
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="border border-hairline bg-charcoal/50 p-6 sm:p-8">
              <p className="text-[0.56rem] font-medium uppercase tracking-[0.32em] text-moss">
                Inquiry form
              </p>
              <p className="mt-3 font-display text-3xl font-light text-bone">
                Coming soon
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                No contact details are published yet. This area is intentionally
                reserved for the Phase 2 inquiry flow.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
