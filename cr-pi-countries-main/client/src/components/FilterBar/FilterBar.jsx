const FilterBar = ({ handleOrder, handleFilter }) => {
  return (
    <div>
      <select onChange={handleOrder}>
        <option value=""></option>
        <option value="Ascendente">Nombre A-Z</option>
        <option value="Descendente">Nombre Z-A</option>
        <option value="PoblaciónMayor">Mayor población</option>
        <option value="PoblaciónMenor">Menor Población</option>
      </select>
      <select onChange={handleFilter}>
        <option value=""></option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antartica</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
      </select>
    </div>
  );
};

export default FilterBar;
