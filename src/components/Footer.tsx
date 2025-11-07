import { motion } from "framer-motion";
import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Beranda", id: "hero" },
    { label: "Menu", id: "menu" },
    { label: "Lokasi", id: "location" },
    { label: "Kontak", id: "contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-black text-stone-300 py-14 px-6">
      {/* Decorative background blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,113,87,0.25),transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 container mx-auto max-w-6xl"
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {/* Logo / Brand */}
          <div>
            <h3 className="text-2xl font-bold text-stone-100 font-playfair">
              Rumah Makan Laduni
            </h3>
            <p className="text-stone-400 text-sm mt-1 max-w-sm">
              Sajian lezat, cita rasa khas Nusantara, dan suasana yang nyaman
              untuk keluarga Anda.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative group text-stone-300 hover:text-[#227157] transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#227157] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Contact / Social Media */}
          <div className="flex gap-5 justify-center md:justify-end">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/rm_laduni._" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-800 hover:bg-[#227157]/20 transition"
            >
              <Instagram className="w-5 h-5 text-stone-300 hover:text-[#227157]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://maps.app.goo.gl/TDGsmk18XvnJLX3U7" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-800 hover:bg-[#227157]/20 transition"
            >
              <MapPin className="w-5 h-5 text-stone-300 hover:text-[#227157]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://wa.me/6285175197923" // ganti nomor WA kamu
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-stone-800 hover:bg-[#227157]/20 transition"
            >
              <Phone className="w-5 h-5 text-stone-300 hover:text-[#227157]" />
            </motion.a>
          </div>
        </div>

        <hr className="my-8 border-stone-700/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3">
          <p className="text-sm text-stone-500">
            © {currentYear} Rumah Makan Laduni. All rights reserved.
          </p>
          <p className="text-sm text-stone-500">
            Crafted with ❤️ by{" "}
            <a
              href="https://github.com/AliSultonsPalilati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#227157] hover:underline"
            >
              Alisultn
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
