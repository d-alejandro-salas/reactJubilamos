import { FaReact } from 'react-icons/fa6';
import { DEVELOPER } from '../../config/site';

export default function FooterDeveloper() {
  const year = new Date().getFullYear();
  const mail = `mailto:${DEVELOPER.email}`;

  return (
    <section className="developerSection">
      <p>
        Web Developer <a href={mail}>{DEVELOPER.name}</a>, contrataciones: <a href={mail}>{DEVELOPER.email}</a>. ©
        All rights reserved {year}.
      </p>
      <a
        className="reactLogoContainer"
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="React"
      >
        <FaReact className="reactLogo" aria-hidden="true" /> <span>React</span>
      </a>
    </section>
  );
}
