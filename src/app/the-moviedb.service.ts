import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MovieDetail, SearchResult } from "./model";
import { movieDbEndpoint, apiKey, posterEndpoint } from "./endpoints";
import { map } from 'rxjs/operators';

@Injectable()
export class TheMovieDbService {

    constructor(private http: HttpClient) { }

    public getSearchResult(movieName: String, page?: number): Observable<SearchResult> {
        page = page + 1; // needed, because on themoviedb.org default is 1
        const options = new HttpParams().set('api_key', apiKey).set('query', movieName.valueOf()).set('page', page ? page.toString() : "1");

        return this.http.get<SearchResult>(movieDbEndpoint + "search/movie", { params: options }).pipe(map(result => {
            result.page = result.page -1;
            return result;
        }));
    }

    public getMovieDetail(id: number): Observable<MovieDetail> {
        const options = new HttpParams().set('api_key', apiKey);

        return this.http.get<MovieDetail>(movieDbEndpoint + "movie/" + id, { params: options });
    }

    public getMoviePoster(posterPath: String): String {
        return posterEndpoint + posterPath;
    }
}
