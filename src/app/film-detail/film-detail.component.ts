import { Component, OnInit } from '@angular/core';
import { TheMovieDbService } from '../the-moviedb.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MovieDetail } from '../model';

@Component({
    selector: 'app-film-detail',
    templateUrl: './film-detail.component.html',
    styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

    public movieDetail: MovieDetail;

    constructor(
        private service: TheMovieDbService,
        private route: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.route.params.subscribe(params => {
            this.service.getMovieDetail(params["id"]).subscribe(result => {
                this.movieDetail = result;
            });
        });

    }

    public getMoviePoster(): String {
        return this.service.getMoviePoster(this.movieDetail.poster_path);
    }

}
