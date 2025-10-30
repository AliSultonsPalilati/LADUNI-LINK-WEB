import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contacts = [
    {
      name: "Contact 1",
      number: "+62 812-4312-0007",
      icon: MessageCircle,
    },
    {
      name: "Contact 2",
      number: "+62 851-7519-7923",
      icon: MessageCircle,
    },
  ];

  const formatWaLink = (number: string) => {
    return number.replace(/[\s+-]/g, '');
  };

  return (
    // 1. Latar belakang diubah jadi terang (krem/abu-abu hangat)
    <section id="contact" className="py-20 px-4 bg-stone-100">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* 2. Teks diubah jadi gelap agar kontras dengan background terang */}
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-stone-700 text-lg">
            Ada pertanyaan? Tim kami siap membantu Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a
                href={`https://wa.me/${formatWaLink(contact.number)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* 3. Card dibuat putih bersih, border sangat tipis */}
                <Card
                  className="p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white border-stone-200/80"
                >
                  <div className="flex items-center gap-4">
                    {/* 4. Aksen hijau tetap dipertahankan */}
                    <div className="bg-[#227157]/10 p-4 rounded-full">
                      <contact.icon className="w-6 h-6 text-[#227157]" />
                    </div>
                    <div className="text-left">
                      {/* 5. Teks di dalam card juga diubah jadi gelap */}
                      <h3 className="text-lg font-semibold text-stone-900 mb-1">
                        {contact.name}
                      </h3>
                      {/* 6. Nomor telepon menggunakan warna hijau aksen */}
                      <p className="text-[#227157] font-medium">
                        {contact.number}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;