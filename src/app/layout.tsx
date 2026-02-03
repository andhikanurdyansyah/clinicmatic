import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl = process.env.HOMEPAGE_URL || 'https://clinicmatic69.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Clinic Matic 69 - Bengkel Spesialis Transmisi Matic Bekasi | Service & Perbaikan Terpercaya',
    template: '%s | Clinic Matic 69'
  },
  description: 'Bengkel spesialis transmisi otomatis (matic) terpercaya di Bekasi. Layanan service, perbaikan, overhaul transmisi automatic untuk semua merk mobil. Teknisi berpengalaman 15+ tahun, garansi resmi, harga transparan. Hub: 0851-1726-6788',
  keywords: [
    'bengkel mobil matic bekasi',
    'service transmisi otomatis bekasi',
    'perbaikan transmisi matic',
    'clinic matic 69',
    'bengkel matic bekasi utara',
    'overhaul transmisi automatic',
    'service mobil matic bekasi',
    'bengkel transmisi automatic bekasi',
    'perbaikan gearbox matic',
    'service cvt bekasi',
    'bengkel matic harapan jaya',
    'service matic toyota avanza',
    'service matic honda jazz',
    'bengkel matic terdekat'
  ],
  authors: [{ name: 'Clinic Matic 69', url: baseUrl }],
  creator: 'Clinic Matic 69',
  publisher: 'Clinic Matic 69',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/logo.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/icon-192.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/logo.png',
    },
  ],
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: baseUrl,
    siteName: 'Clinic Matic 69',
    title: 'Clinic Matic 69 - Bengkel Spesialis Transmisi Matic Bekasi Terpercaya',
    description: 'Bengkel spesialis transmisi otomatis (matic) terpercaya di Bekasi dengan pengalaman 15+ tahun. Service & perbaikan semua merk mobil matic. Teknisi profesional, garansi resmi, harga transparan.',
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Clinic Matic 69 - Bengkel Spesialis Transmisi Matic Bekasi',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@clinicmatic69',
    creator: '@clinicmatic69',
    title: 'Clinic Matic 69 - Bengkel Spesialis Transmisi Matic Bekasi',
    description: 'Bengkel spesialis transmisi matic terpercaya di Bekasi. Pengalaman 15+ tahun, garansi resmi.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'Automotive Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <StructuredData />
      </head>
      <body className={inter.variable}>
        {children}
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-V6TKXGT2V3"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V6TKXGT2V3');
          `}
        </Script>
      </body>
    </html>
  );
}
