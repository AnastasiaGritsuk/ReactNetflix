const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'abd4c37a5cef07bca30399bfd8f86cae';

function getFilmsByTitle(query) {
    return runFetch(`${BASE_URL}search/film?api_key=${API_KEY}&query=${encodeURI(query)}`)
        .then(mapFilms);
}

function getFilm (id) {
    return runFetch(`${BASE_URL}film/${id}?api_key=${API_KEY}`)
        .then(mapFilm);
}

function runFetch(url) {
    return fetch(url)
        .then(response =>
            Promise.resolve(response.json())
                .then((json) => {
                    if (response.ok) {
                        return json;
                    }
                    throw new Error({ response, json });
                })
        );
}

function mapFilms(result) {
    return result.results.map(mapFilms);
}

function mapFilm(film) {
    return {
        id: film.id,
        title: film.title,
        releaseYear: film.release_date ? (new Date(film.release_date)).getFullYear() : 1900,
        rating: Number(film.vote_average),
        posterUrl: film.poster_path,
        description: film.overview,
        duration: 100
    };
}

export {
    getFilmsByTitle,
    getFilm
};