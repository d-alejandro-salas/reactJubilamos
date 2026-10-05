import { useEffect, useState } from 'react';

/** `true` cuando el scroll vertical supera `offset` px. Solo re-renderiza cuando cambia el booleano. */
export default function useScrolledPast(offset) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const update = () => setPast(window.scrollY > offset);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [offset]);

  return past;
}
