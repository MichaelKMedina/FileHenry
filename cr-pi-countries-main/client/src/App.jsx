import style from "./App.module.css";
import PATHROUTES from "./helpers/PathRoutes.js";
import Home from "./Views/Home/Home.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import NavBar from "./Views/NavBar/NavBar.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import FormActivity from "./Views/FormActivity/FormActivity.jsx";
import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { getAllCountries, filterCountryByName, getAllActivities } from "./redux/actions.js";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const ruta = useLocation().pathname;
  console.log(ruta)
  //Traer paises de la api y guardarlos
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countriesOriginal);
  //cada vez que renderizo:
  useEffect(() => {
    navigate("/");
    dispatch(getAllActivities());
    dispatch(getAllCountries());
  }, []);
  //Funcion para buscar paises filtrados
  const filterByName = async (name) => {
    if (name) dispatch(filterCountryByName(name));
    else dispatch(getAllCountries());
  };

  return (
    <div>
      {ruta !== "/" && <NavBar 
        filterByName={filterByName} 
        ruta={ruta}
      /> }
      <Routes>
        <Route 
          path={PATHROUTES.LANDING} 
          element={<Landing />} 
        />
        <Route
          path={PATHROUTES.HOME}
          element={<Home allCountries={allCountries} 
          />}
        />
        <Route 
          path={"/detail/:idPais"} 
          element={<Detail />} 
        />
        <Route 
          path={"/form"} 
          element={<FormActivity />} 
        />
      </Routes>
    </div>
  );
};

export default App;
