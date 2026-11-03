import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PlaceholderTone = "forest" | "smoke" | "noir";

const toneClasses: Record<PlaceholderTone, string> = {
  forest:
    "bg-[radial-gradient(115%_120%_at_72%_8%,#5d7a63_0%,#2c4433_34%,#0d140f_72%,#070907_100%)]",
  smoke:
    "bg-[radial-gradient(120%_110%_at_28%_18%,#5a6159_0%,#2a2f2a_38%,#0c0e0c_78%,#070807_100%)]",
  noir:
    "bg-[radial-gradient(100%_100%_at_50%_30%,#3a4139_0%,#1a1e19_40%,#0a0c0a_76%,#070807_100%)]",
};

type PlaceholderImageProps = {
  label: string;
  tone?: PlaceholderTone;
  className?: string;
  showCaption?: boolean;
  children?: ReactNode;
};

export function PlaceholderImage({
  label,
  tone = "forest",
  className,
  showCaption = true,
  children,
}: PlaceholderImageProps) {
  return (
    <figure
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={cn(
        "relative overflow-hidden border border-bone/[0.07] bg-charcoal",
        className,
      )}
    >
      <div aria-hidden="true" className={cn("absolute inset-0", toneClasses[tone])} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,transparent_18%,rgba(234,230,220,0.07)_44%,transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(125%_100%_at_50%_45%,transparent_35%,rgba(3,4,3,0.78)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(234,230,220,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(234,230,220,0.18)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-bone/20 bg-void/35 px-3 py-1.5 text-[0.5rem] font-medium uppercase tracking-[0.3em] text-bone/80 backdrop-blur-sm">
        <span aria-hidden="true" className="size-1 rounded-full bg-moss" />
        Placeholder
      </span>

      {children}

      {showCaption ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-void/90 to-transparent px-5 pb-4 pt-12 text-[0.58rem] uppercase tracking-[0.26em] text-bone/65">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
