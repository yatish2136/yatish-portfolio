import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  className?: string;
} & Omit<HTMLMotionProps<"button">, "children">;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--primary)] text-white hover:bg-[color-mix(in_srgb,var(--primary)_88%,white)]",
  secondary:
    "bg-[var(--secondary)] text-[var(--background)] hover:bg-[color-mix(in_srgb,var(--secondary)_88%,white)]",
  ghost:
    "bg-transparent text-[var(--text)] hover:bg-white/10",
  outline:
    "border border-[var(--border)] bg-transparent text-[var(--text)] hover:border-white/20 hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "gap-1.5 px-4 py-2 text-sm",
  md: "gap-2 px-6 py-2.5 text-sm",
  lg: "gap-2.5 px-8 py-3.5 text-base",
};

const iconSizeStyles: Record<ButtonSize, string> = {
  sm: "size-4",
  md: "size-4",
  lg: "size-5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      whileHover={isDisabled ? undefined : { scale: 1.03 }}
      whileTap={isDisabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        "disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2
          className={cn(iconSizeStyles[size], "animate-spin")}
          aria-hidden="true"
        />
      ) : (
        leftIcon && (
          <span
            className={cn("inline-flex shrink-0", iconSizeStyles[size])}
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )
      )}

      <span>{children}</span>

      {!loading && rightIcon && (
        <span
          className={cn("inline-flex shrink-0", iconSizeStyles[size])}
          aria-hidden="true"
        >
          {rightIcon}
        </span>
      )}
    </motion.button>
  );
}
