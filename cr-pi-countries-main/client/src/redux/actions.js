import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const getAllCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios("http://localhost:3000/countries");
      dispatch({ type: GET_COUNTRIES, payload: response.data });
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
};

export const filterCards = (continente) => ({
  type: FILTER,
  payload: continente,
});

export const orderCards = (orden) => ({ type: ORDER, payload: orden });
