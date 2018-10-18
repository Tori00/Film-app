export const movieDbEndpoint = "https://api.themoviedb.org/3/";
export const posterEndpoint = "http://image.tmdb.org/t/p/w185//";

export const apiKey = "0b85953e9f18d90a34b537b03e1513bc";

export class MovieDetail {
    adult: boolean;
    backdrop_path: String;
    belongs_to_collection: Object;
    budget: number;
    genres: Genre[];
    homepage: String;
    id: number;
    imdb_id: String;
    original_language: String;
    original_title: String;
    overview: String;
    popularity: number;
    poster_path: String;
    production_countries: ProductionCountries[];
    release_date: String;
    revenue: number;
    runtime: Number;
    spoken_languages: SpokenLanguages;
    status: String;
    tagline: String;
    title: String;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export class Genre {
    id: number;
    name: String;
}

export class ProductionCountries {
    iso_3166_1: String;
    name: String;
}

export class SpokenLanguages {
    iso_639_1: String;
    name: String;
}
