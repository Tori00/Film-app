import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MovieIdName, MovieComment } from "./model";
import { watchedListEndpoint, toWatchListEndpoint, commentEndpoint } from "./endpoints";
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

    public deleteMovieFromToWatchList(movieId: number): Observable<Object> {
        return this.http.delete(toWatchListEndpoint + "/" + movieId);
    }

    public getComments(movieId: number): Observable<MovieComment[]> {
        const options = new HttpParams().set('movieid', movieId.toString());

        return this.http.get<MovieComment[]>(commentEndpoint, { params: options})
    }

    public postComment(comment: MovieComment): Observable<Object> {
        return this.http.post(commentEndpoint, comment);
    }

    private convertToMovieIdName(movieId: number, movieName: String): MovieIdName {
        return {
            id: movieId,
            name: movieName
        };
    }
}
