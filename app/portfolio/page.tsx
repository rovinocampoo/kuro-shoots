import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { PhotoGrid } from "@/components/portfolio/photo-grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  carousels,
  getPhotosForCategory,
  photoCategories,
} from "@/lib/photo-library";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Browse the complete KURO SHOOTS photography collection, organized by shoot and subject.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-hairline pt-32 pb-14 sm:pt-40 sm:pb-16">
        <Container>
          <p className="text-[0.58rem] uppercase tracking-[0.3em] text-moss">
            KURO SHOOTS — Photography
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-light leading-[0.95] text-bone sm:text-7xl">
            Photographs, by collection.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Browse edited photographs and unmatched frames by shoot. Select any
            photograph to view it larger.
          </p>
        </Container>
      </section>

      <div className="sticky top-20 z-40 border-b border-hairline bg-void/90 backdrop-blur-xl">
        <Container>
          <nav
            aria-label="Photography collections"
            className="flex gap-3 overflow-x-auto py-4"
          >
            {photoCategories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="shrink-0 rounded-full border border-bone/15 px-4 py-2 text-[0.52rem] uppercase tracking-[0.18em] text-bone/70 transition-colors hover:border-moss hover:text-bone"
              >
                {category.title}
              </a>
            ))}
            <Link
              href="/carousels"
              className="shrink-0 rounded-full border border-bone/15 px-4 py-2 text-[0.52rem] uppercase tracking-[0.18em] text-bone/70 transition-colors hover:border-moss hover:text-bone"
            >
              Seamless carousels
            </Link>
            <Link
              href="/before-after"
              className="shrink-0 rounded-full border border-bone/15 px-4 py-2 text-[0.52rem] uppercase tracking-[0.18em] text-bone/70 transition-colors hover:border-moss hover:text-bone"
            >
              Before &amp; after
            </Link>
          </nav>
        </Container>
      </div>

      {photoCategories.map((category) => {
        const categoryPhotos = getPhotosForCategory(category.slug);
        const carouselPhotoIds = new Set(
          carousels.flatMap((carousel) =>
            carousel.photos.map((photo) => photo.id),
          ),
        );
        const carouselCount = categoryPhotos.filter((photo) =>
          carouselPhotoIds.has(photo.id),
        ).length;

        return (
          <section
            key={category.slug}
            id={category.slug}
            aria-labelledby={`${category.slug}-heading`}
            className="scroll-mt-36 border-b border-hairline py-12 sm:py-16"
          >
            <Container>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[0.55rem] uppercase tracking-[0.28em] text-moss">
                    {categoryPhotos.length} photographs
                  </p>
                  <h2
                    id={`${category.slug}-heading`}
                    className="mt-2 font-display text-3xl font-light sm:text-4xl"
                  >
                    {category.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted">
                    {category.description}
                  </p>
                </div>
                {carouselCount > 0 ? (
                  <Link
                    href="/carousels"
                    className="text-[0.52rem] uppercase tracking-[0.2em] text-sage hover:text-bone"
                  >
                    View {carouselCount} carousel slides
                  </Link>
                ) : null}
              </div>
              <ScrollReveal>
                <PhotoGrid photos={categoryPhotos} label={category.title} />
              </ScrollReveal>
            </Container>
          </section>
        );
      })}
    </>
  );
}
