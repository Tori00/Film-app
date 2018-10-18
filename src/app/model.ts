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
    original_language: string;
    original_title: string;
    overview: String;
    popularity: number;
    poster_path: String;
    production_countries: ProductionCountries[];
    release_date: string;
    revenue: number;
    runtime: Number;
    spoken_languages: SpokenLanguages;
    status: string;
    tagline: String;
    title: String;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export class Genre {
    id: number;
    name: string;
}

export class ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export class SpokenLanguages {
    iso_639_1: string;
    name: string;
}
