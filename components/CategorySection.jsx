import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Cinturones",
    href: "#",
    imageSrc: "/cinturones.webp",
  },
  {
    id: 2,
    name: "Gorras",
    href: "#",
    imageSrc: "/gorras.webp",
  },
  {
    id: 3,
    name: "Tarjeteros",
    href: "#",
    imageSrc: "/tarjeteros.webp",
  },
  {
    id: 4,
    name: "Sacos",
    href: "#",
    imageSrc: "/sacos.webp",
  },
];

export default function CategorySection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compra por Categoría
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Encuentra tu estilo perfecto en nuestras colecciones seleccionadas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-6 lg:gap-x-8">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group relative block">
              <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-200">
                {/* Marcos ornamentales */}
                <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-[var(--brand-accent)] rounded-tl-lg z-20"></div>
                <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-[var(--brand-accent)] rounded-br-lg z-20"></div>

                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  className="h-full w-full object-cover object-center"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  {...(category.imageSrc === '/cinturones.webp' ? { priority: true } : {})}
                />
                {/* Overlay para legibilidad del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Contenido de texto */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3
                    className="text-2xl font-semibold text-white tracking-wider"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
                  >
                    {category.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}