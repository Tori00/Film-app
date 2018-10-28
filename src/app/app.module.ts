import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
    MatSelectModule,
} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { TheMovieDbService } from './the-moviedb.service';
import { OwnDbService } from './own-db.service';
import { WatchListsComponent } from './watch-lists/watch-lists.component';
import { WatchedListComponent } from './watch-lists/watched-list/watched-list.component';
import { ToWatchListComponent } from './watch-lists/to-watch-list/to-watch-list.component';
import { SearchService } from './search/search.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from './functions';

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
        MatSelectModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
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
        MatTooltipModule,
        MatSelectModule
    ],
    providers: [
        TheMovieDbService,
        OwnDbService,
        SearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
