import { Injectable } from "@angular/core";
import { SearchResultFilmListItem, SearchResult } from "../model";

@Injectable()
export class SearchService {
    private result: SearchResult = undefined;
    private searchWord: String = undefined;

    public setSearchResult(searchWord: String, result: SearchResult): void {
        this.searchWord = searchWord;
        this.result = result;
    }

    public getSearchResult(): SearchResult {
        return this.result;
    }

    public getSearchWord(): String {
        return this.searchWord;
    }
}