import React from "react";
import { motion } from "framer-motion";

import gambarTanbih from "../assets/tanbih2.png";
import gambarHaul from "../assets/haul.png";
import gambarPelantikan from "../assets/pelantikan.png";
import gambarKajian from "../assets/tanbih.png";

const Articles = () => {
  const items = [
    {
      title: "Tanbih Kedatangan Mahasiswa, Tekankan Kesungguhan Menuntut Ilmu",
      author: "Habiburrahman",
      date: "Jan 17, 2026",
      img: gambarTanbih,
      url: "https://walisongoonline.com/tanbih-kedatangan-santri-al-hikam-depok/",
    },
    {
      title:
        "Haul Abah Hasyim Muzadi ke-8 : Pesma Al-Hikam Depok Gelar Silatnas Lintas Generasi",
      author: "Mar'atus Sholikhah",
      date: "Feb 20, 2025",
      img: gambarHaul,
      url: "https://walisongoonline.com/haul-abah-hasyim-muzadi-ke-8-pesma-al-hikam-depok-gelar-silatnas-lintas-generasi/",
    },
    {
      title:
        "Pelantikan Pengurus Organisasi Al-Hikam 2025 : Menjadi Pemimpin dan Siap Dipimpin",
      author: "Nur Aisyah",
      date: "Mar 2, 2025",
      img: gambarPelantikan,
      url: "https://walisongoonline.com/pelantikan-pengurus-organisasi-al-hikam-2025-menjadi-pemimpin-dan-siap-dipimpin/",
    },
    {
      title:
        "Pesantren Mahasiswa Al-Hikam Depok Gelar Tanbih 'Am dan Kajian Kitab Al-Hikam",
      author: "Al-Hikam Depok",
      date: "Nov 9, 2025",
      img: gambarKajian,
      url: "https://walisongoonline.com/tanbih-am-kajian-kitab-al-hikam-pesantren-mahasiswa-al-hikam/",
    },
  ];

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-sans overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="font-bricolage text-4xl mb-10 font-semibold text-center text-gray-800">
          Berita dan Artikel
        </h3>
        
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {items.map((item, i) => (
          <motion.a
            href={item.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex flex-col group"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100 shadow-sm border border-gray-100">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center gap-2 text-gray-700 mb-2 uppercase font-medium font-bricolage text-xs md:text-sm">
              <span>{item.author}</span>
              <span className="text-gray-400">|</span>
              <span>{item.date}</span>
            </div>

            <h4 className="font-bricolage text-lg font-medium leading-snug text-gray-900 group-hover:text-[#597E52] transition-colors duration-300 line-clamp-3">
              {item.title}
            </h4>

            <span className="font-bricolage text-sm text-[#597E52] mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Baca Artikel →
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Articles;
