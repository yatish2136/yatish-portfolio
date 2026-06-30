import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      whileHover={{ rotate: -5, scale: 1.05 }}
      className="flex items-center gap-2 cursor-pointer"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 font-bold text-white shadow-lg">
        Y
      </div>

      <div>
        <h1 className="font-['Space_Grotesk'] text-lg font-bold">
          Yatish
        </h1>

        <p className="text-xs text-slate-400">
          Software Engineer
        </p>
      </div>
    </motion.div>
  );
}