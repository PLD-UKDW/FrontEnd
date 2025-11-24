"use client";
import { ExternalLink } from 'lucide-react';

export default function SOPRekrutmenPendamping() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 md:px-16 overflow-hidden pt-30">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-green-300/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12 -mt-7">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="text-[#3e4095]">
            SOP Rekrutmen dan Pelatihan Pendamping
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Standar Operasional Rekrutmen dan Seleksi Pendamping Mahasiswa Disabilitas
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">
          Dokumen ini berisi pedoman dan prosedur standar dalam proses rekrutmen 
          dan seleksi pendamping mahasiswa disabilitas. SOP ini mencakup persyaratan 
          calon pendamping, tahapan seleksi, pelatihan yang diberikan, serta hak dan 
          kewajiban pendamping dalam menjalankan tugasnya.
        </p>

        <a
          href="https://drive.google.com/file/d/1UZAayn6Skay2GRa-XMRxEAyduOi43_4q/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#02a502] text-white rounded-lg hover:bg-[#028a02] transition-colors font-semibold"
        >
          Lihat SOP Rekrutmen & Pelatihan Pendamping Selengkapnya
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}