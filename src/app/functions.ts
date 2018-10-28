import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

function getYear(releaseDate: string): String {
    return releaseDate.substring(0, 4);
}

export function getMovieTitleString(title: String, releaseDate: String): String {
    if (releaseDate) {
        return title + " (" + getYear(releaseDate.valueOf()) + ")";
    } else {
        return title;
    }
}

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}
