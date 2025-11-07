import { motion } from "framer-motion";
import heroImage from "@/assets/hero-laduni.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      // Tambahkan margin vertikal (py) ekstra untuk memberi 'ruang napas' di HP
      className="relative min-h-screen flex items-center justify-center text-center py-24 px-4 md:p-8 overflow-hidden" 
    >
      {/* ... Gambar Latar & Overlay ... */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 w-full h-full bg-black/60" />

      {/* Konten Teks */}
      <div className="relative z-10 container mx-auto max-w-4xl">
        
        {/* 1. Judul (h1) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // --- PERUBAHAN FONT: Judul ---
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100 mb-4 leading-tight drop-shadow-lg"
        >
          Selamat Datang di<br />
          
          {/* 2. Nama Restoran */}
          <span 
            style={{ color: '#227157' }} 
            // --- PERUBAHAN FONT: Nama Restoran ---
            className="text-[#227157] font-['Playfair_Display'] font-bold text-4xl md:text-6xl lg:text-8xl"
          >
            Rumah Makan Laduni
          </span>
        </motion.h1>

        {/* 2. Paragraf (p) dengan delay */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // --- PERUBAHAN FONT: Subtitle ---
          className="text-base md:text-lg lg:text-xl text-stone-300 mb-8 max-w-2xl mx-auto drop-shadow-md"
        >
          Nikmati kelezatan masakan nusantara dengan cita rasa istimewa yang menggugah selera
        </motion.p>
        
        {/* 3. Tombol (a) dengan delay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a
            href="#menu"
            // --- PERUBAHAN FONT & PADDING: Tombol ---
            className="inline-block bg-[#227157] text-stone-100 px-6 py-3 text-base md:px-8 md:py-4 md:text-lg rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Lihat Menu Kami
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
