// src/components/molecules/FooterDeveloperSection.jsx
import { FaReact } from "react-icons/fa6";

function FooterDeveloperSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="developerSection">
      <p>
        Web Developer <a href="mailto:daniel.salas@bue.edu.ar">Daniel Alejandro</a>, 
        contrataciones: <a href="mailto:daniel.salas@bue.edu.ar">daniel.salas@bue.edu.ar</a>. 
        © All rights reserved {currentYear}.
      </p>
      <a 
        className="reactLogoContainer" 
        href="https://reactjs.org" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="ReactJS"
      >
        <FaReact className="reactLogo" /> <span>React</span>
      </a>
    </section>
  );
}

export default FooterDeveloperSection;