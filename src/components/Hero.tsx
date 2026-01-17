'use client';

import { useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const CarScene = dynamic(() => import('./3d/SimpleCarScene'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-secondary">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  ),
});

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-secondary/95 to-secondary"
    >
      {/* 3D Car Scene Background */}
      <div className="absolute inset-0 z-0">
        <CarScene />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/10">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="Clinic Matic 69 Logo" 
              className="h-20 sm:h-24 md:h-32 w-auto drop-shadow-2xl animate-float"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-slide-up leading-tight">
            <span className="text-primary drop-shadow-lg">Clinic Matic</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 sm:mb-4 animate-slide-up delay-100">
            Bengkel Spesialis Mobil Matic
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up delay-200 leading-relaxed">
            Solusi terpercaya untuk service dan perbaikan transmisi otomatis dengan teknisi profesional dan berpengalaman
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up delay-300">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50 text-sm sm:text-base"
            >
              Hubungi Kami
            </Link>
            <Link
              href="#services"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
            >
              Lihat Layanan
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="animate-slide-up delay-400 bg-white/5 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">Tahun Pengalaman</div>
            </div>
            <div className="animate-slide-up delay-500 bg-white/5 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary">5000+</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">Mobil Diperbaiki</div>
            </div>
            <div className="animate-slide-up delay-600 bg-white/5 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary">98%</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">Kepuasan Pelanggan</div>
            </div>
            <div className="animate-slide-up delay-700 bg-white/5 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">Garansi Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0); }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
}
