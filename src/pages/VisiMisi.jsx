import React from "react";

const VisiMisi = () => {
  const data = {
    visi: "Mewujudkan pesantren mahasiswa Al-Hikam sebagai masyarakat belajar untuk mengembangkan potensi fitrah insaniah yang mengintegrasikan etika agama, etika ilmiah dan etika sosial.",
    misi: "Pusat penempaan moral agama, pusat penumbuhan budaya ilmiah, pusat pembekalan kecakapan hidup [life skill] dan tanggung jawab sosial.",
  };

  return (
    <div className="min-h-screen pt-40 mt-20 md:pt-60 bg-white font-bricolage max-w-7xl mx-auto p-4 py-16">
      <h3 className="text-4xl font-semibold text-center">Visi, Misi & Tujuan</h3>
      <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto text-center mb-12">
  Arah dan landasan pengembangan pesantren dalam membentuk santri yang berilmu, berakhlak, dan siap menghadapi kehidupan.
</p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="p-8 bg-white border-2 border-b-4 border-[#C6A969] rounded-md text-center shadow-sm">
          <h4 className="text-2xl font-bold mb-6">VISI</h4>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">"{data.visi}"</p>
        </div>
        <div className="p-8 bg-white border-2 border-b-4 border-[#C6A969] rounded-md text-center shadow-sm">
          <h4 className="text-2xl font-bold mb-6">MISI</h4>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">"{data.misi}"</p>
        </div>
      </div>
      <div className="p-8 border-2 border-b-4 border-[#597E52] rounded-md bg-gray-50">
        <h4 className="text-2xl text-center font-black tracking-widest text-gray-800 mb-6">TUJUAN</h4>
        <ol className="text-gray-600 text-lg font-medium text-center space-y-4">
          <li>1. Menghasilkan alumni yang berilmu pengetahuan luas dan bijaksana</li>
          <li>2. Menghasilkan alumni yang cakap memecahkan problematika kehidupan</li>
          <li>3. Menghasilkan alumni yang berkarakter religius</li>
        </ol>
      </div>
    </div>
  );
};

export default VisiMisi;