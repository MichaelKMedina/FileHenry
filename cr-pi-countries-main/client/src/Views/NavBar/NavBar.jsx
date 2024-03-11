import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

import style from "./NavBar.module.css";
const NavBar = ({ filterByName, ruta }) => {
  return (
    <nav className={style.navbar}>
      {ruta == "/Home" ? (
        <ul className={style.navlist}>
          <li className={style.navitem}>
            <SearchBar filterByName={filterByName} />
          </li>
          <li className={style.navitem}>
            <Link className={style.linksForm} to={`/form`}>
              Crear Actividad
            </Link>
          </li>
        </ul>
      ) : (
        <ul className={style.navlist}>
          <li className={style.navitem}>
            <Link className={style.linksHome} to={`/Home`}>
              HOME
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
