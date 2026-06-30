import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

type CardVariant = "default" | "elevated" | "glass";

type CardProps = {
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: CardVariant;
};

const variantStyles: Record<CardVariant, string> = {
  default: "border border-[var(--border)] bg-[var(--card)]",
  elevated:
    "border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow)]",
  glass:
    "border border-white/10 bg-white/5 backdrop-blur-xl",
};

export default function Card({
  title,
  description,
  footer,
  children,
  className,
  hover = false,
  variant = "default",
}: CardProps) {
  const hasHeader = Boolean(title || description);

  return (
    <motion.article
      whileHover={
        hover
          ? { y: -4, transition: { duration: 0.2, ease: "easeOut" } }
          : undefined
      }
      className={cn(
        "overflow-hidden rounded-3xl",
        variantStyles[variant],
        hover &&
          "transition-[border-color,box-shadow] hover:border-white/15",
        hover && variant === "elevated" && "hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
        hover && variant === "glass" && "hover:bg-white/[0.07]",
        className,
      )}
    >
      <div className="flex flex-col gap-4 p-6">
        {hasHeader && (
          <header className="space-y-2">
            {title && (
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {description}
              </p>
            )}
          </header>
        )}

        {children}

        {footer && (
          <footer className="border-t border-[var(--border)] pt-4">
            {footer}
          </footer>
        )}
      </div>
    </motion.article>
  );
}
