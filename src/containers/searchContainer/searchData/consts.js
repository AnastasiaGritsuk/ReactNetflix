export const SORTS = [
    {value: 'rating', title: 'rating'},
    {value: 'releaseYear', title: 'release year'}
];

export const SOURCES = [
    {value: 'title', title: 'title'},
    {value: 'director', title: 'director'}
];

export const SEARCH_ACTIONS = {
    SEARCH_FILM_REQUEST: 'SEARCH_FILM_REQUEST',
    SEARCH_FILM_SUCCESS: 'SEARCH_FILM_SUCCESS',
    SET_SORT_OPTION: 'SET_SORT_OPTION',
    SORT_FILMS: 'SORT_FILMS',
    SET_SOURCE_OPTION: 'SET_SOURCE_OPTION',
    SEARCH_FILM_ERROR: 'SEARCH_FILM_ERROR'
};

export const SEARCH_URL = '/search/';