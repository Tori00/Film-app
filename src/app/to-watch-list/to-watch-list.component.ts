import { Component, OnInit } from '@angular/core';
import { OwnDbService } from '../own-db.service';
import { MovieIdName } from '../model';

@Component({
    selector: 'app-to-watch-list',
    templateUrl: './to-watch-list.component.html',
    styleUrls: ['./to-watch-list.component.scss']
})
export class ToWatchListComponent implements OnInit {

    public movies: MovieIdName[] = [];

    constructor(private ownDbService: OwnDbService) { }

    ngOnInit() {
        this.ownDbService.getToWatchMovieList().subscribe(result => this.movies = result);
    }

    public deleteMovieFromToWatchList(id: number): void {
        this.ownDbService.deleteMovieFromToWatchList(id);
    }

}
