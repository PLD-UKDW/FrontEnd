"use client";

import { FileText, Users, BookOpen, Car, HelpCircle, ClipboardList } from "lucide-react";
import Link from "next/link";

export default function LayananMobilitasPage() {
  const layananLainnya = [
    { label: "Layanan Aksesibilitas", icon: HelpCircle, href: "#" },
    { label: "Layanan Akomodasi", icon: ClipboardList, href: "#" },
    { label: "Tutorial", icon: BookOpen, href: "#" },
    { label: "Volunteer", icon: Users, href: "#" },
    { label: "Digitalisasi Buku", icon: FileText, href: "#" },
    { label: "Layanan Mobilitas", icon: Car, href: "#" },
  ];

  const prosedur = [
    {
      step: "1",
      title: "Isi Formulir Pengajuan",
      desc: "Mahasiswa atau dosen mengisi formulir layanan mobilitas sesuai kebutuhan transportasi.",
    },
    {
      step: "2",
      title: "Verifikasi Pengajuan",
      desc: "Staf akan memverifikasi data dan ketersediaan layanan mobilitas.",
    },
    {
      step: "3",
      title: "Pelayanan Mobilitas",
      desc: "Pengguna dapat menggunakan fasilitas mobilitas sesuai jadwal yang telah disetujui.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white pt-32 pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 flex items-center gap-3 text-[#A9C46C]">
              <Car className="w-8 h-8 text-[#A9C46C]" />
              Layanan Mobilitas
            </h1>
            <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-6">
              Layanan mobilitas disediakan untuk mendukung penyandang disabilitas dalam mengakses fasilitas kampus maupun kegiatan akademik. Fasilitas ini membantu memastikan keberlangsungan aktivitas belajar dan berpartisipasi dalam
              lingkungan kampus yang inklusif.
            </p>
          </div>

          {/* Prosedur */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#A9C46C]">Prosedur Pengajuan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prosedur.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-green-400/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#A9C46C] text-green-900 font-bold text-xl">{item.step}</div>
                    <h3 className="text-lg font-semibold text-[#A9C46C]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-green-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <Link href="https://forms.gle/XXXXX" target="_blank" className="bg-[#A9C46C] text-green-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-[#8DB255] transition-all">
            Buka Formulir
          </Link>
        </div>

        {/* Right Sidebar */}
        <aside className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green-400/30">
          <h2 className="text-xl font-bold mb-6 text-[#A9C46C]">Layanan Lainnya</h2>
          <ul className="space-y-4">
            {layananLainnya.map((layanan) => (
              <li key={layanan.label}>
                <Link href={layanan.href} className="flex items-center gap-3 text-green-100 hover:text-[#A9C46C] transition-colors">
                  <layanan.icon className="w-5 h-5" />
                  {layanan.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
