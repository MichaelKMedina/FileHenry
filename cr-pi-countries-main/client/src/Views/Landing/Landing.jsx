import style from "./Landing.module.css";
import React from "react";
import ingreso from "../Landing/in.png";
import { Link } from "react-router-dom";


const Landing = () => {

  return (
    <div className={style.fondo}>
      <Link to={"/Home"}>
        <button>
          <img src={ingreso}></img>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
