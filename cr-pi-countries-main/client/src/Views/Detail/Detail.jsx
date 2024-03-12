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
      <table class={style.actividadTabla}>
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Duración</th>
            <th>Dificultad</th>
            <th>Temporada</th>
          </tr>
        </thead>
        {actividad &&
          actividad.map((a) => (
            <tbody>
              <tr>
                <td>{a.name}</td>
                <td>{a.duracion} Hrs</td>
                <td>{a.dificultad}</td>
                <td>{a.temporada}</td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default Detail;
