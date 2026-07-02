import React from "react";
import { motion } from "framer-motion";
import mosqueIcon from "../assets/mosque-01.svg";
import medalIcon from "../assets/medal-01.svg";
import targetIcon from "../assets/target-01.svg";

const Pillars = () => {
  const items = [
    {
      title: "AMALIAH AGAMA",
      desc: "Pembinaan Akidah, Ibadah, Dan Akhlak Dalam Kehidupan Santri Sehari-Hari.",
      icon: mosqueIcon,
      color: "border-[#597E52]",
    },
    {
      title: "PRESTASI ILMIAH",
      desc: "Penguatan Budaya Akademik, Pemikiran Kritis, Dan Pengembangan Ilmu Pengetahuan.",
      icon: medalIcon,
      color: "border-[#C6A969]",
    },
    {
      title: "KESIAPAN HIDUP",
      desc: "Pembekalan Keterampilan Hidup, Kemandirian, Dan Tanggung Jawab Sosial.",
      icon: targetIcon,
      color: "border-[#597E52]",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 overflow-hidden font-bricolage">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h3 className="text-4xl mb-10 font-semibold text-center text-gray-800">Fondasi Pendidikan Pesantren</h3>
        
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`border-2 border-t-4 bg-white rounded-md p-4 text-center shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center ${item.color}`}
          >
            <div className="mb-6">
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
            </div>
            <h4 className="font-semibold mb-3 text-xl">{item.title}</h4>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pillars;
