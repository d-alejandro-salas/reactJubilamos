// src/components/molecules/FooterDeveloperSection.jsx

import { useEffect } from 'react';
import ReactLogo from '../../assets/images/react.svg';

function FooterDeveloperSection() {

    useEffect(() => {
        const yearPlaceholder = document.getElementById('yearPlaceholder');
        const currentYear = new Date().getFullYear();
        if (yearPlaceholder) {
          yearPlaceholder.textContent = currentYear;
        }
      }, []);

  return (      <section className="developerSection">
    <p>
      Web Developer <a className="copyright__a" href="https://drive.google.com/file/d/1JvKXVXbLuJM6whTgIW7sI9gLW1nE9W_H/view?usp=drive_link">Daniel Alejandro</a>,
      contrataciones: <a href="mailto:daniel.salas@bue.edu.ar">daniel.salas@bue.edu.ar</a>.
      © All rights reserved <span id="yearPlaceholder"></span>.
    </p>
    <a className="reactLogoContainer" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      <img src={ReactLogo} alt="React logo" className="reactLogo" />
    </a>
  </section>
  )
}

export default FooterDeveloperSection