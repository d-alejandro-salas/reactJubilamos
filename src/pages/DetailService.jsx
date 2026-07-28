// src/pages/DetailService.jsx

import Seo from "../components/seo/Seo";           // ✅ nuevo
import { useParams } from "react-router-dom";
import dataPages from "../utils/dataPages.json";
import images from "../assets/images/imagesIndex.js";

function normalizeString(str){ return str.toLowerCase().replace(/\s+/g, ""); }

export const DetailService = () => {
  const { productId } = useParams();
  const pageData = dataPages.find(item => normalizeString(item.title) === normalizeString(productId));

  const title = pageData ? `${pageData.title} – Jubilamos` : "Servicio – Jubilamos";
  const description = pageData?.paragraphs?.[0]?.slice(0, 155) || "Asesoramiento previsional y sucesorio en todo el país.";
  const image = pageData ? images[pageData.image] : undefined;

return (
  <>
    <Seo title={title} description={description} path={`/${productId}`} image={image} />
    <main>
      {pageData ? (
        <>
          <h1>{pageData.title}</h1>
          <img className="pages__img" src={images[pageData.image]} alt={pageData.title} />
          <section>
            {pageData.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>
        </>
      ) : (
        <>
          <h1>Servicio no encontrado</h1>
          <p>La página solicitada no existe o fue movida.</p>
        </>
      )}
    </main>
  </>
);
};
