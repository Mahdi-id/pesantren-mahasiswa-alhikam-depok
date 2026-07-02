import React from "react";

const Kontak = () => {
  const contactGroups = [
    {
      title: "Pesantren Mahasiswa (Putra)",
      color: "bg-[#597E52]",
      borderColor: "border-[#597E52]",
      links: [
        {
          name: "WhatsApp Anggito",
          handle: "+62 898-6997-965",
          url: "https://wa.me/628986997965",
          btnText: "Chat",
          icon: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.616.959 3.18 1.447 4.851 1.448 5.403.001 9.802-4.398 9.803-9.802 0-2.62-1.022-5.085-2.876-6.94-1.856-1.854-4.322-2.875-6.941-2.875-5.405 0-9.804 4.399-9.806 9.803-.001 1.688.49 3.321 1.417 4.717l-1.012 3.693 3.784-.993zm11.332-6.553c-.307-.154-1.815-.896-2.096-1-.28-.103-.485-.154-.69.154-.205.308-.795 1-.974 1.205-.178.205-.358.231-.666.077-.308-.154-1.299-.479-2.474-1.528-.914-.816-1.531-1.823-1.711-2.131-.178-.308-.019-.475.135-.629.139-.138.308-.359.462-.538.154-.179.204-.308.307-.513.103-.205.051-.385-.026-.538-.077-.154-.69-1.666-.946-2.282-.249-.6-.503-.518-.69-.527l-.589-.009c-.205 0-.538.077-.82.385-.282.308-1.077 1.051-1.077 2.564 0 1.513 1.102 2.974 1.256 3.179s2.169 3.313 5.255 4.643c.734.316 1.307.505 1.753.647.738.234 1.41.201 1.941.122.591-.088 1.815-.744 2.071-1.461.256-.718.256-1.333.179-1.461-.076-.128-.281-.205-.589-.359z",
        },
        {
          name: "Instagram Pesma",
          handle: "@pesmaalhikamdepok",
          url: "https://instagram.com/pesmaalhikamdepok",
          btnText: "Kunjungi",
          icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
        },
      ],
    },
    {
      title: "Pesantren Mahasiswi (Putri)",
      color: "bg-[#C6A969]",
      borderColor: "border-[#C6A969]",
      links: [
        {
          name: "WhatsApp Shofwa",
          handle: "+62 851-8304-3624",
          url: "https://wa.me/6285183043624",
          btnText: "Chat",
          icon: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.616.959 3.18 1.447 4.851 1.448 5.403.001 9.802-4.398 9.803-9.802 0-2.62-1.022-5.085-2.876-6.94-1.856-1.854-4.322-2.875-6.941-2.875-5.405 0-9.804 4.399-9.806 9.803-.001 1.688.49 3.321 1.417 4.717l-1.012 3.693 3.784-.993zm11.332-6.553c-.307-.154-1.815-.896-2.096-1-.28-.103-.485-.154-.69.154-.205.308-.795 1-.974 1.205-.178.205-.358.231-.666.077-.308-.154-1.299-.479-2.474-1.528-.914-.816-1.531-1.823-1.711-2.131-.178-.308-.019-.475.135-.629.139-.138.308-.359.462-.538.154-.179.204-.308.307-.513.103-.205.051-.385-.026-.538-.077-.154-.69-1.666-.946-2.282-.249-.6-.503-.518-.69-.527l-.589-.009c-.205 0-.538.077-.82.385-.282.308-1.077 1.051-1.077 2.564 0 1.513 1.102 2.974 1.256 3.179s2.169 3.313 5.255 4.643c.734.316 1.307.505 1.753.647.738.234 1.41.201 1.941.122.591-.088 1.815-.744 2.071-1.461.256-.718.256-1.333.179-1.461-.076-.128-.281-.205-.589-.359z",
        },
        {
          name: "Instagram Pesmi",
          handle: "@pesmialhikam",
          url: "https://instagram.com/pesmialhikam",
          btnText: "Kunjungi",
          icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-40 md:pt-60 bg-white pb-20 font-bricolage">
      <div className="max-w-7xl pt-20 mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">
            Hubungi Kami
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Silakan hubungi kami untuk informasi lebih lanjut mengenai
            Pesantren. Kontak ini berlaku untuk periode Februari 2026 - Februari
            2027.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {contactGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-6">
              <h3
                className={`text-2xl font-bold pb-2 border-b-2 ${group.borderColor}`}
              >
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.links.map((link, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-5 rounded-xl border ${group.borderColor} transition-all group hover:shadow-md bg-white`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div
                        className={`${group.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d={link.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm md:text-base">
                          {link.name}
                        </h4>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {link.handle}
                        </p>
                      </div>
                    </div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`py-2 px-4 md:px-6 font-bold text-white ${group.color} rounded-lg hover:opacity-90 transition-all shadow-sm active:scale-95 text-sm`}
                    >
                      {link.btnText}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-4xl md:text-4xl font-semibold text-center mb-4">
            Lokasi Pesantren
          </h3>
          <p className="text-lg text-center text-gray-700 max-w-2xl mb-10 mx-auto">
            Pesantren berlokasi di kawasan strategis yang mudah diakses dan
            dekat dengan berbagai perguruan tinggi di Depok.
          </p>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="p-6 bg-white h-[410px] rounded-md border border-[#597E52] flex flex-col justify-between shadow-sm">
              <div>
                <h5 className="font-bold mb-2 text-lg text-[#597E52]">
                  Alamat Lengkap:
                </h5>
                <p className="text-gray-600 text-lg font-bold">
                  Jl. H. Amat No.21, RT.6/RW.1, Kukusan, Beji, Depok, Jawa Barat
                  16425
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir//Pesantren+Mahasiswa+Al-Hikam+Depok"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 rounded-md bg-[#597E52] text-white hover:opacity-90 font-bold text-lg transition-all"
              >
                Petunjuk Jalan (Google Maps)
                <svg
                  className="w-6 h-6 ml-3"
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
            <div className="md:col-span-2 h-[400px] rounded-md overflow-hidden shadow-lg border-b-4 border-[#597E52]">
              <iframe
                title="Lokasi Pesantren"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1764669864233!2d106.81883487588078!3d-6.358218162208035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecf969ad0cc5%3A0x96d9632786c586f4!2sPondok%20pesantren%20Al-Hikam%202%20Depok!5e0!3m2!1sid!2sid!4v1715600000000!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
