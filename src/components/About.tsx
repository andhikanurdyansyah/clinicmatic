'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6">
              Tentang <span className="text-primary">Clinic Matic 69</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Clinic Matic adalah bengkel spesialis yang fokus pada perbaikan dan perawatan 
              transmisi otomatis (matic) dengan pengalaman lebih dari 10 tahun melayani 
              ribuan pelanggan setia.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              Kami memiliki tim teknisi yang terlatih dan bersertifikat, dilengkapi dengan 
              peralatan diagnostik modern untuk memastikan setiap pekerjaan dilakukan dengan 
              standar kualitas tertinggi.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Komitmen kami adalah memberikan layanan terbaik dengan harga yang kompetitif 
              dan transparan, serta jaminan garansi untuk setiap pekerjaan yang kami lakukan.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl text-primary mb-2">🏆</div>
                <h3 className="font-bold text-secondary text-base sm:text-xl mb-2">Berpengalaman</h3>
                <p className="text-xs sm:text-sm text-gray-600">Lebih dari 10 tahun di industri</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl text-primary mb-2">👨‍🔧</div>
                <h3 className="font-bold text-secondary text-base sm:text-xl mb-2">Profesional</h3>
                <p className="text-xs sm:text-sm text-gray-600">Teknisi bersertifikat dan ahli</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl text-primary mb-2">⚙️</div>
                <h3 className="font-bold text-secondary text-base sm:text-xl mb-2">Modern</h3>
                <p className="text-xs sm:text-sm text-gray-600">Peralatan diagnostik terkini</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl text-primary mb-2">✅</div>
                <h3 className="font-bold text-secondary text-base sm:text-xl mb-2">Terpercaya</h3>
                <p className="text-xs sm:text-sm text-gray-600">Ribuan pelanggan puas</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Logo Besar untuk Branding */}
            <div className="flex justify-center mb-6 lg:mb-8">
              <Image 
                src="/logo.png" 
                alt="Clinic Matic 69 Logo" 
                width={192}
                height={192}
                className="h-32 sm:h-40 md:h-48 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            <div className="bg-primary/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-secondary mb-6">Visi & Misi Kami</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-primary mb-3">Visi</h4>
                <p className="text-gray-700">
                  Menjadi bengkel transmisi matic terpercaya dan terdepan di Indonesia 
                  dengan standar layanan internasional.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Misi</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Memberikan layanan berkualitas tinggi dengan teknisi profesional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Menggunakan peralatan dan spare part berkualitas original
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Menjaga kepercayaan pelanggan dengan transparansi dan integritas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Terus berinovasi dan meningkatkan kompetensi tim
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
