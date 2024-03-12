import { useSelector } from "react-redux";
import style from "./FilterBar.module.css";

const FilterBar = ({ handleOrder, handleFilter, filterByActivity }) => {
  const actividades = useSelector((state) => state.activities);
  return (
    <div className={style.filterBar}>
      <select onChange={handleOrder}>
        <option value="">Ordenar por:</option>
        <option value="Ascendente">Nombre A-Z</option>
        <option value="Descendente">Nombre Z-A</option>
        <option value="PoblaciónMayor">Mayor población</option>
        <option value="PoblaciónMenor">Menor Población</option>
      </select>
      <h3>Filtrar por:</h3>
      <select onChange={handleFilter}>
        <option value="">Continente:</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antartica</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
      </select>
      <select onChange={filterByActivity}>
        <option key={0} value="">
          Actividad:
        </option>
        {actividades.map((act) => (
          <option key={act.id} value={act.name}>
            {act.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
