import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from '../the-moviedb.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail, MovieComment } from '../model';
import { OwnDbService } from '../own-db.service';
import { getMovieTitleString } from '../functions';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

    public movieDetail: MovieDetail;
    public isWatched: boolean;
    public isToBeWatched: boolean;
    public movieTitle: String;
    public comments: MovieComment[] = [];
    public commentUsername: String;
    public commentText: String;

    constructor(
        private theMovieDbService: TheMovieDbService,
        private ownDbService: OwnDbService,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar
    ) { }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.theMovieDbService.getMovieDetail(params["id"]).subscribe(
                result => {
                    this.movieDetail = result;
                    this.movieTitle = getMovieTitleString(result.title, result.release_date);

                    this.isToBeWatchedMovie();
                    this.isWatchedMovie();
                    this.getComments();
                },
                (error: HttpErrorResponse) => {
                    if (error.status == 404)
                        this.snackBar.open("There is no film with this id!", '', { duration: 4000 });
                    else
                        this.showCommonErrorSanckBar();
                });
        });

    }

    public getMoviePoster(): String {
        return this.theMovieDbService.getMoviePoster(this.movieDetail.poster_path);
    }

    public getGenres(): String {
        const genres: String[] = [];
        this.movieDetail.genres.forEach(genre => {
            genres.push(genre.name);
        });

        return genres.join(", ");
    }

    public addMovieToWatchedList() {
        this.ownDbService.addMovieToWatchedMovieList(
            this.movieDetail.id, getMovieTitleString(this.movieDetail.title, this.movieDetail.release_date))
            .subscribe(
                () => this.isWatched = true,
                error => this.showCommonErrorSanckBar()
            );
    }

    public addMovieToToBeWatchList(): void {
        this.ownDbService.addMovieToToBeWatchedMovieList(
            this.movieDetail.id, getMovieTitleString(this.movieDetail.title, this.movieDetail.release_date))
            .subscribe(
                () => this.isToBeWatched = true,
                error => this.showCommonErrorSanckBar()
            );
    }

    public isWatchedMovie(): void {
        this.ownDbService.isMovieWatched(this.movieDetail.id).subscribe(
            result => this.isWatched = result,
            error => {
                if (error.status !== 404)
                    this.showCommonErrorSanckBar();
            });
    }

    public isToBeWatchedMovie(): void {
        this.ownDbService.isMovieToBeWatched(this.movieDetail.id).subscribe(
            result => this.isToBeWatched = result,
            error => {
                if (error.status !== 404)
                    this.showCommonErrorSanckBar();
            });
    }

    public postComment(): void {
        let comment: MovieComment = {
            comment: this.commentText,
            movieid: this.movieDetail.id,
            username: this.commentUsername
        }

        this.ownDbService.postComment(comment).subscribe(
            () => {
                this.getComments();

                this.commentText = "";
                this.commentUsername = "";
            },
            error => this.snackBar.open("There was an error while posting the comment!", '', { duration: 4000 })
        );
    }

    private getComments(): void {
        this.ownDbService.getComments(this.movieDetail.id).subscribe(
            result => this.comments = result,
            (error: HttpErrorResponse) => {
                this.snackBar.open("There was an error while loading comments!", '', { duration: 4000 });
                console.log(error.message);
            }
        );
    }

    private showCommonErrorSanckBar() {
        this.snackBar.open("There was an error!", '', { duration: 4000 });
    }
}
