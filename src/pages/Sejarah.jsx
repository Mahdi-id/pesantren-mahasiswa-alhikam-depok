import React from "react";

const Sejarah = () => (
  <div className="min-h-screen pt-40 mt-20 md:pt-60 bg-white font-bricolage max-w-7xl mx-auto p-4 py-16">
    <h3 className="text-4xl font-semibold text-center mb-10">
      Profil Pesantren
    </h3>

    <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-2xl border-b-4 border-[#597E52] mb-12">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/lU3vBpn9iZU"
        title="Profil Al-Hikam"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <h3 className="text-4xl  font-semibold text-center mb-10">
      Gagasan dan Latar Belakang Al-Hikam Depok
    </h3>
    <div className="prose prose-lg max-w-none text-lg leading-relaxed text-justify space-y-6 text-gray-700">
      <p>
        Pesantren Mahasiswa Al-Hikam Depok didirikan pada 9 Januari 2011 oleh
        KH. A. Hasyim Muzadi dengan visi besar untuk menghapus dikotomi antara
        ilmu pengetahuan dan agama. Gagasan utama dari lembaga ini adalah
        memadukan dimensi positif perguruan tinggi yang berbasis IPTEK dengan
        nilai-nilai pesantren sebagai tempat penempaan moral dan kepribadian
        yang kokoh. Melalui model pendidikan ini, diharapkan setiap keyakinan
        agama memiliki pijakan ilmiah-rasional, sementara ilmu pengetahuan tetap
        bernaung di bawah nilai-nilai agama dalam sebuah ekosistem learning
        society.
      </p>
      <p>
        Latar belakang berdirinya pesantren ini berawal dari tanggung jawab
        ulama KH. A. Hasyim Muzadi untuk berkhidmat kepada umat, yang dimulai
        dengan merintis pengajian rutin dari rumah ke rumah sejak tahun 1984.
        Perjalanan panjang ini melibatkan dukungan besar masyarakat Jantisari,
        mulai dari pembangunan surau kecil At-Taubah hingga berdirinya Masjid
        Al-Ghazali pada tahun 1989. Pada tanggal 3 Juli 1989, Yayasan Al-Hikam
        resmi dibentuk sebagai pusat program pengembangan SDM dan dakwah, yang
        kemudian berkembang menjadi Pesantren Mahasiswa Al-Hikam Depok sebagai
        wadah integrasi bagi santri dari berbagai latar belakang keilmuan.
      </p>
      <p></p>
    </div>
  </div>
);

export default Sejarah;
