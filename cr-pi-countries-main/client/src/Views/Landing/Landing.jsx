import style from "./Landing.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.fondo}>
      <Link to={"/Home"}>
        <button className={style.buttonGo}>
          GO
        </button>
      </Link>
    </div>
  );
};

export default Landing;
