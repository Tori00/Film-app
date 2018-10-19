import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from '../the-moviedb.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MovieDetail } from '../model';
import { OwnDbService } from '../own-db.service';

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

    public movieDetail: MovieDetail;

    constructor(
        private theMovieDbService: TheMovieDbService,
        private ownDbService: OwnDbService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.theMovieDbService.getMovieDetail(params["id"]).subscribe(result => {
                this.movieDetail = result;
            });
        });

    }

    public getMoviePoster(): String {
        return this.theMovieDbService.getMoviePoster(this.movieDetail.poster_path);
    }

    public getYear(releaseDate: string): String {
        return releaseDate.substring(0, 4);
    }

    public getGenres(): String {
        const genres: String[] = [];
        this.movieDetail.genres.forEach(genre => {
            genres.push(genre.name);
        });

        return genres.join(", ");
    }

    public addMovieToWatchedList() {
        this.ownDbService.addMovieToWatchedMovieList(this.movieDetail.id, this.movieDetail.original_title);
    }

    public addMovieToToBeWatchList() {
        this.ownDbService.addMovieToToBeWatchedMovieList(this.movieDetail.id, this.movieDetail.original_title);
    }

}
