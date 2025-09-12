"use client";
import Image from "next/image";
import { Mail, Award } from "lucide-react";

const struktur = [
  {
    nama: "Lukas Chrisantyo A A., S.Kom., M.Eng.",
    jabatan: "Ketua Koordinator ULD",
    email: "LukasCrisantyo@staff.ukdw.ac.id",
    foto: "/dummy/person1.jpg",
    role: "leader",
    description: "Memimpin dan mengkoordinasikan seluruh kegiatan ULD untuk menciptakan lingkungan kampus yang inklusif"
  },
  {
    nama: "Stefani Natalia Sabatini, S.T., M.T.",
    jabatan: "Wakil Koordinator ULD",
    email: "sulis@contoh.ac.id", 
    foto: "/dummy/person2.jpg",
    role: "deputy",
    description: "Mendukung koordinator dalam menjalankan program-program layanan disabilitas"
  },
];

export default function StrukturOrganisasiPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B2E22] via-[#144D36] to-[#0B2E22] text-white overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20 px-6 md:px-16">
        
        {/* Header Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            Struktur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
              Organisasi
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-lime-400 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed font-light">
            Tim berpengalaman yang berdedikasi untuk menciptakan lingkungan kampus yang inklusif dan mendukung mahasiswa berkebutuhan khusus
          </p>
        </div>

        {/* Team Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:gap-16 grid-cols-1 lg:grid-cols-2 place-items-center">
            {struktur.map((item, idx) => (
              <div
                key={idx}
                className={`group relative w-full max-w-md ${
                  item.role === 'leader' ? 'lg:scale-110' : ''
                }`}
              >
                {/* Leader badge */}
                {item.role === 'leader' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  </div>
                )}

                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group-hover:bg-white/15">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-green-400/50 rounded-tr-2xl"></div>
                  
                  {/* Profile Image */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto relative">
                      {/* Glowing ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Image container */}
                      <div className="relative w-full h-full bg-white/10 rounded-full p-1 backdrop-blur-sm">
                        <div className="w-full h-full relative overflow-hidden rounded-full border-2 border-white/30">
                          <Image
                            src={item.foto}
                            alt={`Foto ${item.nama}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                      {item.nama}
                    </h3>
                    
                    <div className="space-y-3">
                      <p className="text-lg font-semibold text-green-300">
                        {item.jabatan}
                      </p>
                      
                      <p className="text-sm text-green-100/80 leading-relaxed px-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-6 border-t border-white/20">
                      <a
                        href={`mailto:${item.email}`}
                        className="group/email inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-lime-500/20 border border-green-400/30 rounded-xl text-green-200 hover:text-white hover:bg-gradient-to-r hover:from-green-500/40 hover:to-lime-500/40 transition-all duration-300 backdrop-blur-sm"
                      >
                        <Mail className="w-5 h-5 group-hover/email:rotate-12 transition-transform duration-300" />
                        <span className="text-sm font-medium">Kirim Email</span>
                      </a>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-lime-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
