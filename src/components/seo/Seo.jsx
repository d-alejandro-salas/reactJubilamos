// src/components/seo/Seo.jsx

import { Helmet } from "react-helmet-async";

const SITE = "https://www.jubilamos.com.ar";
const DEFAULT_IMAGE = `${SITE}/og-default.jpg`; // póngala cuando pueda

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  const url = `${SITE}${path.startsWith("/") ? path : `/${path}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
