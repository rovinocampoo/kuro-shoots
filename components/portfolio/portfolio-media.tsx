import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/cn";
import type { PortfolioMedia } from "@/lib/portfolio";

type PortfolioMediaFrameProps = {
  media: PortfolioMedia;
  className?: string;
  sizes?: string;
  preload?: boolean;
  showCaption?: boolean;
  showBadge?: boolean;
  badgeClassName?: string;
};

export function PortfolioMediaFrame({
  media,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  preload = false,
  showCaption = true,
  showBadge = true,
  badgeClassName,
}: PortfolioMediaFrameProps) {
  if (media.kind === "placeholder") {
    return (
      <PlaceholderImage
        label={media.label}
        ariaLabel={media.alt}
        tone={media.tone}
        className={className}
        badgeClassName={badgeClassName}
        showBadge={showBadge}
        showCaption={showCaption}
      />
    );
  }

  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-bone/[0.07] bg-charcoal",
        className,
      )}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
      {showCaption && media.caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/90 to-transparent px-5 pb-4 pt-12 text-[0.58rem] uppercase tracking-[0.26em] text-bone/65">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
