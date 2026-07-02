import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/pnj.png";
import img2 from "../assets/ui.png";
import img3 from "../assets/polmed.png";
import img4 from "../assets/up.png";
import img5 from "../assets/ug.png";
import img6 from "../assets/app.png";
import img7 from "../assets/uin.png";
import fotoRobert from "../assets/robert.jpg";
import fotoAli from "../assets/alyy.png";
import fotoHamdan from "../assets/hamdan.jpg";
import fotoMukhlas from "../assets/ady.png";
import fotoSidqon from "../assets/sidqon.jpeg";
import fotoWahyudin from "../assets/wahyudin.jpeg";
import fotoYama from "../assets/yama.jpeg";
import fotoHusna from "../assets/husna.jpeg";
import fotoSahla from "../assets/sahla.jpeg";
import fotoSalsa from "../assets/salsa.jpeg";

const UnivCard = ({ img, name, count = 0, fullWidth = false }) => (
  <div
    className={`relative rounded-md overflow-hidden shadow-sm border border-gray-100 group h-full w-full`}
  >
    <img
      src={img}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      alt={name}
    />
    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
      <p className="text-white font-bold text-xl md:text-2xl text-center px-4 mb-2">
        {name}
      </p>
      <div className="bg-[#597E52] text-white px-4 py-1 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        {count} Santri
      </div>
    </div>
  </div>
);

const ProfilSantri = () => {
  const universities = [
    { img: img1, name: "Politeknik Negeri Jakarta", count: 6 },
    { img: img2, name: "Universitas Indonesia", count: 74 },
    { img: img3, name: "Politeknik Negeri Media Kreatif", count: 3 },
    { img: img4, name: "Universitas Pancasila", count: 3 },
    { img: img5, name: "Universitas Gunadarma", count: 4 },
    { img: img6, name: "Politeknik APP Jakarta", count: 1 },
  ];

  const achievements = [
    {
      id: 1,
      title: "Juara 1 Contract Drafting and Negotiation Competition",
      event: "The 13th Internal Contract Drafting Competition 2025 - UI Depok",
      img: fotoRobert,
      category: "Hukum",
    },
    {
      id: 2,
      title:
        "Awardee of UI INSPIRE Scholarship 2023 and International Research Intern at RIMD",
      event: "Osaka University - Japan",
      img: fotoYama,
      category: "Beasiswa Internasional",
    },
    {
      id: 3,
      title: "Juara 2 National Business Model Canvas Competition",
      event: "Semar Entrepreneur 2025 - UNS Solo",
      img: fotoAli,
      category: "Ekonomi/Bisnis",
    },
    {
      id: 4,
      title: "Juara 1 LCC Bahasa Arab",
      event: "Hammasah Arabiyyah Festival 3 - Jakarta Timur",
      img: fotoWahyudin,
      category: "Bahasa",
    },
    {
      id: 5,
      title: "Best Paper Award",
      event:
        "International Conference on Islamic Studies and Civilisatioon 2025 - Malaysia",
      img: fotoHamdan,
      category: "Karya Ilmiah",
    },
    {
      id: 6,
      title: "Peserta Terbaik Lomba Menulis Cerpen",
      event: "Penerbit Esamedia 2025",
      img: fotoHusna,
      category: "Sastra & Literasi",
    },
    {
      id: 7,
      title: "Juara 2 & Best Speaker Debat Kandungan Al-Qur'an dan Hadist",
      event: "MTQ UI 2024 - Depok",
      img: fotoSidqon,
      category: "Debat & Religi",
    },
    {
      id: 8,
      title: "Juara 1 MtarQ Nasional UNNES 2023",
      event: "UNNES - Semarang",
      img: fotoSahla,
      category: "Religi & Al-Qur'an",
    },
    {
      id: 9,
      title: "Juara 3 Next Generation IT TrackWorld",
      event: "Vocational Skills Competition - Cambodia",
      img: fotoMukhlas,
      category: "Teknologi Informasi",
    },
    {
      id: 10,
      title: "Juara 1 Kejuaraan Pencak Silat",
      event: "Jakarta National Championship",
      img: fotoSalsa,
      category: "Olahraga & Seni Beladiri",
    },
  ];

  const duplicatedAchievements = [...achievements, ...achievements];

  return (
    <div className="min-h-screen bg-white font-bricolage max-w-7xl mx-auto p-4 py-16">
      <section className="mb-20">
        <h3 className="text-4xl mt-64 mb-10 font-semibold text-center text-gray-800">
          Latar Belakang Pendidikan
        </h3>
        <p className="prose prose-lg max-w-none text-lg leading-relaxed text-justify mb-8 text-gray-700">
          Pesantren Mahasiswa Al-Hikam telah menerima dua belas angkatan dan
          Pesantren Mahasiswi Al-Hikam telah menerima sembilan angkatan. Santri
          merupakan para mahasiswa program diploma, sarjana, maupun magister
          dari perguruan tinggi sekitar diantaranya :
        </p>

        <div className="grid gap-2">
          <div className="grid grid-cols-[6fr_4fr] gap-2 h-[250px] md:h-[180px]">
            <UnivCard {...universities[0]} />
            <UnivCard {...universities[1]} />
          </div>
          <div className="grid grid-cols-[4fr_6fr] gap-2 h-[250px] md:h-[180px]">
            <UnivCard {...universities[2]} />
            <UnivCard {...universities[3]} />
          </div>
          <div className="grid grid-cols-[6fr_4fr] gap-2 h-[250px] md:h-[180px]">
            <UnivCard {...universities[4]} />
            <UnivCard {...universities[5]} />
          </div>
          <div className="h-[250px] md:h-[180px]">
            <UnivCard
              img={img7}
              name="UIN Syarif Hidayatullah"
              count={1}
              fullWidth
            />
          </div>
        </div>
      </section>

      <section className="mb-20 overflow-hidden">
        <h3 className="text-4xl font-semibold text-center text-gray-800">
          Prestasi Akademik
        </h3>
        <p className="text-lg text-center mt-4 mb-10 text-gray-700 max-w-2xl mb-10 mx-auto">
          Rekam Jejak Prestasi Akademik Santri yang Unggul dan Berdaya Saing
        </p>
        <div className="relative flex">
          <motion.div
            className="flex gap-2 pr-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedAchievements.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="min-w-[300px] bg-white rounded-md overflow-hidden shadow-md border border-gray-100 mb-4"
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#597E52] text-white text-[10px] px-3 py-1 rounded-full mb-3 uppercase font-bold">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-lg text-gray-800 mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 italic">{item.event}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProfilSantri;
