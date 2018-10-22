import { Component, OnInit } from '@angular/core';
import { MovieIdName } from '../../model';
import { OwnDbService } from '../../own-db.service';

@Component({
    selector: 'watched-list',
    templateUrl: './watched-list.component.html',
    styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {

    public movies: MovieIdName[] = [];

    constructor(private ownDbService: OwnDbService) { }

    ngOnInit() {
        this.getMovies();
    }

    public getMovies() {
        this.ownDbService.getWatchedMovieList().subscribe(result => this.movies = result);
    }

}
