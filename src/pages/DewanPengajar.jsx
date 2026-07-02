import React from "react";
import { motion } from "framer-motion";

import fotoHilmy from "../assets/yaihilmi.JPG";
import fotoYusron from "../assets/gusyus.jpg";
import fotoarif from "../assets/prof.JPG";
import fotomun from "../assets/mun.jpeg";
import fotoadib from "../assets/ustadib.JPG";
import fotomahmud from "../assets/ustmahmud.JPG";
import fotosyauqu from "../assets/ustsyauqu.JPG";
import fotomus from "../assets/ustmus.JPG";
import fotoning from "../assets/ningsyifa.jpeg";
import fotoanit from "../assets/anit.png";
import fotoali from "../assets/ustali.JPG";
import fotosyaiful from "../assets/ustsyaiful.JPG";
import fotoais from "../assets/ais.jpeg";
import fotoian from "../assets/ian.jpg";
import fotosahal from "../assets/sahal.png";

const GuruCard = ({ name, role, image, description }) => (
  <div className="w-64 flex-shrink-0 bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group mx-2">
    <div className="h-64 overflow-hidden bg-gray-200">
      <img
        src={image || "https://via.placeholder.com/400x500?text=Foto+Ustadz"}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h4 className="text-sm font-bold text-gray-800 mb-1 leading-tight">
        {name}
      </h4>
      <p className="text-[#597E52] font-semibold text-[12px] mb-2">{role}</p>
      <p className="text-gray-600 text-[11px] leading-relaxed line-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  </div>
);

const DewanPengajar = () => {
  const row1 = [
    { name: "KH. Hilmi Ash Shiddiqy, Lc.", role: "Penasihat Pesantren Al-Hikam", image: fotoHilmy, description: "Pengajar Kitab Nashoihul Ibad dan Bidayatul Hidayah" },
    { name: "Ust Arif Zamhari, M.Ag., Ph.D", role: "Kepala Yayasan Al-Hikam", image: fotoarif, description: "Pengajar Bahasa Inggris dan Fiqih Jinayat" },
    { name: "KH. M. Yusron Shidqi, Lc", role: "Kepala Pesantren Al-Hikam", image: fotoYusron, description: "Pengajar Kitab Aqidatul Awwam dan Al-Hikam" },
    { name: "Usth dr. Syifa Salma, S.Ked, M.Pd.Ked", role: "Kepala Pesantren Mahasiswi Al-Hikam", image: fotoning, description: "Pengajar Kitab Hadis Arba’in dan Bahasa Inggris" },
    { name: "Ust Muhammad Sahal Mahmud, S.Ag", role: "Kepala Pesantren Mahasiswa Al-Hikam", image: fotosahal, description: "Pengajar Bahasa Arab" },
    { name: "Ust Adib Minanul Chalik, M.A", role: "Pengajar Pesantren Al-Hikam", image: fotoadib, description: "Pengajar Kitab Fiqih" },
    { name: "Ust Mahmud Najahul Ulum, M.Ag", role: "Pengajar Pesantren Al-Hikam", image: fotomahmud, description: "Pengajar Kitab Ulumul Qur'an dan Sorogan Kitab" },
  ];

  const row2 = [
    { name: "Ust Ahmad Syauqu Habibie, Lc., M.Si", role: "Pengajar Pesantren Al-Hikam", image: fotosyauqu, description: "Pengajar Tarikh Tasyri’" },
    { name: "Ust Mustofa, S.Pd.I ", role: "Pengajar Pesantren Al-Hikam", image: fotomus, description: "Pengajar Kitab Fiqih" },
    { name: "Ust Ahmad Munawwar M.Ag", role: "Kepala Bagian Akademik", image: fotomun, description: "Pengajar Kitab Sirah Nabawiyyah" },
    { name: "Usth Yukhanit, S.Ag., M.Ag", role: "Kepala Kesantrian", image: fotoanit, description: "Pengajar Ibadah Amaliyah dan Tahsin/Tahfidz" },
    { name: "Ust Dr. Syaifullah, M.Ag ", role: "Penanggung Jawab Tahsin dan Tahfidz", image: fotosyaiful, description: "Pengajar Ushul Fiqih dan Tahsin/Tahfidz" },
    { name: "Ust Dr. Ali Fitriana Rahmat, M.Ag ", role: "Pengajar Pesantren Al-Hikam", image: fotoali, description: "Pengajar Sorogan Aqidatul Awwam" },
    { name: "Ust Ais Fathinisthofa, M. Si ", role: "Kepala Kurikulum", image: fotoais, description: "Pengajar Kitab Arba'in Nawawi" },
    { name: "Ust Dr. M. Ardiansyah, M.Pd.I", role: "Pengajar Pesantren Al-Hikam", image: fotoian, description: "Pengajar Kitab Adabul 'Alim" },
  ];

  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <div className="min-h-screen pt-40 md:pt-60 bg-white font-bricolage py-16">
      <div className="max-w-7xl mt-20 mx-auto px-4 md:px-10">
        <div className="text-center">
          <h3 className="text-4xl font-semibold mb-4 text-gray-900">
            Dewan Pengajar
          </h3>
          <p className="text-gray-600 mt-4 mb-10 text-lg max-w-2xl mx-auto">
            Tenaga pendidik yang membimbing dan mengembangkan keilmuan serta
            karakter santri.
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative overflow-hidden flex">
            <motion.div
              className="flex"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: { repeat: Infinity, duration: 35, ease: "linear" },
              }}
            >
              {duplicatedRow1.map((t, index) => (
                <GuruCard key={`row1-${index}`} {...t} />
              ))}
            </motion.div>
          </div>

          <div className="relative overflow-hidden flex">
            <motion.div
              className="flex"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: { repeat: Infinity, duration: 40, ease: "linear" },
              }}
            >
              {duplicatedRow2.map((t, index) => (
                <GuruCard key={`row2-${index}`} {...t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DewanPengajar;