import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Panggil gambar Anda di sini
import menuMakananImg from "@/assets/menu-makanan.jpg";
import menuMinumanImg from "@/assets/menu-minuman.jpg";

const MenuLinks = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const menuItems = [
    {
      title: "Menu Makanan",
      description: "Nasi, lauk pauk, dan hidangan utama.",
      image: menuMakananImg,
    },
    {
      title: "Menu Snack & Minuman",
      description: "Camilan, kue, dan aneka minuman segar.",
      image: menuMinumanImg,
    },
  ];

  const slides = menuItems.map(item => ({ src: item.image }));

  const openLightbox = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <>
      {/* Latar belakang section diubah menjadi coklat gelap hangat */}
      <section id="menu" className="py-20 px-4 bg-stone-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* Teks diubah jadi putih hangat */}
            <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4">
              Menu Kami
            </h2>
            {/* Teks diubah jadi krem pudar */}
            <p className="text-stone-300 text-lg">
              Klik pada gambar menu untuk melihat lebih jelas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {menuItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card
                  onClick={() => openLightbox(idx)}
                  // Warna card diubah jadi coklat-abu hangat, dengan border lebih hangat
                  className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#227157]/20 bg-stone-800 border-stone-700"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    {/* Teks judul card diubah jadi putih hangat */}
                    <h3 className="text-2xl font-bold text-stone-100 mb-2">
                      {item.title}
                    </h3>
                    {/* Teks deskripsi card diubah jadi abu-abu hangat pudar */}
                    <p className="text-stone-400">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Komponen Lightbox (akan muncul di atas segalanya saat 'open' true) */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </>
  );
};

export default MenuLinks;