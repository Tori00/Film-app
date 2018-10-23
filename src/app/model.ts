export class SearchResult {
    page: number;
    results: SearchResultFilmListItem[];
    total_pages: number;
    total_results: number;
}

export class SearchResultFilmListItem {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: String;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

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

export class MovieComment {
    id?: number;
    username: String;
    comment: String;
    movieid: number;
}
