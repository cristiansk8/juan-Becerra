'use client'
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header className={`w-full bg-white border-b sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg border-[#620c0b]' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative flex items-center justify-center transition-all duration-300 ${isScrolled ? 'h-24' : 'h-36 lg:h-40'}`}>
          
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center absolute left-8 top-1/2 -translate-y-1/2 space-x-8">
            <a href="#" className="text-black hover:text-[#620c0b] transition-colors duration-300 font-medium relative group">
              Nueva Colección
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#620c-0b] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-black hover:text-[#620c0b] transition-colors duration-300 font-medium relative group">
              Hombre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#620c0b] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-black hover:text-[#620c0b] transition-colors duration-300 font-medium relative group">
              Mujer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#620c0b] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img 
              src="/Logo-jb.png"
              alt="Juan Becerra" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-20' : 'h-32 lg:h-36'}`}
            />
          </div>
          
          {/* Right Navigation & Actions */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center space-x-8">
            <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-black hover:text-[#620c0b] transition-colors duration-300 font-medium relative group">
              Accesorios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#620c0b] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-black hover:text-[#620c0b] transition-colors duration-300 font-semibold relative group">
              Sale
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#620c0b]"></span>
            </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hidden lg:block p-2 rounded-full transition-colors group hover:bg-gray-100">
                <Search className="h-5 w-5 text-black" />
              </button>
              <button className="p-2 rounded-full transition-colors group hover:bg-gray-100">
                <User className="h-5 w-5 text-black" />
              </button>
              <button className="relative p-2 rounded-full transition-colors group hover:bg-gray-100">
                <ShoppingBag className="h-5 w-5 text-black" />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  2
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2">
            <button className="p-2 rounded-full transition-colors group hover:bg-gray-100">
              <Menu className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}