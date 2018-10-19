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
        private theMovieDbService: TheMovieDbService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    public getSearchResult(filmName: string) {
        this.theMovieDbService.getSearchResult(filmName).subscribe(result => {
            this.result = result.results;
        });
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
        return this.theMovieDbService.getMoviePoster(movie.poster_path);
    }

}
