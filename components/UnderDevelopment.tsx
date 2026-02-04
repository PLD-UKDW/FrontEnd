"use client";

export default function UnderDevelopment() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6">
            {/* Background Accent */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-lime-400/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-green-300/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                {/* <div className="mb-8">
                    <Image
                        src="/maintenance.jpg"
                        alt="Under Development"
                        width={400}
                        height={400}
                        className="mx-auto"
                    />
                </div> */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#3e4095] mb-4">
                    Halaman <span className="text-[#02a502]">Sedang</span> Dalam Pengembangan
                </h1>
                <p className="text-gray-600 text-lg">
                    Kami sedang bekerja keras untuk menghadirkan konten terbaik untuk Anda.
                </p>
            </div>
        </section>
    );
}
