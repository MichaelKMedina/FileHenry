import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { idPais } = useParams();
  const [country, setCountry] = useState("");
  const [actividad, setActividad] = useState("");

  useEffect(() => {
    axios(`http://localhost:3000/countries/${idPais}`)
      .then(({ data }) => {
        setCountry(data);
        setActividad(data.Actividads);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }, []);

  return (
    <div>
      <h1>{country.id}</h1>
      <h2>{country.name}</h2>
      <img src={country.bandera}></img>
      <h4>{country.continente}</h4>
      <h4>{country.capital}</h4>
      <h4>{country.subregion}</h4>
      <h4>Area: {country.area}</h4>
      <h4>Población: {country.poblacion}</h4>
      {actividad &&
        actividad.map((a) => (
          <div>
            <h2>{a.name}</h2>
            <h4>{a.duracion}</h4>
            <h4>{a.dificultad}</h4>
            <h4>{a.temporada}</h4>
          </div>
        ))}
    </div>
  );
};

export default Detail;
