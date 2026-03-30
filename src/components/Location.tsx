import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const Location = () => {
  const locations = [
    {
      name: "Laduni Halmahera Utara",
      branch: "Cabang 01",
      address: "Jl. Barumadehe, Kao Teluk, North Halmahera Regency, North Maluku",
      gmapsLink: "https://maps.google.com/?q=Rumah+Makan+Laduni+Halmahera",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6801529.175945973!2d117.65138295614086!3d-1.8968166422664692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329b66249e28d57d%3A0x12e08edb20d6b73c!2sRumah%20Makan%20Laduni!5e0!3m2!1sen!2sid!4v1761803424931!5m2!1sen!2sid",
    },
    {
      name: "Laduni Gorontalo Isimu",
      branch: "Cabang 02",
      address:
        "Jl. Trans Sulawesi No.111, Isimu Sel., Kec. Tibawa, Kabupaten Gorontalo, Gorontalo 96216",
      gmapsLink: "https://maps.google.com/?q=Rumah+Makan+Laduni+Gorontalo",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6801529.175945973!2d117.65138295614086!3d-1.8968166422664692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32793b002e046e7f%3A0x22d88882a2f1ce37!2sRumah%20Makan%20%26%20Homestay%20Laduni!5e0!3m2!1sen!2sid!4v1761803433310!5m2!1sen!2sid",
    },
  ];

  return (
    <section
      id="location"
      className="relative py-24 px-4 bg-stone-900 overflow-hidden"
    >
      {/* ── Background texture ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #227157, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#227157]/10 border border-[#227157]/25 rounded-full px-4 py-1.5 mb-5">
            <MapPin className="w-3 h-3 text-[#227157]" />
            <span className="text-[#227157] text-xs font-semibold tracking-[0.2em] uppercase">
              2 Lokasi
            </span>
          </div>

          <h2
            className="font-black text-stone-100 mb-4 leading-none tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          >
            Lokasi{" "}
            <span
              className="italic"
              style={{
                color: "#227157",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Cabang
            </span>
          </h2>

          <p className="text-stone-400 text-sm md:text-base max-w-sm mx-auto">
            Kunjungi restoran kami di lokasi terdekat
          </p>

          <div className="flex items-center justify-center gap-3 mt-7">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#227157]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#227157]/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#227157]/40" />
          </div>
        </motion.div>

        {/* ── Location Cards ── */}
        <div className="flex flex-col gap-10">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.15 }}
              className="group"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(68,64,60,0.5)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
              >
                {/* ── Card Header ── */}
                <div
                  className="relative px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(41,37,36,0.98) 0%, rgba(28,25,23,1) 100%)",
                    borderBottom: "1px solid rgba(68,64,60,0.5)",
                  }}
                >
                  {/* Branch badge */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#227157]/15 border border-[#227157]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#227157]" />
                    </div>
                    <div>
                      <p className="text-[#227157] text-xs font-bold tracking-[0.25em] uppercase mb-1">
                        {location.branch}
                      </p>
                      <h3 className="text-stone-100 font-bold text-base md:text-lg lg:text-xl tracking-tight leading-tight">
                        {location.name}
                      </h3>
                      <p className="text-stone-500 text-xs md:text-sm mt-1 max-w-sm leading-relaxed">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  {/* Open in Maps button */}
                  <a
                    href={location.gmapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-[#227157]/10 hover:bg-[#227157]/20 border border-[#227157]/25 hover:border-[#227157]/50 text-[#227157] text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-2 transition-all duration-300"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Buka Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>

                {/* ── Map Embed ── */}
                <div className="relative overflow-hidden" style={{ height: "400px" }}>
                  {/* Overlay fade top */}
                  <div className="absolute top-0 left-0 right-0 h-4 z-10 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(28,25,23,0.3), transparent)",
                    }}
                  />
                  <iframe
                    src={location.mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-stone-600 text-xs mt-10 tracking-wide"
        >
          * Klik "Buka Maps" untuk petunjuk arah langsung di Google Maps
        </motion.p>
      </div>
    </section>
  );
};

export default Location;