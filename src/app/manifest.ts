export default function manifest() {
  return {
    name: 'Clinic Matic - Bengkel Spesialis Mobil Matic',
    short_name: 'Clinic Matic',
    description: 'Bengkel spesialis transmisi otomatis mobil matic terpercaya',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A1A1A',
    theme_color: '#FF6B00',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
