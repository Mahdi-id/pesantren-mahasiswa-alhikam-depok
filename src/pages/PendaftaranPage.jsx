import React from "react";
import gambarBrosur1 from "../assets/BrosurPSB-01.png";
import gambarBrosur2 from "../assets/BrosurPSB-02.png";

const PendaftaranPage = () => {
  const linkPendaftaran = "https://bit.ly/PSB25Alhikam";

  return (
    <div className="max-w-7xl mx-auto pt-80 p-4 py-16 font-bricolage">
      <div className="mb-12 text-center">
        <h3 className="text-4xl font-semibold">Pendaftaran Santri Baru</h3>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Bergabunglah menjadi bagian dari keluarga besar Pesantren Mahasiswa
          Al-Hikam Depok.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-16 shadow-2xl rounded-2xl overflow-hidden">
        <img
          src={gambarBrosur1}
          alt="Brosur Halaman 1"
          className="w-full h-auto object-contain"
        />
        <img
          src={gambarBrosur2}
          alt="Brosur Halaman 2"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="flex justify-center">
        <a
          href={linkPendaftaran}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center px-10 py-5 text-white bg-[#597E52] rounded-xl hover:bg-[#466341] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
        >
          <span className="text-xl font-bold">Daftar Sekarang</span>
          <svg
            className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PendaftaranPage;
