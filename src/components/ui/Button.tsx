import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({
  children,
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="
      rounded-full
      bg-blue-600
      px-7
      py-3
      font-semibold
      transition
      hover:bg-blue-500
      "
    >
      {children}
    </motion.button>
  );
}