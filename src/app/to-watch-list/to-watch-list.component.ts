import { Component, OnInit } from '@angular/core';
import { OwnDbService } from '../own-db.service';

@Component({
    selector: 'app-to-watch-list',
    templateUrl: './to-watch-list.component.html',
    styleUrls: ['./to-watch-list.component.scss']
})
export class ToWatchListComponent implements OnInit {

    constructor(private ownDbService: OwnDbService) { }

    ngOnInit() {
    }

    private getMovieList(): void {
        this.ownDbService.getToWatchMovieList().subscribe(result => console.log(result));
    }

}
