import React from 'react'
import {useParams} from "react-router-dom"
import jubilacionesImg from '../assets/Images/jubilaciones.webp';

const DetailService = () => {
    const {productId} = useParams();
    console.log("nombre del servicio...", productId)
    return (
        <main>
            <h1> {productId} </h1>
            <img className="pages__img" src={jubilacionesImg}/>
            <section>
                <p className="bigFontSize">Tramitamos la mejor jubilación posible para nuestros clientes, brindándoles un servicio integral, donde se analizan requisitos de edad y aportes realizados; también posibilitamos el acceso a la jubilación utilizando las moratorias vigentes en caso de no contar con los aportes requeridos por ley.</p>
            </section>
        </main>
    )
}
export default DetailService