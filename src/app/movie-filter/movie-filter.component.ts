import { Component } from '@angular/core';
import { MovieServiceComponent } from '../movie-service/movie-service.component';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {
  selectedGenre!: string;
  movies: Movie[] = this.movieServiceComponent.getMovies();


  constructor(private movieServiceComponent: MovieServiceComponent) {}

  filterMovies(filterOptions: {[key: string]: any}): Movie[] {
    return this.movies.filter(movie => {
      for (const [field, value] of Object.entries(filterOptions)) {
        if (movie[field] !== value) {
          return false;
        }
      }
      return true;
    });
  }  
}
