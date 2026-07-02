import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Sejarah from "./pages/Sejarah";
import VisiMisi from "./pages/VisiMisi";
import ProfilSantri from "./pages/ProfilSantri";
import DewanPengajar from "./pages/DewanPengajar";
import Fasilitas from "./pages/Fasilitas";
import SistemPendidikan from "./pages/SistemPendidikan";
import DetailPilar from "./pages/DetailPilar";
import Kurikulum from "./pages/Kurikulum";
import PendaftaranPage from "./pages/PendaftaranPage";
import GaleriPage from "./pages/GaleriPage";
import Kontak from "./pages/Kontak";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/santri" element={<ProfilSantri />} />
          <Route path="/profil/pengajar" element={<DewanPengajar />} />
          <Route path="/profil/fasilitas" element={<Fasilitas />} />

          <Route path="/pendidikan/sistem" element={<SistemPendidikan />} />
          <Route path="/sistem-pendidikan/:pilarId" element={<DetailPilar />} />
          <Route path="/pendidikan/kurikulum" element={<Kurikulum />} />

          <Route path="/psb" element={<PendaftaranPage />} />
          <Route path="/galeri" element={<GaleriPage />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>

        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;