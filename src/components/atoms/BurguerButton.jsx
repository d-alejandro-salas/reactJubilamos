// src/components/Atoms/BurguerButton.jsx

import React, { useState } from 'react';
import hamburguerIcon from '../../assets/images/hamburguer.png';

export const BurguerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        className="cursor-pointer lg:hidden"
      >
        <img
          src={hamburguerIcon}
          alt="Ícono de menú"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
};
