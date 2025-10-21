// Este archivo simula una base de datos de productos.

export const allProducts = [
  {
    id: 1,
    name: 'Billetera de Cuero Clásica',
    slug: 'billetera-de-cuero-clasica',
    price: '$75.000',
    category: 'Tarjeteros',
    categorySlug: 'tarjeteros',
    imageSrc: '/tarjetero-destacado-1.webp',
    images: [
      { id: 1, src: '/tarjetero-destacado-1.webp', alt: 'Vista frontal de la billetera' },
      { id: 2, src: '/tarjeteros.webp', alt: 'Vista interior de la billetera' },
    ],
    description: 'Elegancia y funcionalidad en un diseño atemporal. Fabricada con cuero de primera, esta billetera es el complemento perfecto para el día a día.',
    details: [
      { title: 'Detalles del Producto', content: 'Múltiples ranuras para tarjetas, compartimento para billetes y un diseño compacto.' },
      { title: 'Materiales', content: '100% Cuero Genuino. Forro interior de tela de alta resistencia.' },
      { title: 'Envíos y Devoluciones', content: 'Envío gratuito en todos los pedidos. Devoluciones aceptadas dentro de los 30 días posteriores a la compra.' },
    ]
  },
  {
    id: 2,
    name: 'Cinturón de Piel Genuina',
    slug: 'cinturon-de-piel-genuina',
    price: '$120.000',
    category: 'Cinturones',
    categorySlug: 'cinturones',
    imageSrc: '/cinturon-destacado-1.webp',
    images: [
      { id: 1, src: '/cinturon-destacado-1.webp', alt: 'Vista frontal del cinturón' },
      { id: 2, src: '/cinturones.webp', alt: 'Detalle de la hebilla' },
      { id: 3, src: '/tarjeteros.webp', alt: 'Textura del cuero' },
      { id: 4, src: '/sacos.webp', alt: 'Cinturón en contexto' },
    ],
    description: 'Un accesorio esencial que combina artesanía tradicional con un diseño contemporáneo. Hecho a mano con piel genuina de la más alta calidad, este cinturón no solo es duradero, sino que también mejora con el tiempo.',
    details: [
      { title: 'Detalles del Producto', content: 'Hebilla de metal pulido, 3.5cm de ancho, bordes finamente cosidos para una mayor durabilidad.' },
      { title: 'Materiales', content: '100% Cuero Genuino de origen sostenible. Herrajes de aleación de zinc con acabado plateado.' },
      { title: 'Envíos y Devoluciones', content: 'Envío gratuito en todos los pedidos. Devoluciones aceptadas dentro de los 30 días posteriores a la compra.' },
    ]
  },
  {
    id: 3,
    name: 'Gorra de Diseño Exclusivo',
    slug: 'gorra-de-diseno-exclusivo',
    price: '$60.000',
    category: 'Gorras',
    categorySlug: 'gorras',
    imageSrc: '/gorras.webp',
    images: [
      { id: 1, src: '/gorras.webp', alt: 'Vista frontal de la gorra' },
    ],
    description: 'Un diseño exclusivo que combina comodidad y estilo urbano. Perfecta para cualquier ocasión.',
    details: [
      { title: 'Detalles del Producto', content: 'Cierre ajustable, logo bordado en alta definición.' },
      { title: 'Materiales', content: '100% Algodón de alta densidad.' },
      { title: 'Envíos y Devoluciones', content: 'Envío gratuito en todos los pedidos. Devoluciones aceptadas dentro de los 30 días posteriores a la compra.' },
    ]
  },
  // ... Agrega el resto de tus productos aquí con la misma estructura
];

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  // Por ahora, devolvemos los primeros 6 como destacados.
  return allProducts;
}

export function getRelatedProducts(currentSlug) {
    // Lógica simple para obtener productos relacionados (todos menos el actual)
    return allProducts.filter(p => p.slug !== currentSlug);
}

export function getProductsByCategory(categorySlug) {
    return allProducts.filter(p => p.categorySlug === categorySlug);
}