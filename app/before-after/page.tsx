import type { Metadata } from "next";
import { BeforeAfterSlider } from "@/components/portfolio/before-after-slider";
import { Container } from "@/components/layout/container";
import {
  comparisons,
  getPhotoTitle,
  photoCategories,
  photos,
} from "@/lib/photo-library";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Compare 195 verified original and edited KURO SHOOTS photographs.",
};

export default function BeforeAfterPage() {
  const comparisonGroups = photoCategories
    .map((category) => {
      const categoryPhotos = photos.filter(
        (photo) => photo.category === category.slug,
      );
      const categoryIds = new Set(categoryPhotos.map((photo) => photo.id));
      const categoryComparisons = comparisons.filter(
        (comparison) =>
          categoryIds.has(comparison.originalId) &&
          categoryIds.has(comparison.editedId),
      );

      return { category, categoryComparisons };
    })
    .filter((group) => group.categoryComparisons.length > 0);

  return (
    <>
      <section className="border-b border-hairline pt-32 pb-16 sm:pt-40 sm:pb-20">
        <Container>
          <p className="text-[0.58rem] uppercase tracking-[0.3em] text-moss">
            195 verified edits
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-light leading-[0.95] text-bone sm:text-7xl">
            Original / Edited
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Compare the source frame with its finished version. Drag or swipe
            the divider, use the range control, or switch to side-by-side.
          </p>
        </Container>
      </section>

      <div className="sticky top-20 z-40 border-b border-hairline bg-void/90 backdrop-blur-xl">
        <Container>
          <nav
            aria-label="Before and after collections"
            className="flex gap-3 overflow-x-auto py-4"
          >
            {comparisonGroups.map(({ category, categoryComparisons }) => (
              <a
                key={category.slug}
                href={`#comparisons-${category.slug}`}
                className="shrink-0 rounded-full border border-bone/15 px-4 py-2 text-[0.52rem] uppercase tracking-[0.18em] text-bone/70 transition-colors hover:border-moss hover:text-bone"
              >
                {category.title} · {categoryComparisons.length}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {comparisonGroups.map(({ category, categoryComparisons }) => (
        <section
          key={category.slug}
          id={`comparisons-${category.slug}`}
          aria-labelledby={`comparisons-${category.slug}`}
          className="scroll-mt-36 border-b border-hairline py-14 sm:py-20"
        >
          <Container>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[0.55rem] uppercase tracking-[0.28em] text-moss">
                  {categoryComparisons.length} comparisons
                </p>
                <h2
                  id={`comparisons-heading-${category.slug}`}
                  className="mt-2 font-display text-3xl font-light sm:text-4xl"
                >
                  {category.title}
                </h2>
              </div>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
              {categoryComparisons.map((comparison) => {
                const title = getPhotoTitle(comparison.original.filename);

                return (
                  <article
                    key={`${comparison.originalId}-${comparison.editedId}`}
                    className="min-w-0 border-t border-hairline pt-4"
                  >
                    <h3 className="mb-3 truncate text-sm text-bone/80">
                      {title}
                    </h3>
                    <BeforeAfterSlider
                      comparison={{
                        original: {
                          kind: "image",
                          src: comparison.original.src,
                          alt: `Original photograph: ${title}`,
                          width: comparison.original.width,
                          height: comparison.original.height,
                        },
                        edited: {
                          kind: "image",
                          src: comparison.edited.src,
                          alt: `Edited photograph: ${title}`,
                          width: comparison.edited.width,
                          height: comparison.edited.height,
                        },
                      }}
                      title={title}
                      sizes="(min-width: 1024px) 45vw, 100vw"
                    />
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
