import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from '../the-moviedb.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from '../model';
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

    constructor(
        private theMovieDbService: TheMovieDbService,
        private ownDbService: OwnDbService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.theMovieDbService.getMovieDetail(params["id"]).subscribe(result => {
                this.movieDetail = result;
                this.movieTitle = getMovieTitleString(result.original_title, result.release_date);
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

    public addMovieToToBeWatchList() {
        this.ownDbService.addMovieToToBeWatchedMovieList(
            this.movieDetail.id, getMovieTitleString(this.movieDetail.original_title, this.movieDetail.release_date));
    }

}
