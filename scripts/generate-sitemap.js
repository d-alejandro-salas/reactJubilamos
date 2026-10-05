// Genera public/sitemap.xml a partir de src/data/services.js y src/config/site.js.
// Se ejecuta solo antes de cada `npm run build` (prebuild), así nunca queda desactualizado.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE_URL, STATIC_PATHS } from '../src/config/site.js';
import { SERVICES, servicePath } from '../src/data/services.js';

const today = new Date().toISOString().slice(0, 10);

const entries = [
  ...STATIC_PATHS.map((path) => ({ path, priority: path === '/' ? '1.0' : '0.5' })),
  ...SERVICES.map((service) => ({ path: servicePath(service), priority: '0.8' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    ({ path, priority }) =>
      `  <url>\n    <loc>${new URL(path, SITE_URL).href}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

const output = fileURLToPath(new URL('../public/sitemap.xml', import.meta.url));
writeFileSync(output, xml);
console.log(`sitemap.xml generado con ${entries.length} URLs`);
