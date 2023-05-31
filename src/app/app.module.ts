import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieServiceComponent } from './movie-service/movie-service.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieFilterComponent,
    MovieListComponent,
    MovieServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
