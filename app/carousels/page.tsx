import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PhotoGrid } from "@/components/portfolio/photo-grid";
import { carousels } from "@/lib/photo-library";

export const metadata: Metadata = {
  title: "Seamless Carousels",
  description:
    "Four ordered KURO SHOOTS seamless photography carousel collections.",
};

export default function CarouselsPage() {
  return (
    <>
      <section className="border-b border-hairline pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Container>
          <p className="text-[0.58rem] uppercase tracking-[0.3em] text-moss">
            Four separate sequences
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-light leading-[0.95] text-bone sm:text-7xl">
            Seamless carousels
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Each sequence is shown in its original slide order. The unnumbered
            Binondo photographs are part of the street gallery, not the first
            carousel.
          </p>
        </Container>
      </section>

      {carousels.map((carousel, index) => (
        <section
          key={carousel.slug}
          id={carousel.slug}
          aria-labelledby={`${carousel.slug}-heading`}
          className="border-b border-hairline py-14 sm:py-20"
        >
          <Container>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[0.55rem] uppercase tracking-[0.28em] text-moss">
                  Sequence 0{index + 1}
                </p>
                <h2
                  id={`${carousel.slug}-heading`}
                  className="mt-2 font-display text-3xl font-light sm:text-4xl"
                >
                  {carousel.title}
                </h2>
              </div>
              <p className="text-[0.55rem] uppercase tracking-[0.24em] text-muted">
                {carousel.photos.length} slides · original order
              </p>
            </div>
            <PhotoGrid photos={carousel.photos} label={carousel.title} />
          </Container>
        </section>
      ))}
    </>
  );
}
