import Image from "next/image";
import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
  showMark?: boolean;
};

export function Wordmark({ className, showMark = true }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {showMark ? (
        <Image
          src="/icon.svg"
          alt=""
          aria-hidden="true"
          width={40}
          height={40}
          className="size-10 shrink-0"
        />
      ) : null}
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-medium tracking-[0.24em] text-bone">
          KURO
        </span>
        <span className="mt-1 text-[0.5rem] font-medium uppercase tracking-[0.54em] text-muted">
          Shoots
        </span>
      </span>
    </span>
  );
}
