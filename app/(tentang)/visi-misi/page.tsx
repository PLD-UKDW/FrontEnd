"use client";

export default function VisiMisiPage() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B2E22] via-[#144D36] to-[#0B2E22] text-white py-20 px-6 md:px-16 overflow-hidden pt-30">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-lime-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-green-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
            Visi, Misi, & Moto
          </span>
        </h1>
        <p className="text-green-100 text-lg max-w-3xl mx-auto leading-relaxed">
          Landasan dan arah ULD dalam menciptakan kampus yang inklusif
        </p>
      </div>

      {/* Visi */}
      <div className="relative z-10 max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-300">
          Visi
        </h2>
        <p className="text-lg leading-relaxed text-green-100">
          Membangun lingkungan kampus yang ramah terhadap penyandang disabilitas
          dan mewujudkan masyarakat yang inklusif.
        </p>
      </div>

      {/* Misi */}
      <div className="relative z-10 max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-300 text-center">
          Misi
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-green-100">
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
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-green-300">
          Moto
        </h2>
        <p className="text-lg italic text-green-100">
          “Menyemai inklusi demi masa depan berkeadilan!”
        </p>
      </div>
    </section>
  );
}
