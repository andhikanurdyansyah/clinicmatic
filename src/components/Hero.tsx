'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const ModernScene = dynamic(() => import('./3d/SimpleCarScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
        setMousePosition({ x, y });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const timer = setInterval(() => {
      setTime(prev => prev + 0.01);
    }, 16);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const parallaxY = scrollY * 0.5;
  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden transition-colors duration-500"
      style={{
        background: isDark 
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0f0f0f 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #fff5f5 50%, #fafafa 100%)',
      }}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl"
        aria-label="Toggle theme"
      >
        <div className="relative w-6 h-6">
          {/* Sun icon */}
          <svg
            className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-500 ${
              isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          {/* Moon icon */}
          <svg
            className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-500 ${
              isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </button>

      {/* Animated Background Layer */}
      <div className="absolute inset-0">
        {/* Dynamic gradient mesh */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: isDark 
              ? `
                radial-gradient(circle at ${50 + mousePosition.x * 0.5}% ${50 + mousePosition.y * 0.5}%, 
                  rgba(220, 38, 38, 0.15) 0%, 
                  rgba(239, 68, 68, 0.08) 25%,
                  transparent 50%),
                radial-gradient(circle at ${30 - mousePosition.x * 0.3}% ${70 - mousePosition.y * 0.3}%, 
                  rgba(249, 115, 22, 0.12) 0%, 
                  rgba(251, 146, 60, 0.06) 25%,
                  transparent 50%),
                radial-gradient(circle at ${70 + mousePosition.y * 0.2}% ${30 + mousePosition.x * 0.2}%, 
                  rgba(239, 68, 68, 0.1) 0%, 
                  transparent 40%)
              `
              : `
                radial-gradient(circle at ${50 + mousePosition.x * 0.5}% ${50 + mousePosition.y * 0.5}%, 
                  rgba(220, 38, 38, 0.08) 0%, 
                  rgba(239, 68, 68, 0.04) 25%,
                  transparent 50%),
                radial-gradient(circle at ${30 - mousePosition.x * 0.3}% ${70 - mousePosition.y * 0.3}%, 
                  rgba(249, 115, 22, 0.06) 0%, 
                  rgba(251, 146, 60, 0.03) 25%,
                  transparent 50%),
                radial-gradient(circle at ${70 + mousePosition.y * 0.2}% ${30 + mousePosition.x * 0.2}%, 
                  rgba(239, 68, 68, 0.05) 0%, 
                  transparent 40%)
              `,
            transition: 'background 0.3s ease-out',
          }}
        />

        {/* 3D Scene */}
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            opacity: opacity * 0.6,
            transform: `translateY(${parallaxY}px) scale(${1 + scrollY / 5000})`,
            filter: `blur(${Math.min(scrollY / 100, 5)}px) brightness(${Math.max(0.4, 1 - scrollY / 1000)})`,
          }}
        >
          <ModernScene />
        </div>

        {/* Animated light rays */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: isDark ? 0.3 : 0.15,
            background: `
              repeating-conic-gradient(
                from ${time * 20}deg at 50% 50%,
                transparent 0deg,
                rgba(220, 38, 38, ${isDark ? '0.03' : '0.02'}) 2deg,
                transparent 4deg,
                transparent 6deg
              )
            `,
          }}
        />

        {/* Floating energy particles */}
        {[...Array(30)].map((_, i) => {
          const angle = (i / 30) * Math.PI * 2;
          const radius = 40 + (i % 3) * 15;
          const x = 50 + Math.cos(angle + time) * radius;
          const y = 50 + Math.sin(angle + time * 0.8) * radius;
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                background: `radial-gradient(circle, ${
                  ['#DC2626', '#EF4444', '#F97316'][i % 3]
                } 0%, transparent 70%)`,
                boxShadow: `0 0 ${10 + (i % 5) * 2}px ${
                  ['#DC2626', '#EF4444', '#F97316'][i % 3]
                }`,
                opacity: 0.4 + Math.sin(time * 2 + i) * 0.3,
                transform: `scale(${1 + Math.sin(time * 3 + i) * 0.5})`,
                transition: 'all 0.3s ease-out',
              }}
            />
          );
        })}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div 
          className={`w-full max-w-7xl mx-auto transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          {/* Modern Glass Container */}
          <div className={`relative p-6 md:p-10 lg:p-14 rounded-[2rem] backdrop-blur-2xl border overflow-hidden group shadow-2xl transition-colors duration-500 ${
            isDark 
              ? 'bg-gradient-to-br from-black/40 via-black/20 to-black/40 border-white/5' 
              : 'bg-gradient-to-br from-white/60 via-white/40 to-white/60 border-white/40'
          }`}>
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-red-500/50 rounded-tl-[2rem] animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-orange-500/50 rounded-br-[2rem] animate-pulse-slow" 
              style={{ animationDelay: '1s' }} />
            
            {/* Hover glow effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${50 + mousePosition.x * 0.5}% ${50 + mousePosition.y * 0.5}%, rgba(220, 38, 38, 0.1) 0%, transparent 60%)`,
              }}
            />
            
            <div className="relative z-10">
              {/* Logo Section - Modern Minimalist */}
              <div className="mb-10 flex justify-center relative">
                {/* Pulsing glow */}
                <div 
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    transform: `scale(${1 + Math.sin(time * 2) * 0.1})`,
                  }}
                >
                  <div className="w-40 h-40 bg-gradient-radial from-red-600/20 via-orange-500/10 to-transparent rounded-full blur-3xl" />
                </div>

                {/* Rotating energy ring */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: `rotate(${time * 30}deg)`,
                  }}
                >
                  <div className="w-32 h-32 rounded-full border-2 border-transparent">
                    <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-red-500 rounded-full shadow-lg shadow-red-500/50" />
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 -mb-1.5 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50" />
                  </div>
                </div>

                {/* Logo with dynamic transform */}
                <div 
                  className="relative w-32 h-32 transition-all duration-300 ease-out group/logo"
                  style={{
                    transform: `
                      perspective(1000px)
                      rotateY(${mousePosition.x * 0.3}deg)
                      rotateX(${-mousePosition.y * 0.3}deg)
                      translateZ(30px)
                      scale(${1 + Math.sin(time) * 0.05})
                    `,
                  }}
                >
                  {/* Glow backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl blur-2xl opacity-40 group-hover/logo:opacity-70 transition-opacity" />
                  
                  {/* Logo container */}
                  <div className="relative w-full h-full rounded-3xl backdrop-blur-sm bg-gradient-to-br from-black/40 via-red-950/30 to-black/40 border border-red-500/20 flex items-center justify-center shadow-2xl overflow-hidden group-hover/logo:scale-105 group-hover/logo:border-red-500/40 transition-all duration-300">
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] translate-y-[-100%] group-hover/logo:translate-x-[100%] group-hover/logo:translate-y-[100%] transition-transform duration-1000" />
                    
                    {/* Logo image */}
                    <img 
                      src="/logo.png" 
                      alt="Clinic Matic 69 Logo" 
                      className="relative w-20 h-20 object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover/logo:drop-shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all duration-300"
                      style={{
                        filter: 'brightness(1.1) contrast(1.1)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Heading - Modern & Clean */}
              <div className="text-center mb-8">
                <h1 
                  className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 leading-tight"
                  style={{
                    transform: `translateX(${mousePosition.x * 0.5}px)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <span className="relative inline-block group/text">
                    {/* Glow effect */}
                    <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-red-600 via-orange-500 to-red-600 opacity-50 group-hover/text:opacity-80 transition-opacity">
                      Clinic Matic 69
                    </span>
                    {/* Main text */}
                    <span 
                      className={`relative bg-gradient-to-r from-red-400 via-orange-300 to-red-400 bg-clip-text text-transparent transition-opacity duration-500 ${
                        !isDark && 'from-red-600 via-orange-500 to-red-600'
                      }`}
                      style={{
                        backgroundSize: '200% auto',
                        backgroundPosition: `${50 + Math.sin(time) * 50}% center`,
                      }}
                    >
                      Clinic Matic 69
                    </span>
                    {/* Dynamic underline */}
                    <span 
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full"
                      style={{
                        width: `${50 + Math.abs(Math.sin(time * 0.5)) * 50}%`,
                        opacity: 0.6,
                      }}
                    />
                  </span>
                </h1>
                <p 
                  className={`text-lg md:text-xl lg:text-2xl font-light tracking-wider transition-colors duration-500 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  style={{
                    transform: `translateX(${-mousePosition.x * 0.3}px)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  Spesialis Transmisi Matic <span className={`font-semibold ${isDark ? 'text-red-500' : 'text-red-600'}`}>Terpercaya</span>
                </p>
              </div>

              {/* Description */}
              <p className={`text-center text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Solusi <span className={`font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>profesional</span> untuk perawatan dan perbaikan transmisi otomatis kendaraan Anda
              </p>

              {/* Modern CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
                {/* Primary Button */}
                <a
                  href="/#contact"
                  className="group/cta relative px-8 py-4 rounded-xl font-semibold text-base md:text-lg overflow-hidden transition-all duration-300"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg) translateZ(10px)`,
                  }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-100 group-hover/cta:opacity-90 transition-opacity" />
                  
                  {/* Radial glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle 100px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.2), transparent)',
                    }}
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative flex items-center gap-3 text-white drop-shadow-lg">
                    <svg className="w-5 h-5 transition-transform group-hover/cta:scale-110 duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Konsultasi Gratis
                  </span>
                </a>

                {/* Secondary Button */}
                <a
                  href="#services"
                  className="group/cta2 relative px-8 py-4 rounded-xl font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 border border-white/10 hover:border-red-500/50"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg) translateZ(10px)`,
                  }}
                >
                  {/* Glass background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                  
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/20 to-orange-600/0 -translate-x-full group-hover/cta2:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative flex items-center gap-2 text-white">
                    Lihat Layanan
                    <svg className="w-4 h-4 group-hover/cta2:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Modern Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { number: '15+', label: 'Tahun Pengalaman', color: '#DC2626' },
                  { number: '5000+', label: 'Mobil Ditangani', color: '#F97316' },
                  { number: '98%', label: 'Kepuasan Pelanggan', color: '#DC2626' },
                  { number: '24/7', label: 'Konsultasi', color: '#F97316' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`group/stat relative p-5 md:p-6 rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden ${
                      isDark 
                        ? 'bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-white/20' 
                        : 'bg-gradient-to-br from-white/60 to-white/40 border-white/40 hover:border-white/60'
                    }`}
                    style={{
                      transform: `perspective(800px) rotateY(${mousePosition.x * 0.03}deg) rotateX(${-mousePosition.y * 0.03}deg)`,
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${stat.color}15, transparent)`,
                      }}
                    />
                    
                    {/* Corner accent */}
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl"
                      style={{
                        background: `linear-gradient(to bottom right, ${stat.color}20, transparent)`,
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative text-center">
                      <div 
                        className="text-2xl md:text-3xl lg:text-4xl font-black mb-1 group-hover/stat:scale-105 transition-transform duration-300"
                        style={{
                          color: stat.color,
                          textShadow: `0 0 20px ${stat.color}50`,
                        }}
                      >
                        {stat.number}
                      </div>
                      <div className={`text-xs md:text-sm font-medium transition-colors duration-500 ${
                        isDark ? 'text-gray-400' : 'text-gray-700'
                      }`}>
                        {stat.label}
                      </div>
                    </div>

                    {/* Animated line */}
                    <div 
                      className="absolute bottom-0 left-0 h-0.5 w-0 group-hover/stat:w-full transition-all duration-500"
                      style={{
                        background: `linear-gradient(to right, ${stat.color}, ${stat.color}80)`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div 
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group/scroll"
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
      >
        {/* Scroll mouse */}
        <div className="relative">
          {/* Outer glow */}
          <div className={`absolute inset-0 w-6 h-10 border rounded-full blur-sm ${
            isDark ? 'border-white/10' : 'border-gray-400/30'
          }`} />
          
          {/* Main indicator */}
          <div className={`relative w-6 h-10 border rounded-full flex items-start justify-center p-1.5 transition-colors ${
            isDark 
              ? 'border-white/30 group-hover/scroll:border-red-500/50' 
              : 'border-gray-500/50 group-hover/scroll:border-red-600/70'
          }`}>
            <div 
              className="w-1 h-2 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"
              style={{
                animation: 'scroll-smooth 2s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Text */}
        <span className={`text-[10px] font-medium tracking-wider transition-colors ${
          isDark 
            ? 'text-gray-500 group-hover/scroll:text-red-400' 
            : 'text-gray-600 group-hover/scroll:text-red-600'
        }`}>
          SCROLL
        </span>
      </div>
    </section>
  );
}
