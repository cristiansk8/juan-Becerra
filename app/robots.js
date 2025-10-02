// app/robots.js
import { MetadataRoute } from 'next';

export default function robots() {
  const isProduction = process.env.VERCEL_ENV === 'production';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.juanbecerra.co';

  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : [],
      disallow: isProduction ? ['/admin', '/private'] : '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
