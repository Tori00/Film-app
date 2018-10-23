import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from '../the-moviedb.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail, MovieComment } from '../model';
import { OwnDbService } from '../own-db.service';
import { getMovieTitleString } from '../functions';

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
        private route: ActivatedRoute
    ) { }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.theMovieDbService.getMovieDetail(params["id"]).subscribe(result => {
                this.movieDetail = result;
                this.movieTitle = getMovieTitleString(result.original_title, result.release_date);

                this.getComments();
            });

            this.ownDbService.isMovieWatched(params["id"]).subscribe(result => {
                this.isWatched = result;
            });

            this.ownDbService.isMovieToBeWatched(params["id"]).subscribe(result => {
                this.isToBeWatched = result;
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
            this.movieDetail.id, getMovieTitleString(this.movieDetail.original_title, this.movieDetail.release_date));
    }

    public addMovieToToBeWatchList(): void {
        this.ownDbService.addMovieToToBeWatchedMovieList(
            this.movieDetail.id, getMovieTitleString(this.movieDetail.original_title, this.movieDetail.release_date));
    }

    public isWatchedMovie(): void {
        this.ownDbService.isMovieWatched(this.movieDetail.id).subscribe(result => this.isWatched = result);
    }

    public isToBeWatchedMovie(): void {
        this.ownDbService.isMovieToBeWatched(this.movieDetail.id).subscribe(result => this.isToBeWatched = result);
    }

    public postComment(): void {
        let comment: MovieComment = {
            comment: this.commentText,
            movieid: this.movieDetail.id,
            username: this.commentUsername
        }

        this.ownDbService.postComment(comment).subscribe(result => {
            this.getComments();

            this.commentText = "";
            this.commentUsername = "";
        });
    }

    private getComments(): void {
        this.ownDbService.getComments(this.movieDetail.id).subscribe(result => 
            this.comments = result
            );
    }
}
