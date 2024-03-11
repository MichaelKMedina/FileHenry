import React, { useState } from "react";
import style from "./SearchBar.module.css"
const SearchBar = ({ filterByName }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    filterByName(busqueda);
    setBusqueda("");
  };

  return (
    <div className={style.elementoNav}>
      <label htmlFor="busqueda"/>
      <input
        className={style.barra}
        type="text"
        id="busqueda"
        name="busqueda"
        value={busqueda}
        onChange={handleInputChange}
        placeholder="Busca por nombre"
      />
      <button className={style.botonAdd}type="submit" onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
