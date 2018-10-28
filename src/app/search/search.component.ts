import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheMovieDbService } from '../the-moviedb.service';
import { PageEvent, MatSnackBar } from '@angular/material';
import { getMovieTitleString } from '../functions';
import { SearchResultFilmListItem, SearchResult } from '../model';
import { SearchService } from './search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public movieName: String;
    public result: SearchResultFilmListItem[];
    public paginatorLength: number;
    public pageSize: number;
    public pageIndex: number = 0;

    constructor(
        private theMovieDbService: TheMovieDbService,
        private router: Router,
        private snackBar: MatSnackBar,
        private searchService: SearchService
    ) { }

    ngOnInit() {
        let movieName = this.searchService.getSearchWord();
        if (movieName) {
            this.movieName = this.searchService.getSearchWord();
            this.handleSearchResult(this.searchService.getSearchResult());
        }
    }

    public getSearchResult() {
        this.theMovieDbService.getSearchResult(this.movieName).subscribe(result => {
            this.handleSearchResult(result);
        });
    }

    public deleteSearch(): void {
        this.movieName = undefined;
        this.setResultAndPagingDataUndefined();
        this.searchService.setSearchResult(undefined, undefined);
    }

    public getNextPage(pageEvent: PageEvent) {
        this.theMovieDbService.getSearchResult(this.movieName, pageEvent.pageIndex).subscribe(result => {
            this.handleSearchResult(result);
            window.scrollTo(0, 0);
        });
    }

    public getMovieTitleString(movie: SearchResultFilmListItem): String {
        return getMovieTitleString(movie.title, movie.release_date);
    }

    public goToMovieDetail(id: number): void {
        this.router.navigateByUrl("film/" + id);
    }

    public getMoviePoster(movie: SearchResultFilmListItem): String {
        if (movie.poster_path) {
            return this.theMovieDbService.getMoviePoster(movie.poster_path);
        } else {
            return "../../assets/128px-Popcorn.svg.png";
        }

    }

    private handleSearchResult(result: SearchResult): void {
        if (result.results.length !== 0) {

            this.result = result.results;
            this.paginatorLength = result.total_results;
            this.pageSize = result.total_pages > 1 ? 20 : result.total_results;
            this.pageIndex = result.page;

            this.searchService.setSearchResult(this.movieName, result);
        }
        else {
            this.searchService.setSearchResult(undefined, undefined);
            this.setResultAndPagingDataUndefined();

            this.snackBar.open("There is no result for this search!", '', { duration: 5000 });
        }
    }

    private setResultAndPagingDataUndefined(): void {
        this.result = undefined;
        this.paginatorLength = undefined;
        this.pageSize = undefined;
        this.pageIndex = undefined;
    }

}
