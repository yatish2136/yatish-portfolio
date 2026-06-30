import { motion } from "framer-motion";

type LogoProps = {
  small?: boolean;
};

export default function Logo({ small = false }: LogoProps) {
  return (
    <motion.a
      href="#home"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-3 select-none"
    >
      {/* Logo Box */}
      <div
        className={`
          flex items-center justify-center
          rounded-xl
          border border-white/10
          bg-white/5
          backdrop-blur-md
          transition-all duration-300
          group-hover:border-blue-500/40
          group-hover:bg-blue-500/10
          ${small ? "h-10 w-10" : "h-12 w-12"}
        `}
      >
        <span
          className={`
            font-['Space_Grotesk']
            font-bold
            tracking-tight
            text-white
            ${small ? "text-base" : "text-lg"}
          `}
        >
          Y
        </span>
      </div>

      {/* Text */}
      <div className="leading-none">
        <p className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-white">
          YBG
        </p>

        <p className="mt-1 text-xs tracking-[0.25em] uppercase text-slate-400">
          SOFTWARE ENGINEER
        </p>
      </div>
    </motion.a>
  );
}