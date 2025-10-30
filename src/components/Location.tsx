import { motion } from "framer-motion";

const Location = () => {
  const locations = [
    {
      name: "Cabang 1 - Laduni Halmahera Utara",
      address: "Jl. Barumadehe, Kao Teluk, North Halmahera Regency, North Maluku",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6801529.175945973!2d117.65138295614086!3d-1.8968166422664692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329b66249e28d57d%3A0x12e08edb20d6b73c!2sRumah%20Makan%20Laduni!5e0!3m2!1sen!2sid!4v1761803424931!5m2!1sen!2sid",
    },
    {
      name: "Cabang 2 - Gorontalo Isimu",
      address: "Jl. Trans Sulawesi No.111, Isimu Sel., Kec. Tibawa, Kabupaten Gorontalo, Gorontalo 96216",
      mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6801529.175945973!2d117.65138295614086!3d-1.8968166422664692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32793b002e046e7f%3A0x22d88882a2f1ce37!2sRumah%20Makan%20%26%20Homestay%20Laduni!5e0!3m2!1sen!2sid!4v1761803433310!5m2!1sen!2sid",
    },
  ];

  return (
    <section id="location" className="py-20 px-4 bg-stone-900">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">
            Lokasi Cabang
          </h2>
          <p className="text-stone-300 text-lg">
            Kunjungi restoran kami di lokasi terdekat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-stone-100 mb-2">
                  {location.name}
                </h3>
                <p className="text-stone-400">{location.address}</p>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-xl border border-stone-700">
                <iframe
                  src={location.mapEmbedSrc}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  // --- PERBAIKAN DI SINI ---
                  allowFullScreen={true} 
                  // -------------------------
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
