import { Container } from "@/components/layout/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { SectionHeading } from "@/components/ui/section-heading";

const studioDetails = [
  { label: "Practice", value: "Independent" },
  { label: "Discipline", value: "Photo / Retouch / Grade" },
  { label: "Imagery", value: "Placeholder" },
];

export function StudioSection() {
  return (
    <section
      id="studio"
      className="border-y border-hairline bg-ink/40 py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-4 top-8 hidden h-[calc(100%-2rem)] w-full border border-bone/10 lg:block"
              />
              <PlaceholderImage
                tone="noir"
                label="Placeholder — portrait of Rovin Ocampo"
                className="relative aspect-[5/6] w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4 border-b border-hairline pb-4 text-[0.55rem] uppercase tracking-[0.28em]">
              <span className="text-muted">
                Portrait placeholder — final photograph pending
              </span>
              <span className="font-display text-sm text-moss">02</span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
            <SectionHeading
              eyebrow="02 — The Studio"
              title="Quiet drama. Considered frames."
            />

            <p className="mt-8 max-w-md font-display text-2xl font-light leading-snug text-bone/85 sm:text-3xl">
              A practice built on atmosphere, observation, and the finishing
              room.
            </p>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                KURO SHOOTS is the photography and creative editing practice of
                Rovin Ocampo. The work moves between editorial portraiture,
                atmospheric image-making, and considered post-production.
              </p>
              <p>
                Each frame is treated as a study in light — composed with
                restraint, finished with texture, and graded for a cinematic
                mood that lasts beyond the first look.
              </p>
            </div>

            <dl className="mt-10 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3">
              {studioDetails.map((detail) => (
                <div key={detail.label} className="bg-void/50 p-4">
                  <dt className="text-[0.5rem] uppercase tracking-[0.28em] text-muted/60">
                    {detail.label}
                  </dt>
                  <dd className="mt-2 text-[0.6rem] uppercase tracking-[0.18em] text-bone/75">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>

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
                KURO SHOOTS
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
