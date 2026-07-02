import React from "react";
import galeri1 from "../assets/pengurus.jpeg";
import galeri2 from "../assets/makrab.png";
import galeri3 from "../assets/maisa.png";
import galeri4 from "../assets/upacara.png";
import galeri5 from "../assets/mahasiswipesmi.jpeg";
import galeri6 from "../assets/seminar.png";
import galeri7 from "../assets/wisuda.png";
import galeri8 from "../assets/studi.png";
import galeri9 from "../assets/pengukuhan.png";
import galeri10 from "../assets/mubes.png";

const GaleriPage = () => {
  const galleryItems = [
    { id: 1, img: galeri1, title: "Pengurus Insani" },
    { id: 2, img: galeri2, title: "Masa Keakraban" },
    { id: 3, img: galeri3, title: "Masa Orientasi Santri Baru" },
    { id: 4, img: galeri4, title: "Upacara 17 Agustus" },
    { id: 5, img: galeri5, title: "Mahasiswi Pesmi" },
    { id: 6, img: galeri6, title: "Seminar Living Qur’an" },
    { id: 7, img: galeri7, title: "Wisuda" },
    { id: 8, img: galeri8, title: "Studi banding mahasiswa Jepang" },
    { id: 9, img: galeri9, title: "Pengukuhan Santri baru" },
    { id: 10, img: galeri10, title: "Musyawarah Besar Ospam" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 pt-80 py-16 font-bricolage">
      <div className="mb-10 text-center">
        <h3 className="text-4xl font-semibold">Galeri Santri</h3>
        <p className="mt-4 text-lg text-gray-700">
          Kumpulan dokumentasi kegiatan Pesantren Mahasiswa Al-Hikam Depok.
        </p>
      </div>

      <div className="grid grid-cols-6 gap-2 px-4">
        {galleryItems.map((item, index) => {
          const isTwoCardRow = 
            index === 3 || 
            index === 4 || 
            index === 8 || 
            index === 9;
            
          const colSpan = isTwoCardRow ? "col-span-3" : "col-span-2";

          return (
            <div
              key={item.id}
              className={`group relative aspect-video overflow-hidden rounded-md bg-gray-100 shadow-md cursor-pointer ${colSpan}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center font-medium text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GaleriPage;