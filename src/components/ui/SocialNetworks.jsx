import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { SOCIAL_LINKS } from '../../config/site';

const ICONS = { fb: FaFacebookF, ig: FaInstagram, mail: FaEnvelope, wa: FaWhatsapp, yt: FaYoutube };

export default function SocialNetworks() {
  return (
    <ul className="socialNetworks__ul">
      {SOCIAL_LINKS.map(({ id, label, href }) => {
        const Icon = ICONS[id];
        const isMail = href.startsWith('mailto:');
        return (
          <li key={id}>
            <a
              href={href}
              title={label}
              aria-label={label}
              className={id}
              {...(isMail ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
