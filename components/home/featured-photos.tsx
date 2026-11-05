import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PhotoGrid } from "@/components/portfolio/photo-grid";
import { ArrowUpRight } from "@/components/ui/arrow-icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  getPhotoById,
  galleryPhotos,
  comparisons,
  photoCategories,
} from "@/lib/photo-library";

const featuredIds = ["K0085", "K0087", "K0083", "K0097", "K0103", "K0107"];

export function FeaturedPhotos() {
  const featured = featuredIds
    .map(getPhotoById)
    .filter((photo) => photo !== undefined);

  return (
    <>
      <section id="work" className="py-16 sm:py-24">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[0.55rem] uppercase tracking-[0.3em] text-moss">
                Selected frames
              </p>
              <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">
                From the photography library.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.22em] text-bone/70 hover:text-bone"
            >
              View all {galleryPhotos.length} photographs
              <ArrowUpRight />
            </Link>
          </div>
          <ScrollReveal>
            <PhotoGrid photos={featured} label="Selected photography" />
          </ScrollReveal>
        </Container>
      </section>

      <section className="border-y border-hairline bg-ink/35 py-14 sm:py-20">
        <Container>
          <div className="mb-8">
            <p className="text-[0.55rem] uppercase tracking-[0.3em] text-moss">
              Browse by collection
            </p>
            <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">
              Find a frame.
            </h2>
          </div>
          <ScrollReveal>
            <nav
              aria-label="Photography collections"
              className="grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
            >
              {photoCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/portfolio#${category.slug}`}
                  className="group flex min-h-32 flex-col justify-between bg-void p-5 transition-colors hover:bg-charcoal sm:p-7"
                >
                  <span className="text-[0.54rem] uppercase tracking-[0.25em] text-moss">
                    {
                      galleryPhotos.filter(
                        (photo) => photo.category === category.slug,
                      ).length
                    }{" "}
                    photographs
                  </span>
                  <span className="mt-8 flex items-center justify-between gap-4 font-display text-2xl font-light text-bone sm:text-3xl">
                    {category.title}
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </nav>
          </ScrollReveal>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/before-after"
              className="rounded-full border border-bone/20 px-5 py-3 text-[0.54rem] uppercase tracking-[0.22em] text-bone/75 transition-colors hover:border-moss hover:text-bone"
            >
              Explore {comparisons.length} Original / Edited comparisons
            </Link>
            <Link
              href="/carousels"
              className="rounded-full border border-bone/20 px-5 py-3 text-[0.54rem] uppercase tracking-[0.22em] text-bone/75 transition-colors hover:border-moss hover:text-bone"
            >
              View the four seamless carousels
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
