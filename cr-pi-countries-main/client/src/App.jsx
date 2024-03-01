import style from "./App.module.css";
import PATHROUTES from "./helpers/PathRoutes.js";
import Home from "./Views/Home/Home.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./Views/NavBar/NavBar.jsx";

const App = () => {
  const currenPath = useLocation().pathname;
  return (
    <div>
      {currenPath !== "/" ? <NavBar /> : null}
      <Routes>
        <Route path={PATHROUTES.LANDING} element={<Landing />} />
        <Route path={PATHROUTES.HOME} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
