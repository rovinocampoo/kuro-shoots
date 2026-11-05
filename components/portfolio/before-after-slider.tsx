"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/cn";
import type { PortfolioComparison, PortfolioMedia } from "@/lib/portfolio";

type ViewMode = "slider" | "side-by-side";

const viewModes: { value: ViewMode; label: string }[] = [
  { value: "slider", label: "Slider" },
  { value: "side-by-side", label: "Side by side" },
];

type BeforeAfterSliderProps = {
  comparison: PortfolioComparison;
  title: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  initialPosition?: number;
};

function clampPosition(value: number) {
  return Math.min(100, Math.max(0, value));
}

function ComparisonMedia({
  media,
  sizes,
  preload = false,
}: {
  media: PortfolioMedia;
  sizes: string;
  preload?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (media.kind === "placeholder") {
    return (
      <PlaceholderImage
        label={media.label}
        ariaLabel={media.alt}
        tone={media.tone}
        showBadge={false}
        showCaption={false}
        className="h-full w-full rounded-none border-0"
      />
    );
  }

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`Image unavailable: ${media.alt}`}
        className="relative h-full w-full overflow-hidden bg-charcoal"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_20%,#2a2f2a_0%,#111510_48%,#070807_100%)]"
        />
        <span className="absolute inset-x-0 bottom-0 bg-void/80 px-4 py-3 text-[0.5rem] uppercase tracking-[0.26em] text-muted">
          Image unavailable
        </span>
      </div>
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      fill
      sizes={sizes}
      preload={preload}
      draggable={false}
      onError={() => setFailed(true)}
      className="object-contain"
    />
  );
}

function MediaLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute z-20 rounded-full border border-bone/20 bg-void/55 px-3 py-1.5 text-[0.48rem] font-medium uppercase tracking-[0.26em] text-bone/80 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

function SliderViewport({
  comparison,
  title,
  position,
  onPositionChange,
  sizes,
  preload,
  frameClassName,
}: {
  comparison: PortfolioComparison;
  title: string;
  position: number;
  onPositionChange: (value: number) => void;
  sizes: string;
  preload?: boolean;
  frameClassName?: string;
}) {
  const bothPlaceholders =
    comparison.original.kind === "placeholder" &&
    comparison.edited.kind === "placeholder";
  const aspectMedia =
    comparison.original.kind === "image"
      ? comparison.original
      : comparison.edited.kind === "image"
        ? comparison.edited
        : undefined;

  return (
    <figure>
      <div
        className={cn(
          "relative select-none overflow-hidden border border-hairline bg-charcoal",
          frameClassName,
        )}
        style={{
          aspectRatio: aspectMedia
            ? `${aspectMedia.width} / ${aspectMedia.height}`
            : "4 / 3",
        }}
      >
        <div className="absolute inset-0">
          <ComparisonMedia
            media={comparison.original}
            sizes={sizes}
            preload={preload}
          />
        </div>

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <ComparisonMedia
            media={comparison.edited}
            sizes={sizes}
            preload={preload}
          />
        </div>

        <MediaLabel className="left-4 top-4">Original</MediaLabel>
        <MediaLabel className="right-4 top-4">Edited</MediaLabel>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-20 w-px -translate-x-1/2 bg-bone/75 shadow-[0_0_20px_rgba(6,7,6,0.55)]"
          style={{ left: `${position}%` }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="flex size-11 items-center justify-center rounded-full border border-bone/60 bg-void/75 text-bone shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md sm:size-12">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="size-4"
            >
              <path
                d="M8 5 3 10l5 5M12 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {bothPlaceholders ? (
          <span className="pointer-events-none absolute bottom-4 left-1/2 z-20 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full border border-moss/30 bg-void/70 px-3 py-1.5 text-center text-[0.46rem] uppercase tracking-[0.24em] text-sage backdrop-blur-sm">
            Placeholder comparison - not a client result
          </span>
        ) : null}

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={position}
          onChange={(event) =>
            onPositionChange(Number(event.currentTarget.value))
          }
          aria-label={`Original and edited comparison for ${title}`}
          aria-valuetext={`${position}% original, ${100 - position}% edited`}
          className="peer absolute inset-0 z-30 h-full w-full cursor-ew-resize touch-none appearance-none bg-transparent opacity-0"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-40 opacity-0 ring-2 ring-inset ring-moss peer-focus-visible:opacity-100"
        />
      </div>

      {comparison.caption ? (
        <figcaption className="mt-3 max-w-3xl text-[0.56rem] leading-relaxed uppercase tracking-[0.24em] text-muted/80">
          {comparison.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SideBySideViewport({
  comparison,
  sizes,
  preload,
}: {
  comparison: PortfolioComparison;
  sizes: string;
  preload?: boolean;
}) {
  const frames = [
    { label: "Original", media: comparison.original },
    { label: "Edited", media: comparison.edited },
  ];
  const bothPlaceholders =
    comparison.original.kind === "placeholder" &&
    comparison.edited.kind === "placeholder";

  return (
    <figure>
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        {frames.map((frame) => (
          <div key={frame.label} className="min-w-0">
            <div
              className="relative overflow-hidden border border-hairline bg-charcoal"
              style={{
                aspectRatio:
                  frame.media.kind === "image"
                    ? `${frame.media.width} / ${frame.media.height}`
                    : "4 / 3",
              }}
            >
              <ComparisonMedia
                media={frame.media}
                sizes={sizes}
                preload={preload}
              />
              <MediaLabel className="left-3 top-3">
                {frame.label}
              </MediaLabel>
              {frame.media.kind === "placeholder" ? (
                <span className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-full border border-moss/30 bg-void/65 px-2.5 py-1 text-[0.44rem] uppercase tracking-[0.22em] text-sage backdrop-blur-sm">
                  Placeholder
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-[0.46rem] uppercase tracking-[0.24em] text-muted/70">
              {frame.label} image
            </p>
          </div>
        ))}
      </div>

      {bothPlaceholders ? (
        <p className="mt-3 text-[0.5rem] uppercase tracking-[0.24em] text-moss">
          Placeholder comparison - not a client result
        </p>
      ) : null}

      {comparison.caption ? (
        <figcaption className="mt-3 max-w-3xl text-[0.56rem] leading-relaxed uppercase tracking-[0.24em] text-muted/80">
          {comparison.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ViewModeControls({
  mode,
  onChange,
  className,
}: {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label="Comparison view"
      className={cn(
        "inline-flex rounded-full border border-hairline bg-void/60 p-1",
        className,
      )}
    >
      {viewModes.map((item) => {
        const selected = item.value === mode;

        return (
          <button
            key={item.value}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(item.value)}
            className={cn(
              "rounded-full px-3 py-2 text-[0.5rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 sm:px-3.5",
              selected
                ? "bg-bone text-void"
                : "text-muted hover:text-bone",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function ExpandIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-3.5"
    >
      <path
        d="M7 3H3v4M13 3h4v4M3 13v4h4M17 13v4h-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="size-3.5"
    >
      <path
        d="m5 5 10 10M15 5 5 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BeforeAfterSlider({
  comparison,
  title,
  className,
  sizes = "(min-width: 1024px) 80vw, 100vw",
  preload = false,
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(() =>
    clampPosition(initialPosition),
  );
  const [mode, setMode] = useState<ViewMode>("slider");
  const [fullscreenMode, setFullscreenMode] = useState<ViewMode>("slider");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const fullscreenTriggerRef = useRef<HTMLButtonElement>(null);
  const dialogTitleId = useId();

  useEffect(() => {
    if (!isFullscreen) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const trigger = fullscreenTriggerRef.current;
    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      trigger?.focus();
    };
  }, [isFullscreen]);

  const renderViewport = (
    viewMode: ViewMode,
    shouldPreload = preload,
    frameClassName?: string,
  ) =>
    viewMode === "slider" ? (
      <SliderViewport
        comparison={comparison}
        title={title}
        position={position}
        onPositionChange={setPosition}
        sizes={sizes}
        preload={shouldPreload}
        frameClassName={frameClassName}
      />
    ) : (
      <SideBySideViewport
        comparison={comparison}
        sizes={sizes}
        preload={shouldPreload}
      />
    );

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2.5 text-[0.5rem] uppercase tracking-[0.26em] text-muted">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-moss" />
          Drag, swipe, or use arrow keys
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <ViewModeControls mode={mode} onChange={setMode} />

          <button
            ref={fullscreenTriggerRef}
            type="button"
            onClick={() => {
              setFullscreenMode("slider");
              setIsFullscreen(true);
            }}
            aria-haspopup="dialog"
            aria-label={`Open full-screen comparison for ${title}`}
            className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-4 py-2.5 text-[0.5rem] font-medium uppercase tracking-[0.22em] text-bone/70 transition-colors duration-300 hover:border-moss/70 hover:bg-moss/10 hover:text-bone"
          >
            Full screen
            <ExpandIcon />
          </button>
        </div>
      </div>

      <div className="mt-4 sm:mt-5">{renderViewport(mode)}</div>

      {isFullscreen ? (
        <dialog
          ref={dialogRef}
          onClose={() => setIsFullscreen(false)}
          aria-labelledby={dialogTitleId}
          aria-modal="true"
          className="comparison-dialog fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-void p-0 text-bone"
        >
          <div className="flex h-dvh flex-col">
            <header className="border-b border-hairline px-4 py-4 sm:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.3em] text-moss">
                    Original / Edited
                  </p>
                  <h3
                    id={dialogTitleId}
                    className="mt-1 font-display text-2xl font-light text-bone sm:text-3xl"
                  >
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <ViewModeControls
                    mode={fullscreenMode}
                    onChange={setFullscreenMode}
                  />

                  <button
                    type="button"
                    onClick={() => setIsFullscreen(false)}
                    aria-label="Close full-screen comparison"
                    autoFocus
                    className="inline-flex items-center gap-2 rounded-full border border-bone/20 px-4 py-2.5 text-[0.5rem] font-medium uppercase tracking-[0.22em] text-bone/70 transition-colors duration-300 hover:border-moss/70 hover:bg-moss/10 hover:text-bone"
                  >
                    Close
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-8">
              <div className="mx-auto flex min-h-full w-full max-w-6xl items-center">
                <div className="w-full">
                  {renderViewport(
                    fullscreenMode,
                    false,
                    "w-full",
                  )}
                </div>
              </div>
            </div>
          </div>
        </dialog>
      ) : null}
    </div>
  );
}
