import axios from "axios";
import {
  GET_COUNTRIES,
  FILTER,
  ORDER,
  POST_ACTIVITIES,
  FILTER_BYNAME,
  GET_ACTIVITIES,
  FILTER_BYACTIVIDAD,
} from "../helpers/declarationOfActions";

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3000/countries");
      return dispatch({ type: GET_COUNTRIES, payload: response.data });
    } catch (error) {
      console.error("Error al traer los paises:", error.message);
    }
  };
};

export const getAllActivities = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3000/activities");
      return dispatch({ type: GET_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.error("Error al traer las actividades:", error.message);
    }
  };
};

export const filterCountryByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `http://localhost:3000/countries?name=${name}`
      );
      return dispatch({ type: FILTER_BYNAME, payload: response.data });
    } catch (error) {
      console.error("Error trayendo pais por nombre:", error.message);
    }
  };
};

export const filterCards = (continente) => ({
  type: FILTER,
  payload: continente,
});

export const orderCards = (orden) => ({ type: ORDER, payload: orden });

export const postActivities = (actividad) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/activities",
        actividad
      );
      return dispatch({ type: POST_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.error("Error creando actividad:", error.message);
    }
  };
};

export const filterCardsByActivity = (actAFiltrar) => ({
  type: FILTER_BYACTIVIDAD,
  payload: actAFiltrar,
});
