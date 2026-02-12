'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { trackContactConversion } from '@/utils/gtag';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track Google Ads Conversion
    trackContactConversion();
    
    // WhatsApp integration
    const message = `Halo Clinic Matic,%0A%0ANama: ${formData.name}%0ATelepon: ${formData.phone}%0AEmail: ${formData.email}%0AModel Mobil: ${formData.carModel}%0APesan: ${formData.message}`;
    window.open(`https://wa.me/6285117266788?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fadeInUp">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider">
                HUBUNGI KAMI
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary mb-6">
              Hubungi <span className="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">Kami</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Konsultasikan masalah transmisi matic Anda dengan ahlinya. 
              Kami siap membantu dengan solusi terbaik!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form with Premium Design */}
          <ScrollReveal animation="fadeInLeft" delay="delay-100">
            <div className="group relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100 hover:shadow-[0_0_40px_rgba(220,38,38,0.1)] transition-all duration-700 overflow-hidden">
              {/* Decorative Corners */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-primary/20 rounded-tr-3xl group-hover:border-primary/40 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-primary/20 rounded-bl-3xl group-hover:border-primary/40 transition-all duration-500"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-500">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-secondary group-hover:text-primary transition-colors duration-500">Kirim Pesan</h3>
                </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50 focus:bg-white"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50 focus:bg-white"
                    placeholder="08123456789"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50 focus:bg-white"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="carModel" className="block text-sm font-bold text-gray-700 mb-2">
                    Model Mobil
                  </label>
                  <input
                    type="text"
                    id="carModel"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-gray-50 focus:bg-white"
                    placeholder="Contoh: Toyota Avanza 2020"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Pesan / Keluhan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none bg-gray-50 focus:bg-white"
                    placeholder="Jelaskan masalah atau pertanyaan Anda"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-primary via-red-600 to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold py-5 rounded-2xl transition-all duration-700 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                    <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Kirim via WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                </button>
              </form>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <ScrollReveal animation="fadeInRight" delay="delay-200">
              <div className="relative bg-gradient-to-br from-secondary via-gray-900 to-secondary rounded-3xl shadow-2xl p-8 sm:p-10 text-white card-3d overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
                  <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float delay-700"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold">Informasi Kontak</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                      <div className="bg-white/20 p-3 rounded-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-lg">Telepon</h4>
                        <p className="text-white/90 text-lg">+62 851-1726-6788</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                      <div className="bg-white/20 p-3 rounded-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-lg">Email</h4>
                        <p className="text-white/90">clinicmatic69@gmail.com</p>
                        <p className="text-white/90">service@clinicmatic.com</p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                      <div className="bg-white/20 p-3 rounded-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-lg">Alamat</h4>
                        <p className="text-white/90 leading-relaxed">
                          Komp. Barata, Jl. Cempaka IV No.430, RT.007/RW.006,<br />
                          Harapan Jaya, Kec. Bekasi Utara, Kota Bks, Jawa Barat<br />
                          17124, Bekasi, Indonesia, 17124
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                      <div className="bg-white/20 p-3 rounded-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-lg">Jam Operasional</h4>
                        <p className="text-white/90">Senin - Jumat: 08:00 - 17:00</p>
                        <p className="text-white/90">Sabtu: 08:00 - 15:00</p>
                        <p className="text-white/90">Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Media */}
            <ScrollReveal animation="fadeInRight" delay="delay-300">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 relative">
                <div className="flex items-center gap-3 mb-6 relative z-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">Media Sosial</h3>
                </div>
                
                <div className="flex gap-4 relative z-50">
                  <a
                    href="https://www.facebook.com/ClinicMatic69/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-2xl transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer pointer-events-auto relative z-10"
                    aria-label="Facebook Clinic Matic 69"
                  >
                    <svg className="w-6 h-6 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-semibold pointer-events-none">Facebook</span>
                  </a>

                  <a
                    href="https://www.instagram.com/clinicmatic69/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-4 rounded-2xl transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer pointer-events-auto relative z-10"
                    aria-label="Instagram Clinic Matic 69"
                  >
                    <svg className="w-6 h-6 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-semibold pointer-events-none">Instagram</span>
                  </a>

                  <a
                    href="https://wa.me/6285117266788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-2xl transition-all transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer pointer-events-auto relative z-10"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Maps */}
            <ScrollReveal animation="fadeInRight" delay="delay-400">
              <div className="rounded-3xl shadow-2xl overflow-hidden h-96 lg:h-[500px] relative border-4 border-white card-3d">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4166425684534!2d106.98670117580507!3d-6.208648460817992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bf9419330a3%3A0x4fb4fdfa94c2cfbd!2sBengkel%20Mobil%20Matic%20Clinic%20Matic%2069!5e0!3m2!1sen!2sid!4v1768655718111!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Lokasi Clinic Matic 69"
                />
                <a
                  href="https://maps.app.goo.gl/R42tor1eBZi5ezQ28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm transition-all transform hover:scale-110 flex items-center gap-2 z-10"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Buka di Maps
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
