import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

type BadgeVariant = "primary" | "secondary" | "outline";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  primary:
    "border-[color-mix(in_srgb,var(--primary)_25%,transparent)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)]",
  secondary:
    "border-[color-mix(in_srgb,var(--secondary)_25%,transparent)] bg-[color-mix(in_srgb,var(--secondary)_12%,transparent)] text-[var(--secondary)]",
  outline: "border-[var(--border)] bg-transparent text-[var(--muted)]",
};

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
