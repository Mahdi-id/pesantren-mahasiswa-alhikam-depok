import React from "react";
import { Link } from "react-router-dom";

const SistemPendidikan = () => {
  const pilarPendidikan = [
    {
      id: "kepengasuhan",
      title: "Kepengasuhan (Ri’ayah wal Irsyad)",
      color: "border-[#597E52]",
      desc: "Berfokus pada pembinaan karakter, spiritualitas, dan nilai kehidupan melalui bimbingan langsung.",
      points: [
        "Pengajian Minggu Pagi (Al-Hikam)",
        "Istighosah Mingguan",
        "Tahlil & Doa Bersama",
      ],
    },
    {
      id: "pengajaran",
      title: "Pengajaran (Dirosah)",
      color: "border-[#C6A969]",
      desc: "Pembelajaran klasikal terstruktur untuk mengembangkan kemampuan intelektual santri.",
      points: [
        "Waktu: Ba’da Subuh, Maghrib, Isya",
        "Durasi program: 4 tahun",
        "Pembelajaran terukur & terjadwal",
      ],
    },
    {
      id: "kesantrian",
      title: "Kesantrian (Ta’dib wat Tahdzib)",
      color: "border-[#597E52]",
      desc: "Pembentukan kemandirian melalui organisasi dan kegiatan sosial kemasyarakatan.",
      points: [
        "Organisasi Santri (OSPAM)",
        "Pengabdian Masyarakat",
        "Pengelolaan program pesantren",
      ],
    },
  ];

  return (
    <div className="max-w-7xl md:pt-60 mx-auto p-4 py-16 font-bricolage">
      <div className="mb-10 pt-20 text-center">
        <h3 className="text-4xl font-semibold">Sistem Pendidikan</h3>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Pelaksanaannya didukung oleh tiga pilar utama yaitu kepengasuhan,
          dirosah, dan kesantrian yang saling terintegrasi.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {pilarPendidikan.map((pilar, i) => (
          <div
            key={i}
            className={`bg-white p-8 rounded-md shadow-sm border-t-4 border-2 hover:shadow-lg transition-all flex flex-col justify-between ${pilar.color}`}
          >
            <div>
              <h4 className="text-xl font-bold mb-4 text-center">
                {pilar.title}
              </h4>
              <p className="text-gray-600 mb-4">{pilar.desc}</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 mb-6">
                {pilar.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>

            <Link
              to={`/sistem-pendidikan/${pilar.id}`}
              className="mt-4 inline-block w-full text-center py-2.5 border-2 border-[#597E52] text-[#597E52] font-bold rounded-md hover:bg-[#597E52] hover:text-white transition-all duration-300"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SistemPendidikan;
