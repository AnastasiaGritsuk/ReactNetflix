import {getFilm} from '../../../api/index';
import {DETAILS_ACTIONS} from './consts';

export function getFilmAction (id) {
    return (dispatch) => {
        dispatch({
            type: DETAILS_ACTIONS.GET_MOVIE_REQUEST,
            payload: ''
        });

        getFilm(id)
            .then((film) => {
                dispatch({
                    type: DETAILS_ACTIONS.GET_MOVIE_SUCCESS,
                    payload: film
                })
            })
            .catch(() => {
                dispatch({
                    type: DETAILS_ACTIONS.GET_MOVIE_ERROR,
                    payload: {}
                })
            });
    }
}
