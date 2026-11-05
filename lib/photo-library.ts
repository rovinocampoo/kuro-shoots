import library from "./photo-library.generated.json";

export const photoCategories = library.categories;
export const photos = library.photos;
export const comparisons = library.comparisons;
export const carousels = library.carousels;
const pairedOriginalIds = new Set(
  comparisons.map((comparison) => comparison.originalId),
);
const carouselSlideIds = new Set(
  carousels.flatMap((carousel) => carousel.photos.map((photo) => photo.id)),
);
export const galleryPhotos = photos.filter(
  (photo) =>
    !pairedOriginalIds.has(photo.id) &&
    !carouselSlideIds.has(photo.id) &&
    photo.galleryRole !== "original / unmarked",
);

export type PhotoCategory = (typeof photoCategories)[number];
export type PhotoAsset = Omit<(typeof photos)[number], "galleryRole"> & {
  galleryRole?: string;
};
export type PhotoComparison = (typeof comparisons)[number];
export type PhotoCarousel = (typeof carousels)[number];

export function getPhotosForCategory(slug: string): PhotoAsset[] {
  return galleryPhotos.filter((photo) => photo.category === slug);
}

export function getPhotoById(id: string): PhotoAsset | undefined {
  return galleryPhotos.find((photo) => photo.id === id);
}

export function getPhotoTitle(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(
      /(?:[-_ ]enhanced(?:[-_ ]nr)?|[-_ ]nr)?[-_](?:edited|original)$/i,
      "",
    )
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
