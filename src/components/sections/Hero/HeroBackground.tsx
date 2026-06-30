import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-32
          top-24
          h-[480px]
          w-[480px]
          rounded-full
          bg-blue-500/20
          blur-[130px]
        "
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          top-1/3
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-500/15
          blur-[150px]
        "
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          left-1/2
          h-[380px]
          w-[380px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[120px]
        "
      />

      {/* Grid Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030712] to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030712] to-transparent" />
    </div>
  );
}