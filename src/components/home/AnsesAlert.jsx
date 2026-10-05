import { useRef } from 'react';
import datosCelular from '../../assets/images/datosCelular.png';
import datosEscritorio from '../../assets/images/datosEscritorio.png';
import useElementHeight from '../../hooks/useElementHeight';
import useIsMobile from '../../hooks/useIsMobile';
import WellnessBanner from './WellnessBanner';

const ALERT_ALT =
  'Aviso de seguridad: ANSES nunca solicita por teléfono, WhatsApp, correo electrónico ni redes sociales claves de homebanking o Mi ANSES, datos de tarjetas, CBU o datos personales para otorgar un beneficio.';

/**
 * Banner de salud + aviso antifraude de ANSES.
 * En mobile el banner de salud toma la altura de la imagen del aviso (misma altura visual).
 */
export default function AnsesAlert() {
  const isMobile = useIsMobile();
  const imageRef = useRef(null);
  const imageHeight = useElementHeight(imageRef, isMobile);

  return (
    <>
      <div className="wellnessSync" style={{ height: isMobile && imageHeight ? imageHeight : 'auto' }}>
        <WellnessBanner />
      </div>

      {isMobile ? (
        <img ref={imageRef} src={datosCelular} alt={ALERT_ALT} className="ansesBannerImg" />
      ) : (
        <div className="ansesImgContainer">
          <img src={datosEscritorio} alt={ALERT_ALT} className="ansesBannerImgX" />
        </div>
      )}
    </>
  );
}
