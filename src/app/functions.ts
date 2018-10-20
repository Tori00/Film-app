function getYear(releaseDate: string): String {
    return releaseDate.substring(0, 4);
}

export function getMovieTitleString(title: String, releaseDate: String): String {
    return title + " (" + getYear(releaseDate.valueOf()) + ")";
}
