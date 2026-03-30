import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-laduni.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.45)",
        }}
      />

      {/* ── Gradient Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* ── Subtle vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* ── Top bar info ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="absolute top-6 left-0 right-0 flex justify-center gap-6 px-4 z-20"
      >
        <div className="flex items-center gap-1.5 text-stone-300/80 text-xs tracking-widest uppercase">
          <MapPin className="w-3 h-3 text-[#227157]" />
          <span>Masakan Nusantara</span>
        </div>
        <div className="w-px h-4 bg-stone-600 self-center" />
        <div className="flex items-center gap-1.5 text-stone-300/80 text-xs tracking-widest uppercase">
          <Clock className="w-3 h-3 text-[#227157]" />
          <span>Buka Setiap Hari</span>
        </div>
      </motion.div>

      {/* ── Main Content ── */}
      <div className="relative z-10 container mx-auto max-w-5xl px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-10 bg-[#227157]/70" />
          <span className="text-[#227157] text-xs font-semibold tracking-[0.35em] uppercase">
            Selamat Datang di
          </span>
          <div className="h-px w-10 bg-[#227157]/70" />
        </motion.div>

        {/* Restaurant Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 leading-none"
        >
          <span
            className="block font-black text-stone-100 tracking-tight"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 7rem)",
              textShadow: "0 4px 40px rgba(0,0,0,0.5)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Rumah Makan
          </span>
          <span
            className="block italic"
            style={{
              fontSize: "clamp(3.2rem, 11vw, 9rem)",
              color: "#227157",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              textShadow: "0 0 80px rgba(34,113,87,0.35), 0 4px 40px rgba(0,0,0,0.5)",
              lineHeight: 0.95,
            }}
          >
            Laduni
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#227157]/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#227157]/80" />
          <div className="h-px w-32 bg-[#227157]/40" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#227157]/80" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#227157]/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-stone-300 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.15rem)" }}
        >
          Nikmati kelezatan masakan nusantara dengan cita rasa istimewa
          <br className="hidden md:block" />
          yang{" "}
          <span className="text-stone-100 font-medium italic">menggugah selera</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button */}
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3.5 font-semibold text-stone-100 transition-all duration-300"
            style={{
              background: "#227157",
              boxShadow: "0 0 0 0 rgba(34,113,87,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 8px rgba(34,113,87,0.15), 0 8px 30px rgba(34,113,87,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 0 rgba(34,113,87,0.4)";
            }}
          >
            <span className="relative z-10 tracking-wide text-sm md:text-base">
              Lihat Menu Kami
            </span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-stone-500 text-[10px] tracking-[0.25em] uppercase">
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#227157]/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;