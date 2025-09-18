"use client";

export default function VisiMisiPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 md:px-16 overflow-hidden pt-30">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-green-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-12 -mt-7">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          <span className="text-[#3e4095]">
          {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e4095] to-[#02a502]"> */}
            Visi, Misi, & Moto
          </span>
        </h1>
        <p className="space-y-6 text-lg leading-relaxed text-gray-700">
          Landasan dan arah ULD dalam menciptakan kampus yang inklusif
        </p>
      </div>

      {/* Visi */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#02a502]">
          Visi
        </h2>
        <p className="space-y-6 text-lg leading-relaxed text-gray-700">
          Membangun lingkungan kampus yang ramah terhadap penyandang disabilitas
          dan mewujudkan masyarakat yang inklusif.
        </p>
      </div>

      {/* Misi */}
      <div className="relative z-10 max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#02a502] text-center">
          Misi
        </h2>
        <ul className="list-disc list-inside space-y-6 text-lg leading-relaxed text-gray-700">
          <li>
            Menyediakan layanan baik fisik maupun non fisik bagi penyandang
            disabilitas.
          </li>
          <li>Mengembangkan isu-isu disabilitas dalam dunia akademik.</li>
          <li>
            Meningkatkan sensitivitas civitas akademika terhadap isu-isu
            disabilitas dan penyandang disabilitas.
          </li>
          <li>
            Melakukan pengabdian kepada masyarakat agar kehidupan penyandang
            disabilitas lebih baik serta mendapat kesetaraan hak dan keadilan.
          </li>
        </ul>
      </div>

      {/* Moto */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#02a502]">
          Moto
        </h2>
        <p className="text-lg italic text-gray-700">
          “Menyemai inklusi demi masa depan berkeadilan!”
        </p>
      </div>
    </section>
  );
}
