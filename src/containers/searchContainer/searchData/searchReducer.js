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
            return { ...state, query: action.payload };
        case SEARCH_ACTIONS.SEARCH_FILM_SUCCESS:
            return { ...state, films: action.payload };

        case SEARCH_ACTIONS.SEARCH_FILM_ERROR:
            return { ...state, films: action.payload };

        case SEARCH_ACTIONS.SET_SORT_OPTION:
            return { ...state, sortBy: action.payload };

        case SEARCH_ACTIONS.SET_SOURCE_OPTION:
            return { ...state, source: action.payload };

        case SEARCH_ACTIONS.SORT_FILMS:
            return { ...state, films: action.payload };

        default:
            return state;
    }
}