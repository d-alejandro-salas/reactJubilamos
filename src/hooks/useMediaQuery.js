import { useCallback, useSyncExternalStore } from 'react';

/** Suscribe un componente a una media query (sin listeners de resize manuales). */
export default function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false, // valor en el servidor / prerender
  );
}
