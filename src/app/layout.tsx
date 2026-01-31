import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://clinicmatic69.com'),
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
  authors: [{ name: 'Clinic Matic 69', url: 'https://clinicmatic69.com' }],
  creator: 'Clinic Matic 69',
  publisher: 'Clinic Matic 69',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://clinicmatic69.com',
    siteName: 'Clinic Matic 69',
    title: 'Clinic Matic 69 - Bengkel Spesialis Transmisi Matic Bekasi Terpercaya',
    description: 'Bengkel spesialis transmisi otomatis (matic) terpercaya di Bekasi dengan pengalaman 15+ tahun. Service & perbaikan semua merk mobil matic. Teknisi profesional, garansi resmi, harga transparan.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Clinic Matic 69 - Bengkel Spesialis Transmisi Matic Bekasi',
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
    canonical: 'https://clinicmatic69.com',
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
      </body>
    </html>
  );
}
