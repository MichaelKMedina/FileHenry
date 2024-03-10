import { Link, useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const NavBar = ({ filterByName, ruta }) => {
  return (
    <>
      {ruta == "/Home" ? (
        <>
          <SearchBar filterByName={filterByName} />
          <Link to={`/form`}>Crear Actividad</Link>
        </>
      ) : (
        <>
          <Link to={`/Home`}>HOME</Link>
        </>
      )}
    </>
  );
};

export default NavBar;
