import { cn } from "@/lib/cn";

type ArrowIconProps = {
  className?: string;
};

export function ArrowUpRight({ className }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={cn("size-3.5", className)}
    >
      <path
        d="M4 12 12 4M5 4h7v7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
