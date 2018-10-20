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
