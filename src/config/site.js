// Datos del sitio en un único lugar. Archivo "puro" (sin imports de assets)
// para poder usarlo también desde scripts de Node (sitemap).

export const SITE_URL = 'https://www.jubilamos.com.ar';
export const SITE_NAME = 'Jubilamos';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`; // TODO: subir esta imagen a /public

export const CONTACT = {
  /** Formato internacional sin "+" (WhatsApp / tel:). Móvil argentino: 54 + 9 + área + número. */
  phone: '5491132140614',
  phoneDisplay: '+54 9 11 3214-0614',
  email: 'jubilamosinf@hotmail.com',
  street: 'Av. Santa Fe 1845',
  city: 'Ciudad Autónoma de Buenos Aires',
};

export const DEVELOPER = {
  name: 'Daniel Alejandro',
  email: 'daniel.salas@bue.edu.ar',
};

export const WHATSAPP_MESSAGES = {
  interview: 'Hola, quisiera agendar una entrevista virtual para consultar por mi trámite.',
  consult: 'Hola, estuve leyendo la información en su web y quisiera hacer una consulta sobre mi trámite.',
};

export const whatsappUrl = (text) =>
  `https://api.whatsapp.com/send/?phone=${CONTACT.phone}${text ? `&text=${encodeURIComponent(text)}` : ''}`;

export const telUrl = `tel:+${CONTACT.phone}`;
export const mailUrl = `mailto:${CONTACT.email}`;

export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3349961380827!2d-58.3938796!3d-34.5956896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdfb5e76a9%3A0x47006ce9bde4a929!2sAv.%20Sta.%20Fe%201845%2C%20C1123AAA%20CABA!5e0!3m2!1ses-419!2sar!4v1705924921762!5m2!1ses-419!2sar';

export const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=Av.+Santa+Fe+1845,+Ciudad+Autonoma+de+Buenos+Aires';

/** `id` coincide con las clases CSS existentes (.fb, .ig, .mail, .wa, .yt). */
export const SOCIAL_LINKS = [
  { id: 'fb', label: 'Facebook', href: 'https://www.facebook.com/jubilamosok' },
  { id: 'ig', label: 'Instagram', href: 'https://www.instagram.com/jubilamos' },
  { id: 'mail', label: 'Email', href: mailUrl },
  { id: 'wa', label: 'WhatsApp', href: whatsappUrl() },
  { id: 'yt', label: 'YouTube', href: 'https://www.youtube.com/@Jubilamos-Info' },
];

export const EXTERNAL_SITES = [
  { label: 'PODER JUDICIAL', href: 'https://www.pjn.gov.ar/' },
  { label: 'ANSES', href: 'https://www.anses.gob.ar/' },
  { label: 'PAMI', href: 'https://www.pami.org.ar/' },
];

/** Rutas que no salen de SERVICES (se usan en el sitemap). */
export const STATIC_PATHS = ['/', '/nosotros', '/contacto', '/articulos', '/politica-de-privacidad'];
