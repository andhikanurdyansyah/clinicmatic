export default function LocalPageSchema() {
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
        "name": "Bengkel Mobil Matic Bekasi",
        "item": "https://clinicmatic69.com/bengkel-mobil-matic-bekasi"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": "https://clinicmatic69.com/bengkel-mobil-matic-bekasi#autorepair",
    "name": "Clinic Matic 69 - Bengkel Mobil Matic Bekasi",
    "alternateName": "Bengkel Transmisi Matic Bekasi",
    "url": "https://clinicmatic69.com/bengkel-mobil-matic-bekasi",
    "logo": {
      "@type": "ImageObject",
      "url": "https://clinicmatic69.com/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://clinicmatic69.com/logo.png",
    "description": "Bengkel mobil matic terpercaya di Bekasi Utara, Harapan Jaya. Spesialis service transmisi automatic, CVT, overhaul gearbox matic untuk semua merk mobil. Teknisi berpengalaman 15+ tahun.",
    "telephone": "+62-851-1726-6788",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Komp. Barata, Jl. Cempaka IV No.430, RT.007/RW.006",
      "addressLocality": "Bekasi Utara",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Bekasi Utara"
      },
      {
        "@type": "City",
        "name": "Bekasi Barat"
      },
      {
        "@type": "City",
        "name": "Bekasi Timur"
      },
      {
        "@type": "City",
        "name": "Bekasi Selatan"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ClinicMatic69/",
      "https://www.instagram.com/clinicmatic69/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bengkel Mobil Matic Bekasi",
    "provider": {
      "@id": "https://clinicmatic69.com/bengkel-mobil-matic-bekasi#autorepair"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bekasi"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Transmisi Matic",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Service Transmisi Matic Berkala"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Perbaikan Transmisi Matic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Overhaul Transmisi Matic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tuning Performa Transmisi"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
