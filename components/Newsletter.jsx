'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { sendEmail } from '@/lib/mail';
import Toast from './Toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    const response = await sendEmail({ email });

    setIsSubmitting(false);

    if (response.success) {
      setToast({ message: '¡Gracias por suscribirte!', type: 'success' });
      setEmail('');
    } else {
      setToast({ message: 'Hubo un error. Inténtalo de nuevo.', type: 'error' });
    }

    setTimeout(() => setToast(null), 5000); // Hide toast after 5 seconds
  };

  return (
    <div className="bg-gray-100 py-16 sm:py-24">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Suscríbete a nuestro Newsletter
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Recibe las últimas noticias, colecciones y ofertas especiales directamente en tu bandeja de entrada.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 mx-auto max-w-xl">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#620c0b] sm:text-sm sm:leading-6"
              placeholder="Ingresa tu email"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-none rounded-md bg-[#620c0b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4a0908] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#620c0b] disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'Suscribirse'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
