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
      className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 px-4 md:px-8 lg:px-16"
      aria-labelledby="layanan-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-6 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-16 right-6 w-24 h-24 bg-green-200/30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-3 py-1.5 bg-[#008000]/10 rounded-full text-[#008000] font-medium text-xs mb-3">
            <Accessibility className="w-3 h-3 mr-1.5" />
            Layanan Inklusif
          </div>

          <h2
            id="layanan-heading"
            className="text-base md:text-2xl lg:text-3xl font-black text-[#3e4095] tracking-tight leading-tight mb-2"
          >
            Layanan <span className="text-[#02a502]">Kami</span>
          </h2>
            <p className="text-base md:text-lg lg:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Kami hadir untuk memastikan aksesibilitas, dukungan, dan inklusi di lingkungan kampus
            bagi seluruh civitas akademika.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
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
                  block relative h-full bg-white rounded-2xl shadow-md border border-gray-100
                  transition-all duration-500 ease-out
                  hover:shadow-xl hover:-translate-y-2 hover:scale-[1.01]
                  focus:outline-none focus:ring-2 focus:ring-[#008000]/40 focus:ring-offset-1
                  ${focusedCard === index ? 'shadow-xl -translate-y-2 scale-[1.01]' : ''}
                `}
                aria-describedby={`service-desc-${index}`}
              >
                {/* Card Content */}
                <div className="relative p-4 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-4">
                    <div
                      className={`
                        w-12 h-12 rounded-xl ${service.bgColor} ${service.hoverBg}
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-105 group-hover:rotate-2
                        relative overflow-hidden
                      `}
                    >
                      {/* Icon background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      {/* Icon */}
                      <div className="relative z-10 text-[#008000] group-hover:text-[#2d5f1f] transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                    {/* Floating indicator */}
                    <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#02a502] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <ArrowRight className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg lg:text-xl font-bold text-[#3e4095] mb-2 group-hover:text-[#02a502] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p
                      id={`service-desc-${index}`}
                      className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1 font-medium"
                    >
                      {service.desc}
                    </p>

                    {/* Call to action */}
                    <div className="mt-4 pt-2 border-t border-gray-100">
                      <span className="inline-flex items-center text-[#008000] font-semibold text-xs lg:text-sm group-hover:text-[#02a502] transition-colors duration-300">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>

                  {/* Hover background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}