import { useEffect, useState } from 'react';

/** Altura (px) de un elemento, actualizada con ResizeObserver (incluye la carga de imágenes). */
export default function useElementHeight(ref, enabled = true) {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) {
      setHeight(null);
      return undefined;
    }
    const observer = new ResizeObserver(() => setHeight(element.offsetHeight));
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, enabled]);

  return height;
}
