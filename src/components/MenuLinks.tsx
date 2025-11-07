import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
// 1. Import data menu yang baru
import { menuMakanan, menuIkan, menuSnack, menuMinuman } from "@/data/menu";

// Komponen Pembantu untuk menampilkan satu item menu
const MenuItem = ({ name, price, type }) => {
  const priceDisplay = 
    typeof price === 'object' 
    ? `P: ${price.pedaging} / K: ${price.kampung}` 
    : price;

  return (
    <div className="flex justify-between items-center py-2 border-b border-stone-700/50 hover:bg-stone-800/50 transition-colors px-2 -mx-2">
      <div className="text-left flex-1">
        {/* --- PERUBAHAN FONT: Nama Item --- */}
        <h4 className="text-stone-100 font-medium text-base md:text-lg">{name}</h4>
        <p className="text-stone-500 text-xs mt-0.5">{type}</p>
      </div>
      {/* --- PERUBAHAN FONT: Harga --- */}
      <span className="text-[#227157] font-semibold text-base md:text-lg flex items-center gap-1 flex-shrink-0">
        <DollarSign className="w-4 h-4 text-stone-500" /> {priceDisplay}K
      </span>
    </div>
  );
};

// Komponen Pembantu untuk seluruh daftar (kolom)
const MenuListColumn = ({ title, data, className = "" }) => (
  <div className={`p-6 bg-stone-800 rounded-xl shadow-2xl h-full ${className}`}>
    {/* --- PERUBAHAN FONT: Judul Kolom --- */}
    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#227157] mb-6 border-b-2 border-[#227157]/50 pb-2">
      {title}
    </h3>
    <div className="space-y-1">
      {data.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);


const MenuLinks = () => {
  return (
    <section id="menu" className="py-20 px-4 bg-stone-900">
      <div className="container mx-auto max-w-6xl"> {/* Max-width ditingkatkan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* --- PERUBAHAN FONT: Judul Utama --- */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-stone-100 mb-4">
            Daftar Menu
          </h2>
          {/* --- PERUBAHAN FONT: Subtitle --- */}
          <p className="text-stone-300 text-sm md:text-base lg:text-lg">
            Nikmati pilihan masakan terbaik dari dapur kami. Harga dalam Ribuan Rupiah (K).
          </p>
        </motion.div>

        {/* --- Bagian Makanan (Kolom Kiri) --- */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
        >
          <MenuListColumn title="MASAKAN UTAMA" data={[...menuMakanan, ...menuIkan]} />
        </motion.div>


        {/* --- Bagian Snack & Minuman (Kolom Kanan) --- */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <MenuListColumn title="SNACK & JAJANAN" data={menuSnack} />
            <MenuListColumn title="MINUMAN & KOPI" data={menuMinuman} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MenuLinks;
