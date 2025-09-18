"use client";
import Image from "next/image";
import { CheckCircle2, Calendar, Users, Award, Heart } from "lucide-react";

const historyPoints = [
  {
    title: "Visi Inklusif Dimulai",
    description: "Membangun fondasi untuk lingkungan kampus yang ramah disabilitas",
    icon: <Heart className="w-6 h-6" />,
    color: "text-red-500",
  },
  {
    title: "Pencapaian & Tonggak Sejarah",
    description: "Berhasil mendampingi ratusan mahasiswa berkebutuhan khusus",
    icon: <Award className="w-6 h-6" />,
    color: "text-yellow-500",
  },
  {
    title: "Membangun Kepercayaan",
    description: "Menjadi rujukan layanan disabilitas di perguruan tinggi",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-500",
  },
  {
    title: "Membentuk Masa Depan Inklusif",
    description: "Berakar dari pengalaman, menuju inovasi layanan yang berkelanjutan",
    icon: <Calendar className="w-6 h-6" />,
    color: "text-green-500",
  },
];

export default function SejarahPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Header Section */}
        <div className="max-w-6xl text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3e4095] tracking-tight leading-tight mb-1">
            Sejarah <span className="text-[#02a502]">ULD UKDW</span>
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-[#02a502] to-[#3e4095] mx-auto"></div>
        </div>

        {/* Atas: Gambar & Deskripsi */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 -mt-7">
          {/* Left Section - Images */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-4 transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/berita/1.jpeg"
                  alt="Fasilitas ULD UKDW yang mendukung aksesibilitas mahasiswa berkebutuhan khusus"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[300px] lg:h-[420px]"
                />
              </div>

              {/* Image overlay with info */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="font-semibold text-lg mb-1">Fasilitas Inklusif</p>
                  <p className="text-sm opacity-90">
                    Lingkungan yang ramah untuk semua mahasiswa
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#3E7B27]/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#3E7B27]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0e284d]">12K+</div>
                  <div className="text-sm text-gray-600">Mahasiswa Terlayani</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#3e4095] mb-6 leading-snug">
              Perjalanan Menuju Kampus Inklusif
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Unit Layanan Disabilitas (ULD) UKDW didirikan atas komitmen untuk
                menciptakan lingkungan pendidikan yang inklusif dan ramah
                disabilitas. Dimulai dari visi sederhana namun kuat: setiap
                mahasiswa berhak mendapatkan pendidikan berkualitas tanpa
                diskriminasi.
              </p>

              <p>
                Selama bertahun-tahun, kami telah berkembang menjadi pusat
                layanan terpercaya yang memberikan dukungan komprehensif bagi
                mahasiswa berkebutuhan khusus. Perjalanan kami ditandai dengan
                pencapaian-pencapaian bermakna, didorong oleh dedikasi dan
                komitmen untuk keunggulan dalam pelayanan.
              </p>

              <div className="bg-gradient-to-r from-[#3E7B27]/5 to-blue-50 rounded-2xl p-6 border-l-4 border-[#02a502]">
                <p className="text-[#000000] font-medium italic">
                  &quot;Sejarah kami adalah fondasi masa depan, menginspirasi kami
                  untuk terus meningkatkan kualitas layanan dan menciptakan
                  dampak positif bagi komunitas kampus.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bawah: Tonggak */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#3e4095] mb-10 text-center">
            Tonggak Perjalanan Kami
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {historyPoints.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                {/* Icon container */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-[#3e4095] mb-1 group-hover:text-[#02a502] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Checkmark */}
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#02a502] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
