import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { TheMovieDbService } from './the-moviedb.service';
import { OwnDbService } from './own-db.service';
import { WatchListsComponent } from './watch-lists/watch-lists.component';
import { WatchedListComponent } from './watch-lists/watched-list/watched-list.component';
import { ToWatchListComponent } from './watch-lists/to-watch-list/to-watch-list.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        FilmDetailComponent,
        WatchedListComponent,
        ToWatchListComponent,
        WatchListsComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule,
        AppRoutingModule
    ],
    exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule
    ],
    providers: [
        TheMovieDbService,
        OwnDbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
