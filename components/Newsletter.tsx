'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import Toast from './Toast'; // opcional: puedes quitarlo si no lo tienes aún

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setToast({ message: '¡Gracias por suscribirte!', type: 'success' });
      setEmail('');
      setTimeout(() => setToast(null), 3000);
    }, 1200);
  };

  return (
    <div className="bg-[#f9fafb] py-16 sm:py-24">
      {toast && (
        <div
          className={`fixed top-5 right-5 rounded-lg px-4 py-3 shadow-lg text-white transition-all duration-300 ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="mx-auto h-10 w-10 text-[#620c0b]" />
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Suscríbete a nuestro Newsletter
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Recibe las últimas noticias, colecciones y ofertas especiales directamente en tu bandeja de entrada.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 mx-auto max-w-xl">
          <div className="flex gap-x-3">
            <input
              id="email-address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              className="min-w-0 flex-auto rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 focus:border-[#620c0b] focus:ring-2 focus:ring-[#620c0b] sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-none rounded-md bg-[#620c0b] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4a0908] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#620c0b] disabled:bg-gray-400"
            >
              {isSubmitting ? 'Enviando...' : 'Suscribirse'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
