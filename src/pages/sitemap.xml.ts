import { sanityClient } from '../sanity/client';

export async function GET() {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://example.com';

  // Fetch all published documents
  const services = await sanityClient.fetch('*[_type == "service" && status == "published"]');
  const problems = await sanityClient.fetch('*[_type == "problem" && status == "published"]');
  const locations = await sanityClient.fetch('*[_type == "location" && status == "published"]');

  // Filter locations with at least one proof block to prevent indexation of thin content
  const validLocations = locations.filter(
    (l: any) => l.localProofBlocks && l.localProofBlocks.length > 0
  );

  // Static URLs
  const staticUrls = [
    '',
    '/usluge/',
    '/problemi/',
    '/lokacije/',
    '/cjenik/',
    '/radovi/'
  ];

  // Dynamic URLs
  const serviceUrls = services.map((s: any) => `/usluge/${s.slug.current}/`);
  const problemUrls = problems.map((p: any) => `/problemi/${p.slug.current}/`);
  const locationUrls = validLocations.map((l: any) => `/lokacije/${l.slug.current}/`);

  const allUrls = [...staticUrls, ...serviceUrls, ...problemUrls, ...locationUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- PRODUCTION SITEMAP READINESS STATUS: NOT VERIFIED. Requires approved production domain. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
  <url>
    <loc>${new URL(url, siteUrl).toString()}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
