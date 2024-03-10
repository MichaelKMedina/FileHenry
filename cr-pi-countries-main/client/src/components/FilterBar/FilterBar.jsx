import { useSelector } from "react-redux";

const FilterBar = ({ handleOrder, handleFilter, filterByActivity }) => {
  const actividades = useSelector((state) => state.activities);
  return (
    <div>
      <select onChange={handleOrder}>
        <option value="">Elige</option>
        <option value="Ascendente">Nombre A-Z</option>
        <option value="Descendente">Nombre Z-A</option>
        <option value="PoblaciónMayor">Mayor población</option>
        <option value="PoblaciónMenor">Menor Población</option>
      </select>
      <select onChange={handleFilter}>
        <option value="">Elige</option>
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
          Elige
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
