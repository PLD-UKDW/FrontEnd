"use client";
import { Users, Heart, TrendingUp } from "lucide-react";

const mainPrograms = [
  {
    title: "Layanan",
    description:
      "Layanan kami kepada penyandang disabilitas di Universitas Kristen Duta Wacana adalah program kerja utama kami sepanjang tahun.",
    icon: <Users className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Humas dan Advokasi",
    description:
      "Hubungan masyarakat dan advokasi melakukan kerja sama dengan berbagai pihak dan multisektor untuk menyebarkan isu disabilitas dan praksinya melalui advokasi.",
    icon: <Heart className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Pengembangan Layanan",
    description:
      "Sebagai pusat layanan, ULD menekankan pentingnya penelitian dan kajian untuk terus meningkatkan pelayanan inklusif.",
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
  },
];

const kegiatanList = [
  "Penerimaan mahasiswa baru penyandang disabilitas;",
  "Pelatihan kerja kepada mahasiswa difabel;",
  "Pelatihan disability awareness dan bahasa isyarat dasar kepada calon volunteer, tenaga pengajar, dan tenaga kependidikan;",
  "Pelatihan aksesibilitas digital bagi volunteer;",
  "Pelatihan bahasa isyarat dasar, menengah, dan lanjut untuk juru bahasa isyarat;",
  "Advokasi kebijakan inklusi-disabilitas di tingkat kampus;",
  "Kampanye isu disabilitas di media sosial;",
  "Penerbitan Indonesian Journal of Disability Studies dua kali dalam setahun;",
  "Kerja sama dengan berbagai lembaga baik nasional dan internasional di bidang isu disabilitas.",
];

export default function ProgramKerjaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 pt-8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Program Kerja
          </h1>
        </div>

        {/* Main Program Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-green-400 rounded-lg p-8 hover:bg-green-400/10 transition-all duration-300"
            >
              <div className="mb-6">{program.icon}</div>
              <h2 className="text-2xl font-bold text-green-400 mb-4">
                {program.title}
              </h2>
              <p className="text-white/90 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Description */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 mb-12">
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            Program kerja utama Unit Layanan Disabilitas Universitas Kristen
            Duta Wacana adalah layanan kepada penyandang disabilitas di
            lingkungan Universitas Kristen Duta Wacana. Layanan tersebut
            terutama menyasar mahasiswa, dosen, dan tenaga kependidikan. Ada
            enam layanan ULD UKDW yang terdiri dari layanan akomodasi, layanan
            aksesibilitas, tutorial, konseling, digitalisasi buku, dan layanan
            mobilitas. Layanan ini diselenggarakan secara rutin sehari-hari
            sebagai sebuah tonggak utama penyelenggaraan pendidikan inklusif di
            perguruan tinggi.
          </p>

          <p className="text-white/90 text-lg leading-relaxed">
            Untuk mendukung program kerja tersebut, Unit Layanan Disabilitas
            Universitas Kristen Duta Wacana juga menyelenggarakan beberapa
            kegiatan, di antaranya adalah:
          </p>
        </div>

        {/* Activities List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 mb-12">
          <div className="space-y-4">
            {kegiatanList.map((kegiatan, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-400 text-green-900 rounded-full flex items-center justify-center font-bold text-sm mt-1">
                  {index + 1}
                </div>
                <p className="text-white/90 leading-relaxed">{kegiatan}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 backdrop-blur-sm rounded-lg p-8 border border-green-400/30">
          <p className="text-white/90 text-lg leading-relaxed text-center">
            Selain kerja-kerja inklusi-disabilitas di Universitas Kristen Duta
            Wacana, ULD juga terlibat dalam banyak aktivitas yang berkenaan
            dengan isu disabilitas, baik regional, nasional, maupun
            internasional.
          </p>
        </div>
      </div>
    </div>
  );
}
