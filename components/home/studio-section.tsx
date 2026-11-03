import { Container } from "@/components/layout/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { SectionHeading } from "@/components/ui/section-heading";

export function StudioSection() {
  return (
    <section
      id="studio"
      className="border-y border-hairline bg-ink/40 py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 border border-bone/10"
              />
              <PlaceholderImage
                tone="noir"
                label="Placeholder — portrait of Rovin Ocampo"
                className="aspect-[4/5] w-full"
              />
            </div>
            <p className="mt-6 text-[0.56rem] uppercase tracking-[0.28em] text-muted">
              Portrait placeholder — final photograph pending
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              eyebrow="02 — The Studio"
              title="Quiet drama. Considered frames."
            />
            <div className="mt-7 space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                KURO SHOOTS is the photography and creative editing practice of
                Rovin Ocampo. The work moves between editorial portraiture,
                atmospheric image-making, and the finishing room.
              </p>
              <p>
                Each frame is treated as a study in light — composed with
                restraint, finished with texture, and graded for a cinematic
                mood that lasts beyond the first look.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-5 border-t border-hairline pt-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-2xl font-light italic text-sage">
                  Rovin Ocampo
                </p>
                <p className="mt-1 text-[0.56rem] uppercase tracking-[0.28em] text-muted">
                  Photographer · Retoucher · Colorist
                </p>
              </div>
              <p className="text-[0.56rem] uppercase tracking-[0.28em] text-muted">
                Independent practice
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
