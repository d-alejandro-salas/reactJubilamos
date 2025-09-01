
import { Button } from '../atoms/Button';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Button to="/jubilaciones">JUBILATE</Button>
        </li>
        <li>
          <Button to="/reajustedehaberes">HABER MENSUAL</Button>
        </li>
        <li>
          <Button to="/contacto">CONTACTANOS</Button>
        </li>
        <li>
          <Button to="/nosotros">NOSOTROS</Button>
        </li>
        <li>
          <a href="#links">SITIOS DE INTERÉS</a>
        </li>
      </ul>
    </nav>
  );
};