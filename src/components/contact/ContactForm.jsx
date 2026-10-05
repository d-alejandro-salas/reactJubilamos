import { useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappUrl } from '../../config/site';
import { SERVICES } from '../../data/services';

const INITIAL_VALUES = { name: '', phone: '', service: '', message: '' };

const buildMessage = ({ name, phone, service, message }) =>
  [
    `Hola, soy ${name.trim()}.`,
    service && `Quisiera consultar por: ${service}.`,
    message.trim(),
    phone.trim() && `Mi teléfono de contacto: ${phone.trim()}`,
  ]
    .filter(Boolean)
    .join('\n');

/**
 * Formulario sin backend: arma el mensaje y abre WhatsApp con el texto ya escrito.
 * Si más adelante se quiere enviar por mail/API, solo cambia `handleSubmit`.
 */
export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [sent, setSent] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setValues((previous) => ({ ...previous, [name]: value }));
    setSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(whatsappUrl(buildMessage(values)), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="contactFormTitle">
      <h2 id="contactFormTitle">Escribinos tu consulta</h2>
      <p>Completá tus datos y te respondemos por WhatsApp a la brevedad.</p>

      <div className="row-2">
        <div className="form-group">
          <label htmlFor="cf-name">Nombre y apellido</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            required
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-phone">Teléfono</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            value={values.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cf-service">¿Sobre qué trámite querés consultar?</label>
        <select id="cf-service" name="service" value={values.service} onChange={handleChange}>
          <option value="">Seleccionar (opcional)</option>
          {SERVICES.map(({ slug, title }) => (
            <option key={slug} value={title}>{title}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">Mensaje</label>
        <textarea
          id="cf-message"
          name="message"
          maxLength={1000}
          required
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Enviar por WhatsApp</button>

      {sent && (
        <p role="status" className="formNotice">
          Se abrió WhatsApp con tu mensaje. Si no se abrió, revisá que tu navegador permita ventanas emergentes.
        </p>
      )}
      <p className="formNotice formNotice--small">
        Al enviar aceptás el tratamiento de tus datos según nuestra{' '}
        <Link to="/politica-de-privacidad">Política de Privacidad</Link>.
      </p>
    </form>
  );
}
