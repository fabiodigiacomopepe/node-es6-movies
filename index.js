const movies = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        type: "movie"
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Sci-Fi",
        rating: 8.7,
        type: "tv",
        seasons: 4
    },
    {
        title: "Dune",
        year: 2021,
        genre: "Sci-Fi",
        rating: 8.2,
        type: "movie",
    },
    {
        title: "Oppenheimer",
        year: 2023,
        genre: "Biografico",
        rating: 9.5,
        type: "movie",
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantasy",
        rating: 9.3,
        type: "tv",
        seasons: 8
    }
];
// ----------------------------------------------------------------
class Movie {
    title
    year
    genre
    rating
    type

    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    toString() {
        return this.title + " è un film di genere " + this.genre + ". E' stato rilasciato nel " + this.year + " ed ha un voto di " + this.rating;
    }
}
// ----------------------------------------------------------------
class TvSeries extends Movie {
    seasons

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    toString() {
        return this.title + " è una serie tv genere " + this.genre + ". La prima stagione è stata rilasciata nel " + this.year + " e in totale sono state prodotte " + this.seasons + " stagioni. Voto di " + this.rating;
    }
}
// ----------------------------------------------------------------
const newArray = movies.map(
    (el) => {
        if (el.type === "movie") {
            return new Movie(el.title, el.year, el.genre, el.rating, el.type)
        } else if (el.type === "tv") {
            return new TvSeries(el.title, el.year, el.genre, el.rating, el.type, el.seasons)
        }
    }
)

console.log(newArray);
// ----------------------------------------------------------------
function averageRatingFilm(movies, genereInIngresso) {
    const MoviesGenre = movies.filter(movie => movie.genre.includes(genereInIngresso) && movie.type.includes("movie"));
    sum = 0;
    MoviesGenre.forEach(el => {
        sum += el.rating;
    });
    const finalResult = sum / MoviesGenre.length;

    return finalResult;
};

console.log(averageRatingFilm(movies, "Sci-Fi"));
// ----------------------------------------------------------------
function AllFilm(movies) {
    const allFilm = [];
    movies.forEach(movie => {
        if (movie.type == "movie" && !allFilm.includes(movie.genre)) {
            allFilm.push(movie.genre);
        }
    });

    return allFilm;
};

console.log(AllFilm(movies));
// ----------------------------------------------------------------
function filterFilm(genereInIngresso) {
    const filmGenre = movies.filter(movie => movie.genre.includes(genereInIngresso) && movie.type.includes("movie"));

    const ArrayFilteredFilm = [];
    filmGenre.forEach(el => {
        ArrayFilteredFilm.push(new Movie(el.title, el.year, el.genre, el.rating, el.type).toString());
    });

    return ArrayFilteredFilm;
};

console.log(filterFilm("Sci-Fi"));