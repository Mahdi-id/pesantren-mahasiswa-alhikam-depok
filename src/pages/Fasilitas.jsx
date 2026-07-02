import React from "react";
import imgMasjid from "../assets/masjid.png";
import imgAsrama from "../assets/asramaptr.png";
import imgPerpus from "../assets/perpus.png";
import imgaudit from "../assets/audit.png";
import imgOlahraga from "../assets/olahraga.png";
import imgWifi from "../assets/pusyankes.png";
import imgmart from "../assets/mart.png";
import imgAsramaa from "../assets/asramaptra.png";

const FacilityCard = ({ title, desc, image }) => (
  <div className="bg-white rounded-md overflow-hidden border-2 border-b-4 border-gray-100 transition-all group shadow-sm hover:shadow-md">
    <div className="h-48 overflow-hidden bg-gray-200">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h4 className="text-xl font-semibold  text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Fasilitas = () => {
  const items = [
    {
      title: "Masjid Al-Hikam",
      desc: "Pusat ibadah dan kajian rutin.",
      image: imgMasjid,
    },
    {
      title: "Asrama Putri",
      desc: "Tempat tinggal nyaman untuk mahasiswa.",
      image: imgAsrama,
    },
     {
      title: "Asrama Putra",
      desc: "Tempat tinggal nyaman untuk mahasiswa.",
      image: imgAsramaa,
    },
    {
      title: "Ruang Belajar & Perpus",
      desc: "Ruang Belajar disertai Koleksi literatur klasik dan modern.",
      image: imgPerpus,
    },
    {
      title: "Auditorium",
      desc: "Ruang belajar representatif untuk mendukung aktivitas akademik.",
      image: imgaudit,
    },
    {
      title: "Area Olahraga",
      desc: "Sepak bola, voli, badminton, tenis meja.",
      image: imgOlahraga,
    },
    {
      title: "Pusyankes",
      desc: "Layanan kesehatan terpadu bagi Santri.",
      image: imgWifi,
    },
    {
      title: "Al Hikam Mart & ATM",
      desc: "Mini market dengan fasilitas ATM.",
      image: imgmart,
    },
   
  ];

  return (
    <div className="min-h-screen pt-40 md:pt-60 bg-white font-bricolage max-w-7xl mx-auto p-4 py-16">
      <div className="text-center mt-20 mb-10">
        <h3 className="text-4xl font-semibold mb-4 text-gray-900">
          Fasilitas Pesantren
        </h3>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Sarana dan prasarana lengkap yang kami sediakan untuk mendukung aktivitas akademik dan spiritual santri.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map((item, index) => (
          <FacilityCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Fasilitas;