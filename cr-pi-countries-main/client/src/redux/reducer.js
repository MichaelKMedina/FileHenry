import {
  GET_COUNTRIES,
  FILTER,
  ORDER,
  POST_ACTIVITIES,
  FILTER_BYNAME,
  GET_ACTIVITIES,
  FILTER_BYACTIVIDAD,
} from "../helpers/declarationOfActions";

const initialstate = {
  countries: "",
  countriesOriginal: [],
  activities: [],
};

const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
        countriesOriginal: payload,
      };
    case GET_ACTIVITIES:
      return {
        ...state,
        activities: [...state.activities, ...payload],
      };
    case FILTER_BYNAME:
      return {
        ...state,
        countriesOriginal: [payload],
      };
    case FILTER:
      if (payload) {
        const filtrado = state.countries.filter((e) => e.continente == payload);
        return {
          ...state,
          countriesOriginal: filtrado,
        };
      } else {
        const filtrado = state.countries;
        return {
          ...state,
          countriesOriginal: filtrado,
        };
      }
    case ORDER:
      switch (payload) {
        case "Ascendente":
          return {
            ...state,
            countriesOriginal: [...state.countriesOriginal].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        case "Descendente":
          return {
            ...state,
            countriesOriginal: [...state.countriesOriginal].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
          };
        case "PoblaciónMayor":
          return {
            ...state,
            countriesOriginal: [...state.countriesOriginal].sort(
              (a, b) => b.poblacion - a.poblacion
            ),
          };
        case "PoblaciónMenor":
          return {
            ...state,
            countriesOriginal: [...state.countriesOriginal].sort(
              (a, b) => a.poblacion - b.poblacion
            ),
          };
        default:
          return { ...state, countriesOriginal: state.countries };
      }
    case POST_ACTIVITIES:
      return { ...state, activities: [...state.activities, payload] };
    case FILTER_BYACTIVIDAD:
      if (payload) {
        const filtrado = state.countries.filter(country =>
          country.Actividads.some(act => act.name === payload)
        );
        console.log(filtrado)
        return {
          ...state,
          countriesOriginal: filtrado,
        };
      } else {
        const filtrado = state.countries;
        return {
          ...state,
          countriesOriginal: filtrado,
        };
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
