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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl font-bold text-stone-100 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Rumah Makan Laduni
          </motion.div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-300 hover:text-[#227157] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Background overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black backdrop-blur-sm z-[105]"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu container */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-full left-0 right-0 bg-stone-900/95 backdrop-blur-xl md:hidden mt-2 pb-6 z-[120] rounded-b-3xl shadow-2xl border-t border-stone-700/50"
              >
                <div className="flex flex-col items-center space-y-3 pt-4">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      className="relative w-[80%] py-3 text-base text-stone-200 font-medium text-center rounded-xl hover:bg-[#227157]/20 transition-all duration-300"
                    >
                      {item.label}
                      <motion.span
                        layoutId="underline"
                        className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 group-hover:w-1/2 h-[2px] bg-[#227157] transition-all duration-300"
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Extra visual touch */}
                <div className="mt-5 border-t border-stone-700/50 pt-3 text-center text-xs text-stone-500">
                  © {new Date().getFullYear()} Rumah Makan Laduni
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