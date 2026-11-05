"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PhotoAsset } from "@/lib/photo-library";

type PhotoGridProps = {
  photos: PhotoAsset[];
  label: string;
};

export function PhotoGrid({ photos, label }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const selectedIndexRef = useRef<number | null>(null);
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    const onKeyDown = (event: KeyboardEvent) => {
      const current = selectedIndexRef.current;
      if (current === null) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex((current + 1) % photos.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIndex((current - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, photos.length]);

  const selected =
    selectedIndex === null ? undefined : photos[selectedIndex];

  return (
    <>
      <div className="columns-2 gap-2 sm:columns-3 sm:gap-4 lg:columns-4">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`View photograph ${index + 1} larger`}
            className="group mb-2 inline-block w-full break-inside-avoid text-left sm:mb-4"
          >
            <span
              className="relative block w-full overflow-hidden bg-charcoal"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
              <Image
                src={photo.src}
                alt={`${label} photograph ${index + 1}`}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`${label} photo viewer`}
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            dialogRef.current?.close();
          }
        }}
        className="photo-dialog fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-void/95 p-4 text-bone backdrop:bg-void/95 sm:p-8"
      >
        {selected ? (
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
            <div className="flex items-center justify-between gap-4 pb-4">
              <p className="text-xs tabular-nums text-bone/70" aria-live="polite">
                {String((selectedIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                autoFocus
                className="shrink-0 rounded-full border border-bone/20 px-4 py-2 text-[0.55rem] uppercase tracking-[0.2em] hover:border-moss"
              >
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image
                src={selected.src}
                alt={`${label} photograph ${(selectedIndex ?? 0) + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 pt-4">
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    ((selectedIndex ?? 0) - 1 + photos.length) % photos.length,
                  )
                }
                className="rounded-full border border-bone/20 px-4 py-2 text-[0.55rem] uppercase tracking-[0.2em] hover:border-moss"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(((selectedIndex ?? 0) + 1) % photos.length)
                }
                className="rounded-full border border-bone/20 px-4 py-2 text-[0.55rem] uppercase tracking-[0.2em] hover:border-moss"
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
