export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://clinicmatic69.com/#organization",
    "name": "Clinic Matic 69",
    "alternateName": "Clinic Matic",
    "legalName": "Clinic Matic 69 Bengkel Transmisi Matic",
    "url": "https://clinicmatic69.com",
    "logo": "https://clinicmatic69.com/logo.png",
    "image": "https://clinicmatic69.com/logo.png",
    "description": "Bengkel spesialis transmisi otomatis (matic) terpercaya di Bekasi dengan pengalaman lebih dari 15 tahun. Menyediakan layanan service, perbaikan, dan overhaul transmisi automatic untuk semua merk mobil.",
    "slogan": "Spesialis Transmisi Matic Terpercaya",
    "telephone": "+62-851-1726-6788",
    "email": "clinicmatic69@gmail.com",
    "priceRange": "$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Bank Transfer, QRIS",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Komp. Barata, Jl. Cempaka IV No.430, RT.007/RW.006",
      "addressLocality": "Harapan Jaya, Bekasi Utara",
      "addressRegion": "Jawa Barat",
      "postalCode": "17124",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.208648",
      "longitude": "106.989701"
    },
    "hasMap": "https://maps.app.goo.gl/R42tor1eBZi5ezQ28",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ClinicMatic69/",
      "https://www.instagram.com/clinicmatic69/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-851-1726-6788",
      "contactType": "Customer Service",
      "areaServed": "ID",
      "availableLanguage": ["Indonesian"]
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-6.208648",
        "longitude": "106.989701"
      },
      "geoRadius": "50000"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Bekasi"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Layanan Clinic Matic 69",
    "description": "Layanan spesialis transmisi matic yang kami sediakan",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Service Transmisi Matic Berkala",
        "description": "Perawatan rutin transmisi matic untuk menjaga performa optimal kendaraan Anda",
        "provider": {
          "@type": "AutoRepair",
          "name": "Clinic Matic 69"
        },
        "areaServed": "Bekasi"
      },
      {
        "@type": "Service",
        "name": "Perbaikan Transmisi Matic",
        "description": "Diagnosa dan perbaikan masalah transmisi matic dengan teknisi berpengalaman",
        "provider": {
          "@type": "AutoRepair",
          "name": "Clinic Matic 69"
        },
        "areaServed": "Bekasi"
      },
      {
        "@type": "Service",
        "name": "Overhaul Transmisi Matic",
        "description": "Overhaul menyeluruh transmisi matic dengan garansi resmi",
        "provider": {
          "@type": "AutoRepair",
          "name": "Clinic Matic 69"
        },
        "areaServed": "Bekasi"
      },
      {
        "@type": "Service",
        "name": "Tuning Performa",
        "description": "Optimasi performa transmisi matic untuk pengalaman berkendara yang lebih baik",
        "provider": {
          "@type": "AutoRepair",
          "name": "Clinic Matic 69"
        },
        "areaServed": "Bekasi"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://clinicmatic69.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Layanan",
        "item": "https://clinicmatic69.com#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Tentang Kami",
        "item": "https://clinicmatic69.com#about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Testimoni",
        "item": "https://clinicmatic69.com#testimonials"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Hubungi Kami",
        "item": "https://clinicmatic69.com#contact"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu Clinic Matic 69?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clinic Matic 69 adalah bengkel spesialis transmisi otomatis (matic) terpercaya di Bekasi dengan pengalaman lebih dari 15 tahun. Kami melayani service, perbaikan, dan overhaul transmisi automatic untuk semua merk mobil."
        }
      },
      {
        "@type": "Question",
        "name": "Dimana lokasi Clinic Matic 69?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clinic Matic 69 berlokasi di Komp. Barata, Jl. Cempaka IV No.430, RT.007/RW.006, Harapan Jaya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17124."
        }
      },
      {
        "@type": "Question",
        "name": "Jam operasional Clinic Matic 69?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clinic Matic 69 buka Senin-Jumat pukul 08:00-17:00, Sabtu pukul 08:00-15:00, dan tutup di hari Minggu."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah ada garansi untuk perbaikan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ya, kami memberikan garansi resmi untuk setiap pekerjaan perbaikan dan overhaul transmisi matic yang kami lakukan."
        }
      },
      {
        "@type": "Question",
        "name": "Berapa lama waktu pengerjaan service transmisi matic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Waktu pengerjaan bervariasi tergantung jenis service. Service berkala biasanya 2-4 jam, perbaikan ringan 1-2 hari, dan overhaul 3-7 hari kerja."
        }
      }
    ]
  };

  return (
    <>
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Services Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
