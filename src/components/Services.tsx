'use client';

import ScrollReveal from './ScrollReveal';

export default function Services() {
  const services = [
    {
      icon: '⚙️',
      title: 'Service Transmisi Matic',
      description: 'Service rutin dan perawatan transmisi otomatis untuk performa optimal kendaraan Anda',
      features: ['Ganti oli transmisi', 'Tune-up transmisi', 'Cleaning system', 'Check valve body'],
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500/10',
    },
    {
      icon: '🔧',
      title: 'Perbaikan Transmisi',
      description: 'Perbaikan transmisi matic yang bermasalah dengan teknisi ahli dan berpengalaman',
      features: ['Diagnosa elektronik', 'Overhaul transmisi', 'Ganti komponen rusak', 'Test performa'],
      color: 'from-red-500 to-pink-500',
      iconBg: 'bg-red-500/10',
    },
    {
      icon: '🔍',
      title: 'Diagnosa Kerusakan',
      description: 'Diagnosa lengkap dengan alat modern untuk deteksi masalah secara akurat',
      features: ['Scanning komputer', 'Test drive', 'Laporan detail', 'Konsultasi ahli'],
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-500/10',
    },
    {
      icon: '💧',
      title: 'Flush Oli Transmisi',
      description: 'Penggantian oli transmisi total dengan mesin khusus untuk hasil maksimal',
      features: ['Oli original', 'Teknologi flush modern', 'Hasil maksimal', 'Garansi kualitas'],
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500/10',
    },
    {
      icon: '⚡',
      title: 'Perbaikan Elektrik',
      description: 'Service dan perbaikan sistem elektrik transmisi dengan peralatan terkini',
      features: ['Sensor transmisi', 'ECU programming', 'Wiring repair', 'Update software'],
      color: 'from-yellow-500 to-orange-500',
      iconBg: 'bg-yellow-500/10',
    },
    {
      icon: '🛠️',
      title: 'Maintenance Berkala',
      description: 'Paket perawatan berkala untuk menjaga kondisi transmisi tetap prima',
      features: ['Jadwal teratur', 'Harga paket', 'Garansi service', 'Free check-up'],
      color: 'from-teal-500 to-cyan-500',
      iconBg: 'bg-teal-500/10',
    },
  ];

  const whyChooseUs = [
    { icon: '✓', title: 'Teknisi Bersertifikat', desc: 'Tim ahli berpengalaman', color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { icon: '✓', title: 'Peralatan Modern', desc: 'Tools diagnostik terkini', color: 'bg-gradient-to-br from-purple-500 to-purple-600' },
    { icon: '✓', title: 'Garansi Service', desc: 'Jaminan kualitas kerja', color: 'bg-gradient-to-br from-green-500 to-green-600' },
    { icon: '✓', title: 'Harga Transparan', desc: 'Tanpa biaya tersembunyi', color: 'bg-gradient-to-br from-orange-500 to-orange-600' },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider">
                LAYANAN KAMI
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary mb-6">
              Layanan <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">Profesional</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kami menyediakan berbagai layanan lengkap untuk transmisi otomatis mobil Anda 
              dengan standar kualitas tertinggi dan garansi terpercaya
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid with Premium 3D Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index} 
              animation="scaleIn"
              delay={`delay-${(index % 3 + 1) * 100}`}
              threshold={0.15}
            >
              <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 hover:border-primary/30 h-full overflow-hidden">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.07] rounded-3xl transition-all duration-700`}></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon with Enhanced 3D Effect */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 ${service.iconBg} rounded-2xl blur-2xl transform group-hover:scale-125 transition-transform duration-700`}></div>
                    <div className={`relative ${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center text-gray-700 group/item"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center mr-3 flex-shrink-0 transform group-hover/item:scale-125 group-hover/item:rotate-180 transition-all duration-500 shadow-md">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="font-medium group-hover/item:translate-x-1 transition-transform duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-2xl group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-primary/20 rounded-bl-2xl group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Why Choose Us Section with 3D Cards */}
        <ScrollReveal animation="fadeInUp">
          <div className="relative bg-gradient-to-br from-secondary via-gray-900 to-secondary rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float delay-700"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Mengapa Memilih <span className="text-primary">Clinic Matic?</span>
                </h3>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  Kami berkomitmen memberikan layanan terbaik dengan standar profesional
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index}
                    className="relative group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-primary/50 transition-all duration-500 card-3d"
                  >
                    <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-white mb-2 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-white/70 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-red-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Konsultasi Gratis Sekarang</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
