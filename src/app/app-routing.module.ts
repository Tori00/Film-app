import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { WatchedListComponent } from './watched-list/watched-list.component';
import { ToWatchListComponent } from './to-watch-list/to-watch-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent },
    { path: 'film/:id', component: FilmDetailComponent },
    { path: 'watched', component: WatchedListComponent },
    { path: 'towatch', component: ToWatchListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }
