// src/components/organism/Form.jsx
export const ContactForm = () => {
  const req = (
    <>
      {" "}
      <abbr className="req" title="obligatorio" aria-hidden="true">*</abbr>
      <span className="sr-only"> (obligatorio)</span>
    </>
  );

  return (
    <form action="https://submit-form.com/HaIt7LYfC" method="POST">
      <h2>Su consulta es muy importante para nosotros.</h2>
      <p>
        Por favor, complete el formulario y un abogado especialista en derecho
        previsional se comunicará a la brevedad para brindarle la orientación
        correspondiente.
      </p>

      {/* Nota sobre obligatoriedad */}
      <p className="form-note" aria-live="polite">
        Los campos marcados con <abbr className="req" title="obligatorio">*</abbr> son
        obligatorios.
      </p>

      {/* Nombre (obligatorio) */}
      <div>
        <label htmlFor="fullName">Nombre y apellidos:{req}</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          onInvalid={(e) =>
            e.currentTarget.setCustomValidity("Ingrese su nombre y apellidos.")
          }
          onInput={(e) => e.currentTarget.setCustomValidity("")}
        />
      </div>

      {/* Teléfono (opcional) + E-mail (obligatorio) */}
      <div className="row-2">
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Ej.: 11 3214-0614"
            onInvalid={(e) => e.currentTarget.setCustomValidity("")}
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
        </div>

        <div>
          <label htmlFor="email">E-mail:{req}</label>
          <input
            id="email"
            name="_replyto"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            placeholder="tu@correo.com"
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Ingrese un correo válido (ej.: nombre@dominio.com)."
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
        </div>
      </div>

      {/* Servicio (opcional) */}
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

{/* Mensaje (obligatorio) */}
<div>
  <label htmlFor="message">Mensaje:{req}</label>
  <textarea
    id="message"
    name="message"
    rows={5}
    placeholder="Hacenos libremente tu consulta"
    required
    aria-required="true"
    onInvalid={(e) =>
      e.currentTarget.setCustomValidity("Por favor, escriba su mensaje.")
    }
    onInput={(e) => e.currentTarget.setCustomValidity("")}
  />
</div>


      <button type="submit">Enviar</button>
    </form>
  );
};
