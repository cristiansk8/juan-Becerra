// components/BrandPhilosophy.jsx
import Image from 'next/image';

export default function BrandPhilosophy() {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/saco-destacado-1.webp" // Placeholder - a subtle, elegant texture would be ideal
          alt="Textura de tejido"
          className="object-cover"
          fill
        />
      </div>
      <div className="relative mx-auto max-w-4xl text-center px-4">
        <h2 className="text-base font-semibold leading-7 text-[#620c0b]">Nuestra Filosofía</h2>
        <blockquote className="mt-6 text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-gray-900">
          <p>
            “Elegancia sin límites desde 2017. Moda premium que define tu estilo con calidad y sofisticación en cada pieza de nuestra colección exclusiva.”
          </p>
        </blockquote>
        <p className="mt-8 text-lg font-semibold text-gray-800">- Juan Becerra</p>
      </div>
    </div>
  );
}
