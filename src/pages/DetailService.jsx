// src/pages/DetailService.jsx

import { useParams } from 'react-router-dom';
import dataPages from '../utils/dataPages.json'; // Importa el archivo .json de datos
import images from '../assets/images/imagesIndex.js';

function normalizeString(str) {
    return str.toLowerCase().replace(/\s+/g, '');
}

export const DetailService = () => {
    const { productId } = useParams();

    // Buscar los datos en el array de dataPages
    const pageData = dataPages.find(item => normalizeString(item.title) === normalizeString(productId));

    return (
        <main>
            <h1>{pageData.title}</h1>
            <img className="pages__img" src={images[pageData.image]} alt={pageData.title} />
            <section>
                {pageData.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </section>
        </main>
    );
};

