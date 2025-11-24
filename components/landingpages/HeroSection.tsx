// "use client";
// import Link from "next/link";

// export default function Hero() {
//   const stats = [
//     { label: "Mahasiswa", value: "50" },
//     { label: "Lulusan", value: "10" },
//   ];

//   return (
//     <section
//       className="relative w-full h-[110vh] flex items-center justify-center text-white overflow-hidden pt-5"
//       style={{
//         backgroundImage: "url('/herosection.jpeg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40"></div>

//       {/* Decorative elements */}
//       <div className="absolute top-10 left-10 w-28 h-28 bg-[#A9C46C]/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#A9C46C]/15 rounded-full blur-3xl"></div>

//       <div className="relative z-10 text-center px-6 max-w-5xl">
//         {/* Heading */}
//         <div className="mb-10">
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
//             Selamat Datang di
//           </h1>
//           <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#A9C46C] mb-4 drop-shadow-2xl">
//             ULD UKDW
//           </div>
//           <p className="text-base md:text-xl lg:text-2xl mb-10 text-gray-100 font-light leading-relaxed max-w-3xl mx-auto">
//             Unit Layanan Disabilitas Universitas Kristen Duta Wacana
//           </p>
//         </div>

//         {/* Statistics cards */}
//         <div className="flex justify-center mb-12">
//           <div className="flex flex-col md:flex-row gap-6 md:gap-10">
//             {stats.map((s, index) => (
//               <div
//                 key={s.label}
//                 className={`group bg-white/95 backdrop-blur-sm text-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl min-w-[220px] min-h-[180px] transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-white/20 ${
//                   index === 0 ? "md:-rotate-1" : "md:rotate-1"
//                 }`}
//                 style={{
//                   background:
//                     "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
//                 }}
//               >
//                 <div className="text-3xl md:text-5xl font-extrabold text-[#3E7B27] mb-2 group-hover:text-[#A9C46C] transition-colors duration-300">
//                   {s.value}
//                 </div>
//                 <div className="text-base md:text-lg font-semibold text-gray-700 tracking-wide">
//                   {s.label}
//                 </div>
//                 <div className="w-12 h-1 bg-gradient-to-r from-[#3E7B27] to-[#A9C46C] rounded-full mt-3 opacity-60"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA button */}
//         <div className="flex justify-center">
//           <Link
//             href="/statistik"
//             className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#A9C46C] to-[#8DB255] text-[#0e284d] font-bold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 hover:from-[#8DB255] hover:to-[#A9C46C] hover:scale-105 hover:shadow-xl transform"
//           >
//             <span className="relative z-10">Lihat Statistik</span>
//             <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             <svg
//               className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-between
                 bg-gradient-to-br from-[#43c458] via-[#049f04] to-[#2d8a3a]
                 px-6 md:px-12 pt-24 md:pt-28 pb-12 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-lime-400/8 to-green-400/8 rounded-full blur-2xl"></div>
      </div>

      {/* RIGHT IMAGE (but first on mobile) */}
      <div className="relative z-10 flex justify-center w-full md:w-1/2 mt-6 md:mt-0 order-1 md:order-2">
        <Image
          src="/heroCharA.png"
          alt="Character"
          width={420}
          height={420}
          className="object-contain drop-shadow-xl hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* LEFT TEXT (but second on mobile) */}
      <div className="relative z-20 flex flex-col max-w-lg text-white mt-6 md:mt-0 order-2 md:order-1">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 font-bebas-neue 
                     bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent 
                     drop-shadow-lg"
        >
          Unit Layanan Disabilitas
        </h1>

        <p className="text-lg md:text-xl mb-8 text-green-50/90 leading-relaxed">
          Mari bersama membangun lingkungan belajar yang ramah, setara, dan inklusif di UKDW
        </p>

        {/* Stats */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 rounded-2xl border border-white/40 bg-white/10 p-6 backdrop-blur-md text-center">
            <span className="text-4xl font-bold text-lime-200 block">4</span>
            <p className="text-sm text-green-100">Active Students</p>
          </div>
          <div className="flex-1 rounded-2xl border border-white/40 bg-white/10 p-6 backdrop-blur-md text-center">
            <span className="text-4xl font-bold text-lime-200 block">3</span>
            <p className="text-sm text-green-100">Graduates</p>
          </div>
        </div>

        <Link
          href="/statistik-mahasiswa"
          className="group relative rounded-2xl bg-gradient-to-r from-white to-green-50 
                     px-8 py-4 text-base font-bold text-[#008000] shadow-lg 
                     hover:scale-105 transition-all w-max"
        >
          View Statistics
        </Link>
      </div>
    </section>
  );
}
