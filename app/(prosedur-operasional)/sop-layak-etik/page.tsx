"use client";
import { ExternalLink } from 'lucide-react';

export default function SOPKodeEtik() {
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
            SOP & Kode Etik
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Pedoman standar operasional dan etika Unit Layanan Disabilitas
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="space-y-6 text-lg leading-relaxed text-gray-700 mb-8">
          Dokumen ini berisi pedoman standar operasional prosedur dan kode etik 
          yang harus dipatuhi oleh seluruh anggota organisasi. SOP ini mencakup 
          nilai-nilai integritas, profesionalisme, dan tata kelola yang baik dalam 
          menjalankan tugas dan tanggung jawab.
        </p>

        <a
          href="https://drive.google.com/file/d/DOCUMENT_ID/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#02a502] text-white rounded-lg hover:bg-[#028a02] transition-colors font-semibold"
        >
          Lihat SOP Layak Etik Selengkapnya
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}