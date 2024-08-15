import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/jubilaciones">JUBILATE</NavLink>
        </li>
        <li>
          <NavLink to="/reajustedehaberes">HABER MENSUAL</NavLink>
        </li>
        <li>
          <a href="#redesSociales">CONTACTATE</a>
        </li>
        <li>
          <NavLink to="/nosotros">NOSOTROS</NavLink>
        </li>
        <li>
          <a href="#enlaces">SITIOS DE INTERÉS</a>
        </li>
      </ul>
    </nav>
  );
};
