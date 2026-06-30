import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

import Logo from "../common/Logo";
import Button from "../ui/Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto mt-4 flex h-20 max-w-7xl items-center justify-between rounded-2xl px-6 transition-all duration-300
          ${
            scrolled
              ? "border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <Logo />

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume */}

          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Download />}
            >
              Resume
            </Button>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mx-6 mt-3 rounded-2xl border border-white/10 bg-slate-900/90 p-6 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <Button
                  variant="primary"
                  leftIcon={<Download />}
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}