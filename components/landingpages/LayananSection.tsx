"use client";
import { Users, Accessibility, BookOpen, Laptop, Car, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SERVICES = [
  {
    title: "Pendampingan",
    desc: "Layanan untuk mendukung mahasiswa difabel dalam kegiatan akademik maupun sosial.",
    icon: <Users className="w-10 h-10" aria-hidden="true" />,
    path: "/layanan/pendampingan",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    hoverBg: "hover:bg-blue-100",
  },
  {
    title: "Aksesibilitas",
    desc: "Membantu dosen dan staf menyediakan bahan ajar inklusif dan ramah difabel.",
    icon: <Accessibility className="w-10 h-10" aria-hidden="true" />,
    path: "/layanan/aksesibilitas",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    hoverBg: "hover:bg-green-100",
  },
  {
    title: "Tutorial",
    desc: "Pendampingan belajar bagi mahasiswa difabel: skripsi, laporan, dan tugas akhir.",
    icon: <GraduationCap className="w-10 h-10" aria-hidden="true" />,
    path: "/layanan/tutorial",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    hoverBg: "hover:bg-purple-100",
  },
  {
    title: "Digitalisasi Buku",
    desc: "Mengubah buku cetak menjadi format digital yang lebih mudah diakses.",
    icon: <BookOpen className="w-10 h-10" aria-hidden="true" />,
    path: "/layanan/digitalisasi-buku",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    hoverBg: "hover:bg-orange-100",
  },
  {
    title: "Teknologi Bantu",
    desc: "Peminjaman dan pelatihan teknologi bantu untuk mendukung aktivitas akademik.",
    icon: <Laptop className="w-10 h-10" aria-hidden="true" />,
    path: "/layanan/teknologi-bantu",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    hoverBg: "hover:bg-teal-100",
  },
  {
    title: "Mobilitas",
    desc: "Layanan antar-jemput internal kampus untuk mendukung mobilitas difabel.",
    icon: <Car className="w-10 h-10" aria-hidden="true" />,
    path: "/layanan/mobilitas",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    hoverBg: "hover:bg-indigo-100",
  },
];

export default function LayananSection() {
  const [focusedCard, setFocusedCard] = useState<number | null>(null);

  return (
    <section
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-6 md:px-12 lg:px-20"
      aria-labelledby="layanan-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#3E7B27]/10 rounded-full text-[#3E7B27] font-medium text-sm mb-6">
            <Accessibility className="w-4 h-4 mr-2" />
            Layanan Inklusif
          </div>
          
          <h2
            id="layanan-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0e284d] tracking-tight leading-tight mb-6"
          >
            Layanan <span className="text-[#3E7B27]">Kami</span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Kami hadir untuk memastikan aksesibilitas, dukungan, dan inklusi di lingkungan kampus
            bagi seluruh civitas akademika.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="group relative"
              onMouseEnter={() => setFocusedCard(index)}
              onMouseLeave={() => setFocusedCard(null)}
            >
              <Link
                href={service.path}
                className={`
                  block relative h-full bg-white rounded-3xl shadow-lg border border-gray-100
                  transition-all duration-500 ease-out
                  hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]
                  focus:outline-none focus:ring-4 focus:ring-[#3E7B27]/40 focus:ring-offset-2
                  ${focusedCard === index ? 'shadow-2xl -translate-y-3 scale-[1.02]' : ''}
                `}
                aria-describedby={`service-desc-${index}`}
              >
                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div 
                      className={`
                        w-20 h-20 rounded-2xl ${service.bgColor} ${service.hoverBg}
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-110 group-hover:rotate-3
                        relative overflow-hidden
                      `}
                    >
                      {/* Icon background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      
                      {/* Icon */}
                      <div className="relative z-10 text-[#3E7B27] group-hover:text-[#2d5f1f] transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Floating indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#3E7B27] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#0e284d] mb-4 group-hover:text-[#3E7B27] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p 
                      id={`service-desc-${index}`}
                      className="text-gray-600 text-base lg:text-lg leading-relaxed flex-1 font-medium"
                    >
                      {service.desc}
                    </p>
                    
                    {/* Call to action */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center text-[#3E7B27] font-semibold text-sm lg:text-base group-hover:text-[#2d5f1f] transition-colors duration-300">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}