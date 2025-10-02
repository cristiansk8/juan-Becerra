// components/InstagramFeed.jsx
import Image from 'next/image';

const posts = [
  { id: 1, src: '/cinturon-destacado-1.webp', alt: 'Instagram post 1' },
  { id: 2, src: '/saco-destacado-1.webp', alt: 'Instagram post 2' },
  { id: 3, src: '/tarjetero-destacado-1.webp', alt: 'Instagram post 3' },
  { id: 4, src: '/gorras.webp', alt: 'Instagram post 4' },
  { id: 5, src: '/cinturones.webp', alt: 'Instagram post 5' },
  { id: 6, src: '/sacos.webp', alt: 'Instagram post 6' },
];

export default function InstagramFeed() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Síguenos en Instagram
          </h2>
          <a href="#" className="mt-4 text-lg leading-8 text-[#620c0b] hover:text-[#4a0908]">
            @juanbecerra_shop
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
          {posts.map((post) => (
            <div key={post.id} className="group relative block overflow-hidden rounded-lg">
              <a href="#" >
                <div className="relative aspect-square w-full bg-gray-200">
                  <Image
                    src={post.src}
                    alt={post.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
