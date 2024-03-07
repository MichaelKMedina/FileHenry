import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
//import FilterBar from "../../components/FilterBar/FilterBar";

const NavBar = ({filterByName}) => {
  return (
    <>
      <SearchBar filterByName={filterByName}/>
      <Link to={`/form`}>Crear Actividad</Link>
    </>
  );
};

export default NavBar;
