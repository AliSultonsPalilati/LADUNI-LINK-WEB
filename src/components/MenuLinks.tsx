import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Sandwich } from "lucide-react";
// 1. Import data menu yang baru
import { menuMakanan, menuSnack, menuMinuman } from "@/data/menu";

// Komponen Pembantu untuk menampilkan satu item menu
const MenuItem = ({ name, price, type, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group flex justify-between items-center py-3 border-b border-stone-700/30 hover:border-[#227157]/40 transition-all duration-300 relative"
    >
      {/* Hover accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#227157] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-full" />

      <div className="text-left flex-1 pl-3">
        <h4 className="text-stone-100 font-semibold text-sm md:text-base group-hover:text-white transition-colors tracking-wide">
          {name}
        </h4>
        <p className="text-stone-500 text-xs mt-0.5 italic">{type}</p>
      </div>

      {/* Price Badge */}
      <div className="flex-shrink-0 bg-stone-900/80 border border-stone-700/50 group-hover:border-[#227157]/60 group-hover:bg-[#227157]/10 transition-all duration-300 rounded-lg px-3 py-1.5">
        <span className="text-[#227157] font-bold text-sm md:text-base tracking-tight">
          {price}K
        </span>
      </div>
    </motion.div>
  );
};

// Header icon badge
const CategoryIcon = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-xl bg-[#227157]/15 border border-[#227157]/30 flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-[#227157]" />
    </div>
    <div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-stone-100 tracking-widest uppercase">
        {label}
      </h3>
      <div className="h-0.5 w-12 bg-[#227157] rounded-full mt-1" />
    </div>
  </div>
);

// Komponen Pembantu untuk seluruh daftar (kolom)
const MenuListColumn = ({ title, data, icon, className = "" }) => (
  <div
    className={`relative p-6 rounded-2xl overflow-hidden h-full ${className}`}
    style={{
      background:
        "linear-gradient(135deg, rgba(41,37,36,0.95) 0%, rgba(28,25,23,0.98) 100%)",
      border: "1px solid rgba(68,64,60,0.5)",
      boxShadow:
        "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)",
    }}
  >
    {/* Subtle corner accent */}
    <div className="absolute top-0 right-0 w-24 h-24 opacity-10"
      style={{
        background: "radial-gradient(circle at top right, #227157, transparent 70%)",
      }}
    />
    <div className="absolute bottom-0 left-0 w-16 h-16 opacity-5"
      style={{
        background: "radial-gradient(circle at bottom left, #227157, transparent 70%)",
      }}
    />

    <CategoryIcon icon={icon} label={title} />

    <div className="space-y-0">
      {data.map((item, index) => (
        <MenuItem key={index} {...item} index={index} />
      ))}
    </div>

    {/* Bottom count badge */}
    <div className="mt-4 flex justify-end">
      <span className="text-xs text-stone-600 italic">{data.length} items tersedia</span>
    </div>
  </div>
);

// Decorative floating number
type FloatingNumProps = {
  num: string;
  top: string;
  left?: string;
  right?: string;
};

const FloatingNum = ({ num, top, left, right }: FloatingNumProps) => (
  <div
    className="absolute text-[120px] md:text-[180px] font-black text-stone-800/10 select-none pointer-events-none leading-none"
    style={{ top, left, right }}
  >
    {num}
  </div>
);

const MenuLinks = () => {
  return (
    <section id="menu" className="relative py-24 px-4 bg-stone-900 overflow-hidden">
      {/* Background texture dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #227157, transparent 70%)",
        }}
      />

      <FloatingNum num="01" top="0" left="-20px" />
      <FloatingNum num="02" top="40%" right="-20px" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 bg-[#227157]/10 border border-[#227157]/30 rounded-full px-4 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#227157] animate-pulse" />
            <span className="text-[#227157] text-xs font-semibold tracking-[0.2em] uppercase">
              Pilihan Terbaik
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-100 mb-4 tracking-tight leading-none">
            Daftar{" "}
            <span
              className="relative inline-block"
              style={{
                WebkitTextStroke: "2px #227157",
                color: "transparent",
              }}
            >
              Menu
            </span>
          </h2>

          <p className="text-stone-400 text-sm md:text-base max-w-md mx-auto leading-relaxed mt-4">
            Nikmati pilihan masakan terbaik dari dapur kami.{" "}
            <span className="text-stone-500 text-xs">
              Harga dalam Ribuan Rupiah (K).
            </span>
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#227157]/50" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#227157]/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#227157]/50" />
          </div>
        </motion.div>

        {/* ── Menu Utama (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <MenuListColumn
            title="Menu Utama"
            data={menuMakanan}
            icon={UtensilsCrossed}
          />
        </motion.div>

        {/* ── Snack & Minuman (2 kolom) ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <MenuListColumn
              title="Snack & Jajanan"
              data={menuSnack}
              icon={Sandwich}
            />
            <MenuListColumn
              title="Minuman & Kopi"
              data={menuMinuman}
              icon={Coffee}
            />
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-stone-600 text-xs mt-10 tracking-wide"
        >
          * Harga dapat berubah sewaktu-waktu tanpa pemberitahuan
        </motion.p>
      </div>
    </section>
  );
};

export default MenuLinks;