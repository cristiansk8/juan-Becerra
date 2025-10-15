'use client';

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

// Componente de flecha personalizada
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${direction === 'left' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'} top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 z-30 hover:scale-110`}
    aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
  >
    {direction === 'left' ? (
      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-900" />
    ) : (
      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-900" />
    )}
  </button>
);

export default function FeaturedProducts() {
  const sliderRef = useRef(null);

  // Duplicar productos para efecto infinito
  const extendedProducts = [...featuredProducts, ...featuredProducts];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: (i) => (
      <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 mt-4" />
    ),
    dotsClass: "slick-dots custom-dots-products",
  };

  return (
    <div className="bg-[#364e41] py-16 sm:py-24">
      <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Slider - Izquierda */}
          <div className="lg:col-span-9 order-2 lg:order-1">
            <div className="relative">
              {/* React Slick Slider */}
              <Slider ref={sliderRef} {...settings}>
                {extendedProducts.map((product, index) => (
                  <div key={`${product.id}-${index}`} className="px-3">
                    <a href={product.href} className="group relative block">
                      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden bg-gray-200">
                        {/* Marcos ornamentales dorados */}
                        <div className="absolute top-4 left-4 right-4 bottom-4 sm:top-6 sm:left-6 sm:right-6 sm:bottom-6 border-2 border-[#D4AF37] z-20 transition-all duration-300 group-hover:border-[#FFD700] pointer-events-none">
                          {/* Esquinas decorativas */}
                          <div className="absolute -top-1 -left-1 w-4 h-4 sm:w-6 sm:h-6 border-t-4 border-l-4 border-[#D4AF37] group-hover:border-[#FFD700] transition-colors duration-300"></div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 border-t-4 border-r-4 border-[#D4AF37] group-hover:border-[#FFD700] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 sm:w-6 sm:h-6 border-b-4 border-l-4 border-[#D4AF37] group-hover:border-[#FFD700] transition-colors duration-300"></div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 border-b-4 border-r-4 border-[#D4AF37] group-hover:border-[#FFD700] transition-colors duration-300"></div>
                        </div>

                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>

                        {/* Contenido de texto */}
                        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-wider transform group-hover:scale-105 transition-transform duration-300">
                            {product.name}
                          </h3>
                          <p className="text-white text-xl sm:text-2xl font-bold mt-2">
                            {product.price}
                          </p>
                          <p className="text-white text-sm sm:text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Ver Detalles →
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>

              {/* Botones de navegación personalizados */}
              <CustomArrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
              <CustomArrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
            </div>
          </div>

          {/* Caption - Derecha */}
          <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center lg:text-left">
              Productos Destacados
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white text-center lg:text-left">
              Descubre nuestros artículos más populares y exclusivos. Cada pieza ha sido cuidadosamente seleccionada para ofrecerte la mejor calidad y estilo.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#620c0b] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#4a0909] transition-colors duration-300">
                Ver Todos los Productos
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .custom-dots-products {
          display: flex !important;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .custom-dots-products li button {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 9999px;
          background-color: rgb(209 213 219);
          transition: all 0.3s;
        }

        .custom-dots-products li.slick-active button {
          width: 2rem;
          background-color: #620c0b;
        }

        .custom-dots-products li button:hover {
          background-color: rgb(156 163 175);
        }
      `}</style>
    </div>
  );
}