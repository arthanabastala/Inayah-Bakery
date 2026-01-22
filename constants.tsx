import React from 'react';
import { Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = "6283877035323"; // Updated number

// Navigation Links - Mapped to Section IDs
export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },         // Maps to <Hero id="hero" />
  { name: 'Menu', href: '#menu' },         // Maps to <ProductCatalog id="menu" />
  { name: 'Keunggulan', href: '#features' },   // Maps to <Features id="features" />
  { name: 'Ulasan', href: '#testimonials' }, // Maps to <Testimonials id="testimonials" />
];

const STANDARD_VARIANTS = [
  { label: '1/2 Kg', price: 55000 },
  { label: '1 Kg', price: 110000 },
];

const PREMIUM_VARIANTS = [
  { label: '1/2 Kg', price: 60000 },
  { label: '1 Kg', price: 120000 },
];

export const PRODUCTS: Product[] = [
  // Kategori Nastar (All Standard 55k/110k)
  {
    id: 'n1',
    name: 'Nastar Keju',
    description: 'Nastar klasik dengan isian selai nanas homemade dan topping keju parut melimpah.',
    price: 55000,
    category: 'Nastar',
    imageUrl: '/nastar-keju.png',
    isPopular: true,
    variants: STANDARD_VARIANTS
  },
  {
    id: 'n2',
    name: 'Nastar Original',
    description: 'Nastar legendaris dengan adonan butter wisman dan selai nanas manis asam yang pas.',
    price: 55000,
    category: 'Nastar',
    imageUrl: '/nastar-original.png',
    variants: STANDARD_VARIANTS
  },
  {
    id: 'n3',
    name: 'Nastar Labu',
    description: 'Kreasi unik nastar berbentuk labu dengan tekstur lembut dan rasa otentik.',
    price: 55000,
    category: 'Nastar',
    imageUrl: '/nastar-labu.png',
    variants: STANDARD_VARIANTS
  },
  {
    id: 'n4',
    name: 'Nastar Gulung',
    description: 'Variasi bentuk nastar gulung yang cantik dengan rasio selai dan kulit yang sempurna.',
    price: 55000,
    category: 'Nastar',
    imageUrl: '/nastar-gulung.png',
    variants: STANDARD_VARIANTS
  },

  // Kategori Kue Kacang (All Standard 55k/110k)
  {
    id: 'k1',
    name: 'Kue Kacang',
    description: 'Kue kering tradisional berbahan dasar kacang tanah pilihan, gurih dan renyah.',
    price: 55000,
    category: 'Kue Kacang',
    imageUrl: 'https://picsum.photos/seed/kuekacang/600/400',
    isPopular: true,
    variants: STANDARD_VARIANTS
  },
  {
    id: 'k2',
    name: 'Bangkit Mocca',
    description: 'Kue bangkit yang lumer di mulut dengan aroma dan rasa mocca yang khas.',
    price: 55000,
    category: 'Kue Kacang',
    imageUrl: 'https://picsum.photos/seed/bangkitmocca/600/400',
    variants: STANDARD_VARIANTS
  },
  {
    id: 'k3',
    name: 'Bangkit Susu / Santan',
    description: 'Kue tradisional yang sangat rapuh dan lumer, dengan rasa susu dan santan yang gurih.',
    price: 55000,
    category: 'Kue Kacang',
    imageUrl: 'https://picsum.photos/seed/bangkitsusu/600/400',
    variants: STANDARD_VARIANTS
  },
  {
    id: 'k4',
    name: 'Kue Sagon',
    description: 'Cita rasa kelapa sangrai yang kuat berpadu dengan manisnya gula dalam setiap gigitan.',
    price: 55000,
    category: 'Kue Kacang',
    imageUrl: 'https://picsum.photos/seed/sagon/600/400',
    variants: STANDARD_VARIANTS
  },
  {
    id: 'k5',
    name: 'Kue Dahlia',
    description: 'Kue semprit klasik berbentuk bunga dahlia dengan hiasan selai/chocochip di tengahnya.',
    price: 55000,
    category: 'Kue Kacang',
    imageUrl: 'https://picsum.photos/seed/dahlia/600/400',
    variants: STANDARD_VARIANTS
  },

  // Kategori Varian Lembut (All Standard 55k/110k)
  {
    id: 'v1',
    name: 'Kue Salju',
    description: 'Putri salju berbentuk bulan sabit yang dibalut gula halus dingin, lembut dan manis.',
    price: 55000,
    category: 'Varian Lembut',
    imageUrl: 'https://picsum.photos/seed/kuesalju/600/400',
    isPopular: true,
    variants: STANDARD_VARIANTS
  },
  {
    id: 'v2',
    name: 'Salju Pandan',
    description: 'Varian kue salju dengan aroma pandan asli yang wangi dan menenangkan.',
    price: 55000,
    category: 'Varian Lembut',
    imageUrl: 'https://picsum.photos/seed/saljupandan/600/400',
    variants: STANDARD_VARIANTS
  },

  // Kategori Thumbprint Cookies (All Standard 55k/110k)
  {
    id: 't1',
    name: 'Thumbprint Strawberry',
    description: 'Cookies mentega dengan isian selai strawberry di tengahnya.',
    price: 55000,
    category: 'Thumbprint Cookies',
    imageUrl: 'https://picsum.photos/seed/thumbprintstraw/600/400',
    variants: STANDARD_VARIANTS
  },
  {
    id: 't2',
    name: 'Thumbprint Coklat',
    description: 'Perpaduan cookies renyah dengan filling coklat leleh yang nikmat.',
    price: 55000,
    category: 'Thumbprint Cookies',
    imageUrl: 'https://picsum.photos/seed/thumbprintcoklat/600/400',
    variants: STANDARD_VARIANTS
  },
  {
    id: 't3',
    name: 'Thumbprint Blueberry',
    description: 'Rasa segar selai blueberry menyeimbangkan manisnya cookies mentega.',
    price: 55000,
    category: 'Thumbprint Cookies',
    imageUrl: 'https://picsum.photos/seed/thumbprintblue/600/400',
    variants: STANDARD_VARIANTS
  },

  // Kategori Coklat (All Premium 60k/120k)
  {
    id: 'c1',
    name: 'Choco Berry',
    description: 'Kombinasi unik rasa coklat pekat dengan sentuhan rasa buah berry.',
    price: 60000,
    category: 'Coklat',
    imageUrl: 'https://picsum.photos/seed/chocoberry/600/400',
    variants: PREMIUM_VARIANTS
  },
  {
    id: 'c2',
    name: 'Coklat Kacang',
    description: 'Cookies coklat klasik dengan campuran kacang cincang yang renyah.',
    price: 60000,
    category: 'Coklat',
    imageUrl: 'https://picsum.photos/seed/coklatkacang/600/400',
    variants: PREMIUM_VARIANTS
  },
  {
    id: 'c3',
    name: 'Coco Crunch',
    description: 'Kue kering coklat dengan tekstur crunchy dari sereal coco crunch.',
    price: 60000,
    category: 'Coklat',
    imageUrl: 'https://picsum.photos/seed/cococrunch/600/400',
    variants: PREMIUM_VARIANTS
  },
  {
    id: 'c4',
    name: 'Brownies Kacang',
    description: 'Sensasi makan brownies dalam bentuk cookies kering bertabur kacang.',
    price: 60000,
    category: 'Coklat',
    imageUrl: 'https://picsum.photos/seed/brownieskacang/600/400',
    variants: PREMIUM_VARIANTS
  },
  {
    id: 'c5',
    name: 'Bola-bola Coklat',
    description: 'Cookies berbentuk bola yang dibalur mesises coklat berkualitas.',
    price: 60000,
    category: 'Coklat',
    imageUrl: 'https://picsum.photos/seed/bolacoklat/600/400',
    variants: PREMIUM_VARIANTS
  },
  {
    id: 'c6',
    name: 'Choco Chip',
    description: 'Cookies vanilla renyah bertabur butiran choco chips yang melimpah.',
    price: 60000,
    category: 'Coklat',
    imageUrl: 'https://picsum.photos/seed/chocochip/600/400',
    isPopular: true,
    variants: PREMIUM_VARIANTS
  },
  {
    id: 'c7',
    name: 'Lidah Kucing Nutella',
    description: 'Lidah kucing tipis renyah disajikan dengan selai Nutella premium.',
    price: 60000,
    category: 'Coklat',
    imageUrl: 'https://picsum.photos/seed/lidahkucing/600/400',
    variants: PREMIUM_VARIANTS
  },

  // Kategori Isian Spesial (Mixed Prices)
  {
    id: 's1',
    name: 'Bola-bola Kacang',
    description: 'Kue kering bola dengan isian kacang tumbuk yang manis dan gurih.',
    price: 55000,
    category: 'Isian Spesial',
    imageUrl: 'https://picsum.photos/seed/bolakacang/600/400',
    variants: STANDARD_VARIANTS // 55k/110k
  },
  {
    id: 's2',
    name: 'Kurma Coklat',
    description: 'Perpaduan manis alami kurma dan lapisan coklat yang mewah.',
    price: 60000,
    category: 'Isian Spesial',
    imageUrl: 'https://picsum.photos/seed/kurmacoklat/600/400',
    variants: PREMIUM_VARIANTS // 60k/120k
  },
  {
    id: 's3',
    name: 'Janda Genit',
    description: 'Cookies mentega renyah dengan topping tepung panir dan choco chips.',
    price: 55000,
    category: 'Isian Spesial',
    imageUrl: 'https://picsum.photos/seed/jandagenit/600/400',
    isPopular: true,
    variants: STANDARD_VARIANTS // 55k/110k
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah J.',
    role: 'Food Blogger',
    comment: 'Nastar-nya juara! Selai nanasnya asli banget, asam manisnya pas dan kulitnya lumer.',
    avatarUrl: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 't2',
    name: 'Budi Santoso',
    role: 'Pelanggan Setia',
    comment: 'Kue Kacangnya mengingatkan saya pada rasa masa kecil. Gurih dan tidak serik di tenggorokan.',
    avatarUrl: 'https://picsum.photos/seed/budi/100/100'
  },
  {
    id: 't3',
    name: 'Amanda L.',
    role: 'Mahasiswa',
    comment: 'Harganya sangat worth it untuk kualitas rasa premium seperti ini. Putri Saljunya favorit!',
    avatarUrl: 'https://picsum.photos/seed/amanda/100/100'
  }
];
