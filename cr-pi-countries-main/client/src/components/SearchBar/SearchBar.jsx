import React, { useState } from "react";

const SearchBar = ({ filterByName }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterByName(busqueda);
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="busqueda">Búsqueda</label>
      <input
        type="text"
        id="busqueda"
        name="busqueda"
        value={busqueda}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
