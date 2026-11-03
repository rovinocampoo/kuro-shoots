import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "default" | "wide" | "narrow";

const sizes: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  wide: "max-w-[1600px]",
  narrow: "max-w-3xl",
};

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
