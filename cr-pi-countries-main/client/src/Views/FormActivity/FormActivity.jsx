import { useState } from "react";
import style from "./FormActivity.module.css";
import { useDispatch } from "react-redux";
import { postActivities } from "../../redux/actions";
import axios from "axios";
import {
  esEnteroYEstaEntre,
  esNumero,
  tieneNro,
} from "../../validations/validations";

const Form = () => {
  const dispatch = useDispatch();
  //ESTADOS////////////////////////////////////////////////////////////////
  const [countryAdd, setCountryAdd] = useState("");
  const [newActivity, setNewActivity] = useState({
    name: "",
    duracion: "",
    dificultad: "",
    temporada: "",
    pais: [],
  });
  //OTROS///////////////////////////////////////////////
  const activeSubmit = () =>
    newActivity.name &&
    newActivity.dificultad &&
    newActivity.pais.length > 0 &&
    newActivity.temporada;
  //HANDLES/////////////////////////////////////////////////////////////////
  const handleChangeOfPais = (event) => {
    const { value } = event.target;
    setCountryAdd(value);
  };

  const addToCountry = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios(
        `http://localhost:3000/countries?name=${countryAdd}`
      );
      setNewActivity({
        ...newActivity,
        pais: [...newActivity.pais, data.id],
      });
      setCountryAdd("");
    } catch (error) {
      window.alert("Error al agregar el pais:" + error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivities(newActivity));
    setNewActivity({
      name: "",
      duracion: "",
      dificultad: "",
      temporada: "",
      pais: [],
    });
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <h1 className={style.h1}>Crea tu actividad</h1>
        <div className={style.casilla}>
          <label className={style.label} htmlFor="name">
            Nombre
          </label>
          <input
            className={style.input}
            type="text"
            name="name"
            value={newActivity.name}
            onChange={handleChange}
          />
          {!newActivity.name && (
            <span className={style.span}>El campo esta vacio</span>
          )}
          {tieneNro(newActivity.name) && (
            <span className={style.span}>No debe tener numeros</span>
          )}
        </div>
        <div className={style.casilla}>
          <label className={style.label} htmlFor="Dificultad">
            Dificultad (1 al 5)
          </label>
          <input
            className={style.input}
            type="number"
            name="dificultad"
            value={newActivity.dificultad}
            onChange={handleChange}
          />
          {!newActivity.dificultad && (
            <span className={style.span}>El campo esta vacio</span>
          )}
          {!esEnteroYEstaEntre(newActivity.dificultad, 1, 5) && (
            <span className={style.span}>debe estar entre 1 y 5</span>
          )}
        </div>
        <div className={style.casilla}>
          <label className={style.label} htmlFor="duracion">
            Duración (en horas)
          </label>
          <input
            className={style.input}
            type="number"
            name="duracion"
            value={newActivity.duracion}
            onChange={handleChange}
          />
        </div>
        <div className={style.casilla}>
          <p>Paises agregados: {newActivity.pais}</p>
          <label className={style.label} htmlFor="pais">
            Pais de actividad
          </label>
          <input
            className={style.input}
            type="text"
            id="pais"
            name="pais"
            value={countryAdd}
            onChange={handleChangeOfPais}
          />
          <button className={style.button} type="submit" onClick={addToCountry}>
            Agregar
          </button>
          {newActivity.pais.length == 0 && (
            <span className={style.span}>No has escogido pais</span>
          )}
        </div>
        <div className={style.casilla}>
          <label className={style.label} htmlFor="temporada">
            Temporada
          </label>
          <select
          className={style.select}
            name="temporada"
            value={newActivity.temporada}
            onChange={handleChange}
          >
            <option value="">Seleccione</option>
            <option value="Verano">Verano</option>
            <option value="Invierno">Invierno</option>
            <option value="Otoño">Otoño</option>
            <option value="Primavera">Primavera</option>
          </select>
          {!newActivity.temporada && (
            <span className={style.span}>El campo esta vacio</span>
          )}
        </div>
        <button
          className={style.buttonF}
          type="submit"
          disabled={!activeSubmit()}
        >
          Crear
        </button>
      </div>
    </form>
  );
};

export default Form;
