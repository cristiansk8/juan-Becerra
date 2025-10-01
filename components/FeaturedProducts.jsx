// components/FeaturedProducts.jsx
'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// 1. Importar los estilos del carrusel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 2. Datos de ejemplo para los productos
const featuredProducts = [
  {
    id: 1,
    name: 'Billetera de Cuero Clásica',
    price: '$75.000',
    imageSrc: '/tarjetero-destacado-1.webp',
    href: '#',
  },
  {
    id: 2,
    name: 'Cinturón de Piel Genuina',
    price: '$120.000',
    imageSrc: '/cinturon-destacado-1.webp',
    href: '#',
  },
  {
    id: 3,
    name: 'Gorra de Diseño Exclusivo',
    price: '$60.000',
    imageSrc: '/gorras.webp',
    href: '#',
  },
  {
    id: 4,
    name: 'Saco de Lujo',
    price: '$450.000',
    imageSrc: '/saco-destacado-1.webp',
    href: '#',
  },
  {
    id: 5,
    name: 'Tarjetero Minimalista',
    price: '$55.000',
    imageSrc: '/tarjetero-destacado-1.webp',
    href: '#',
  },
  {
    id: 6,
    name: 'Cinturón Trenzado',
    price: '$135.000',
    imageSrc: '/cinturon-destacado-1.webp',
    href: '#',
  },
];

export default function FeaturedProducts() {
  // 3. Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
       {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Productos Destacados
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Descubre nuestros artículos más populares y exclusivos.
          </p>
        </div>

        {/* 4. Implementación del carrusel */}
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div key={product.id} className="px-2 sm:px-4">
              <div className="group relative block overflow-hidden rounded-lg">
                <a href={product.href}>
                  <div className="relative aspect-[4/5] w-full bg-gray-200">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <p className="mt-1 text-base font-medium text-gray-200">{product.price}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}