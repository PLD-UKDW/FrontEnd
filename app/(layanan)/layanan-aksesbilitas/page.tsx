"use client";

import { FileText, Users, BookOpen, Car, HelpCircle, ClipboardList } from "lucide-react";
import Link from "next/link";

export default function LayananAksesbilitas() {
  const layananLainnya = [
    { label: "Layanan Aksesibilitas", icon: HelpCircle, href: "#" },
    { label: "Layanan Teknologi Bantu", icon: ClipboardList, href: "#" },
    { label: "Tutorial", icon: BookOpen, href: "#" },
    { label: "Volunteer", icon: Users, href: "#" },
    { label: "Digitalisasi Buku", icon: FileText, href: "#" },
    { label: "Layanan Mobilitas", icon: Car, href: "#" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-800 text-white py-20 px-6 md:px-16 lg:px-24 pt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Layanan Aksesibilitas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Layanan ini diperuntukkan bagi dosen maupun mahasiswa yang membutuhkan bantuan 
            dalam membuat bahan ajar atau materi pembelajaran agar lebih mudah diakses. 
            Kami menyediakan dukungan untuk dokumen digital, presentasi, maupun media video.
          </p>

          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Jika Anda memerlukan konsultasi terkait penyediaan layanan aksesibilitas dan 
            akomodasi pembelajaran, silakan isi formulir yang tersedia. 
            Pengajuan dilakukan minimal 2 minggu sebelum media pembelajaran digunakan.
          </p>

          {/* CTA */}
          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-green-400 text-green-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-green-500 transition-all duration-300"
          >
            <ClipboardList className="w-5 h-5" />
            Isi Formulir
          </Link>
        </div>

        {/* Right Sidebar */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
          <h2 className="text-xl font-bold mb-6 text-green-400">Layanan Lainnya</h2>
          <ul className="space-y-4">
            {layananLainnya.map((layanan) => (
              <li key={layanan.label}>
                <Link
                  href={layanan.href}
                  className="flex items-center gap-3 text-gray-100 hover:text-green-400 transition-colors"
                >
                  <layanan.icon className="w-5 h-5" />
                  {layanan.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
