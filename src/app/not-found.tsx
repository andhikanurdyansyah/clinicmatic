import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan - 404',
  description: 'Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Clinic Matic 69 untuk informasi layanan transmisi matic terbaik di Bekasi.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-gray-200 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Car Icon */}
            <div className="text-7xl md:text-8xl animate-bounce">
              🚗
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Maaf, halaman yang Anda cari sepertinya sedang &quot;mogok&quot;. 
            Tapi jangan khawatir, kami bisa membantu Anda menemukan jalan yang tepat!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Kembali ke Beranda
          </Link>
          
          <a
            href="tel:+628511726688"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-lg border-2 border-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Hubungi Kami
          </a>
        </div>

        {/* Helpful Links */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Mungkin Anda Mencari:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/#services"
              className="group p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">⚙️</div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    Layanan Kami
                  </div>
                  <div className="text-sm text-gray-600">
                    Service transmisi matic
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/#about"
              className="group p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">ℹ️</div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    Tentang Kami
                  </div>
                  <div className="text-sm text-gray-600">
                    Profil bengkel kami
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/#contact"
              className="group p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">📍</div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    Lokasi
                  </div>
                  <div className="text-sm text-gray-600">
                    Harapan Jaya, Bekasi
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/bengkel-mobil-matic-bekasi"
              className="group p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🔧</div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    Info Bengkel Matic
                  </div>
                  <div className="text-sm text-gray-600">
                    Informasi lengkap
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-gray-500 text-sm">
          <p>
            Jika Anda yakin halaman ini seharusnya ada, silakan{' '}
            <a
              href="https://wa.me/628511726688"
              className="text-red-600 hover:text-red-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              laporkan kepada kami
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
