import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movies!: Movie[];

  showSummary(movie: Movie) {
    // Display movie summary when hovering over the title
    alert(movie.shortSummary);
  }
}
