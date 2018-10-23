import { Component, OnInit } from '@angular/core';
import { OwnDbService } from '../../own-db.service';
import { MovieIdName } from '../../model';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'to-watch-list',
    templateUrl: './to-watch-list.component.html',
    styleUrls: ['./to-watch-list.component.scss']
})
export class ToWatchListComponent implements OnInit {

    public movies: MovieIdName[] = [];

    constructor(
        private ownDbService: OwnDbService,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit() {
        this.getMovies();
    }

    public deleteMovieFromToWatchList(id: number): void {
        this.ownDbService.deleteMovieFromToWatchList(id).subscribe(
            () => this.getMovies(),
            error => this.snackbar.open("There was an error, while deleting movie from list!", '', { duration: 5000 })
        );
    }

    public getMovies() {
        this.ownDbService.getToWatchMovieList().subscribe(
            result => this.movies = result,
            error => this.snackbar.open("There was an error, while loading To Watch list!", '', { duration: 5000 })
        );
    }

}
