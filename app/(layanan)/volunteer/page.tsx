"use client";

import {
  FileText,
  Users,
  BookOpen,
  Car,
  HelpCircle,
  ClipboardList,
  Handshake,
} from "lucide-react";
import Link from "next/link";

export default function VolunteerPage() {
  const layananLainnya = [
    { label: "Layanan Aksesibilitas", icon: HelpCircle, href: "#" },
    { label: "Layanan Akomodasi", icon: ClipboardList, href: "#" },
    { label: "Tutorial", icon: BookOpen, href: "#" },
    { label: "Volunteer", icon: Users, href: "#" },
    { label: "Digitalisasi Buku", icon: FileText, href: "#" },
    { label: "Layanan Mobil", icon: Car, href: "#" },
  ];

  const kewajiban = [
    "Mendampingi mahasiswa difabel pada saat perkuliahan maupun tugas akademik.",
    "Menggantikan pendamping jika berhalangan hadir (minimal H-1 konfirmasi).",
    "Membantu mahasiswa difabel memahami materi dan mengakses bahan kuliah.",
    "Memberikan informasi dan mengoreksi tugas teknis (bukan substansi).",
    "Belajar serta mengembangkan pemahaman tentang bahasa isyarat dan disability awareness.",
    "Menyelesaikan kontrak volunteer selama 1 tahun.",
  ];

  const hak = [
    "Mendapatkan pelatihan dasar tentang difabel dan disability awareness.",
    "Sertifikat pengalaman volunteer setelah menyelesaikan kontrak.",
    "Pengakuan SKPI (Surat Keterangan Pendamping Ijazah).",
    "Pengalaman nyata mendampingi dan belajar bersama mahasiswa difabel.",
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white pt-32 pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Header */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 flex items-center gap-3">
              <Handshake className="w-8 h-8 text-[#A9C46C]" />
              Volunteer
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              Program volunteer membuka kesempatan bagi mahasiswa untuk ikut serta
              dalam mendukung mahasiswa difabel. Melalui kegiatan ini, volunteer
              dapat mengenal lebih jauh dunia disabilitas sekaligus mengasah
              empati, komunikasi, dan kerja sama.
            </p>

            <Link
              href="https://forms.gle/xxxxx"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#A9C46C] text-green-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#8DB255] transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              Daftar Volunteer
            </Link>
          </div>

          {/* Info Box */}
          <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-3 text-[#A9C46C]">Informasi Penting</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Kuota pendaftar: <span className="font-semibold">100 orang</span></li>
              <li>
                Jadwal pelatihan Disability Awareness & Bahasa Isyarat Dasar akan
                diumumkan melalui email.
              </li>
              <li>
                Pendaftaran tahun 2025 dibuka <span className="font-semibold">10–22 Mei 2025</span>.
              </li>
            </ul>
          </div>

          {/* Kewajiban */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#A9C46C]">Kewajiban Volunteer</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {kewajiban.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Hak */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#A9C46C]">Hak Volunteer</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {hak.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <h2 className="text-xl font-bold mb-6 text-[#A9C46C]">Layanan Lainnya</h2>
          <ul className="space-y-4">
            {layananLainnya.map((layanan) => (
              <li key={layanan.label}>
                <Link
                  href={layanan.href}
                  className="flex items-center gap-3 text-white/90 hover:text-[#A9C46C] transition-colors"
                >
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
