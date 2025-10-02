// app/sitemap.js
const URL = 'https://www.juanbecerra.co';

export default async function sitemap() {
  const routes = ['', '/hombre', '/mujer', '/accesorios', '/sale', '/lookbook'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
