import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DetailPilar = () => {
  const { pilarId } = useParams();

  const contentData = {
    kepengasuhan: {
      title: "Kepengasuhan",
      subtitle: "Ri’ayah wal Irsyad",
      accent: "bg-[#597E52]",
      textAccent: "text-[#597E52]",
      description:
        "Kepengasuhan mengemban tugas penyampaian tausiyah, bimbingan dan arahan tentang nilai-nilai agama serta persoalan kehidupan kemasyarakatan. Fokus utamanya adalah membentuk karakter santri menjadi insan yang saleh secara syariat dan konteks zamannya.",
      competencies: [
        "Mampu memahami eksistensi Tuhan sebagai Dzat yang disembah dan menciptakan.",
        "Santri taat menjalankan ibadah.",
        "Santri rajin dan taat dalam berdoa.",
        "Mampu menyeimbangkan antara dzikir dan pikir.",
        "Mampu menghindarkan diri dari kecurangan dalam meraih prestasi.",
      ],
      activities: [
        {
          name: "Pengajian Minggu Pagi",
          time: "Mingguan",
          desc: "Kajian Kitab Al-Hikam setelah Subuh.",
        },
        {
          name: "Istighotsah",
          time: "Mingguan",
          desc: "Doa bersama seluruh civitas pesantren.",
        },
        {
          name: "Tanbih A’am",
          time: "Bulanan",
          desc: "Tausiyah langsung dari Pengasuh Pesantren.",
        },
        {
          name: "Orientasi Santri",
          time: "Tahunan",
          desc: "Penanaman jiwa dan motto pesantren.",
        },
      ],
    },
    pengajaran: {
      title: "Pengajaran",
      subtitle: "Dirosah",
      accent: "bg-[#C6A969]",
      textAccent: "text-[#C6A969]",
      description:
        "Program pembelajaran klasikal terstruktur selama 4 tahun yang diarahkan pada pengembangan intelektual (kognitif) santri, mencakup materi agama dasar hingga metodologi keilmuan.",
      competencies: [
        "Memiliki pengetahuan dan keterampilan pengembangan IPTEKS sesuai program studi di perguruan tinggi.",
        "Mampu menemukan relevansi antara bidang studi yang dipelajari dengan nilai keyakinan agama.",
        "Memiliki spirit dan terampil dalam menulis artikel ilmiah yang dimuat dalam jurnal.",
        "Memiliki kemampuan untuk menyaring dan mengelola informasi secara tepat dan benar.",
        "Mampu menyeimbangkan antara penggunaan dalil naqli dan dalil aqli.",
      ],
      activities: [
        {
          name: "Pengajaran Klasikal",
          time: "Harian",
          desc: (
            <div className="space-y-2">
              <p>Proses belajar mengajar terstruktur di kelas yang meliputi:</p>
              <ul className="list-none space-y-1 text-[14px] opacity-80">
                <li>
                  • <strong className="text-gray-700">Dasar:</strong> Al-Qur'an,
                  Bahasa Arab/Inggris, Fiqih Ibadah.
                </li>
                <li>
                  • <strong className="text-gray-700">Pokok:</strong> Fiqih
                  Muamalah/Munakahat, Aqidah, Ilmu Hadits, Ushul Fiqih.
                </li>
                <li>
                  • <strong className="text-gray-700">Penunjang:</strong>{" "}
                  Komunikasi, Manajemen, Organisasi, Kewirausahaan.
                </li>
              </ul>
            </div>
          ),
        },
        {
          name: "Pengajaran Kolektif",
          time: "Mingguan",
          desc: "Kajian kitab kuning bersama seluruh santri yang dilaksanakan secara massal di Masjid.",
        },
      ],
    },
    kesantrian: {
      title: "Kesantrian",
      subtitle: "Ta’dib wat Tahdzib",
      accent: "bg-[#597E52]",
      textAccent: "text-[#597E52]",
      description:
        "Pilar yang mendampingi santri dalam proses transformasi dan aktualisasi diri. Di sini, pendidikan didelegasikan langsung kepada santri sebagai subjek utama yang merencanakan, melaksanakan, sekaligus mengevaluasi setiap kegiatan melalui wadah organisasi.",
      competencies: [
        "Mampu bekerjasama dan membangun team work yang solid.",
        "Mampu menggunakan metode yang tepat dalam berkomunikasi.",
        "Mampu memposisikan diri dan perannya secara tepat dalam kelompok.",
        "Memiliki perencanaan dan mampu merealisasikan pengembangan karier.",
        "Memiliki etos kerja yang tinggi (keras, cerdas, dan ikhlas).",
      ],
      activities: [
        {
          name: "OSPAM",
          time: "Organisasi",
          desc: "Wadah kepemimpinan, kreativitas, dan pengembangan diri bagi santri putra.",
        },
        {
          name: "INSANI",
          time: "Organisasi",
          desc: "Wadah aspirasi, organisasi, dan pengembangan bakat bagi santri putri.",
        },
      ],
    },
  };

  const data = contentData[pilarId];
  const pilarKeys = Object.keys(contentData);

  if (!data)
    return (
      <div className="h-screen flex items-center justify-center font-bricolage">
        Data not found
      </div>
    );

  return (
    <div className="min-h-screen mt-40 bg-[#FDFDFD] font-bricolage text-gray-900 selection:bg-gray-200">
      <AnimatePresence mode="wait">
        <motion.main
          key={pilarId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-6 pt-32 pb-24"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-gray-100 pb-6 gap-6">
            <Link
              to="/pendidikan/sistem"
              className="inline-flex items-center text-lg font-bold tracking-[0.1em] text-gray-400 hover:text-gray-900 transition-all duration-300 group"
            >
              <span className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300">
                &lt;
              </span>
              Kembali ke Sistem Pendidikan
            </Link>

            <nav className="flex items-center bg-gray-50 p-1 rounded-full border border-gray-100">
              {pilarKeys.map((key) => (
                <Link
                  key={key}
                  to={`/sistem-pendidikan/${key}`}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider transition-all uppercase ${
                    pilarId === key
                      ? `${data.accent} text-white shadow-sm`
                      : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  {key}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
              <div>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white mb-4 ${data.accent}`}
                >
                  PILAR PENDIDIKAN
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 uppercase">
                  {data.title}
                </h1>
                <p
                  className={`text-xl md:text-2xl font-light italic ${data.textAccent}`}
                >
                  {data.subtitle}
                </p>
              </div>
              <div className="max-w-md">
                <p className="text-gray-500 leading-relaxed text-lg">
                  {data.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h3 className="text-sm font-bold tracking-[0.2em] mb-8 uppercase">
                Standar Kompetensi
              </h3>
              <div className="space-y-6">
                {data.competencies.map((item, i) => (
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="flex items-start gap-4 border-l-2 border-gray-100 pl-6 py-1 hover:border-gray-900 transition-colors"
                  >
                    <span className="text-gray-300 font-mono text-sm">
                      0{i + 1}
                    </span>
                    <p className="font-medium text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="text-sm font-bold tracking-[0.2em] mb-8 uppercase">
                Bentuk Kegiatan
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.activities.map((act, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-500"
                  >
                    <span className="text-[12px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded mb-4 inline-block italic">
                      {act.time}
                    </span>
                    <h4 className="font-bold text-gray-900 mb-2">{act.name}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default DetailPilar;
