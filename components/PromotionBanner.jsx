// components/PromotionBanner.jsx
import { Ticket } from 'lucide-react';

export default function PromotionBanner() {
  return (
    <div className="bg-white text-gray-900 py-3 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-center items-center text-center text-sm">
        <Ticket className="h-4 w-4 mr-2 text-[#620c0b]" />
        <p>
          <span className="font-semibold">15% DE DESCUENTO</span> en tu primera compra. Usa el código: 
          <span className="font-bold text-[#620c0b] ml-1">BIENVENIDO15</span>
        </p>
      </div>
    </div>
  );
}
