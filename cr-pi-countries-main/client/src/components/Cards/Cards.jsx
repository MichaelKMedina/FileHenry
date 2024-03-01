import { useEffect } from "react";
import { getAllCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";

const Cards = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <>
      {allCountries &&
        allCountries.map((pais) => {
          return (
            <Card
              key={pais.id}
              name={pais.name}
              continente={pais.continente}
              bandera={pais.bandera}
            />
          );
        })}
      <Card />
    </>
  );
};

export default Cards;
