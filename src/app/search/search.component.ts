import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public result: SearchResultFilmListItem[];

    constructor(private searchService: SearchService) { }

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

}
