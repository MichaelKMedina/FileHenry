import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { idPais } = useParams();
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios(`http://localhost:3000/countries/${idPais}`)
      .then(({ data }) => {
        setCountry(data);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }, []);

  return (
    <div>
      <img src={country.bandera}></img>
      <h2>{country.name}</h2>
      <h4>{country.continente}</h4>
      <h4>{country.capital}</h4>
      <h4>{country.subregion}</h4>
      <h4>{country.area}</h4>
      <h4>{country.poblacion}</h4>
    </div>
  );
};

export default Detail;
