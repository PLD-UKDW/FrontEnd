"use client";

import { FileText, Users, BookOpen, Car, HelpCircle, ClipboardList } from "lucide-react";
import Link from "next/link";

export default function DigitalisasiBukuPage() {
  const layananLainnya = [
    { label: "Layanan Aksesibilitas", icon: HelpCircle, href: "#" },
    { label: "Layanan Akomodasi", icon: ClipboardList, href: "#" },
    { label: "Tutorial", icon: BookOpen, href: "#" },
    { label: "Volunteer", icon: Users, href: "#" },
    { label: "Digitalisasi Buku", icon: FileText, href: "#" },
    { label: "Layanan Mobil", icon: Car, href: "#" },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-50 px-6 md:px-12 lg:px-24 pt-28 pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Konten utama */}
        <div className="lg:col-span-2 space-y-10">
          {/* Header */}
          <header>
            <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
              Digitalisasi Buku
            </h1>
            <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
              Layanan digitalisasi buku ini ditujukan untuk membantu mahasiswa
              dan dosen mendapatkan bahan bacaan dalam format digital yang lebih
              mudah diakses.
            </p>
          </header>

          {/* Ketentuan */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Ketentuan Digitalisasi Buku
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>
                Mahasiswa/dosen mengunduh dan mengisi form pengajuan digitalisasi.
              </li>
              <li>
                Formulir yang sudah diisi diserahkan bersama buku yang ingin
                didigitalkan.
              </li>
              <li>
                Pengajuan minimal dilakukan <strong>pertengahan semester</strong>.
              </li>
              <li>
                Berkas akan diproses oleh staf koordinasi akomodasi pembelajaran.
              </li>
            </ul>
          </section>

          {/* Prosedur */}
          <section className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Prosedur Digitalisasi
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>
                Staf melakukan penyekenan atau pemotretan halaman buku dalam
                format JPG.
              </li>
              <li>
                File dibagi ke relawan untuk diketik ulang menjadi teks.
              </li>
              <li>
                Hasil dikompilasi kembali dan diverifikasi oleh staf.
              </li>
              <li>
                Buku digital disediakan dalam format <strong>PDF</strong> dan{" "}
                <strong>Word</strong>.
              </li>
              <li>
                File digital kemudian dikirimkan kepada pemohon.
              </li>
            </ol>
          </section>
        </div>

      </div>
    </main>
  );
}
