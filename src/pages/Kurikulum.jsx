import React from "react";

const MATKUL_UMUM = [
  { matkul: "Al-Hikam", deskripsi: "Pendalaman nilai spiritual dan hikmah kehidupan" },
  { matkul: "Tahfidz & Tahsin", deskripsi: "Membaca dan menghafal Al-Qur’an" },
  { matkul: "Nashoihul Ibad", deskripsi: "Pembentukan karakter melalui nasihat ulama" },
  { matkul: "Bahasa Arab", deskripsi: "Alat memahami teks Arab" },
  { matkul: "Bidayatul Hidayah", deskripsi: "Pembinaan akhlak dan penyucian jiwa" },
  { matkul: "Sirah Nabawiyah", deskripsi: "Sejarah kehidupan Nabi Muhammad" },
];

const TabelKurikulum = ({ judul, data }) => (
  <div className="mb-12">
    <h4 className="font-bold mb-4 text-xl">{judul}</h4>
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 font-bold text-lg w-16 text-center">No</th>
            <th className="p-4 font-bold text-lg w-1/4">Mata Pelajaran</th>
            <th className="p-4 font-bold text-lg">Deskripsi Keilmuan</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-100 hover:bg-green-50/30 transition-colors">
              <td className="p-4 text-lg text-center font-medium text-gray-400">{index + 1}</td>
              <td className="p-4 text-lg font-semibold text-gray-800">{item.matkul}</td>
              <td className="p-4 text-lg text-gray-600 leading-relaxed">{item.deskripsi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Kurikulum = () => {
  const kurikulumData = {
    tingkat1: [
      { matkul: "Aqidatul Awwam", deskripsi: "Dasar keimanan" },
      { matkul: "Adabul ‘Alim", deskripsi: "Etika belajar" },
      { matkul: "Fikih Ibadah", deskripsi: "Dasar Hukum ibadah" },
      { matkul: "Arba'in Nawawi", deskripsi: "Prinsip dasar Islam" },
      ...MATKUL_UMUM,
    ],
    tingkat2: [
      { matkul: "Fikih Muamalah", deskripsi: "Transaksi sosial" },
      { matkul: "Ulumul Qur'an", deskripsi: "Metodologi Al-Qur’an" },
      { matkul: "Bahasa Inggris", deskripsi: "Akses ilmu global" },
      { matkul: "Tarikh Tasyri’", deskripsi: "Perkembangan hukum Islam" },
      ...MATKUL_UMUM,
    ],
    tingkat3: [
      { matkul: "Fikih Mawaris", deskripsi: "Pembagian warisan" },
      { matkul: "Fikih Munakahat", deskripsi: "Pernikahan & keluarga" },
      { matkul: "Ushul Fiqih", deskripsi: "Metode untuk menggali hukum syar'i dari dalil." },
      ...MATKUL_UMUM,
    ],
    tingkat4: [
      { matkul: "Sorogan Aqidatul Awwam", deskripsi: "Praktik baca kitab" },
      { matkul: "Sorogan Adabul Alim", deskripsi: "Praktik baca kitab" },
      { matkul: "Ibadah Amaliyah", deskripsi: "Praktik langsung" },
      { matkul: "Fiqh Jinayat", deskripsi: "Hukum pidana Islam" },
      ...MATKUL_UMUM,
    ],
  };

  return (
    <div className="max-w-7xl md:pt-60 mx-auto p-4 py-16 font-bricolage">
      <div className="mb-10 pt-20 text-center">
        <h3 className="text-4xl font-semibold">Kurikulum Pendidikan</h3>
        <p className="mt-4 text-lg text-gray-700">
          Daftar mata pelajaran santri selama 4 tahun masa pendidikan.
        </p>
      </div>

      {Object.entries(kurikulumData).map(([key, value], i) => (
        <TabelKurikulum key={i} judul={`Tingkat ${i + 1}`} data={value} />
      ))}
    </div>
  );
};

export default Kurikulum;