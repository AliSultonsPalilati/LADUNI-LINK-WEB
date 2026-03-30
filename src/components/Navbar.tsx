import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone, UtensilsCrossed, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
    { label: "Beranda",  id: "hero",     icon: Home },
    { label: "Menu",     id: "menu",     icon: UtensilsCrossed },
    { label: "Lokasi",   id: "location", icon: MapPin },
    { label: "Kontak",   id: "contact",  icon: Phone },
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
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ════════════════════════════════════════
          Mobile Fullscreen Drawer
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[108]"
              style={{ background: "rgba(12,10,9,0.85)", backdropFilter: "blur(8px)" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel — slides in from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[120] w-[78vw] max-w-xs flex flex-col md:hidden"
              style={{
                background: "linear-gradient(160deg, #1c1917 0%, #141210 100%)",
                borderLeft: "1px solid rgba(68,64,60,0.5)",
                boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Glow accent */}
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-10"
                style={{
                  background: "radial-gradient(circle at top right, #227157, transparent 70%)",
                }}
              />

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-stone-800">
                <div>
                  <p className="text-[#227157] text-[10px] font-bold tracking-[0.25em] uppercase mb-0.5">
                    Navigasi
                  </p>
                  <p
                    className="text-stone-100 font-bold text-base leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Rumah Makan<br />
                    <span className="text-[#227157] italic">Laduni</span>
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400 hover:text-stone-100 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex-1 px-4 py-6 flex flex-col gap-2 overflow-y-auto">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.07, duration: 0.35 }}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-300 hover:bg-[#227157]/10 border border-transparent hover:border-[#227157]/20"
                    >
                      {/* Icon badge */}
                      <div className="w-9 h-9 rounded-lg bg-stone-800 border border-stone-700/60 group-hover:bg-[#227157]/15 group-hover:border-[#227157]/30 flex items-center justify-center flex-shrink-0 transition-all duration-300">
                        <Icon className="w-4 h-4 text-stone-400 group-hover:text-[#227157] transition-colors duration-300" />
                      </div>

                      {/* Label */}
                      <span className="text-stone-300 group-hover:text-stone-100 font-semibold text-sm tracking-wide transition-colors duration-300">
                        {item.label}
                      </span>

                      {/* Arrow */}
                      <div className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                        <svg viewBox="0 0 16 16" fill="none" className="text-[#227157]">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="px-6 py-5 border-t border-stone-800"
              >
                {/* Decorative divider */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px flex-1 bg-stone-800" />
                  <div className="w-1 h-1 rotate-45 bg-[#227157]/40" />
                  <div className="h-px flex-1 bg-stone-800" />
                </div>
                <p className="text-stone-600 text-[10px] text-center tracking-widest uppercase">
                  © {new Date().getFullYear()} Rumah Makan Laduni
                </p>
                <p className="text-stone-700 text-[10px] text-center mt-0.5">
                  Masakan Nusantara · Cita Rasa Istimewa
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;