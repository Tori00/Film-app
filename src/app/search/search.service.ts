import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

const movieDbEndpoint = "https://api.themoviedb.org/3/";
const apiKey = "0b85953e9f18d90a34b537b03e1513bc";

@Injectable()
export class SearchService {

    constructor(private http: HttpClient) { }

    public getSearchResult(filmName: string): Observable<SearchResult> {
        const options = new HttpParams().set('api_key', apiKey).set('query', filmName);

        return this.http.get<SearchResult>(movieDbEndpoint + "search/movie", { params: options });
    }
}
