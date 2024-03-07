import style from "./App.module.css";
import PATHROUTES from "./helpers/PathRoutes.js";
import Home from "./Views/Home/Home.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import NavBar from "./Views/NavBar/NavBar.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import FormActivity from "./Views/FormActivity/FormActivity.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { getAllCountries } from "./redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();
  const [countrySearch, setcountrySearch] = useState("");
  const currenPath = useLocation().pathname;
  //Traer paises de la api y guardarlos
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countriesOriginal);
  useEffect(() => {
    navigate("/");
    dispatch(getAllCountries());
  }, []);
  //Funcion para buscar paises filtrados
  const filterByName = async (name) => {
    if (!name) setcountrySearch(allCountries);
    else {
      try {
        const country = await axios(
          `http://localhost:3000/countries/name?n=${name}`
        );
        setcountrySearch(country.data);
      } catch (error) {
        window.alert(error.message);
      }
    }
  };

  return (
    <div>
      {currenPath == "/Home" ? <NavBar filterByName={filterByName} /> : null}
      <Routes>
        <Route path={PATHROUTES.LANDING} element={<Landing />} />
        <Route
          path={PATHROUTES.HOME}
          element={
            countrySearch ? (
              <Home allCountries={countrySearch} />
            ) : (
              <Home allCountries={allCountries} />
            )
          }
        />
        <Route path={"/detail/:idPais"} element={<Detail />} />
        <Route path={"/form"} element={<FormActivity />} />
      </Routes>
    </div>
  );
};

export default App;
