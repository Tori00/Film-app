import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { MovieIdName } from "./model";
import { watchedListEndpoint, toWatchListEndpoint } from "./endpoints";
import { map } from 'rxjs/operators';

@Injectable()
export class OwnDbService {

    constructor(private http: HttpClient) { }

    public getWatchedMovieList(): Observable<MovieIdName[]> {
        return this.http.get<MovieIdName[]>(watchedListEndpoint);
    }

    public getToWatchMovieList(): Observable<MovieIdName[]> {
        return this.http.get<MovieIdName[]>(toWatchListEndpoint);
    }

    public isMovieWatched(movieId: number): Observable<boolean> {
        return this.getWatchedMovie(movieId).pipe(map(result => {
            if (result)
                return true;
            else
                return false;
        }));
    }

    public isMovieToBeWatched(movieId: number): Observable<boolean> {
        return this.getToWatchMovie(movieId).pipe(map(result => {
            if (result)
                return true;
            else
                return false;
        }));
    }

    public getWatchedMovie(movieId: number): Observable<MovieIdName> {
        return this.http.get<MovieIdName>(watchedListEndpoint + "/" + movieId);
    }

    public getToWatchMovie(movieId: number): Observable<MovieIdName> {
        return this.http.get<MovieIdName>(toWatchListEndpoint + "/" + movieId);
    }

    public addMovieToWatchedMovieList(movieId: number, movieName: String): void {
        this.http.post(watchedListEndpoint, this.convertToMovieIdName(movieId, movieName))
            .subscribe(result => console.log(result));
    }

    public addMovieToToBeWatchedMovieList(movieId: number, movieName: String): void {
        this.http.post(toWatchListEndpoint, this.convertToMovieIdName(movieId, movieName)).subscribe();
    }

    public deleteMovieFromToWatchList(movieId): Observable<Object> {
        return this.http.delete(toWatchListEndpoint + "/" + movieId);
    }

    private convertToMovieIdName(movieId: number, movieName: String): MovieIdName {
        return {
            id: movieId,
            name: movieName
        };
    }
}
