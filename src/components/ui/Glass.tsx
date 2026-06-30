import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";

type GlassBlur = "sm" | "md" | "lg";

type GlassProps = {
  children: ReactNode;
  className?: string;
  blur?: GlassBlur;
  border?: boolean;
  shadow?: boolean;
  hover?: boolean;
};

const blurStyles: Record<GlassBlur, string> = {
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-xl",
};

export default function Glass({
  children,
  className,
  blur = "md",
  border = true,
  shadow = false,
  hover = false,
}: GlassProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "bg-white/5",
        blurStyles[blur],
        border && "border border-white/10",
        shadow && "shadow-[var(--shadow)]",
        hover &&
          "transition-[background-color,border-color,transform] hover:border-white/15 hover:bg-white/[0.07]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
