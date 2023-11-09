import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, allCharacters: [...state.allCharacters, payload] }
        case REMOVE_FAV:
            return { ...state, allCharacters: state.allCharacters.filter(e => e.id !== parseInt(payload)) }
        case FILTER:
            const filtrado = state.myFavorites.filter((e) => e.gender == payload)
            return {
                ...state,
                allCharacters: filtrado,
            }
        case ORDER:
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    myFavorites: state.allCharacters.sort((a, b) => a.id - b.id)
                }
            }
            else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.sort((a, b) => b.id - a.id)
                }
            }
        default:
            return {...state }
    }
}

export default rootReducer;