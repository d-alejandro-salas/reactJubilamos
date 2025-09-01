// src/components/organism/Form.jsx

export const ContactForm = () => {
  return (
    <form
      action="https://submit-form.com/HaIt7LYfC"
      method="POST">
        
      <h2>Haga su consulta. Le responderemos enseguida.</h2>
      <p>Tenemos un equipo de especialistas preparados para asesorarlo.</p>

      <div>
        <label htmlFor="fullName">Nombre y apellidos:</label>
        <input id="fullName" name="fullName" type="text" required />
      </div>

      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input id="phone" name="phone" type="tel" />
      </div>

      <div>
        <label htmlFor="email">E-mail:</label>
        <input id="email" name="_replyto" type="email" required />
      </div>

      <div>
        <label htmlFor="service">Servicio de interés:</label>
        <select id="service" name="service">
          <option value="">Seleccione…</option>
          <option value="reajuste">Reajuste de haberes</option>
          <option value="jubilaciones">Jubilaciones</option>
          <option value="pensiones">Pensiones</option>
          <option value="sucesiones">Sucesiones</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" rows={5} />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};
