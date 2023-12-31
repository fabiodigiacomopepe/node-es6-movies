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
    #title
    #year
    #genre
    #rating
    #type

    constructor(title, year, genre, rating, type) {
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#rating = rating;
        this.#type = type;
    }

    toString() {
        return this.title + " è un film di genere " + this.genre + ". E' stato rilasciato nel " + this.year + " ed ha un voto di " + this.rating;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        this.#year = value;
    }

    get genre() {
        return this.#genre;
    }

    set genre(value) {
        this.#genre = value;
    }

    get rating() {
        return this.#rating;
    }

    set rating(value) {
        this.#rating = value;
    }

    get type() {
        return this.#type;
    }

    set type(value) {
        this.#type = value;
    }

    toStringAll() {
        return `Title: "${this.#title}", Year: ${this.#year}, Genre: "${this.#genre}", Rating: ${this.#rating}, Type: "${this.#type}"`;
    }
}
// ----------------------------------------------------------------
class TvSeries extends Movie {
    #seasons

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.#seasons = seasons;
    }

    toString() {
        return this.title + " è una serie tv genere " + this.genre + ". La prima stagione è stata rilasciata nel " + this.year + " e in totale sono state prodotte " + this.seasons + " stagioni. Voto di " + this.rating;
    }

    get seasons() {
        return this.#seasons;
    }

    set seasons(value) {
        this.#seasons = value;
    }

    toStringAll() {
        return `Title: "${this.title}", Year: ${this.year}, Genre: "${this.genre}", Rating: ${this.rating}, Type: "${this.type}", Seasons: ${this.#seasons}`;
    }
}
// ----------------------------------------------------------------
const newArray = movies.map(
    (el) => {
        if (el.type === "movie") {
            return new Movie(el.title, el.year, el.genre, el.rating, el.type).toStringAll();
        } else if (el.type === "tv") {
            return new TvSeries(el.title, el.year, el.genre, el.rating, el.type, el.seasons).toStringAll();
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
// ----------------------------------------------------------------
class Cart {
    #movies

    constructor() {
        this.#movies = [];
    }

    addMovie(movie) {
        this.#movies.push(movie);
    }

    removeMovie(movie) {
        // Cerco posizione film in array
        const index = this.#movies.indexOf(movie);
        // Se è diverso da -1, quindi è presente in array
        if (index !== -1) {
            // Rimuovo il film (index è l'indice, 1 indica di rimuovere un solo elemento)
            this.#movies.splice(index, 1);
        }
    }

    getTotalCost() {
        const numberOfMovies = this.#movies.length;
        const totalCost = numberOfMovies * 3.99;
        return totalCost;
    }
}

const myCart = new Cart();

myCart.addMovie("Film 1");
myCart.addMovie("Film 2");
myCart.addMovie("Film 3");

myCart.removeMovie("Film 2");

const totalCost = myCart.getTotalCost();
console.log(`Il costo totale per i film da noleggiare è: €${totalCost}`);