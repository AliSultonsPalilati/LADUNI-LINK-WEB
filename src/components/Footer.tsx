import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Beranda", id: "hero" },
    { label: "Menu", id: "menu" },
    { label: "Kontak", id: "contact" },
    { label: "Lokasi", id: "location" },
  ];

  return (
    <footer className="py-12 px-4 bg-stone-950 text-stone-300">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <h3 className="text-xl font-bold text-stone-100">
            Rumah Makan Laduni
          </h3>
          
          <nav className="flex gap-6 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-stone-300 hover:text-[#227157] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <hr className="my-6 border-stone-700" />

        {/* --- PERUBAHAN DI SINI --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <p className="text-sm text-stone-400">
            © {currentYear} Rumah Makan Laduni. All rights reserved.
          </p>
          
          {/* Tagline diganti dengan nama Anda */}
          <a 
            href="#" // Ganti '#' dengan link portofolio Anda nanti
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-stone-400 hover:text-[#227157] transition-colors"
          >
            Crafted by Alisultn
          </a>
        </div>
        {/* ------------------------- */}
        
      </motion.div>
    </footer>
  );
};

export default Footer;
