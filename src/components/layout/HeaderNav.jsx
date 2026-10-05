import { NavLink } from 'react-router-dom';

// `to` = ruta interna (NavLink) · `href` = ancla dentro de la página (footer)
const NAV_ITEMS = [
  { label: 'JUBILATE', to: '/jubilaciones' },
  { label: 'HABER MENSUAL', to: '/reajustedehaberes' },
  { label: 'CONTACTANOS', href: '#socialNetworks' },
  { label: 'NOSOTROS', to: '/nosotros' },
  { label: 'SITIOS DE INTERÉS', href: '#links' },
];

export default function HeaderNav() {
  return (
    <nav aria-label="Principal">
      <ul>
        {NAV_ITEMS.map(({ label, to, href }) => (
          <li key={label}>{to ? <NavLink to={to}>{label}</NavLink> : <a href={href}>{label}</a>}</li>
        ))}
      </ul>
    </nav>
  );
}
