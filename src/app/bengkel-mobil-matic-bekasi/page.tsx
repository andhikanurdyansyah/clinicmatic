import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocalPageSchema from '@/components/LocalPageSchema';

export const metadata: Metadata = {
  title: 'Bengkel Mobil Matic Bekasi Terpercaya - Service & Perbaikan Transmisi Automatic',
  description: 'Bengkel mobil matic terpercaya di Bekasi Utara, Harapan Jaya. Spesialis service transmisi automatic, CVT, overhaul gearbox matic untuk semua merk mobil. Teknisi berpengalaman 15+ tahun. Hub: 0851-1726-6788',
  keywords: [
    'bengkel mobil matic bekasi',
    'service transmisi matic bekasi',
    'bengkel matic bekasi utara',
    'service matic harapan jaya',
    'perbaikan transmisi automatic bekasi',
    'overhaul matic bekasi',
    'bengkel cvt bekasi',
    'service gearbox matic bekasi',
    'bengkel transmisi otomatis bekasi',
    'bengkel matic terdekat bekasi'
  ],
  alternates: {
    canonical: 'https://clinicmatic69.com/bengkel-mobil-matic-bekasi',
  },
  openGraph: {
    title: 'Bengkel Mobil Matic Bekasi Terpercaya | Clinic Matic 69',
    description: 'Bengkel spesialis transmisi matic di Bekasi. Layanan service, perbaikan, overhaul transmisi automatic semua merk mobil. Lokasi: Harapan Jaya, Bekasi Utara.',
    url: 'https://clinicmatic69.com/bengkel-mobil-matic-bekasi',
    type: 'article',
    images: [
      {
        url: 'https://clinicmatic69.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Bengkel Mobil Matic Bekasi - Clinic Matic 69',
      },
    ],
  },
};

export default function BengkelMobilMaticBekasi() {
  const serviceAreas = [
    'Bekasi Utara', 'Harapan Jaya', 'Harapan Baru', 'Perwira',
    'Bekasi Barat', 'Kranji', 'Bintara', 'Jakasampurna',
    'Bekasi Selatan', 'Pekayon', 'Margahayu', 'Kayuringin',
    'Bekasi Timur', 'Aren Jaya', 'Durenjaya', 'Margahayu'
  ];

  const vehicleBrands = [
    { name: 'Toyota', models: 'Avanza, Innova, Rush, Fortuner, Alphard, Vios, Yaris' },
    { name: 'Honda', models: 'Jazz, Brio, Mobilio, BR-V, HR-V, CR-V, Civic, Accord' },
    { name: 'Daihatsu', models: 'Xenia, Terios, Ayla, Sirion, Gran Max' },
    { name: 'Suzuki', models: 'Ertiga, XL7, Baleno, Swift, Ignis' },
    { name: 'Nissan', models: 'Grand Livina, X-Trail, Juke, Serena, March' },
    { name: 'Mitsubishi', models: 'Xpander, Pajero Sport, Outlander, Mirage' },
    { name: 'Mazda', models: 'CX-5, CX-3, Mazda2, Mazda3, Biante' },
    { name: 'Hyundai', models: 'Creta, Stargazer, Palisade, Santa Fe, Ioniq' }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Harapan Jaya, Bekasi Utara',
      car: 'Toyota Avanza 2018',
      review: 'Service transmisi matic Avanza saya di sini hasilnya sangat memuaskan. Perpindahan gigi jadi halus lagi. Teknisinya sangat berpengalaman dan harga sangat terjangkau.',
      rating: 5
    },
    {
      name: 'Siti Rahma',
      location: 'Harapan Baru, Bekasi Utara',
      car: 'Honda Jazz CVT 2017',
      review: 'Jazz CVT saya sempat ngelitik dan giginya keras. Setelah di-service di Clinic Matic 69, langsung normal kembali. Pelayanan ramah dan transparan!',
      rating: 5
    },
    {
      name: 'Ahmad Yani',
      location: 'Perwira, Bekasi Utara',
      car: 'Nissan Grand Livina 2015',
      review: 'Overhaul transmisi matic Grand Livina saya di sini. Dikerjakan profesional dengan garansi resmi. Sekarang mobil terasa seperti baru lagi. Recommended!',
      rating: 5
    },
    {
      name: 'Dewi Lestari',
      location: 'Kranji, Bekasi Barat',
      car: 'Daihatsu Xenia 2019',
      review: 'Bengkel matic terpercaya di Bekasi! Service rutin Xenia matic saya selalu di sini. Harga jujur dan hasil memuaskan. Pokoknya langganan deh!',
      rating: 5
    }
  ];

  return (
    <>
      <LocalPageSchema />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 overflow-hidden pt-24">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-sm font-medium">📍 Lokasi: Bekasi Utara, Harapan Jaya</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Bengkel Mobil Matic Bekasi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 animate-gradient">Terpercaya & Berpengalaman</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Spesialis service transmisi automatic (CVT, AT, DSG) untuk semua merk mobil di Bekasi. 
            Teknisi profesional dengan pengalaman 15+ tahun, garansi resmi, dan harga transparan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://wa.me/6285117266788?text=Halo%20Clinic%20Matic%2069%2C%20saya%20ingin%20konsultasi%20service%20transmisi%20matic"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:scale-110 transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-2">
                💬 Konsultasi Gratis via WhatsApp
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a 
              href="tel:+6285117266788"
              className="group bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-110 transform"
            >
              <span className="flex items-center gap-2">
                📞 Hubungi: 0851-1726-6788
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-white text-sm">Tahun Pengalaman</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">5000+</div>
              <div className="text-white text-sm">Mobil Ditangani</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">4.9⭐</div>
              <div className="text-white text-sm">Rating Customer</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">95%</div>
              <div className="text-white text-sm">Customer Kembali</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Pilih Kami */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kenapa Pilih Clinic Matic 69 Bekasi?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Kami adalah bengkel spesialis transmisi matic terpercaya di Bekasi dengan standar pelayanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                Spesialis Transmisi Matic
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fokus khusus pada transmisi automatic (CVT, AT, DSG). Bukan bengkel umum, kami SPESIALIS.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-3xl">👨‍🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                Teknisi Bersertifikat
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tim teknisi berpengalaman 15+ tahun dengan sertifikasi resmi dan training berkelanjutan.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500 transition-colors">
                Garansi Resmi
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Semua pekerjaan dilindungi garansi resmi. Kami bertanggung jawab penuh atas hasil kerja kami.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-500 transition-colors">
                Harga Transparan
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Estimasi biaya detail sebelum pengerjaan. Tidak ada biaya tersembunyi.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-red-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-3xl">🚗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-500 transition-colors">
                Semua Merk Mobil
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Melayani Toyota, Honda, Nissan, Mitsubishi, Suzuki, Daihatsu, Mazda, Hyundai, dll.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-yellow-100 dark:border-gray-700 hover:-translate-y-2 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 transition-colors">
                Lokasi Strategis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Berlokasi di Harapan Jaya, Bekasi Utara. Mudah diakses dari seluruh area Bekasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Kami */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Layanan Service Transmisi Matic di Bekasi
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Solusi lengkap untuk semua masalah transmisi automatic mobil Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Service Transmisi Matic Berkala
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Perawatan rutin untuk menjaga performa optimal transmisi matic. Termasuk ganti oli ATF, pembersihan filter, dan pengecekan menyeluruh.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Ganti oli transmisi (ATF/CVTF)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Pembersihan filter transmisi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Pengecekan kondisi komponen
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Diagnosa & Perbaikan Matic
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Diagnosa akurat dengan alat scanner profesional untuk menemukan akar masalah transmisi matic Anda.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Scanning ECU transmisi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Analisa kode error (DTC)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Perbaikan berdasarkan diagnosa
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Overhaul Transmisi Matic
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Overhaul total transmisi matic untuk mengembalikan performa seperti baru. Garansi 6 bulan atau 10.000 km.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Bongkar total transmisi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Ganti komponen aus/rusak
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Tuning & calibrasi ulang
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Tuning Performa Matic
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Optimasi performa transmisi matic untuk respons lebih cepat dan konsumsi BBM lebih efisien.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Kalibrasi shift timing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Optimasi ECU transmisi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Test drive & fine tuning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merk Mobil */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Merk & Model Mobil yang Kami Layani
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Kami melayani service transmisi matic untuk semua merk mobil Jepang, Korea, dan Eropa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleBrands.map((brand, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-orange-500">🚗</span> {brand.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {brand.models}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Tidak menemukan merk mobil Anda? <strong>Hubungi kami untuk konsultasi gratis!</strong>
            </p>
            <a 
              href="https://wa.me/6285117266788?text=Halo%2C%20saya%20ingin%20tanya%20service%20transmisi%20matic%20untuk%20mobil%20saya"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Area Layanan */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Area Layanan Service Matic di Bekasi
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Kami melayani customer dari seluruh wilayah Kota Bekasi dan sekitarnya
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-orange-200 dark:border-gray-700 hover:border-orange-400"
              >
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">📍</span>
                  <span className="text-gray-900 dark:text-white font-medium text-sm">
                    {area}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-12 rounded-2xl shadow-2xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Lokasi Bengkel Kami di Bekasi
            </h3>
            <p className="text-lg mb-6 opacity-90">
              📍 Komp. Barata, Jl. Cempaka IV No.430, RT.007/RW.006<br />
              Harapan Jaya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17124
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://maps.app.goo.gl/R42tor1eBZi5ezQ28"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                🗺️ Lihat di Google Maps
              </a>
              <a 
                href="tel:+6285117266788"
                className="bg-orange-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-800 transition-all duration-300 shadow-lg hover:scale-105"
              >
                📞 Telpon Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Testimoni Customer Bekasi
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ribuan customer di Bekasi telah mempercayai kami untuk service transmisi matic mobil mereka
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  &quot;{testimonial.review}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.car}
                    </div>
                    <div className="text-xs text-orange-500 flex items-center gap-1">
                      <span>📍</span> {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Bekasi */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pertanyaan Seputar Service Matic di Bekasi
            </h2>
          </div>

          <div className="space-y-6">
            <details className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                Berapa biaya service transmisi matic di Bekasi?
                <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Biaya service transmisi matic bervariasi tergantung jenis layanan dan merk mobil. Service berkala mulai dari Rp 500.000, perbaikan ringan Rp 1-3 juta, dan overhaul total Rp 5-15 juta. Hubungi kami untuk estimasi biaya yang akurat untuk mobil Anda.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                Berapa lama waktu pengerjaan service transmisi matic?
                <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Service berkala: 2-4 jam. Perbaikan ringan: 1-2 hari. Overhaul total: 3-7 hari kerja. Kami akan memberikan estimasi waktu yang jelas setelah diagnosa awal.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                Apakah ada garansi untuk perbaikan transmisi matic?
                <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Ya, kami memberikan garansi resmi untuk semua pekerjaan. Garansi service berkala 1 bulan, garansi perbaikan 3 bulan, dan garansi overhaul 6 bulan atau 10.000 km (mana yang tercapai lebih dulu).
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                Dimana lokasi bengkel matic terdekat di Bekasi Utara?
                <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Clinic Matic 69 berlokasi di Komp. Barata, Jl. Cempaka IV No.430, Harapan Jaya, Bekasi Utara. Lokasi kami sangat strategis dan mudah diakses dari seluruh area Bekasi Utara, Barat, Timur, dan Selatan.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg group">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
                Apakah melayani service matic untuk semua merk mobil?
                <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Ya, kami melayani service transmisi matic untuk semua merk mobil Jepang (Toyota, Honda, Nissan, Mitsubishi, Suzuki, Daihatsu, Mazda), Korea (Hyundai, Kia), dan Eropa (Volkswagen, BMW, Mercedes, dll).
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Butuh Service Transmisi Matic di Bekasi?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Konsultasi GRATIS dengan teknisi expert kami. Dapatkan solusi terbaik untuk masalah transmisi matic mobil Anda!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6285117266788?text=Halo%20Clinic%20Matic%2069%2C%20saya%20butuh%20service%20transmisi%20matic%20di%20Bekasi"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat WhatsApp Sekarang
            </a>
            <a 
              href="tel:+6285117266788"
              className="bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-800 transition-all duration-300 shadow-2xl hover:scale-105 border-2 border-white"
            >
              📞 0851-1726-6788
            </a>
          </div>
          <p className="mt-8 text-sm opacity-75">
            Buka Senin - Jumat: 08:00-17:00 | Sabtu: 08:00-15:00
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
