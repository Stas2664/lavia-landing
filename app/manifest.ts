import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Лавия - Рекламное агентство',
    short_name: 'Лавия',
    description: 'Рекламное агентство полного цикла. Цифровой маркетинг, брендинг, создание контента.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}


