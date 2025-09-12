"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, User, ArrowRight, Clock } from "lucide-react";

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
  }
];

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
          <img
            src={berita.image}
            alt={berita.title}
            className="w-full h-80 object-cover"
          />
          
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <span className="bg-[#3E7B27] text-white px-3 py-1 rounded-full text-xs font-medium">
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#0e284d] mb-4">
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
type Berita = typeof NEWS_DATA[number];
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
          <p className="text-gray-600 text-lg">
            Ikuti perkembangan terbaru kegiatan dan prestasi kampus inklusi
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((berita) => (
            <article
              key={berita.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
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
                <h2 className="text-xl font-bold text-[#0e284d] mb-3 line-clamp-2">
                  {berita.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {berita.desc}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => onSelectBerita(berita)}
                  className="w-full bg-[#3E7B27] text-white py-2 px-4 rounded-lg hover:bg-[#356a21] transition-colors flex items-center justify-center gap-2"
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
  const [current, setCurrent] = useState(0);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'list', 'detail'
  const [selectedBerita, setSelectedBerita] = useState<Berita | null>(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (currentPage !== 'home') return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % NEWS_DATA.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentPage]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % NEWS_DATA.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + NEWS_DATA.length) % NEWS_DATA.length);

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

  // Home page with carousel
  return (
    <section className="relative bg-gradient-to-b from-[#F9FAFB] to-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e284d] mb-4">
            Berita & Kegiatan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ikuti perkembangan terbaru kegiatan, prestasi, dan program inklusi di kampus kami
          </p>
        </div>

        {/* Main News Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
            <div className="relative">
              <img
                src={NEWS_DATA[current].image}
                alt={NEWS_DATA[current].title}
                className="w-full h-72 md:h-96 object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-[#3E7B27] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {NEWS_DATA[current].category}
                </span>
              </div>
            </div>

            <div className="p-8">
              {/* Meta information */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {NEWS_DATA[current].date}
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {NEWS_DATA[current].author}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0e284d] mb-4">
                {NEWS_DATA[current].title}
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {NEWS_DATA[current].desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleSelectBerita(NEWS_DATA[current])}
                  className="bg-[#3E7B27] text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[#356a21] transition-colors flex items-center justify-center gap-2"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
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
          <div className="flex justify-center gap-2 mt-8">
            {NEWS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? 'bg-[#3E7B27] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Lihat berita ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <button
            onClick={handleViewAllBerita}
            className="bg-white text-[#3E7B27] border-2 border-[#3E7B27] px-8 py-3 rounded-xl text-lg font-semibold hover:bg-[#3E7B27] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Lihat Semua Berita
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}