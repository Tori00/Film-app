import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheMovieDbService } from '../the-moviedb.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public result: SearchResultFilmListItem[];

    constructor(
        private searchService: TheMovieDbService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    public getSearchResult(filmName: string) {
        this.searchService.getSearchResult(filmName).subscribe(result => {
            this.result = result.results;
        });
    }

    public getYear(releaseDate: string): String {
        return releaseDate.substring(0, 4);
    }

    public goToFilmDetail(id: number): void {
        this.router.navigateByUrl("film/" + id);
    }

}
