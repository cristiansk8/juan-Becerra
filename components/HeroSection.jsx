
export default function HeroSection() {
  return (
    <section className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/hero-video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
          Nueva Colección
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Descubre las últimas tendencias en moda premium. 
          Elegancia y sofisticación en cada pieza.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 px-8 py-3 text-base sm:text-lg font-semibold rounded-md">
            Explorar Colección
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 px-8 py-3 text-base sm:text-lg font-semibold rounded-md">
            Ver Lookbook
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}