// /components/AnnouncementBar.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-[#620c0b] text-white text-sm font-light">
      <div className="container mx-auto px-4 py-2 flex justify-center items-center text-center">
        <p>
          <span role="img" aria-label="party popper">🎉</span>
          <span className="hidden sm:inline mx-2">
            ¡Oferta por tiempo limitado! Obtén hasta 20% de descuento.
          </span>
          <a href="#oferta" className="ml-2 font-semibold underline hover:text-white/80 transition-colors duration-300 inline-flex items-center">
            Ver detalles
            <ArrowRight size={16} className="ml-1" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
