"use client";

import React, { useState } from "react";
import { CheckCircle, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";

export default function SOPPMJDPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Persiapan Awal",
      content: "Pastikan semua dokumen dan peralatan test telah disiapkan sesuai dengan checklist yang telah ditentukan.",
      requirements: ["Dokumen identitas peserta", "Formulir registrasi lengkap", "Peralatan test standar", "Ruangan yang memadai dan nyaman"],
    },
    {
      title: "Registrasi Peserta",
      content: "Lakukan registrasi peserta dengan memverifikasi identitas dan kelengkapan dokumen yang diperlukan.",
      requirements: ["Verifikasi identitas sesuai KTP", "Input data peserta ke sistem", "Pemberian nomor peserta unik", "Briefing singkat tentang prosedur"],
    },
    {
      title: "Pelaksanaan Test",
      content: "Jalankan prosedur test sesuai dengan protokol standar yang telah ditetapkan dengan memperhatikan kenyamanan peserta.",
      requirements: ["Setup peralatan sesuai standar", "Berikan instruksi yang jelas", "Monitoring progress secara berkala", "Dokumentasi hasil secara detail"],
    },
    {
      title: "Evaluasi dan Dokumentasi",
      content: "Lakukan evaluasi hasil test dan dokumentasi lengkap untuk keperluan laporan dan tindak lanjut yang diperlukan.",
      requirements: ["Analisis hasil test komprehensif", "Pembuatan laporan terstruktur", "Penyimpanan data yang aman", "Koordinasi tindak lanjut"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Standar Operasional Prosedur (SOP)</h1>
          <p className="text-2xl font-semibold mb-4 text-slate-600">PMJD Test Protocol</p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Panduan lengkap dan terstruktur untuk proses pelaksanaan test PMJD dengan standar operasional yang telah ditetapkan</p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-700">Progress Langkah</h2>
              <span className="text-sm font-medium px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                {currentStep + 1} dari {steps.length}
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-700 ease-out" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">Daftar Langkah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`p-6 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                    currentStep === index ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl" : "bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-lg">Langkah {index + 1}</span>
                    {currentStep === index && <CheckCircle className="w-6 h-6" />}
                  </div>
                  <h3 className="font-semibold text-base leading-tight">{step.title}</h3>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Current Step Detail */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-4 text-slate-800">
                Langkah {currentStep + 1}: {steps[currentStep].title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>

            {/* Content Description */}
            <div className="mb-10">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                <p className="text-lg leading-relaxed text-slate-700">{steps[currentStep].content}</p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">Persyaratan yang Diperlukan</h3>
              <div className="grid gap-4">
                {steps[currentStep].requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                    </div>
                    <span className="text-slate-700 leading-relaxed font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  currentStep === 0 ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-slate-600 hover:bg-slate-700 text-white hover:shadow-lg transform hover:scale-105"
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
                Sebelumnya
              </button>

              <div className="flex items-center gap-2">
                {steps.map((_, index) => (
                  <button key={index} onClick={() => setCurrentStep(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep ? "bg-blue-500 scale-125" : "bg-slate-300 hover:bg-slate-400"}`} />
                ))}
              </div>

              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  currentStep === steps.length - 1
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:shadow-lg transform hover:scale-105"
                }`}
              >
                Selanjutnya
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800">
            <AlertCircle className="w-7 h-7 text-blue-500" />
            Informasi Penting
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3 text-amber-800">📋 Catatan Pelaksanaan</h3>
              <p className="leading-relaxed text-amber-700">Pastikan setiap langkah dilakukan secara berurutan dan lengkap. Dokumentasikan setiap tahapan untuk keperluan evaluasi dan audit.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3 text-emerald-800">✅ Kontrol Kualitas</h3>
              <p className="leading-relaxed text-emerald-700">Lakukan verifikasi pada setiap tahap untuk memastikan standar kualitas terpenuhi dan proses berjalan sesuai protokol yang ditetapkan.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
