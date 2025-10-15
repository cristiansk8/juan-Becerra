'use client'
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-28 py-4 flex items-center justify-between">
            
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-black hover:text-[#620c0b]' : 'text-white hover:text-gray-200'}`}>
                Nueva Colección
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#620c0b]' : 'bg-white'}`}></span>
              </a>
              <a href="#" className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-black hover:text-[#620c0b]' : 'text-white hover:text-gray-200'}`}>
                Hombre
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#620c0b]' : 'bg-white'}`}></span>
              </a>
            </nav>

            {/* Logo - Center */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <img 
                src="/logo-juan-becerra.png"
                alt="Juan Becerra" 
                className="h-24 lg:h-36 w-auto"
              />
            </div>
            
            {/* Right Navigation & Actions */}
            <div className="flex items-center space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#" className={`transition-colors duration-300 font-medium relative group ${isScrolled ? 'text-black hover:text-[#620c0b]' : 'text-white hover:text-gray-200'}`}>
                  Accesorios
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-[#620c0b]' : 'bg-white'}`}></span>
                </a>
                <a href="#" className={`transition-colors duration-300 font-semibold relative group ${isScrolled ? 'text-black hover:text-[#620c0b]' : 'text-white hover:text-gray-200'}`}>
                  Sale
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isScrolled ? 'bg-[#620c0b]' : 'bg-white'}`}></span>
                </a>
              </nav>
              
              <div className="flex items-center space-x-3">
                <button className={`hidden lg:block p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
                  <Search className={`h-5 w-5 ${isScrolled ? 'text-black' : 'text-white'}`} />
                </button>
                <button className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
                  <User className={`h-5 w-5 ${isScrolled ? 'text-black' : 'text-white'}`} />
                </button>
                <button className={`relative p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
                  <ShoppingBag className={`h-5 w-5 ${isScrolled ? 'text-black' : 'text-white'}`} />
                  <span className={`absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    2
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}
            >
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header del drawer */}
        <div className="flex items-center justify-between p-6 border-b">
          <img 
            src="/logo-juan-becerra.png"
            alt="Juan Becerra" 
            className="h-16 w-auto"
          />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        {/* Navegación móvil */}
        <nav className="flex flex-col p-6 space-y-6">
          <a 
            href="#" 
            className="text-lg font-medium text-gray-900 hover:text-[#620c0b] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nueva Colección
          </a>
          <a 
            href="#" 
            className="text-lg font-medium text-gray-900 hover:text-[#620c0b] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hombre
          </a>
          <a 
            href="#" 
            className="text-lg font-medium text-gray-900 hover:text-[#620c0b] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accesorios
          </a>
          <a 
            href="#" 
            className="text-lg font-semibold text-[#620c0b] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sale
          </a>
        </nav>

        {/* Acciones móviles */}
        <div className="p-6 border-t space-y-4">
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors">
            <Search className="h-5 w-5 text-gray-900" />
            <span className="text-gray-900">Buscar</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="h-5 w-5 text-gray-900" />
            <span className="text-gray-900">Mi Cuenta</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-[#620c0b] text-white rounded-lg hover:bg-[#4a0909] transition-colors">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5" />
              <span>Carrito</span>
            </div>
            <span className="bg-white text-[#620c0b] px-2 py-1 rounded-full text-sm font-semibold">
              2
            </span>
          </button>
        </div>
      </div>
    </>
  );
}