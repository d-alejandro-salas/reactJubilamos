import { MAPS_EMBED_URL } from '../../config/site';

export default function MapEmbed({ title = 'Mapa: Av. Santa Fe 1845, CABA', ...props }) {
  return (
    <iframe
      src={MAPS_EMBED_URL}
      title={title}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
    />
  );
}
