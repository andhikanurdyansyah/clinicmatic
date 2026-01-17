'use client';

export default function Services() {
  const services = [
    {
      icon: '⚙️',
      title: 'Service Transmisi Matic',
      description: 'Service rutin dan perawatan transmisi otomatis untuk performa optimal',
      features: ['Ganti oli transmisi', 'Tune-up transmisi', 'Cleaning system'],
    },
    {
      icon: '🔧',
      title: 'Perbaikan Transmisi',
      description: 'Perbaikan transmisi matic yang bermasalah dengan teknisi ahli',
      features: ['Diagnosa elektronik', 'Overhaul transmisi', 'Ganti komponen rusak'],
    },
    {
      icon: '🔍',
      title: 'Diagnosa Kerusakan',
      description: 'Diagnosa lengkap dengan alat modern untuk deteksi masalah',
      features: ['Scanning komputer', 'Test drive', 'Laporan detail'],
    },
    {
      icon: '💧',
      title: 'Flush Oli Transmisi',
      description: 'Penggantian oli transmisi total dengan mesin khusus',
      features: ['Oli original', 'Teknologi flush modern', 'Hasil maksimal'],
    },
    {
      icon: '⚡',
      title: 'Perbaikan Elektrik',
      description: 'Service dan perbaikan sistem elektrik transmisi',
      features: ['Sensor transmisi', 'ECU programming', 'Wiring repair'],
    },
    {
      icon: '🛠️',
      title: 'Maintenance Berkala',
      description: 'Paket perawatan berkala untuk menjaga kondisi transmisi',
      features: ['Jadwal teratur', 'Harga paket', 'Garansi service'],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Kami menyediakan berbagai layanan lengkap untuk transmisi otomatis mobil Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-primary/10 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-6">
            Mengapa Memilih Clinic Matic?
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <h4 className="font-semibold text-secondary mb-2 text-sm sm:text-base">Teknisi Bersertifikat</h4>
              <p className="text-xs sm:text-sm text-gray-600">Tim ahli berpengalaman</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <h4 className="font-semibold text-secondary mb-2 text-sm sm:text-base">Peralatan Modern</h4>
              <p className="text-xs sm:text-sm text-gray-600">Tools diagnostik terkini</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <h4 className="font-semibold text-secondary mb-2 text-sm sm:text-base">Garansi Service</h4>
              <p className="text-xs sm:text-sm text-gray-600">Jaminan kualitas kerja</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-2xl sm:text-3xl mb-2">✓</div>
              <h4 className="font-semibold text-secondary mb-2 text-sm sm:text-base">Harga Transparan</h4>
              <p className="text-xs sm:text-sm text-gray-600">Tanpa biaya tersembunyi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
