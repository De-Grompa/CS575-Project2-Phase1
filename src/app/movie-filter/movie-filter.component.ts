import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {
  selectedGenre!: string;
  movies: Movie[] = [
    {
      id: 1,
      popularity: 9.5,
      budget: 150000000,
      revenue: 1000000000,
      title: 'Spiderman: No Way Home',
      cast: ['Tom Holland', 'Zendaya', 'Jacob Batalon'],
      homepage: 'https://www.spiderman-movie.com',
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
  ]


  constructor(private movieService: MovieService) {}

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
