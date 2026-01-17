import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clinic Matic - Bengkel Spesialis Mobil Matic Terpercaya',
  description: 'Clinic Matic adalah bengkel spesialis transmisi otomatis mobil matic terpercaya. Layanan service, perbaikan, dan maintenance transmisi automatic dengan teknisi profesional dan berpengalaman.',
  keywords: ['bengkel mobil matic', 'service transmisi otomatis', 'perbaikan matic', 'clinic matic', 'bengkel transmisi automatic', 'service mobil matic'],
  authors: [{ name: 'Clinic Matic' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Clinic Matic - Bengkel Spesialis Mobil Matic',
    description: 'Bengkel spesialis transmisi otomatis terpercaya dengan teknisi profesional',
    url: 'https://clinicmatic.com',
    siteName: 'Clinic Matic',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic Matic - Bengkel Spesialis Mobil Matic',
    description: 'Bengkel spesialis transmisi otomatis terpercaya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
