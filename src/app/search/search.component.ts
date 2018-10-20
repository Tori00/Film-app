import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheMovieDbService } from '../the-moviedb.service';
import { PageEvent } from '@angular/material';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public result: SearchResultFilmListItem[];
    public paginatorLength: number;
    public pageSize: number;

    constructor(
        private theMovieDbService: TheMovieDbService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    public getSearchResult(filmName: string) {
        this.theMovieDbService.getSearchResult(filmName).subscribe(result => {
            this.handleSearchResult(result);
        });
    }

    public getNextPage(movieName: String, pageEvent: PageEvent) {
        this.theMovieDbService.getSearchResult(movieName, pageEvent.pageIndex).subscribe(result => {
            this.handleSearchResult(result);
            window.scrollTo(0, 0);
        });
    }

    private handleSearchResult(result: SearchResult): void {
        this.result = result.results;
        this.paginatorLength = result.total_results;
        this.pageSize = result.total_pages > 1 ? 20 : result.total_results;
    }

    private getYear(releaseDate: string): String {
        return releaseDate.substring(0, 4);
    }

    public getMovieTitleString(movie: SearchResultFilmListItem): String {
        return movie.original_title + " (" + this.getYear(movie.release_date.toString()) + ")";
    }

    public goToFilmDetail(id: number): void {
        this.router.navigateByUrl("film/" + id);
    }

    public getMoviePoster(movie: SearchResultFilmListItem): String {
        if (movie.poster_path) {
            return this.theMovieDbService.getMoviePoster(movie.poster_path);
        } else {
            return "../../assets/128px-Popcorn.svg.png";
        }

    }

}
