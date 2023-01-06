
const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

const lastFilmF = prompt('Один з останніх переглянутих фільмів?', ''),
   lastFilmRateF = prompt('На скільки його оціните?', ''),
   lastFilmS = prompt('Один з останніх переглянутих фільмів?', ''),
   lastFilmRateS = prompt('На скільки його оціните?', '');

personalMovieDB.movies[lastFilmF] = lastFilmRateF;
personalMovieDB.movies[lastFilmS] = lastFilmRateS;

console.log(personalMovieDB);