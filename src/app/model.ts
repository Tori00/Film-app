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

export class MovieIdName {
    id: number;
    name: String;
}
