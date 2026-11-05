"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { PhotoAsset } from "@/lib/photo-library";

type SwipeCarouselProps = {
  photos: PhotoAsset[];
  label: string;
};

export function SwipeCarousel({ photos, label }: SwipeCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollTo({
      left: index * viewport.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    setActiveIndex(index);
  };

  const updateActiveSlide = () => {
    const viewport = viewportRef.current;
    if (!viewport || viewport.clientWidth === 0) return;
    setActiveIndex(
      Math.round(viewport.scrollLeft / viewport.clientWidth),
    );
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" && activeIndex < photos.length - 1) {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    } else if (event.key === "ArrowLeft" && activeIndex > 0) {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    }
  };

  return (
    <div
      role="region"
      aria-label={`${label} carousel`}
      aria-roledescription="carousel"
      className="mx-auto w-full max-w-3xl lg:max-w-[min(100%,52svh)]"
    >
      <div
        ref={viewportRef}
        role="group"
        aria-label="Carousel slides"
        tabIndex={0}
        onScroll={updateActiveSlide}
        onKeyDown={onKeyDown}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain border border-hairline bg-charcoal [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${photos.length}: ${photo.filename}`}
            className="relative w-full flex-none snap-center"
            style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
          >
            <Image
              src={photo.src}
              alt={photo.filename}
              fill
              sizes="(min-width: 1280px) 768px, (min-width: 640px) 80vw, 100vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <p
          aria-live="polite"
          className="min-w-0 flex-1 truncate text-[0.58rem] text-bone/65"
        >
          <span className="mr-3 font-medium tabular-nums text-moss">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(photos.length).padStart(2, "0")}
          </span>
          {photos[activeIndex]?.filename}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
            className="grid size-10 place-items-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-moss hover:text-bone disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ←
            </span>
          </button>
          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            disabled={activeIndex === photos.length - 1}
            aria-label="Next slide"
            className="grid size-10 place-items-center rounded-full border border-bone/20 text-bone/80 transition-colors hover:border-moss hover:text-bone disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              →
            </span>
          </button>
        </div>
      </div>

      <div
        role="group"
        aria-label="Choose a slide"
        className="mt-4 flex flex-wrap justify-center gap-2"
      >
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className="grid size-6 place-items-center"
          >
            <span
              className={`h-1 rounded-full transition-all ${
                activeIndex === index
                  ? "w-5 bg-moss"
                  : "w-1.5 bg-bone/30 hover:bg-bone/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
