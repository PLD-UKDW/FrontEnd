"use client";

import { Headphones, Search, Monitor, Accessibility, Cpu, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function TeknologiBantuPage() {
  const teknologi = [
    { label: "Mic Clip On", icon: Headphones },
    { label: "Portable Magnifier", icon: Search, note: "Sedang maintenance" },
    { label: "Komputer + Screen Reader & Magnifier", icon: Monitor, note: "Sedang maintenance" },
    { label: "Kursi Roda", icon: Accessibility },
    { label: "Kruk", icon: Accessibility },
    { label: "Instalasi Non-Visual Desktop Access", icon: Cpu, href: "#" },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 py-20 px-6 md:px-16 lg:px-24 pt-30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero / Title */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0e284d]">Teknologi Bantu</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan berbagai teknologi bantu untuk mendukung civitas akademika, 
            khususnya mahasiswa dengan disabilitas, agar lebih mudah mengakses pembelajaran.
          </p>
        </header>

        {/* Teknologi Bantu List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teknologi.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-[#A9C46C]/20 text-[#3E7B27]">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.label}</h3>
                {item.note && <p className="text-sm text-gray-500 italic">{item.note}</p>}
                {item.href && (
                  <Link
                    href={item.href}
                    className="text-sm text-[#3E7B27] hover:underline mt-1 inline-block"
                  >
                    Lihat Detail
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Kontak Section */}
        <div className="bg-[#3E7B27] text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Kontak ULD UKDW</h2>
          <p className="text-gray-200 mb-6">
            Untuk informasi lebih lanjut terkait teknologi bantu, silakan hubungi staf ULD UKDW:
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#A9C46C]" /> 
              <a href="tel:+0328492393" className="hover:underline">+62 811-3030-626</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#A9C46C]" /> 
              <a href="mailto:uldukdw@ukdw.ac.id" className="hover:underline">uldukdw@ukdw.ac.id</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
