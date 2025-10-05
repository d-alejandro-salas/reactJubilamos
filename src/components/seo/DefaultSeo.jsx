// src/components/seo/DefaultSeo.jsx

import { Helmet } from "react-helmet-async";

export default function DefaultSeo() {
  return (
    <Helmet>
      <title>Jubilamos – Estudio Jurídico Previsional</title>
      <meta
        name="description"
        content="Asesoramiento en jubilaciones, pensiones y sucesiones. Atención remota en todo el país."
      />
      <meta property="og:title" content="Jubilamos – Estudio Jurídico Previsional" />
      <meta
        property="og:description"
        content="Asesoramiento en jubilaciones, pensiones y sucesiones. Atención remota en todo el país."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.jubilamos.com.ar" />
      <meta property="og:image" content="https://www.jubilamos.com.ar/og-default.jpg" />
      <link rel="canonical" href="https://www.jubilamos.com.ar" />
    </Helmet>
  );
}
