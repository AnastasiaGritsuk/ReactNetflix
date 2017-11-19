import {getFilmsByTitle} from '../../../api/index';
import {SORTS, SEARCH_ACTIONS} from './consts';

export function searchFilms (query, sortBy) {
    return (dispatch) => {
        dispatch({
            type: SEARCH_ACTIONS.SEARCH_FILM_REQUEST,
            payload: query
        });

        getFilmsByTitle(query)
            .then((films) => {
                dispatch({
                    type: SEARCH_ACTIONS.SEARCH_FILM_SUCCESS,
                    payload: sortFilms(films, sortBy)
                })
            })
            .catch(() => {
                dispatch({
                    type: SEARCH_ACTIONS.SEARCH_FILM_ERROR,
                    payload: []
                });
            });
    }
}

export function changeSort (sort) {
    return {
        type: SEARCH_ACTIONS.SET_SORT_OPTION,
        payload: sort
    };
}

export function sort (films, sortBy) {
    return {
        type: SEARCH_ACTIONS.SORT_FILMS,
        payload: sortFilms(films, sortBy)
    };
}

export function changeSource (source) {
    return {
        type: SEARCH_ACTIONS.SET_SOURCE_OPTION,
        payload: source
    };
}

function sortFilms (films, sortBy) {
    if (films && films.length) {
        return films.sort((film1, film2) => (
            sortBy === SORTS[0].value ? film2.rating - film1.rating : film2.releaseYear - film1.releaseYear
        ));
    }
    return [];
}