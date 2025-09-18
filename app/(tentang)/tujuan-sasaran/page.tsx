"use client";
import { Target, Users, BookOpen, Heart, Shield, CheckCircle } from "lucide-react";

const tujuanList = [
  "Menciptakan lingkungan kampus yang inklusif dan ramah disabilitas",
  "Memberikan dukungan akademik berkualitas bagi mahasiswa berkebutuhan khusus",
  "Meningkatkan kesadaran civitas akademika tentang pentingnya inklusi",
  "Membangun kemandirian dan kepercayaan diri mahasiswa berkebutuhan khusus"
];

const sasaranList = [
  {
    kategori: "Mahasiswa",
    icon: <Users className="w-6 h-6 text-blue-500" />,
    daftar: [
      "Mendapat pendampingan akademik yang berkualitas",
      "Berpartisipasi aktif dalam kegiatan kampus",
      "Mengembangkan potensi secara optimal"
    ]
  },
  {
    kategori: "Dosen & Staf",
    icon: <Shield className="w-6 h-6 text-green-500" />,
    daftar: [
      "Mampu menyediakan bahan ajar yang inklusif",
      "Memahami cara melayani mahasiswa berkebutuhan khusus",
      "Menerapkan prinsip universal design"
    ]
  },
  {
    kategori: "Institusi",
    icon: <Target className="w-6 h-6 text-purple-500" />,
    daftar: [
      "Memiliki fasilitas yang sepenuhnya aksesibel",
      "Menyediakan teknologi bantu yang memadai",
      "Menjadi rujukan perguruan tinggi inklusif"
    ]
  }
];

export default function TujuanSasaranPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 pt-30">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 -mt-8">
            <h1 className="text-4xl  text-[#3e4095] md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Tujuan <span className="text-[#02a502]">& </span>Sasaran
          </h1>
          <p className="text-lg text-gray-700 mx-auto leading-relaxed space-y-6">
            Komitmen ULD UKDW dalam menciptakan lingkungan pendidikan yang inklusif
            dan memberdayakan setiap mahasiswa
          </p>
        </div>

        {/* Tujuan Section */}
        <section className="mb-10 -mt-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-[#3e4095]" />
              </div>
              <h2 className="text-3xl font-bold text-[#3e4095]">Tujuan</h2>
            </div>
            
            <div className="space-y-4">
              {tujuanList.map((tujuan, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center -mt-1">
                    <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 space-y-6 leading-relaxed">{tujuan}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sasaran Section */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#008000]" />
              </div>
              <h2 className="text-3xl font-bold text-[#3e4095]">Sasaran</h2>
            </div>

            <div className="grid gap-8 md:gap-12">
              {sasaranList.map((sasaran, index) => (
                <div key={index} className="border-l-4 border-gray-200 pl-6">
                  <div className="flex items-center gap-3 mb-4">
                    {sasaran.icon}
                    <h3 className="text-2xl font-bold text-gray-900">{sasaran.kategori}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {sasaran.daftar.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 space-y-6 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="bg-[#3E7B27] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Mari Bersama Wujudkan Kampus Inklusif</h3>
            <p className="text-lg mb-6 opacity-90">
              Bergabunglah dengan kami dalam menciptakan lingkungan pendidikan yang ramah dan inklusif
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/layanan"
                className="px-6 py-3 bg-white text-[#3E7B27] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Lihat Layanan
              </a>
              <a
                href="/kontak"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#3E7B27] transition-colors"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}