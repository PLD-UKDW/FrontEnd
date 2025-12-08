"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, User, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

// Data berita yang lebih lengkap
const NEWS_DATA = [
  {
    id: 1,
    title: "Kompetisi TIK Bagi Penyandang Disabilitas",
    desc: "Mahasiswa difabel meraih Juara 1 dalam kompetisi TIK tingkat nasional dengan inovasi aplikasi pembelajaran inklusif.",
    image: "/berita/1.jpeg",
    date: "15 November 2024",
    author: "Tim Redaksi",
    category: "Prestasi",
    content: `Mahasiswa Program Studi Teknik Informatika berhasil meraih juara pertama dalam Kompetisi Teknologi Informasi dan Komunikasi untuk Penyandang Disabilitas tingkat nasional. 

    Kompetisi yang diselenggarakan oleh Kementerian Komunikasi dan Informatika ini diikuti oleh lebih dari 100 peserta dari seluruh Indonesia. Aplikasi yang dikembangkan bernama "EduAccess" merupakan platform pembelajaran digital yang dirancang khusus untuk mahasiswa dengan berbagai jenis disabilitas.

    "Kami sangat bangga dengan pencapaian ini. Ini menunjukkan bahwa dengan dukungan yang tepat, mahasiswa difabel dapat berprestasi di bidang teknologi," ujar Dr. Ahmad Susanto, Koordinator Program Inklusi.`
  },
  {
    id: 2,
    title: "Pelatihan Aksesibilitas Digital",
    desc: "Pelatihan inklusi digital untuk dosen dan staf dalam menyediakan bahan ajar yang ramah dan accessible untuk semua mahasiswa.",
    image: "/berita/2.jpeg",
    date: "8 November 2024",
    author: "Dr. Sarah Wijaya",
    category: "Pelatihan",
    content: `Universitas menggelar pelatihan aksesibilitas digital yang diikuti oleh 75 dosen dan staf dari berbagai fakultas. Pelatihan ini bertujuan untuk meningkatkan kemampuan tenaga pengajar dalam menyediakan materi pembelajaran yang accessible.

    Materi pelatihan meliputi desain universal dalam pembelajaran, penggunaan teknologi assistive, dan cara membuat dokumen digital yang ramah screen reader. Peserta juga diajarkan cara membuat video pembelajaran dengan subtitle dan audio description.

    "Pelatihan ini sangat penting untuk memastikan semua mahasiswa dapat mengakses materi pembelajaran dengan mudah," kata Prof. Dr. Linda Sari, Wakil Rektor Bidang Akademik.`
  },
  {
    id: 3,
    title: "Festival Inklusi Kampus",
    desc: "Acara tahunan untuk merayakan keberagaman dan inklusi di lingkungan kampus dengan berbagai kegiatan menarik dan edukatif.",
    image: "/berita/3.jpeg",
    date: "3 November 2024",
    author: "Tim Event",
    category: "Event",
    content: `Festival Inklusi Kampus 2024 sukses diselenggarakan dengan antusias yang tinggi dari seluruh civitas akademika. Acara yang berlangsung selama tiga hari ini menampilkan berbagai kegiatan seperti pameran karya mahasiswa difabel, workshop, dan talk show.

    Salah satu highlight acara adalah pameran seni dari mahasiswa dengan disabilitas visual yang menampilkan karya lukisan dan patung yang menginspirasi. Selain itu, ada juga pertunjukan musik dan tari inklusif yang melibatkan mahasiswa dengan dan tanpa disabilitas.

    "Festival ini membuktikan bahwa keberagaman adalah kekuatan. Setiap individu memiliki potensi untuk berkarya dan berkontribusi," ungkap Rektor dalam sambutan penutupan.`
  },
  {
    id: 4,
    title: "Workshop Pengembangan Kurikulum Inklusif",
    desc: "Dosen dan mahasiswa berkolaborasi dalam workshop untuk menyusun kurikulum yang ramah bagi semua kalangan.",
    image: "/berita/4.jpeg",
    date: "28 Oktober 2024",
    author: "Dr. Budi Santoso",
    category: "Workshop",
    content: `Sebagai bagian dari komitmen kampus terhadap pendidikan inklusif, fakultas mengadakan workshop pengembangan kurikulum inklusif. Workshop ini melibatkan dosen, mahasiswa, dan perwakilan organisasi disabilitas.

    Peserta mendiskusikan strategi pembelajaran yang adaptif, penyesuaian tugas, serta penggunaan teknologi untuk mendukung mahasiswa berkebutuhan khusus. Hasil workshop akan menjadi dasar revisi kurikulum tahun depan.

    "Kolaborasi ini penting agar kurikulum benar-benar menjawab kebutuhan semua mahasiswa," ujar Dr. Budi Santoso, Ketua Panitia Workshop.`
  },
  {
    id: 5,
    title: "Sosialisasi Beasiswa Mahasiswa Difabel",
    desc: "Kampus mengadakan sosialisasi program beasiswa khusus bagi mahasiswa penyandang disabilitas.",
    image: "/berita/5.jpeg",
    date: "20 Oktober 2024",
    author: "Humas Kampus",
    category: "Sosialisasi",
    content: `Untuk mendukung akses pendidikan tinggi bagi penyandang disabilitas, kampus meluncurkan program beasiswa khusus. Sosialisasi program ini dihadiri oleh ratusan mahasiswa dan orang tua.

    Beasiswa mencakup biaya kuliah, tunjangan alat bantu, serta pelatihan keterampilan. Pendaftaran dibuka hingga akhir November 2024.

    "Kami ingin memastikan tidak ada hambatan finansial bagi mahasiswa difabel untuk meraih pendidikan terbaik," kata Kepala Biro Kemahasiswaan.`
  },
  {
    id: 6,
    title: "Lomba Video Kreatif Inklusi",
    desc: "Mahasiswa membuat video kreatif bertema inklusi dan keberagaman, pemenang mendapat penghargaan khusus.",
    image: "/berita/6.jpeg",
    date: "12 Oktober 2024",
    author: "Panitia Lomba",
    category: "Lomba",
    content: `Dalam rangka memperingati Bulan Inklusi, kampus mengadakan lomba video kreatif bertema "Inklusi untuk Semua". Lomba ini terbuka untuk seluruh mahasiswa dari berbagai jurusan.

    Video terbaik menampilkan kisah inspiratif tentang persahabatan dan kolaborasi antara mahasiswa dengan dan tanpa disabilitas. Pemenang utama mendapatkan penghargaan dan kesempatan magang di perusahaan mitra kampus.

    "Kreativitas mahasiswa sangat luar biasa, pesan inklusi tersampaikan dengan cara yang menyentuh," ujar salah satu juri lomba.`
  },
  {
    id: 7,
    title: "Seminar Nasional Pendidikan Inklusif",
    desc: "Seminar menghadirkan pakar nasional membahas tantangan dan solusi pendidikan inklusif di Indonesia.",
    image: "/berita/7.jpeg",
    date: "5 Oktober 2024",
    author: "Panitia Seminar",
    category: "Seminar",
    content: `Seminar Nasional Pendidikan Inklusif 2024 menghadirkan pembicara dari Kementerian Pendidikan, LSM, dan praktisi pendidikan. Topik yang dibahas meliputi kebijakan, teknologi, dan praktik terbaik di sekolah dan perguruan tinggi.

    Peserta seminar mendapatkan wawasan baru tentang pentingnya kolaborasi lintas sektor untuk mewujudkan pendidikan yang ramah bagi semua.

    "Seminar ini menjadi momentum penting untuk memperkuat komitmen bersama dalam membangun sistem pendidikan inklusif," kata Ketua Panitia.`
  },
  {
    id: 8,
    title: "Peluncuran Aplikasi Kampus Inklusif",
    desc: "Aplikasi mobile baru diluncurkan untuk memudahkan akses informasi dan layanan kampus bagi mahasiswa difabel.",
    image: "/berita/8.jpeg",
    date: "1 Oktober 2024",
    author: "Tim IT Kampus",
    category: "Teknologi",
    content: `Kampus resmi meluncurkan aplikasi mobile "Kampus Inklusif" yang dirancang khusus untuk mendukung kebutuhan mahasiswa difabel. Aplikasi ini menyediakan fitur navigasi kampus, jadwal kuliah, dan layanan konsultasi daring.

    Pengembangan aplikasi melibatkan mahasiswa difabel sebagai tester utama untuk memastikan kemudahan penggunaan dan aksesibilitas.

    "Aplikasi ini diharapkan menjadi solusi nyata dalam meningkatkan pengalaman belajar mahasiswa difabel," ujar Kepala Pusat Teknologi Informasi.`
  }
];

// Component untuk halaman detail berita
type Berita = typeof NEWS_DATA[number];

// Carousel for 3 cards per slide, 1 row, with space between cards, tanpa background luar
function BeritaCarousel({
  onSelectBerita,
}: {
  onSelectBerita: (berita: Berita) => void;
}) {
  const [current, setCurrent] = useState(0);

  // Calculate total slides (3 per slide)
  const totalSlides = Math.ceil(NEWS_DATA.length / 3);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Get berita for current slide
  const beritaSlice = NEWS_DATA.slice(current * 3, current * 3 + 3);

  return (
    <div className="relative max-w-6xl mx-auto mb-12">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-0">
          {beritaSlice.map((berita) => (
            <article
              key={berita.id}
              className="flex flex-col h-full border border-gray-100 rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
            >
              <Image
                src={berita.image}
                alt={berita.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="bg-[#02a502] text-white px-2 py-1 rounded-full text-xs font-medium mb-2 w-fit">
                  {berita.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  {berita.date}
                </div>
                <h2 className="text-lg font-bold text-[#3e4095] mb-2 line-clamp-2">
                  {berita.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {berita.desc}
                </p>
                <button
                  onClick={() => onSelectBerita(berita)}
                  className="mt-auto bg-[#02a502] text-white py-2 px-4 rounded-lg hover:bg-[#008000] transition-colors flex items-center justify-center gap-2"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
          {/* Fill empty cards if not enough berita */}
          {beritaSlice.length < 3 &&
            Array.from({ length: 3 - beritaSlice.length }).map((_, idx) => (
              <div key={idx} className="hidden md:block" />
            ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
        aria-label="Berita sebelumnya"
      >
        <ChevronLeft className="w-6 h-6 text-[#0e284d]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
        aria-label="Berita berikutnya"
      >
        <ChevronRight className="w-6 h-6 text-[#0e284d]" />
      </button>
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-[#02a502] scale-100' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Lihat berita ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Component untuk halaman detail berita
function BeritaDetail({ berita, onBack }: { berita: Berita; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-[#3E7B27] hover:text-[#356a21] font-medium transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Kembali ke Beranda
        </button>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Image
            src={berita.image}
            alt={berita.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <span className="bg-[#02a502] text-white px-3 py-1 rounded-full text-xs font-medium">
                {berita.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {berita.date}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {berita.author}
              </div>
            </div>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-[#3e4095] mb-4">
              {berita.title}
            </h1>
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {berita.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

// Component untuk daftar semua berita
type BeritaListProps = {
  onSelectBerita: (berita: Berita) => void;
  onBack: () => void;
};

function BeritaList({ onSelectBerita, onBack }: BeritaListProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-[#3E7B27] hover:text-[#356a21] font-medium transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Kembali ke Beranda
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0e284d] mb-4">
            Semua Berita & Kegiatan
          </h1>
          <p className="text-base md:text-lg lg:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Ikuti perkembangan terbaru kegiatan dan prestasi kampus inklusi
          </p>
        </div>
        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEWS_DATA.map((berita) => (
            <article
              key={berita.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={berita.image}
                alt={berita.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#3E7B27] text-white px-2 py-1 rounded-full text-xs font-medium">
                    {berita.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {berita.date}
                  </div>
                </div>
                {/* Title */}
                <h2 className="text-xl font-bold text-[#3e4095] mb-3 line-clamp-2">
                  {berita.title}
                </h2>
                {/* Description */}
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1 font-medium">
                  {berita.desc}
                </p>
                {/* Read More Button */}
                <button
                  onClick={() => onSelectBerita(berita)}
                  className="w-full bg-[#02a502] text-white py-2 px-4 rounded-lg hover:bg-[#008000] transition-colors flex items-center justify-center gap-2"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main component
export default function BeritaSection() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'list', 'detail'
  const [selectedBerita, setSelectedBerita] = useState<Berita | null>(null);

  const handleSelectBerita = (berita: Berita) => {
    setSelectedBerita(berita);
    setCurrentPage('detail');
  };

  const handleViewAllBerita = () => {
    setCurrentPage('list');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedBerita(null);
  };

  // Render different pages based on current page
  if (currentPage === 'detail' && selectedBerita) {
    return <BeritaDetail berita={selectedBerita} onBack={handleBackToHome} />;
  }

  if (currentPage === 'list') {
    return <BeritaList onSelectBerita={handleSelectBerita} onBack={handleBackToHome} />;
  }

  // Home page with 3-card carousel
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 px-6 md:px-12">
      {/* <div className="max-w-6xl mx-auto -mt-15"> */}
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-base md:text-2xl lg:text-3xl font-extrabold text-[#3e4095] mb-2">
            Berita & Kegiatan <span className="text-[#02a502]">Kami</span>
          </h2>
          <p className="text-base md:text-lg lg:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Ikuti perkembangan terbaru kegiatan, prestasi, dan program inklusi di kampus kami
          </p>
        </div>
        {/* Carousel */}
        <BeritaCarousel onSelectBerita={handleSelectBerita} />
        {/* View All News Button */}
        <div className="text-center -mt-8">
          <button
            onClick={handleViewAllBerita}
            className="bg-white text-[#02a502] border-2 border-[#008000] px-4 py-2 rounded-xl text-lg font-semibold hover:bg-[#02a502] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Lihat Semua Berita
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}