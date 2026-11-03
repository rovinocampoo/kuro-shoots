import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-bone text-void hover:bg-sage",
  ghost:
    "border border-bone/20 text-bone hover:border-moss/70 hover:bg-moss/10",
};

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.66rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
