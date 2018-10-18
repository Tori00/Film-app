import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { apiKey, movieDbEndpoint, MovieDetail, posterEndpoint } from "./model";

@Injectable()
export class TheMovieDbService {

    constructor(private http: HttpClient) { }

    public getSearchResult(filmName: string): Observable<SearchResult> {
        const options = new HttpParams().set('api_key', apiKey).set('query', filmName);

        return this.http.get<SearchResult>(movieDbEndpoint + "search/movie", { params: options });
    }

    public getMovieDetail(id: number): Observable<MovieDetail> {
        const options = new HttpParams().set('api_key', apiKey);

        return this.http.get<MovieDetail>(movieDbEndpoint + "movie/" + id, { params: options });
    }

    public getMoviePoster(posterPath: String): String {
        return posterEndpoint + posterPath;
    }
}
