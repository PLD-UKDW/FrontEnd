// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
// import { title } from "process";

// const NAV = [
//   {
//     title: "Tentang",
//     items: [
//       { title: "Sejarah", path: "" },
//       { title: "Visi & Misi", path: "/visi-misi" },
//       { title: "Struktur Organisasi", path: "/struktur-organisasi" },
//       { title: "Tujuan & Sasaran", path: "/tujuan-sasaran" },
//       { title: "Program Kerja", path: "/program-kerja" },
//     ],
//   },
//   {
//     title: "Prosedur Operasional",
//     items: [
//       { title: "SOP PMJD", path: "/sop-pmjd" },
//       { title: "SOP Pendampingan", path: "/jaminan-mutu/sop-pendampingan" },
//       { title: "SOP Rekrutmen & Pelatihan Pendampingan", path: "/jaminan-mutu/sop-rekrutmen-pelatihan" },
//       { title: "SOP Layak Etik", path: "/jaminan-mutu/sop-layak-etik" },
//     ],
//   },
//   {
//     title: "Layanan",
//     items: [
//       { title: "Layanan Disabilitas", path: "/layanan/layanan-disabilitas" },
//       { title: "Layanan Mobilitas", path: "/layanan/layanan-mobilitas" },
//       { title: "Layanan Teknologi Bantu", path: "/layanan/layanan-teknologi-bantu" },
//       { title: "Request Pendamping", path: "/layanan/request-pendamping" },
//       { title: "Digitalisasi Buku", path: "/layanan/digitalisasi-buku" },
//       { title: "Tutorial", path: "/layanan/tutorial" },
//       { title: "Layanan Konseling", path: "/layanan/layanan-konseling" },
//       { title: "Pendaftaran Volunteer", path: "/layanan/pendaftaran-volunteer" },
//     ],
//   },
//   {
//     title: "Berita",
//     items: [
//       { title: "Statistik Mahasiswa", path: "/berita/statistik-mahasiswa" },
//       { title: "Berita Umum", path: "/berita/berita-umum" },
//     ],
//   },
//   {
//     title: "PMJD",
//     items: [
//       { title: "Registrasi", path: "/pmjd/registrasi" },
//       { title: "PMJD Test", path: "/pmjd/test" },
//       //   { title: "Hasil", path: "/pmjd/hasil" },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [accIdx, setAccIdx] = useState<number | null>(null);

//   return (
//     <header className="sticky top-0 z-50 bg-[#3E7B27] text-white shadow-md transition-shadow">
//       <nav className="mx-auto max-w-screen-2xl px-6">
//         <div className="h-32 flex items-center justify-between">
//           {/* Logo kiri */}
//           <Link href="/" className="flex items-center gap-4 shrink-0">
//             <Image src="/logo.png" alt="ULD Universitas Kristen Duta Wacana" width={80} height={80} className="w-20 h-20 object-contain" />
//             <div className="leading-tight">
//               <div className="font-bold text-2xl tracking-wide">ULD</div>
//               <div className="text-lg opacity-90">Universitas Kristen Duta Wacana</div>
//             </div>
//           </Link>

//           {/* Menu desktop */}
//           <ul className="hidden xl:flex items-center gap-5 text-lg font-semibold">
//             {NAV.map((m) => (
//               <li key={m.title} className="relative group">
//                 <button className="inline-flex items-center gap-2 py-2 px-4 rounded-md hover:bg-white/10 focus:outline-none">
//                   {m.title}
//                   <ChevronDown className="w-5 h-5 opacity-80" />
//                 </button>
//                 <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full mt-2">
//                   {/* Kalau item > 6, tampilkan grid kolom agar tidak panjang ke bawah */}
//                   <div className={`rounded-lg bg-white text-gray-900 shadow-xl p-3 text-base ${m.items.length > 6 ? "grid grid-cols-2 gap-2 min-w-[500px]" : "min-w-60"}`}>
//                     {m.items.map((it) => (
//                       <Link key={it.title} href={it.path} className="flex items-center justify-between gap-4 px-4 py-3 rounded-md hover:bg-gray-100 whitespace-nowrap">
//                         <span>{it.title}</span>
//                         {/* <ChevronRight className="w-5 h-5 text-gray-500" /> */}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* Aksi kanan */}
//           <div className="flex items-center gap-4 shrink-0">
//             <button aria-label="Cari" className="hidden md:inline-flex p-3 rounded-md hover:bg-white/10">
//               <Search className="w-6 h-6" />
//             </button>
//             <a href="https://pmb.ukdw.ac.id" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex-1 text-center bg-[#a9c46c] text-[#0e284d] font-bold px-4 py-3 rounded-md hover:brightness-95 z-10">
//               Info PMB
//             </a>
//             <button className="xl:hidden p-3 rounded-md hover:bg-white/10" onClick={() => setOpen(true)} aria-label="Buka menu">
//               <Menu className="w-7 h-7" />
//             </button>
//           </div>
//         </div>

//         {/* Drawer mobile */}
//         {open && (
//           <div className="xl:hidden fixed inset-0 z-50">
//             <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
//             <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-md bg-white text-gray-900 shadow-2xl flex flex-col">
//               <div className="h-20 px-6 flex items-center justify-between border-b">
//                 <span className="font-bold text-xl">Menu</span>
//                 <button className="p-3 rounded-md hover:bg-gray-100" onClick={() => setOpen(false)} aria-label="Tutup menu">
//                   <X className="w-7 h-7" />
//                 </button>
//               </div>

//               <div className="flex-1 overflow-y-auto p-6 text-lg">
//                 {NAV.map((m, i) => {
//                   const openThis = accIdx === i;
//                   return (
//                     <div key={m.title} className="border-b">
//                       <button className="w-full flex items-center justify-between px-4 py-4 font-semibold" onClick={() => setAccIdx(openThis ? null : i)}>
//                         {m.title}
//                         <ChevronDown className={`w-6 h-6 transition ${openThis ? "rotate-180" : ""}`} />
//                       </button>
//                       <div
//                         className={`grid overflow-hidden transition-[grid-template-rows] duration-300
//                           ${openThis ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
//                       >
//                         <div className="min-h-0">
//                           {m.items.map((it) => (
//                             <Link key={it.title} href={it.path} className="block px-8 py-3 hover:bg-gray-100" onClick={() => setOpen(false)}>
//                               {it.title}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}

//                 <div className="mt-6 flex gap-3">
//                   <button className="flex-1 flex items-center justify-center gap-2 rounded-md border px-4 py-3">
//                     <Search className="w-5 h-5" /> Cari
//                   </button>
//                   <a href="https://pmb.ukdw.ac.id" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex-1 text-center bg-[#a9c46c] text-[#0e284d] font-bold px-4 py-3 rounded-md hover:brightness-95 z-10">
//                     Info PMB
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationLogo } from "@/components/ui/navigation-menu";

const componentsTentang: { title: string; href: string; description: string }[] = [
  {
    title: "Sejarah",
    href: "/sejarah",
    description: "",
  },
  {
    title: "Visi & Misi",
    href: "/visi-misi",
    description: "",
  },
  {
    title: "Struktur Organisasi",
    href: "/struktur-organisasi",
    description: "",
  },
  {
    title: "Tujuan & Sasaran",
    href: "/tujuan-sasaran",
    description: "",
  },
  {
    title: "Program Kerja",
    href: "/program-kerja",
    description: "",
  },
];

const componentsProsedur: { title: string; href: string }[] = [
  {
    title: "SOP PMJD",
    href: "/sop-pmjd",
  },
  {
    title: "SOP Pendampingan",
    href: "/sop-pendampingan",
  },
  {
    title: "SOP Rekrutmen & Pelatihan Pendamping",
    href: "/sop-rekrutmen",
  },
  {
    title: "SOP Layak Etik",
    href: "/sop-layak-etik",
  },
];

const componentsLayanan: { title: string; href: string }[] = [
  {
    title: "Layanan Akademis",
    href: "/layanan-akademis",
  },
  {
    title: "Layanan Non-Akademis",
    href: "/layanan-non-akademis",
  },
];

const componentsBerita: { title: string; href: string }[] = [
  {
    title: "Statistik Mahasiswa",
    href: "/statistik-mahasiswa",
  },
  {
    title: "Berita Umum",
    href: "/berita-umum",
  },
];

const componentsPMJD: { title: string; href: string }[] = [
  // {
  //   title: "Registrasi",
  //   href: "/registrasi",
  // },
  {
    title: "Digital Literacy Test",
    href: "/digital-literacy-test",
  },
  {
    title: "College Readiness Test",
    href: "/college-readiness-test",
  },
  {
    title: "Hasil PMJD",
    href: "/hasil-pmjd",
  },
];

export function NavigationMenuDemo() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#02a502] shadow z-50 font-sans">
      <div className="flex items-center justify-between px-9 py-4">
        {/* Kiri - Logo + Nama Kampus */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logould.png" alt="Logo ULD" width={40} height={40} className="h-auto w-auto scale-120 object-contain" />
          <div className="flex flex-col leading-tight text-white font-sans px-0.5">
            <span className="text-sm font-semibold">UNIT LAYANAN</span>
            <span className="text-sm font-semibold">DISABILITAS</span>
            <span className="text-sm font-semibold">UKDW</span>
          </div>
          {/* <Image src="/loguld.png" alt="Logo UKDW" width={40} height={40} className="h-auto w-auto scale-150 object-contain" /> */}
          {/* <div className="flex flex-col leading-tight text-white font-sans px-2">
            <span className="text-sm font-semibold">ULD</span>
            <span className="text-sm font-semibold">UKDW</span>
          </div> */}
        </Link>

        {/* Hamburger Button */}
        <button className="min-[975px]:hidden flex items-center font-sans text-white" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden min-[975px]:flex flex-1 justify-center">
          <NavigationMenu viewport={false} className="flex justify-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tentang</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200 p-4 animate-in fade-in-80 slide-in-from-top-5">
                  <ul className="grid w-[260px] gap-2">
                    {componentsTentang.map((c) => (
                      <li key={c.title}>
                        <NavigationMenuLink asChild>
                          <Link href={c.href} className="block rounded-lg px-3 py-2 text-sm font-medium font-sans text-gray-800 hover:bg-green-50 hover:text-green-700 transition-colors duration-200">
                            {c.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Prosedur Operasional</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200 p-4 animate-in fade-in-80 slide-in-from-top-5">
                  <ul className="grid w-[280px] gap-2">
                    {componentsProsedur.map((c) => (
                      <li key={c.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 
                       hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                          >
                            {c.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200 p-4 animate-in fade-in-80 slide-in-from-top-5">
                  <ul className="grid w-[260px] gap-2">
                    {componentsLayanan.map((c) => (
                      <li key={c.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 
              hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                          >
                            {c.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Berita</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200 p-4 animate-in fade-in-80 slide-in-from-top-5">
                  <ul className="grid w-[260px] gap-2">
                    {componentsBerita.map((c) => (
                      <li key={c.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 
                       hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                          >
                            {c.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>PMJD</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-gray-200 p-4 animate-in fade-in-80 slide-in-from-top-5">
                  <ul className="grid w-[260px] gap-2">
                    {componentsPMJD.map((c) => (
                      <li key={c.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-800 
                       hover:bg-green-50 hover:text-green-700 transition-colors duration-200"
                          >
                            {c.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="https://pmb.ukdw.ac.id/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-sm font-semibold text-white hover:text-green-700 hover:bg-green-50 transition-colors duration-200">
                    PMB
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden min-[975px]:flex items-center gap-4">
          <Link href="/login" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#008000] shadow hover:bg-gray-100 transition">
            Login
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#008000] px-6 pb-4">
          <ul className="flex flex-col gap-2">
            <li>
              <details>
                <summary className="cursor-pointer text-white py-2 px-2 rounded hover:bg-[#006400]">Tentang</summary>
                <ul className="pl-4">
                  {componentsTentang.map((c) => (
                    <li key={c.title}>
                      <Link href={c.href} className="block py-1 text-white hover:underline">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer text-white py-2 px-2 rounded hover:bg-[#006400]">Prosedur Operasional</summary>
                <ul className="pl-4">
                  {componentsProsedur.map((c) => (
                    <li key={c.title}>
                      <Link href={c.href} className="block py-1 text-white hover:underline">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer text-white py-2 px-2 rounded hover:bg-[#006400]">Layanan</summary>
                <ul className="pl-4">
                  {componentsLayanan.map((c) => (
                    <li key={c.title}>
                      <Link href={c.href} className="block py-1 text-white hover:underline">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer text-white py-2 px-2 rounded hover:bg-[#006400]">Berita</summary>
                <ul className="pl-4">
                  {componentsBerita.map((c) => (
                    <li key={c.title}>
                      <Link href={c.href} className="block py-1 text-white hover:underline">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer text-white py-2 px-2 rounded hover:bg-[#006400]">PMJD</summary>
                <ul className="pl-4">
                  {componentsPMJD.map((c) => (
                    <li key={c.title}>
                      <Link href={c.href} className="block py-1 text-white hover:underline">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link href="https://pmb.ukdw.ac.id/" className="block py-2 px-2 text-white rounded hover:bg-[#006400]">
                PMB
              </Link>
            </li>
            <li>
              <Link href="/login" className="block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#008000] shadow hover:bg-gray-100 transition mt-2">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
