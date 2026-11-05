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
      <div className="grid grid-cols-2 items-start gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`View ${photo.filename} larger`}
            className="group min-w-0 text-left"
          >
            <span
              className="relative block w-full overflow-hidden bg-charcoal"
              style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
            >
              <Image
                src={photo.src}
                alt={photo.filename}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </span>
            <span className="mt-2 block truncate text-[0.58rem] text-bone/65 sm:mt-3">
              {photo.filename}
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
              <p className="min-w-0 truncate text-xs text-bone/70">
                {selected.filename}
                <span className="ml-3 text-muted">
                  {(selectedIndex ?? 0) + 1} / {photos.length}
                </span>
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
                alt={selected.filename}
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
