import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight, Phone } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      name: "Kontak 1",
      number: "+62 812-4312-0007",
      label: "Customer Service",
    },
    {
      name: "Kontak 2",
      number: "+62 851-7519-7923",
      label: "Reservasi & Pesanan",
    },
  ];

  const formatWaLink = (number: string) => {
    return number.replace(/[\s+-]/g, "");
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-stone-100 overflow-hidden">

      {/* ── Decorative background shapes ── */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #227157, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #227157, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* ── Dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #44403c 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto max-w-3xl relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#227157]/10 border border-[#227157]/20 rounded-full px-4 py-1.5 mb-5">
            <MessageCircle className="w-3 h-3 text-[#227157]" />
            <span className="text-[#227157] text-xs font-semibold tracking-[0.2em] uppercase">
              WhatsApp
            </span>
          </div>

          <h2
            className="font-black text-stone-900 mb-4 leading-none tracking-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
          >
            Hubungi{" "}
            <span
              className="italic"
              style={{
                color: "#227157",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Kami
            </span>
          </h2>

          <p className="text-stone-500 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
            Ada pertanyaan atau ingin reservasi? Tim kami siap membantu Anda.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#227157]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#227157]/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#227157]/40" />
          </div>
        </motion.div>

        {/* ── Contact Cards ── */}
        <div className="grid md:grid-cols-2 gap-5">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <a
                href={`https://wa.me/${formatWaLink(contact.number)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="relative p-6 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1"
                  style={{
                    background: "white",
                    border: "1px solid rgba(214,211,209,0.8)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 16px 40px rgba(34,113,87,0.15), 0 4px 12px rgba(0,0,0,0.08)";
                    el.style.borderColor = "rgba(34,113,87,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                    el.style.borderColor = "rgba(214,211,209,0.8)";
                  }}
                >
                  {/* Card number label */}
                  <div className="absolute top-4 right-4 text-stone-200 font-black text-4xl leading-none select-none">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-5 w-12 h-12 rounded-xl bg-[#227157]/10 border border-[#227157]/15 flex items-center justify-center group-hover:bg-[#227157]/15 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#227157]" />
                  </div>

                  {/* Text */}
                  <div className="mb-5">
                    <p className="text-stone-400 text-xs font-medium tracking-widest uppercase mb-1">
                      {contact.label}
                    </p>
                    <h3 className="text-stone-900 font-bold text-base md:text-lg mb-2 tracking-tight">
                      {contact.name}
                    </h3>
                    <p className="text-[#227157] font-semibold text-base md:text-lg tracking-wide">
                      {contact.number}
                    </p>
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center gap-2 text-[#227157] text-xs font-semibold tracking-widest uppercase">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#227157]/0 via-[#227157]/50 to-[#227157]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-stone-400 text-xs mt-10 tracking-wide"
        >
          Klik kartu di atas untuk langsung membuka WhatsApp
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;