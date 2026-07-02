import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoPesantren from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubMenu(null);
  }, [location]);

  const menuItems = [
    { name: "Beranda", path: "/" },
    {
      name: "Profil",
      path: "/profil",
      subMenu: [
        { name: "Tentang Pesantren", path: "/profil/sejarah" },
        { name: "Visi & Misi", path: "/profil/visi-misi" },
        { name: "Santri", path: "/profil/santri" },
        { name: "Dewan Pengajar", path: "/profil/pengajar" },
        { name: "Fasilitas", path: "/profil/fasilitas" },
      ],
    },
    {
      name: "Pendidikan",
      path: "/pendidikan",
      subMenu: [
        { name: "Sistem Pendidikan", path: "/pendidikan/sistem" },
        { name: "Kurikulum", path: "/pendidikan/kurikulum" },
      ],
    },
    { name: "Penerimaan Santri Baru", path: "/psb" },
    { name: "Galeri", path: "/galeri" },
    { name: "Hubungi Kami", path: "/kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled || isMenuOpen ? "py-4 shadow-md" : "pt-6 md:pt-10 pb-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "mb-2" : "mb-4 md:mb-6"
          } flex-row md:flex-col md:justify-center`}
        >
          <div className="flex items-center gap-3 md:flex-col md:gap-4 flex-1 md:flex-none md:justify-center">
            <img
              src={logoPesantren}
              alt="Logo Al-Hikam"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? "w-10 h-10" : "w-12 h-12 md:w-20 md:h-20"
              }`}
            />
            <div className="text-left md:text-center">
              <h1
                className={`font-bricolage font-black tracking-tighter transition-all duration-500 leading-tight md:leading-none ${
                  isScrolled ? "text-lg md:text-2xl" : "text-xl md:text-4xl"
                }`}
              >
                PESANTREN MAHASISWA <br className="md:hidden" /> AL-HIKAM DEPOK
              </h1>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-900 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:block md:border-y border-gray-800 transition-all duration-[400ms] ${
            isMenuOpen
              ? "max-h-[1000px] opacity-100 py-6 overflow-y-auto"
              : "max-h-0 md:max-h-full opacity-0 md:opacity-100 md:overflow-visible"
          }`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center py-1 gap-6 md:gap-12">
            {menuItems.map((item, index) => {
              const hasSubMenu = !!item.subMenu;
              const isActive =
                location.pathname === item.path ||
                (hasSubMenu && location.pathname.startsWith(item.path));

              return (
                <li
                  key={index}
                  className="w-full md:w-auto text-center relative group"
                >
                  {hasSubMenu ? (
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() =>
                          setOpenSubMenu(openSubMenu === index ? null : index)
                        }
                        className={`flex items-center gap-1 font-bricolage text-lg font-semibold transition-all duration-300 hover:text-[#C6A969] focus:outline-none ${
                          isActive ? "text-[#597E52]" : "text-gray-900"
                        }`}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 md:group-hover:rotate-180 ${openSubMenu === index ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <ul
                        className={`font-bricolage
                          md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:mt-2 
                          md:bg-white md:shadow-xl md:rounded-md md:border md:border-gray-100 
                          md:min-w-[220px] md:py-2 md:z-[100]
                          md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible
                          transition-all duration-300
                          ${openSubMenu === index ? "flex flex-col mt-4 bg-gray-50 w-full" : "hidden md:block"}
                        `}
                      >
                        {item.subMenu.map((sub, subIdx) => (
                          <li key={subIdx}>
                            <Link
                              to={sub.path}
                              className="block px-6 py-3 text-base font-medium text-gray-700 hover:bg-[#F9F7F2] hover:text-[#C6A969] transition-colors md:text-center"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block font-bricolage text-lg font-semibold transition-all duration-300 hover:text-[#C6A969] relative group ${
                        isActive ? "text-[#597E52]" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`hidden md:block absolute -bottom-1 left-0 h-0.5  transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
