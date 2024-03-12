import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Detail.module.css";

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
    <div className={style.country}>
      <div className={style.flex}>
        <div className={style.flag}>
          <img src={country.bandera} />
        </div>
        <div className={style.countryInfo}>
          <table>
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{country.id}</td>
              </tr>
              <tr>
                <td>País:</td>
                <td>{country.name}</td>
              </tr>
              <tr>
                <td>Continente:</td>
                <td>{country.continente}</td>
              </tr>
              <tr>
                <td>Capital:</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Subregión:</td>
                <td>{country.subregion}</td>
              </tr>
              <tr>
                <td>Área:</td>
                <td>{country.area}</td>
              </tr>
              <tr>
                <td>Población:</td>
                <td>{country.poblacion}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h1>Actividades</h1>
      {actividad &&
        actividad.map((a) => (
          <div className={style.actividad}>
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
