'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: '/sacos.webp',
    title: 'Colección Otoño/Invierno 2025',
    subtitle: 'Descubre las piezas que definirán tu estilo esta temporada.',
    buttonText: 'Ver la Colección',
    href: '/collections/fall-winter-2025',
  },
  {
    id: 2,
    image: '/cinturones.webp',
    title: 'Accesorios que Dejan Huella',
    subtitle: 'Eleva tu look con nuestros cinturones y billeteras de cuero genuino.',
    buttonText: 'Explorar Accesorios',
    href: '/collections/accesorios',
  },
];

export default function SeasonalBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="w-full bg-gray-50 py-2">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="h-[60vh] w-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl mx-auto px-4">
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.href}
                    className="inline-block bg-white text-black hover:bg-gray-200 transition-colors duration-300 px-8 py-3 text-base sm:text-lg font-semibold rounded-md"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}