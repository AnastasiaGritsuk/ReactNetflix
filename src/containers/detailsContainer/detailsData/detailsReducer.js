import { DETAILS_ACTIONS } from './consts'

const initialState = {
    film: {}
};

export default function DetailsPageReducer(state = initialState, action) {
    switch (action.type) {
        case DETAILS_ACTIONS.GET_MOVIE_SUCCESS:
            return { ...state, film: action.payload };

        case DETAILS_ACTIONS.GET_MOVIE_ERROR:
            return { ...state, film: action.payload };

        default:
            return state;
    }
}