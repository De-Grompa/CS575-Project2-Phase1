import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {
  selectedGenre!: string;

  constructor(private movieService: MovieService) {}

  filterMovies() {
    
    const filteredMovies = this.movieService.getFilteredMovies(this.selectedGenre);
    
  }
}
