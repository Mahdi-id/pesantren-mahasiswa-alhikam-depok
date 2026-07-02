import React from "react";
import { motion } from "framer-motion";
import gambarDirosah from "../assets/dirosa.png";
import gambarIlmiah from "../assets/test.png";
import gambarOrganisasi from "../assets/ospam.png";
import gambarLifeSkill from "../assets/kerja.png";

const Programs = () => {
  const items = [
    { title: "Sistem Dirosah Terstruktur", img: gambarDirosah },
    { title: "Penguatan Budaya Ilmiah Santri", img: gambarIlmiah },
    { title: "Organisasi & Kepemimpinan Santri", img: gambarOrganisasi },
    { title: "Program Kesiapan Hidup", img: gambarLifeSkill },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 overflow-hidden font-bricolage">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-4xl mb-10 font-semibold text-center text-gray-800">
          Program Unggulan
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-md mb-3 shadow-sm border border-gray-100">
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-[350px] md:h-[300px] object-cover"
              />
            </div>
            <p className="text-xl font-medium leading-tight group-hover:text-[#597E52] transition-colors duration-300">
              {item.title}
            </p>
            <div className="mt-2 w-0 h-[2px] bg-[#597E52] transition-all duration-300 group-hover:w-10" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Programs;
