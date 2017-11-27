import { call, put, all, takeLatest } from 'redux-saga/effects';
import {getFilm} from '../../../api/index';
import {DETAILS_ACTIONS} from './consts';

export const getFilmAction = (id) => ({
    type: DETAILS_ACTIONS.GET_MOVIE_REQUEST,
    payload: {id}
});

export const updateFilm = (film) => ({
    type: DETAILS_ACTIONS.GET_MOVIE_SUCCESS,
    payload: film
});

// Sagas
function* getFilmAsync (action) {
    const film = yield call(() => getFilm(action.payload.id));

    yield put(updateFilm(film));
}

export function* watchGetFilm () {
    yield takeLatest(DETAILS_ACTIONS.GET_MOVIE_REQUEST, getFilmAsync);
}

export function* filmSaga () {
    yield all([
        watchGetFilm()
    ]);
}
