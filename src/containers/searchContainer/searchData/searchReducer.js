import {SORTS, SOURCES, SEARCH_ACTIONS} from './consts'

const initialState = {
    films: [],
    sortBy: SORTS[0].value,
    query: '',
    source: SOURCES[0].value
};

export default function SearchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ACTIONS.SEARCH_FILM_REQUEST:
            console.log("SEARCH_FILM_REQUEST");
            console.dir(state.films);
            return { ...state, query: action.payload };
        case SEARCH_ACTIONS.SEARCH_FILM_SUCCESS:
            console.log("SEARCH_FILM_SUCCESS");
            console.dir(state.films);
            return { ...state, films: action.payload };

        case SEARCH_ACTIONS.SEARCH_FILM_ERROR:
            console.log("SEARCH_FILM_ERROR");
            console.dir(state.films);
            return { ...state, films: action.payload };

        case SEARCH_ACTIONS.SET_SORT_OPTION:
            console.log("SET_SORT_OPTION");
            console.dir(state.films);
            return { ...state, sortBy: action.payload };

        case SEARCH_ACTIONS.SET_SOURCE_OPTION:
            console.log("SET_SOURCE_OPTION");
            console.dir(state.films);
            return { ...state, source: action.payload };

        case SEARCH_ACTIONS.SORT_FILMS:
            console.log("SORT_FILMS");
            console.dir(state.films);
            return { ...state, films: action.payload };

        default:
            return state;
    }
}