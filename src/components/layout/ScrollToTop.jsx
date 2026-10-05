import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Al cambiar de ruta: va al ancla (#hash) si existe, o arriba de todo. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { hash } = window.location;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}
