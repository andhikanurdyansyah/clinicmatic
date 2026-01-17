# Clinic Matic - Automotive Workshop Website

![Clinic Matic](https://img.shields.io/badge/Status-Active-success)
![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.172-green)

Website profesional untuk Clinic Matic, bengkel spesialis transmisi otomatis mobil matic dengan teknologi Three.js 3D visualization.

## ✨ Fitur

- 🎨 **Modern UI/UX** - Design responsive dan menarik
- 🚗 **3D Car Visualization** - Animasi mobil 3D dengan Three.js
- 📱 **Fully Responsive** - Optimal di semua perangkat
- ⚡ **Performance Optimized** - Fast loading dengan Next.js
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt
- 📧 **Contact Form** - Integrasi dengan WhatsApp
- 🎯 **Modern Stack** - Next.js 15, TypeScript, Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1.4 (App Router)
- **Language:** TypeScript 5.7
- **3D Graphics:** Three.js, React Three Fiber, Drei
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 atau lebih tinggi
- npm atau yarn

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd clinicmatic69
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Buka browser dan akses:
```
http://localhost:3000
```

## 📁 Project Structure

```
clinicmatic69/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout dengan metadata
│   │   ├── page.tsx         # Homepage
│   │   ├── globals.css      # Global styles
│   │   ├── sitemap.ts       # Sitemap untuk SEO
│   │   ├── robots.ts        # Robots.txt untuk SEO
│   │   └── manifest.ts      # PWA manifest
│   └── components/
│       ├── Hero.tsx         # Hero section dengan CTA
│       ├── Services.tsx     # Services section
│       ├── About.tsx        # About section
│       ├── Contact.tsx      # Contact form
│       ├── Footer.tsx       # Footer
│       └── 3d/
│           └── CarScene.tsx # 3D car animation
├── public/                  # Static assets
├── .github/
│   └── copilot-instructions.md
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json            # Vercel deployment config
```

## 🎨 Features Detail

### 1. Hero Section
- Animasi 3D mobil dengan Three.js
- Interactive car model
- Trust indicators (statistics)
- CTA buttons

### 2. Services Section
- 6 layanan utama
- Icon-based design
- Feature lists
- Why choose us section

### 3. About Section
- Company information
- Vision & Mission
- Key values dengan icons
- Professional presentation

### 4. Contact Section
- Contact form dengan WhatsApp integration
- Contact information
- Social media links
- Operating hours
- Map placeholder

### 5. SEO Optimization
- Meta tags comprehensive
- Open Graph tags
- Twitter Card tags
- Sitemap.xml auto-generated
- Robots.txt configured
- Structured data ready
- PWA manifest

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub repository

2. Import project ke Vercel:
   - Kunjungi [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import repository
   - Deploy

3. Vercel akan otomatis:
   - Detect Next.js project
   - Install dependencies
   - Build dan deploy

### Manual Deployment

```bash
# Build project
npm run build

# Start production server
npm start
```

## 📝 Configuration

### Update Contact Information

Edit file `src/components/Contact.tsx` dan `src/components/Footer.tsx` untuk mengubah:
- Nomor telepon
- Email
- Alamat
- Jam operasional
- Social media links

### Update SEO Metadata

Edit file `src/app/layout.tsx` untuk mengubah:
- Title
- Description
- Keywords
- Open Graph data
- Domain URL

### Update WhatsApp Number

Edit di `src/components/Contact.tsx`:
```typescript
window.open(`https://wa.me/NOMOR_WHATSAPP?text=${message}`, '_blank');
```

## 🎯 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Largest Contentful Paint:** < 2.5s

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 639px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px - 1279px
- **Large Desktop:** 1280px+

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2026 Clinic Matic. All rights reserved.

## 👥 Support

Untuk bantuan dan pertanyaan:
- Email: info@clinicmatic.com
- WhatsApp: +62 812-3456-7890

## 🙏 Acknowledgments

- Next.js team
- Three.js community
- Vercel platform
- React Three Fiber

---

Built with ❤️ by Clinic Matic Team
