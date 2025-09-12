"use client";
import { ExternalLink, FileText, Phone, Mail, Users, Clock, CheckCircle, Heart } from "lucide-react";
import Link from "next/link";

export default function RequestPendampingPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 md:px-12 lg:px-24 pt-28 pb-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-12 mb-8 border border-white/20">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#0e284d] to-[#1a3a5c] rounded-2xl mb-6 shadow-lg">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0e284d] to-[#1a3a5c] bg-clip-text text-transparent mb-4">
              Permintaan Pendamping
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Layanan khusus untuk mendukung mahasiswa, dosen, dan staf yang membutuhkan 
              <span className="font-semibold text-[#0e284d]"> pendampingan mobilitas, akademik, ujian, dan interpretasi</span>. 
              Kami siap membantu Anda dengan layanan yang profesional dan terpercaya.
            </p>
          </header>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 border border-white/20">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#A9C46C] to-[#8DB255] rounded-xl mb-4 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Ajukan Permintaan Anda</h2>
                <p className="text-gray-600">Isi formulir di bawah untuk mengajukan layanan pendampingan</p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center mb-10">
                <Link
                  href="https://forms.gle/isi-link-form"
                  target="_blank"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#A9C46C] to-[#8DB255] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-[#8DB255] hover:to-[#A9C46C] hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-[#A9C46C]/30 focus:outline-none"
                >
                  <FileText className="w-6 h-6 group-hover:rotate-3 transition-transform duration-300" />
                  Isi Formulir Permintaan
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A9C46C] to-[#8DB255] rounded-2xl blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300"></div>
                </Link>
              </div>

              {/* Requirements Section */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border-l-4 border-[#A9C46C]">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-[#A9C46C]" />
                  <h3 className="text-xl font-bold text-gray-800">Syarat & Ketentuan</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#8DB255] mt-0.5 flex-shrink-0" />
                    <span>Ajukan permintaan minimal <strong className="text-[#0e284d]">7 hari kerja</strong> sebelum kegiatan berlangsung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#8DB255] mt-0.5 flex-shrink-0" />
                    <span>Pastikan semua data yang diisi sudah <strong className="text-[#0e284d]">benar dan lengkap</strong> agar dapat diproses dengan cepat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#8DB255] mt-0.5 flex-shrink-0" />
                    <span>Hubungi tim layanan kami jika mengalami kendala dalam mengakses formulir</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 border border-white/20 sticky top-32">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0e284d] to-[#1a3a5c] rounded-xl mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Butuh Bantuan?</h3>
                <p className="text-gray-600 text-sm">Tim kami siap membantu Anda</p>
              </div>

              <div className="space-y-4">
                <div className="group p-4 rounded-xl border border-gray-200 hover:border-[#A9C46C] hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg group-hover:bg-[#A9C46C] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5 text-green-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Telepon</p>
                      <a
                        href="tel:+628113030626"
                        className="font-semibold text-[#0e284d] hover:text-[#A9C46C] transition-colors duration-200"
                      >
                        082371812371
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group p-4 rounded-xl border border-gray-200 hover:border-[#A9C46C] hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg group-hover:bg-[#A9C46C] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5 text-blue-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a
                        href="mailto:psldbrawijaya@ub.ac.id"
                        className="font-semibold text-[#0e284d] hover:text-[#A9C46C] transition-colors duration-200 break-all"
                      >
                        uldukdw@ukdw.ac.id
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Info */}
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Jam Layanan
                </h4>
                <p className="text-sm text-gray-600">
                  Senin - Jumat: 08:00 - 16:00 WIB<br />
                  <span className="text-xs text-gray-500">Respon dalam 1x24 jam</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Pendampingan Mobilitas</h4>
            <p className="text-sm text-gray-600">Bantuan perpindahan dan aksesibilitas di lingkungan kampus</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Pendampingan Akademik</h4>
            <p className="text-sm text-gray-600">Dukungan dalam kegiatan pembelajaran dan ujian</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Layanan Interpretasi</h4>
            <p className="text-sm text-gray-600">Bantuan komunikasi dan interpretasi bahasa isyarat</p>
          </div>
        </div>
      </div>
    </main>
  );
}