import React from "react";
import { motion } from "framer-motion";
import tokohImg from "../assets/Intersect.png";
import pattern from "../assets/pattern.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 pt-80 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-bricolage text-5xl font-semibold mb-16 text-center"
      >
        Layanan Informasi Pesantren Mahasiswa Al-Hikam
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#597E52] text-white rounded-lg relative overflow-hidden min-h-[280px] md:min-h-[320px]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden md:block absolute inset-0 bg-no-repeat bg-right-bottom bg-contain pointer-events-none"
          style={{
            backgroundImage: `url(${pattern})`,
          }}
        />

        <div className="relative flex flex-col md:flex-row items-end md:items-center  justify-between gap-6 h-full">
          <div className="max-w-3xl px-10  pt-24 md:p-10 text-left self-center text-left self-center">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="font-bricolage italic text-2xl mb-4 "
            >
              "Jika yang kosong adalah akalnya, isilah ia dengan ilmu. Jika yang
              kosong adalah hatinya, isilah ia dengan dzikir. Kesatuan pikir dan
              dzikir akan membentuk Ulul Albab."
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="font-bricolage font-semibold text-xl"
            >
              KH. Hasyim Muzadi
            </motion.p>
          </div>

          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            src={tokohImg}
            alt="KH. Hasyim Muzadi"
            className="relative z-10 w-64 md:w-72 rounded-xl pt-4 shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
