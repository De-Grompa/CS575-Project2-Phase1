import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';
import { MovieServiceComponent } from './movie-service/movie-service.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS575-Project2-Phase1 - Movie Filter';
  movies: Movie[] = [
    {
      id: 1,
      popularity: 9.5,
      budget: 150000000,
      revenue: 1000000000,
      title: 'Spiderman: No Way Home',
      cast: ['Tom Holland', 'Zendaya', 'Jacob Batalon'],
      homepage: 'https://www.spidermannowayhome.movie/',
      director: 'Jon Watts',
      shortSummary: 'The third installment of the Spiderman franchise.',
      genres: ['Action', 'Adventure'],
      productionCompanies: ['Marvel Studios', 'Sony Pictures'],
      releaseYear: 2021
    },
    {
      id: 2,
      popularity: 8.5,
      budget: 100000000,
      revenue: 500000000,
      title: 'The Matrix',
      cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      homepage: 'https://www.warnerbros.com/movies/matrix',
      director: 'Lana Wachowski',
      shortSummary: 'A computer hacker learns about the true nature of his reality.',
      genres: ['Action', 'Sci-Fi'],
      productionCompanies: ['Warner Bros. Pictures', 'Village Roadshow Pictures'],
      releaseYear: 1999
    },
    {
      id: 3,
      popularity: 28.5,
      budget: 200000000,
      revenue: 1066969703,
      title: 'Avengers: Infinity War',
      cast: ['Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
      homepage: 'https://www.marvel.com/movies/avengers-infinity-war',
      director: 'Anthony Russo',
      shortSummary: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      productionCompanies: ['Marvel Studios'],
      releaseYear: 2018
    },
    {
      id: 4,
      popularity: 7.7,
      budget: 100000000,
      revenue: 300000000,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      cast: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
      homepage: 'https://www.lordoftherings.net',
      director: 'Peter Jackson',
      shortSummary: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      genres: ['Action', 'Adventure', 'Drama'],
      productionCompanies: ['New Line Cinema', 'WingNut Films', 'The Saul Zaentz Company'],
      releaseYear: 2001
    },
    {
      id: 5,
      popularity: 6.2,
      budget: 100000000,
      revenue: 300000000,
      title: 'The Lord of the Rings: The Two Towers',
      cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
      homepage: 'https://www.lordoftherings.net',
      director: 'Peter Jackson',
      shortSummary: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
      genres: ['Action', 'Adventure', 'Drama'],
      productionCompanies: ['New Line Cinema', 'WingNut Films', 'The Saul Zaentz Company'],
      releaseYear: 2002
    },
  ];
  sortingOptions = ['id', 'popularity (increasing)', 'popularity (decreasing)',
    'budget (increasing)', 'budget (decreasing)', 'revenue (increasing)',
    'revenue (decreasing)', 'alphabetical (a-z)', 'alphabetical (z-a)',
    'release year (increasing)', 'release year (decreasing)'];

  currentSortingIndex = 0;
  currentSorting = this.sortingOptions[this.currentSortingIndex];

  cycleSorting(): void {
    this.currentSortingIndex = (this.currentSortingIndex + 1) % this.sortingOptions.length;
    this.currentSorting = this.sortingOptions[this.currentSortingIndex];
    this.sortMovies();
  }

  sortMovies(): void {
    let sortedMovies!: Movie[];
    switch (this.currentSorting) {
      case 'id':
        sortedMovies = this.movies.sort((a, b) => a.id - b.id);
        break;
      case 'popularity (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.popularity - b.popularity);
        break;
      case 'popularity (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'budget (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.budget - b.budget);
        break;
      case 'budget (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.budget - a.budget);
        break;
      case 'revenue (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.revenue - b.revenue);
        break;
      case 'revenue (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.revenue - a.revenue);
        break;
      case 'alphabetical (a-z)':
        sortedMovies = this.movies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'alphabetical (z-a)':
        sortedMovies = this.movies.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'release year (increasing)':
        sortedMovies = this.movies.sort((a, b) => a.releaseYear - b.releaseYear);
        break;
      case 'release year (decreasing)':
        sortedMovies = this.movies.sort((a, b) => b.releaseYear - a.releaseYear);
        break;
    }
    this.movies = sortedMovies;
  }
}
