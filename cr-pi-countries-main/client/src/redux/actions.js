import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const POST_ACTIVITIES = "POST_ACTIVITIES";

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3000/countries");
      dispatch({ type: GET_COUNTRIES, payload: response.data });
    } catch (error) {
      console.error("Error trayendo countries:", error);
    }
  };
};

export const filterCards = (continente) => ({
  type: FILTER,
  payload: continente,
});

export const orderCards = (orden) => ({ type: ORDER, payload: orden });

export const postActivities = (actividad) => {
  console.log(actividad)
  return async (dispatch) => {
    try {
      const response = await axios(
        "http://localhost:3000/activities",
        actividad
      );
      console.log(response.data)
      dispatch({ type: POST_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.error("Error creando actividad:", error);
    }
  };
};
