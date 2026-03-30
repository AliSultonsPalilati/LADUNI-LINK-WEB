import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Beranda", id: "hero" },
    { label: "Menu", id: "menu" },
    { label: "Lokasi", id: "location" },
    { label: "Kontak", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-stone-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between relative z-[110]">

          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl font-bold text-stone-100 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Rumah Makan Laduni
          </motion.div>

          {/* ── Desktop Menu (tidak diubah) ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex gap-8"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm md:text-base text-stone-300 hover:text-[#227157] transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#227157] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </motion.div>

          {/* ── Mobile Hamburger ── */}
          <motion.button
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-xl bg-stone-800/60 border border-stone-700/50 text-stone-300 hover:text-[#227157] hover:border-[#227157]/40 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* ════════════════════════════════════════
            Mobile Dropdown (drop from top, no scroll)
        ════════════════════════════════════════ */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[105]"
                style={{
                  background: "rgba(12,10,9,0.55)",
                  backdropFilter: "blur(4px)",
                }}
                onClick={() => setIsOpen(false)}
              />

              {/* Dropdown Panel */}
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.96 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -6, scaleY: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  transformOrigin: "top center",
                  background: "linear-gradient(160deg, #1c1917 0%, #141210 100%)",
                  border: "1px solid rgba(68,64,60,0.5)",
                  borderTop: "none",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.55)",
                }}
                className="absolute top-full left-0 right-0 z-[120] md:hidden rounded-b-2xl overflow-hidden"
              >
                {/* Green accent line at top */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#227157]/50 to-transparent" />

                {/* Subtle glow */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-16 pointer-events-none opacity-[0.08]"
                  style={{
                    background: "radial-gradient(ellipse, #227157, transparent 70%)",
                  }}
                />

                {/* Menu Items */}
                <div className="relative flex flex-col items-center gap-1.5 px-5 pt-5 pb-4">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.22 }}
                      onClick={() => scrollToSection(item.id)}
                      className="group w-full flex items-center justify-center gap-2 py-3 rounded-xl text-stone-300 hover:text-stone-100 font-semibold text-base tracking-wide transition-all duration-200 hover:bg-[#227157]/10 border border-transparent hover:border-[#227157]/20"
                    >
                      {/* Dot accent */}
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-[#227157] flex-shrink-0"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                      />
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Footer divider */}
                <div className="px-6 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-px flex-1 bg-stone-800" />
                    <div className="w-1 h-1 rotate-45 bg-[#227157]/40" />
                    <div className="h-px flex-1 bg-stone-800" />
                  </div>
                  <p className="text-stone-600 text-[10px] text-center tracking-[0.2em] uppercase">
                    © {new Date().getFullYear()} Rumah Makan Laduni
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;