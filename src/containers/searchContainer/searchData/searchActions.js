import { call, put, all, takeLatest } from 'redux-saga/effects';
import {getFilmsByTitle} from '../../../api/index';
import {SORTS, SEARCH_ACTIONS} from './consts';

export const searchFilms = (query, sortBy) => ({
    type: SEARCH_ACTIONS.SEARCH_FILM_REQUEST,
    payload: {query, sortBy}
});

export const updateFilms = (films, sortBy) => ({
    type: SEARCH_ACTIONS.SEARCH_FILM_SUCCESS,
    payload: sortMovies(films, sortBy)
});

export function changeSort (sort) {
    return {
        type: SEARCH_ACTIONS.SET_SORT_OPTION,
        payload: sort
    };
}

export function sort (films, sortBy) {
    return {
        type: SEARCH_ACTIONS.SORT_FILMS,
        payload: sortMovies(films, sortBy)
    };
}

function sortMovies (films, sortBy) {
    if (films && films.length) {
        return films.sort((film1, film2) => (
            sortBy === SORTS[0].value ? film2.rating - film1.rating : film2.releaseYear - film1.releaseYear
        ));
    }
    return [];
}

// Sagas
function* searchFilmsAsync(action) {
    const films = yield call(() => getFilmsByTitle(action.payload.query));

    yield put(updateFilms(films, action.payload.sortBy));
}

export function* watchSearchFilms() {
    yield takeLatest(SEARCH_ACTIONS.SEARCH_FILM_REQUEST, searchFilmsAsync);
}

export function* filmsSaga() {
    yield all([
        watchSearchFilms()
    ]);
}
