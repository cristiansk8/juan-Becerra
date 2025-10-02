import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Juan Becerra | Elegancia sin límites',
    template: '%s | Juan Becerra',
  },
  description: 'Juan Becerra es una marca de ropa y accesorios que busca la elegancia sin límites. Descubre nuestras colecciones de cinturones, billeteras, gorras y más.',
  keywords: ['moda premium', 'ropa de lujo', 'diseñador colombiano', 'Juan Becerra', 'ropa de hombre', 'ropa de mujer', 'accesorios de cuero'],
  authors: [{ name: 'Juan Becerra' }],
  creator: 'Juan Becerra',
  publisher: 'Juan Becerra',
  openGraph: {
    title: 'Juan Becerra - Moda Premium y Exclusiva',
    description: 'Elegancia sin límites desde 2017. Moda premium que define tu estilo con calidad y sofisticación.',
    url: 'https://www.juanbecerra.co',
    siteName: 'Juan Becerra',
    images: [
      {
        url: '/logo-jb.png',
        width: 800,
        height: 600,
        alt: 'Logo Juan Becerra',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Becerra - Moda Premium y Exclusiva',
    description: 'Descubre las últimas tendencias en moda premium. Elegancia y sofisticación en cada pieza.',
    creator: '@juanbecerra_shop',
    images: ['/logo-jb.png'],
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Juan Becerra",
              "url": "https://www.juanbecerra.co",
              "logo": "https://www.juanbecerra.co/logo-jb.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+57-1-234-5678",
                "contactType": "Customer Service",
              },
              "sameAs": [
                "https://www.facebook.com/juanbecerra_shop",
                "https://www.instagram.com/juanbecerra_shop",
                "https://twitter.com/juanbecerra_shop",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
