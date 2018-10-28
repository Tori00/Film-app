import { Component, OnInit } from '@angular/core';
import { MovieIdName } from '../../model';
import { OwnDbService } from '../../own-db.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'watched-list',
    templateUrl: './watched-list.component.html',
    styleUrls: ['./watched-list.component.scss']
})
export class WatchedListComponent implements OnInit {

    public movies: MovieIdName[] = [];

    constructor(
        private ownDbService: OwnDbService,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {
        this.getMovies();
    }

    public getMovies(): void {
        this.ownDbService.getWatchedMovieList().subscribe(
            result => this.movies = result,
            error => this.snackbar.open("There was an error, while loading Watched list!", '', { duration: 5000 })
        );
    }

}
