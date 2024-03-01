import { GET_COUNTRIES } from "./actions";

const initialstate = {
  countries: [],
};

const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
