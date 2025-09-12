"use client";

import {
  FileText,
  Users,
  BookOpen,
  Car,
  HelpCircle,
  ClipboardList,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";

export default function KonselingPage() {
  const layananLainnya = [
    { label: "Layanan Aksesibilitas", icon: HelpCircle, href: "#" },
    { label: "Layanan Akomodasi", icon: ClipboardList, href: "#" },
    { label: "Tutorial", icon: BookOpen, href: "#" },
    { label: "Volunteer", icon: Users, href: "#" },
    { label: "Digitalisasi Buku", icon: FileText, href: "#" },
    { label: "Layanan Mobil", icon: Car, href: "#" },
  ];

  const jenisKonseling = [
    {
      title: "Konseling Akademik",
      desc: "Membantu mahasiswa mengatasi kesulitan belajar, manajemen waktu, dan adaptasi metode pembelajaran.",
    },
    {
      title: "Konseling Pribadi",
      desc: "Dukungan psikologis untuk menghadapi masalah pribadi, sosial, maupun emosional.",
    },
    {
      title: "Konseling Karier",
      desc: "Pendampingan dalam menentukan arah karier, persiapan kerja, dan pengembangan potensi diri.",
    },
  ];

  const prosedur = [
    {
      step: "1",
      title: "Isi Formulir Pengajuan",
      desc: (
        <>
          Lengkapi data diri dan kebutuhan konseling melalui{" "}
          <Link
            href="https://forms.gle/xxxxx"
            target="_blank"
            className="text-[#A9C46C] hover:underline"
          >
            formulir online
          </Link>
          .
        </>
      ),
    },
    {
      step: "2",
      title: "Jadwal Konseling",
      desc: "Koordinator akan menghubungi Anda untuk menentukan jadwal sesi konseling.",
    },
    {
      step: "3",
      title: "Pelaksanaan Sesi",
      desc: "Sesi konseling dilakukan secara tatap muka atau daring sesuai kesepakatan.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white pt-32 pb-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 flex items-center gap-3 text-[#A9C46C]">
              <HeartHandshake className="w-8 h-8 text-[#A9C46C]" />
              Layanan Konseling
            </h1>
            <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-6">
              Layanan konseling disediakan untuk mendukung kesejahteraan akademik
              dan personal mahasiswa. Melalui pendampingan profesional,
              mahasiswa dapat menemukan solusi atas permasalahan yang dihadapi,
              baik di bidang akademik, pribadi, maupun karier.
            </p>
          </div>

          {/* Jenis Konseling */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#A9C46C]">
              Jenis Layanan Konseling
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jenisKonseling.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-green-400/30"
                >
                  <h3 className="text-lg font-semibold mb-3 text-[#A9C46C]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-green-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prosedur */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#A9C46C]">
              Prosedur Pengajuan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prosedur.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-green-400/30"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#A9C46C] text-green-900 font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-[#A9C46C]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-green-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-green-400/30">
          <h2 className="text-xl font-bold mb-6 text-[#A9C46C]">
            Layanan Lainnya
          </h2>
          <ul className="space-y-4">
            {layananLainnya.map((layanan) => (
              <li key={layanan.label}>
                <Link
                  href={layanan.href}
                  className="flex items-center gap-3 text-green-100 hover:text-[#A9C46C] transition-colors"
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
