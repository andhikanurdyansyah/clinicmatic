'use client';

import { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  vehicle: string;
  rating: number;
  review: string;
  date: string;
  image: string;
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Budi Santoso",
      vehicle: "Toyota Avanza 2018",
      rating: 5,
      review: "Pelayanan sangat memuaskan! Transmisi matic mobil saya yang bermasalah ditangani dengan cepat dan profesional. Harga juga sangat reasonable. Highly recommended!",
      date: "2 minggu lalu",
      image: "👨‍💼"
    },
    {
      id: 2,
      name: "Rina Wijaya",
      vehicle: "Honda Jazz 2019",
      rating: 5,
      review: "Teknisi di Clinic Matic sangat ahli dan ramah. Dijelaskan dengan detail masalah transmisi mobil saya. Sekarang mobil sudah smooth kembali. Terima kasih!",
      date: "1 bulan lalu",
      image: "👩‍💼"
    },
    {
      id: 3,
      name: "Ahmad Rizki",
      vehicle: "Nissan Grand Livina 2017",
      rating: 5,
      review: "Sudah 3 kali servis di sini, selalu puas dengan hasilnya. Garansi yang diberikan juga bikin tenang. Bengkel matic terbaik di area Bekasi!",
      date: "3 minggu lalu",
      image: "👨"
    },
    {
      id: 4,
      name: "Siti Nurhaliza",
      vehicle: "Mitsubishi Xpander 2020",
      rating: 5,
      review: "Awalnya ragu karena baru pertama kali ke sini, tapi ternyata hasilnya luar biasa! Transmisi yang tadinya kasar sekarang halus banget. Recommended!",
      date: "1 minggu lalu",
      image: "👩"
    },
    {
      id: 5,
      name: "Dedi Kurniawan",
      vehicle: "Daihatsu Xenia 2016",
      rating: 5,
      review: "Harga transparan, tidak ada biaya tersembunyi. Pengerjaan cepat dan hasil memuaskan. Sudah rekomendasikan ke teman-teman kantor!",
      date: "2 bulan lalu",
      image: "👨‍🔧"
    },
    {
      id: 6,
      name: "Linda Kusuma",
      vehicle: "Suzuki Ertiga 2019",
      rating: 5,
      review: "Pelayanan ramah dan profesional. Dijelaskan dengan detail setiap proses perbaikan. Mobil sekarang nyaman dikendarai lagi. Terima kasih Clinic Matic!",
      date: "3 minggu lalu",
      image: "👩‍🦰"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="testimonials" className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 rounded-full text-sm font-bold tracking-wider border border-red-200">
                TESTIMONI
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-6">
              Apa Kata <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">Pelanggan Kami</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman pelanggan yang telah mempercayai layanan kami.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <div className="relative">
          <ScrollReveal animation="fadeInUp" delay="delay-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 border border-gray-100 hover:border-red-200 hover:-translate-y-2"
                  style={{
                    animation: `fadeInScale 0.5s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Avatar */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.image}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.vehicle}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                    &quot;{testimonial.review}&quot;
                  </p>

                  {/* Date */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {testimonial.date}
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-b-2xl sm:rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="group p-3 sm:p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-500 hover:bg-red-50"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-red-600 to-orange-600'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="group p-3 sm:p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-500 hover:bg-red-50"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats Below Testimonials */}
          <ScrollReveal animation="fadeInUp" delay="delay-200">
            <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: "⭐", number: "4.9/5.0", label: "Rating Rata-rata" },
                { icon: "👥", number: "5000+", label: "Pelanggan Puas" },
                { icon: "💬", number: "500+", label: "Ulasan Positif" },
                { icon: "🔄", number: "95%", label: "Pelanggan Kembali" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-red-600 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
